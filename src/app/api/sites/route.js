// src/app/api/sites/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import { getCurrentUser } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { invalidateSiteCache } from '@/lib/siteCache';

const RESERVED_SUBDOMAINS = new Set([
  'www', 'app', 'api', 'admin', 'dashboard', 'builder', 'login', 'signup', 'mail',
]);

/**
 * Validate + normalize a subdomain string.
 * Returns { ok: true, value } or { ok: false, error }.
 */
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

export async function POST(request) {
  try {
    await connectDB();
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { ok: false, error: 'Not authenticated' },
        { status: 401 }
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

    // Uniqueness (only if one was provided)
    if (check.value) {
      const existing = await Site.findOne({ subdomain: check.value }).lean();
      if (existing) {
        return NextResponse.json(
          { ok: false, error: 'That subdomain is already taken.' },
          { status: 409 }
        );
      }
    }

    // Strip subdomain out of the stored template
    const cleanTemplate = { ...template };
    delete cleanTemplate.subdomain;

    const site = await Site.create({
      owner: user._id,
      name: template.name,
      industryId: template.industryId,
      theme: template.theme,
      subdomain: check.value || undefined,
      template: cleanTemplate,
    });

    revalidatePath(`/site/${site._id}`, 'layout')
    invalidateSiteCache({
      id:site._id,
      subdomain:site.subdomain
    })

    return NextResponse.json({
      ok: true,
      id: site._id.toString(),
    });
  } catch (err) {
    console.error('[POST /api/sites]', err);
    return NextResponse.json(
      { ok: false, error: 'Could not save site' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { ok: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const sites = await Site.find({ owner: user._id })
      .select('_id name industryId theme subdomain createdAt updatedAt')
      .sort({ updatedAt: -1 })
      .lean();

    return NextResponse.json({
      ok: true,
      sites: sites.map((s) => ({
        id: s._id.toString(),
        name: s.name,
        industryId: s.industryId,
        theme: s.theme,
        subdomain: s.subdomain ?? null,
        createdAt: s.createdAt,
        updatedAt: s.updatedAt,
      })),
    });
  } catch (err) {
    console.error('[GET /api/sites]', err);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong' },
      { status: 500 }
    );
  }
}