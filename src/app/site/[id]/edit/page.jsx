// src/app/site/[id]/edit/page.jsx
import { notFound, redirect } from 'next/navigation';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import { getCurrentUser } from '@/lib/auth';
import Link from 'next/link';
import EditSiteClient from './EditSiteClient';
import './edit.css';

export default async function EditPage({ params }) {
  const { id } = await params;
  const user = await getCurrentUser();
  if (!user) redirect(`/login?next=/site/${id}/edit`);

  await connectDB();
  const site = await Site.findById(id).lean();
  if (!site) notFound();

  if (site.owner.toString() !== user._id.toString()) notFound();

  return (
    <div className="edit">
      <div className="edit-inner">
        <div className="edit-header">
          <Link href="/dashboard" className="edit-back">
            ← Back to sites
          </Link>
          <span className="edit-site-name">Editing: {site.name}</span>
        </div>
        <EditSiteClient
          siteId={id}
          initialTemplate={site.template}
        />
      </div>
    </div>
  );
}