// src/app/api/leads/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Lead from '@/models/Lead';
import Site from '@/models/Site';

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { siteId, name, email, phone, message } = body;

    if (!siteId || !name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Verify the site exists
    const site = await Site.findById(siteId).select('_id').lean();
    if (!site) {
      return NextResponse.json(
        { ok: false, error: 'Site not found' },
        { status: 404 }
      );
    }

    const lead = await Lead.create({
      site: siteId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || undefined,
      message: message.trim(),
    });

    // TODO: send notification email to site owner

    return NextResponse.json({ ok: true, id: lead._id.toString() });
  } catch (err) {
    console.error('[POST /api/leads]', err);
    return NextResponse.json(
      { ok: false, error: 'Could not submit form' },
      { status: 500 }
    );
  }
}