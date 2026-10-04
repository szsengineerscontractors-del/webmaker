// src/app/build/NewSiteClient.jsx
'use client';

import { useRouter } from 'next/navigation';
import Wizard from '@/wizard/Wizard';

function subdomainUrl(subdomain) {
  if (!subdomain) return null;
  const isLocal = window.location.hostname === 'localhost';
  const port = window.location.port || '3000';
  const base = isLocal ? `localhost:${port}` : 'szsdomains.com';
  const scheme = isLocal ? 'http' : 'https';
  return `${scheme}://${subdomain}.${base}`;
}

export default function NewSiteClient() {
  const router = useRouter();

  const handlePublish = async (template) => {
    const res = await fetch('/api/sites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ template }),
    });

    const data = await res.json();

    if (!data.ok) {
      alert(data.error || 'Something went wrong.');
      return;
    }

    // If the wizard collected a subdomain, send the user to their live site.
    // Otherwise fall back to the dashboard confirmation.
    if (template?.subdomain) {
      window.location.href = subdomainUrl(template.subdomain);
    } else {
      router.push(`/dashboard?created=${data.id}`);
    }
  };

  return <Wizard onPublish={handlePublish} />;
}