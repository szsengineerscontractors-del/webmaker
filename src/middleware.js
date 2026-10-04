// src/middleware.js
import { NextResponse } from 'next/server';

const PROTECTED = ['/dashboard', '/build'];

/**
 * Reserved subdomains that mean "main app, not a tenant".
 */
const RESERVED_SUBDOMAINS = new Set([
  'www', 'app', 'api', 'admin', 'dashboard', 'builder', 'login', 'signup',
]);

/**
 * Extract { subdomain, base } from a Host header like "thecar.localhost:3000".
 * Returns { subdomain: null } if there is no subdomain.
 */
function parseHost(host) {
  if (!host) return { subdomain: null, base: null };

  const hostname = host.split(':')[0]; // strip port

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
  console.log('[mw]', host, pathname);
  const isKnownBase = base === 'localhost' || base === 'szsdomains.com';
  const isTenantSubdomain =
    isKnownBase && subdomain && !RESERVED_SUBDOMAINS.has(subdomain);

  /* ── 1. Auth gate (existing behavior) ── */
  const needsAuth = PROTECTED.some((p) => pathname.startsWith(p));
  if (needsAuth) {
    const cookie = request.cookies.get('szs_token');
    if (!cookie) {
      const returnTo = `${request.nextUrl.origin}/login?next=${encodeURIComponent(pathname)}`;
      const loginUrl = `${process.env.NEXT_PUBLIC_SZSDOMAINS_URL}/login?redirect=${encodeURIComponent(returnTo)}`;
      return NextResponse.redirect(loginUrl);
    }
  }

  /* ── 2. Tenant subdomain marker ── */
  // If we're on a tenant subdomain, tag the request so the root page
  // can look up the site and redirect to /site/{id}.
  if (isTenantSubdomain) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-tenant-subdomain', subdomain);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  return NextResponse.next();
}

export const config = {
  // Match everything except static assets and API routes.
  // Auth gating inside the function still only applies to PROTECTED paths.
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
};