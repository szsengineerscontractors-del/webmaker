// src/app/api/sites/route.js
import { NextResponse } from 'next/server';
import { sites } from '@/lib/sites';

export async function POST(req) {
  const { template } = await req.json();
  const id = template.id ?? `site-${Date.now()}`;
  sites.set(id, template);
  return NextResponse.json({ id });
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ sites: [...sites.keys()] });
  const site = sites.get(id);
  if (!site) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ template: site });
}