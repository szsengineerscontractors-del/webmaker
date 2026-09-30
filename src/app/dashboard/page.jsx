// src/app/dashboard/page.jsx
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import Link from 'next/link';
import './dashboard.css';

export default async function Dashboard() {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  await connectDB();
  const sites = await Site.find({ owner: user._id })
    .sort({ updatedAt: -1 })
    .lean();

  return (
    <div className="dash">
      <div className="dash-inner">

        <div className="dash-header">
          <div>
            <h1 className="dash-title">Your sites</h1>
            <p className="dash-subtitle">
              {sites.length === 0
                ? 'No sites yet'
                : `${sites.length} site${sites.length === 1 ? '' : 's'}`}
            </p>
          </div>
          <Link href="/build" className="dash-btn dash-btn-primary">
            <span style={{ fontSize: 18, lineHeight: 1 }}>+</span>
            New site
          </Link>
        </div>

        {sites.length === 0 ? (
          <div className="dash-empty">
            <div className="dash-empty-icon">🎨</div>
            <h2>You haven't created a site yet</h2>
            <p>
              Pick an industry, choose a theme, and your site is ready in minutes.
            </p>
            <Link href="/build" className="dash-btn dash-btn-primary">
              Create your first site →
            </Link>
          </div>
        ) : (
          <div className="dash-grid">
            {sites.map((site) => (
              <div key={site._id} className="dash-card">
                <div className="dash-card-preview">🌐</div>
                <div className="dash-card-body">
                  <h3 className="dash-card-name">{site.name}</h3>
                  <p className="dash-card-meta">
                    {site.industryId} · {site.theme}
                  </p>
                  <div className="dash-card-actions">
                    <Link href={`/site/${site._id}`} className="dash-card-btn dash-card-btn-view">
                      View
                    </Link>
                    <Link href={`/site/${site._id}/edit`} className="dash-card-btn dash-card-btn-edit">
                      Edit
                    </Link>
                  </div>
                  <Link
                    href={`/dashboard/sites/${site._id}/leads`}
                    className="dash-card-leads"
                  >
                    View leads →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}