// src/app/site/[id]/edit/EditSiteClient.jsx
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

export default function EditSiteClient({ siteId, initialTemplate }) {
  const router = useRouter();

  const handleSave = async (template) => {
    const res = await fetch(`/api/sites/${siteId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ template }),
    });

    const data = await res.json();

    if (!data.ok) {
      alert(data.error || 'Could not save.');
      return;
    }

    // If the site has a subdomain, send the user to the live site so they
    // can see their changes on the real URL. Otherwise fall back to /site/{id}.
    const sub = template?.subdomain || initialTemplate?.subdomain;
    if (sub) {
      window.location.href = subdomainUrl(sub);
    } else {
      router.push(`/site/${siteId}`);
      router.refresh();
    }
  };

  return (
    <Wizard
      onPublish={handleSave}
      initialState={initialTemplate}
      editMode
      templateId={siteId}
    />
  );
}