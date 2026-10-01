// src/app/page.jsx
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const user = await getCurrentUser();

  if (user) {
    redirect('/dashboard');
  }

  // Not logged in — send to SZDomains login with a return URL
  const SZSDOMAINS = process.env.NEXT_PUBLIC_SZSDOMAINS_URL || 'https://szsdomains.com';
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const returnTo = `${APP_URL}/dashboard`;

  redirect(`${SZSDOMAINS}/login?redirect=${encodeURIComponent(returnTo)}`);
}