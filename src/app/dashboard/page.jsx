// src/app/dashboard/page.jsx
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import Lead from '@/models/Lead';
import Link from 'next/link';
import DeleteButton from './DeleteButton';
import ListedToggle from './ListedToggle';
import './dashboard.css';

export default async function Dashboard() {
  const user = await getCurrentUser();
  if (!user) redirect('/login?next=/dashboard');

  await connectDB();

  const sites = await Site.find({ owner: user._id })
    .sort({ updatedAt: -1 })
    .lean();

  // Count unread leads per site
  let unreadBySite = {};
  if (sites.length > 0) {
    const siteIds = sites.map((s) => s._id);
    const counts = await Lead.aggregate([
      { $match: { site: { $in: siteIds }, read: false } },
      { $group: { _id: '$site', count: { $sum: 1 } } },
    ]);
    unreadBySite = Object.fromEntries(
      counts.map((row) => [row._id.toString(), row.count])
    );
  }

  /* ── Domain config (env-driven, not hardcoded) ── */
  const isLocal = process.env.NODE_ENV !== 'production';
  const ROOT_DOMAIN =
    process.env.NEXT_PUBLIC_ROOT_DOMAIN ||
    (isLocal ? 'localhost:3000' : 'webmaker-gold.vercel.app');

  const baseHost = ROOT_DOMAIN;
  const baseDisplay = ROOT_DOMAIN.replace(/:\d+$/, '');
  const scheme = isLocal ? 'http' : 'https';

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
          <div className="dash-header-actions">
            <Link href="/sites" className="dash-btn">
              Browse gallery
            </Link>
            <Link href="/build" className="dash-btn dash-btn-primary">
              <span style={{ fontSize: 18, lineHeight: 1 }}>+</span>
              New site
            </Link>
          </div>
        </div>

        {sites.length === 0 ? (
          <div className="dash-empty">
            <div className="dash-empty-icon">🎨</div>
            <h2>You haven&apos;t created a site yet</h2>
            <p>Pick an industry, choose a theme, and your site is ready in minutes.</p>
            <Link href="/build" className="dash-btn dash-btn-primary">
              Create your first site →
            </Link>
          </div>
        ) : (
          <div className="dash-grid">
            {sites.map((site) => {
              const unread = unreadBySite[site._id.toString()] ?? 0;
              const hasSubdomain = Boolean(site.subdomain);
              const subdomainUrl = hasSubdomain
                ? `${scheme}://${site.subdomain}.${baseHost}`
                : null;

              return (
                <div key={site._id} className="dash-card">
                  <div className="dash-card-preview">🌐</div>
                  <div className="dash-card-body">
                    <div className="dash-card-title-row">
                      <h3 className="dash-card-name">{site.name}</h3>
                      {unread > 0 && (
                        <span className="dash-card-badge">{unread} new</span>
                      )}
                    </div>
                    <p className="dash-card-meta">
                      {site.industryId} · {site.theme}
                    </p>

                    {subdomainUrl ? (
                      <a
                        href={`/site/${site._id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dash-card-subdomain"
                        title={`Open ${site.subdomain}.${baseDisplay}`}
                      >
                        {site.subdomain}.{baseDisplay} ↗
                      </a>
                    ) : (
                      <Link
                        href={`/site/${site._id}/edit`}
                        className="dash-card-subdomain dash-card-subdomain-empty"
                      >
                        + Add subdomain
                      </Link>
                    )}

                    <div className="dash-card-actions">
                      <Link
                        href={`/site/${site._id}`}
                        className="dash-card-btn dash-card-btn-view"
                      >
                        View
                      </Link>
                      <Link
                        href={`/site/${site._id}/edit`}
                        className="dash-card-btn dash-card-btn-edit"
                      >
                        Edit
                      </Link>
                      <DeleteButton
                        siteId={site._id.toString()}
                        siteName={site.name}
                      />
                    </div>

                    <div className="dash-card-footer">
                      <ListedToggle
                        siteId={site._id.toString()}
                        initialListed={site.listed !== false}
                      />
                      <Link
                        href={`/dashboard/sites/${site._id}/leads`}
                        className="dash-card-leads"
                      >
                        <span>View leads</span>
                        {unread > 0 && (
                          <span className="dash-card-leads-count">{unread}</span>
                        )}
                        <span className="dash-card-leads-arrow">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}