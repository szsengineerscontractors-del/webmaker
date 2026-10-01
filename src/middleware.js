// src/middleware.js
import { NextResponse } from 'next/server';

const PROTECTED = ['/dashboard', '/build'];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const needsAuth = PROTECTED.some((p) => pathname.startsWith(p));
  if (!needsAuth) return NextResponse.next();

  // Just check the cookie exists — full verification happens in the page
  const cookie = request.cookies.get('szs_token');

  if (!cookie) {
    const returnTo = `${request.nextUrl.origin}/login?next=${encodeURIComponent(pathname)}`;
    const loginUrl = `${process.env.NEXT_PUBLIC_SZSDOMAINS_URL}/login?redirect=${encodeURIComponent(returnTo)}`;
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/build/:path*'],
};