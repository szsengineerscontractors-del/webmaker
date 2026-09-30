'use client';

import { useRouter } from 'next/navigation';
import Wizard from '@/wizard/Wizard';

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

    router.push(`/dashboard?created=${data.id}`);
  };

  return <Wizard onPublish={handlePublish} />;
}