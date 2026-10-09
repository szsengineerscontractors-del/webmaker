// src/app/api/sites/[id]/toggle-listed/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import { getCurrentUser } from '@/lib/auth';

export async function POST(request, { params }) {
  const { id } = await params;
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ ok: false }, { status: 401 });

  await connectDB();
  const site = await Site.findById(id);
  if (!site) return NextResponse.json({ ok: false }, { status: 404 });
  if (String(site.owner) !== String(user._id)) {
    return NextResponse.json({ ok: false }, { status: 404 });
  }

  site.listed = !site.listed;
  await site.save();

  return NextResponse.json({ ok: true, listed: site.listed });
}