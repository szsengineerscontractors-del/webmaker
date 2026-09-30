// src/app/api/sites/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import { getCurrentUser } from '@/lib/auth';

export async function POST(request) {
  try {
    await connectDB();
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ ok: false, error: 'Not authenticated' }, { status: 401 });
    }

    const { template } = await request.json();

    const site = await Site.create({
      owner: user._id,
      name: template.name,
      industryId: template.industryId,
      theme: template.theme,
      template,
    });

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

// src/app/api/sites/route.js (same file, add GET)
export async function GET() {
  try {
    await connectDB();
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ ok: false, error: 'Not authenticated' }, { status: 401 });

    const sites = await Site.find({ owner: user._id })
      .select('_id name industryId theme createdAt updatedAt')
      .sort({ updatedAt: -1 })
      .lean();

    return NextResponse.json({
      ok: true,
      sites: sites.map(s => ({
        id: s._id.toString(),
        name: s.name,
        industryId: s.industryId,
        theme: s.theme,
        createdAt: s.createdAt,
        updatedAt: s.updatedAt,
      })),
    });
  } catch (err) {
    console.error('[GET /api/sites]', err);
    return NextResponse.json({ ok: false, error: 'Something went wrong' }, { status: 500 });
  }
}