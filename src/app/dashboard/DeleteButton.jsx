'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeleteButton({ siteId, siteName }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    setDeleting(true);
    setError('');

    try {
      const res = await fetch(`/api/sites/${siteId}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!data.ok) {
        setError(data.error || 'Could not delete');
        setDeleting(false);
        return;
      }

      setOpen(false);
      router.refresh();       // re-fetch dashboard data
    } catch (err) {
      setError('Network error. Try again.');
      setDeleting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className="dash-card-btn dash-card-btn-delete"
        onClick={() => setOpen(true)}
        aria-label={`Delete ${siteName}`}
      >
        Delete
      </button>

      {open && (
        <div
          className="delete-modal-backdrop"
          onClick={() => !deleting && setOpen(false)}
        >
          <div
            className="delete-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="delete-modal-title">Delete this site?</h3>
            <p className="delete-modal-body">
              <strong>{siteName}</strong> will be permanently deleted.
              This can't be undone.
            </p>

            {error && (
              <p className="delete-modal-error">{error}</p>
            )}

            <div className="delete-modal-actions">
              <button
                type="button"
                className="delete-modal-btn delete-modal-btn-cancel"
                onClick={() => setOpen(false)}
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                type="button"
                className="delete-modal-btn delete-modal-btn-confirm"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? 'Deleting…' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}