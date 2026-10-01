// src/app/build/page.jsx
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import Link from 'next/link';
import NewSiteClient from './NewSiteClient';
import './build.css';

export default async function BuildPage() {
  const user = await getCurrentUser();
  if (!user) redirect('/login?next=/build');

  return (
    <div className="build">
      <div className="build-inner">
        <div className="build-header">
          <Link href="/dashboard" className="build-back">
            ← Back to sites
          </Link>
          <span className="build-user">{user.email}</span>
        </div>
        <NewSiteClient />
      </div>
    </div>
  );
}