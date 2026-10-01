// src/app/login/page.jsx
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';

export default async function LoginPage({ searchParams }) {
  const { next } = await searchParams;
  const target = next || '/dashboard';

  // Already logged in? Skip login.
  const user = await getCurrentUser();
  if (user) redirect(target);

  const SZSDOMAINS = process.env.NEXT_PUBLIC_SZSDOMAINS_URL || 'https://szsdomains.vercel.app';
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  // Return URL — where SZDomains sends the user after login
  const returnTo = `${APP_URL}${target}`;
  redirect(`${SZSDOMAINS}/login?redirect=${encodeURIComponent(returnTo)}`);
}