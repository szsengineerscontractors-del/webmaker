// src/middleware.js
import { NextResponse } from 'next/server';

const PROTECTED = ['/dashboard', '/build'];

const RESERVED_SUBDOMAINS = new Set([
  'www', 'app', 'api', 'admin', 'dashboard', 'builder', 'login', 'signup',
]);

function parseHost(host) {
  if (!host) return { subdomain: null, base: null };

  const hostname = host.split(':')[0];

  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]') {
    return { subdomain: null, base: hostname };
  }

  const parts = hostname.split('.');
  if (parts.length < 2) return { subdomain: null, base: hostname };

  const subdomain = parts[0];
  const base = parts.slice(1).join('.');

  return { subdomain, base };
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host') ?? '';
  const { subdomain, base } = parseHost(host);

  const isKnownBase =
    base === 'localhost' ||
    base === 'szsdomains.com' ||
    base === 'webmaker-gold.vercel.app';

  const isTenantSubdomain =
    isKnownBase && subdomain && !RESERVED_SUBDOMAINS.has(subdomain);

  /* ── 1. Auth gate ── */
  const needsAuth = PROTECTED.some((p) => pathname.startsWith(p));
  if (needsAuth) {
    const cookie = request.cookies.get('szs_token');
    if (!cookie) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      url.search = `?next=${encodeURIComponent(pathname)}`;
      return NextResponse.redirect(url);
    }
  }

  /* ── 2. Tenant subdomain marker ── */
  if (isTenantSubdomain) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-tenant-subdomain', subdomain);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
};