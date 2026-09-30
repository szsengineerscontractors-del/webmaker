'use client';

import { useRouter } from 'next/navigation';
import Wizard from '@/wizard/Wizard';

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

    router.push(`/site/${siteId}`);
    router.refresh();
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