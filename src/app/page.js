// src/app/page.jsx
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';

export default async function Home() {
  const user = await getCurrentUser();

  if (user) {
    redirect('/dashboard');
  }

  // Not logged in — send them to SZDomains login
  redirect('https://szsdomains.com/login');
}