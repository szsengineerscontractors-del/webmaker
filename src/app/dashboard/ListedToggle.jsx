'use client';

import { useState } from 'react';

export default function ListedToggle({ siteId, initialListed }) {
  const [listed, setListed] = useState(initialListed);
  const [busy, setBusy] = useState(false);

  const toggle = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBusy(true);
    try {
      const res = await fetch(`/api/sites/${siteId}/toggle-listed`, {
        method: 'POST',
      });
      const data = await res.json();
      if (data.ok) setListed(data.listed);
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      onClick={toggle}
      disabled={busy}
      className={`listed-toggle ${listed ? 'listed' : 'hidden'}`}
      title={listed ? 'Shown in gallery' : 'Hidden from gallery'}
    >
      {listed ? '● Listed' : '○ Hidden'}
    </button>
  );
}