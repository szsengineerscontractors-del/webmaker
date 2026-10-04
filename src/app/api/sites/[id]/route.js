// src/app/api/sites/[id]/route.js
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import { getCurrentUser } from '@/lib/auth';
import { invalidateSiteCache } from '@/lib/siteCache';

const RESERVED_SUBDOMAINS = new Set([
  'www', 'app', 'api', 'admin', 'dashboard', 'builder', 'login', 'signup', 'mail',
]);

function validateSubdomain(raw) {
  if (!raw) return { ok: true, value: null };

  const value = String(raw).toLowerCase().trim();

  if (value.length < 3 || value.length > 30) {
    return { ok: false, error: 'Subdomain must be 3–30 characters.' };
  }

  if (!/^[a-z0-9][a-z0-9-]*[a-z0-9]$/.test(value)) {
    return {
      ok: false,
      error: 'Subdomain can only contain lowercase letters, numbers, and hyphens.',
    };
  }

  if (RESERVED_SUBDOMAINS.has(value)) {
    return { ok: false, error: 'That subdomain is reserved.' };
  }

  return { ok: true, value };
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { ok: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const site = await Site.findById(id);
    if (!site) {
      return NextResponse.json(
        { ok: false, error: 'Not found' },
        { status: 404 }
      );
    }

    if (site.owner.toString() !== user._id.toString()) {
      return NextResponse.json(
        { ok: false, error: 'Not found' },
        { status: 404 }
      );
    }

    const { template } = await request.json();

    if (!template) {
      return NextResponse.json(
        { ok: false, error: 'Missing template' },
        { status: 400 }
      );
    }

    // Validate subdomain
    const check = validateSubdomain(template.subdomain);
    if (!check.ok) {
      return NextResponse.json(
        { ok: false, error: check.error },
        { status: 400 }
      );
    }

    // Uniqueness — allow keeping the current subdomain on this site
    if (check.value) {
      const conflict = await Site.findOne({
        subdomain: check.value,
        _id: { $ne: site._id },
      }).lean();
      if (conflict) {
        return NextResponse.json(
          { ok: false, error: 'That subdomain is already taken.' },
          { status: 409 }
        );
      }
    }

    // Capture old subdomain BEFORE mutating
    const previousSubdomain = site.subdomain;

    // Strip subdomain out of the stored template
    const cleanTemplate = { ...template };
    delete cleanTemplate.subdomain;

    site.name = template.name;
    site.industryId = template.industryId;
    site.theme = template.theme;
    site.subdomain = check.value || undefined;
    site.template = cleanTemplate;
    await site.save();

    // Invalidate caches
    revalidatePath(`/site/${site._id}`, 'layout');
    invalidateSiteCache({
      id: site._id,
      subdomain: site.subdomain,
      previousSubdomain,
    });

    return NextResponse.json({ ok: true, id: site._id.toString() });
  } catch (err) {
    console.error('[PUT /api/sites/[id]]', err);
    return NextResponse.json(
      { ok: false, error: 'Could not update site' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { ok: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const site = await Site.findById(id);
    if (!site) {
      return NextResponse.json(
        { ok: false, error: 'Site not found' },
        { status: 404 }
      );
    }

    if (site.owner.toString() !== user._id.toString()) {
      return NextResponse.json(
        { ok: false, error: 'Not found' },
        { status: 404 }
      );
    }

    // Capture subdomain BEFORE deleting
    const previousSubdomain = site.subdomain;

    await Site.deleteOne({ _id: site._id });

    // await Lead.deleteMany({ site: site._id });

    // Invalidate caches
    revalidatePath(`/site/${site._id}`, 'layout');
    invalidateSiteCache({
      id: site._id,
      previousSubdomain,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[DELETE /api/sites/[id]]', err);
    return NextResponse.json(
      { ok: false, error: 'Could not delete site' },
      { status: 500 }
    );
  }
}