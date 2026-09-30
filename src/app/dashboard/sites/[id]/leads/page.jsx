// src/app/dashboard/sites/[id]/leads/page.jsx
import { notFound, redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import Lead from '@/models/Lead';
import Link from 'next/link';
import './leads.css';

export default async function LeadsPage({ params }) {
  const { id } = await params;
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  await connectDB();
  const site = await Site.findById(id).lean();
  if (!site) notFound();
  if (site.owner.toString() !== user._id.toString()) notFound();

  const leads = await Lead.find({ site: id })
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div className="leads">
      <div className="leads-inner">
        <div className="leads-header">
          <Link href="/dashboard" className="leads-back">
            ← Back to sites
          </Link>
        </div>

        <div className="leads-title-row">
          <div>
            <h1 className="leads-title">Leads</h1>
            <p className="leads-subtitle">
              {leads.length === 0
                ? 'No submissions yet'
                : `${leads.length} submission${leads.length === 1 ? '' : 's'} for ${site.name}`}
            </p>
          </div>
        </div>

        {leads.length === 0 ? (
          <div className="leads-empty">
            <div className="leads-empty-icon">📬</div>
            <h2>No leads yet</h2>
            <p>When someone submits the contact form on your site, it will appear here.</p>
          </div>
        ) : (
          <div className="leads-list">
            {leads.map((lead) => (
              <div key={lead._id} className="lead">
                <div className="lead-header">
                  <div>
                    <div className="lead-name">{lead.name}</div>
                    <div className="lead-contact">
                      <a href={`mailto:${lead.email}`}>{lead.email}</a>
                      {lead.phone && (
                        <>
                          <span className="lead-sep">·</span>
                          <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="lead-date">
                    {new Date(lead.createdAt).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
                <div className="lead-message">{lead.message}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}