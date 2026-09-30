// src/app/api/sites/[id]/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import { getCurrentUser } from '@/lib/auth';

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ ok: false, error: 'Not authenticated' }, { status: 401 });

    const site = await Site.findById(id);
    if (!site) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });

    // Ownership check
    if (site.owner.toString() !== user._id.toString()) {
      return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
    }

    const { template } = await request.json();

    site.name = template.name;
    site.industryId = template.industryId;
    site.theme = template.theme;
    site.template = template;
    await site.save();

    return NextResponse.json({ ok: true, id: site._id.toString() });
  } catch (err) {
    console.error('[PUT /api/sites/[id]]', err);
    return NextResponse.json({ ok: false, error: 'Could not update site' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ ok: false, error: 'Not authenticated' }, { status: 401 });

    const site = await Site.findById(id);
    if (!site || site.owner.toString() !== user._id.toString()) {
      return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
    }

    await Site.deleteOne({ _id: site._id });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[DELETE /api/sites/[id]]', err);
    return NextResponse.json({ ok: false, error: 'Could not delete site' }, { status: 500 });
  }
}