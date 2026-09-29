// src/app/wizard/page.jsx
'use client';

import { useRouter } from 'next/navigation';
import Wizard from '@/wizard/Wizard';

export default function WizardPage() {
  const router = useRouter();

  const handlePublish = async (template) => {
    // Save to your backend
    const res = await fetch('/api/sites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ template }),
    });

    if (!res.ok) {
      alert('Something went wrong. Please try again.');
      return;
    }

    const { id } = await res.json();
    // Redirect to the published site or a success page
    router.push(`/site/${id}`);
  };

  return (
    <div className="wizard-page">
      <Wizard onPublish={handlePublish} />
    </div>
  );
}