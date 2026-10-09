// src/app/sites/page.jsx
import Link from 'next/link';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import './sites.css';

export const revalidate = 60;

export const metadata = {
  title: 'Made with WebMaker',
  description: 'Real websites built in minutes. Browse examples and build your own.',
};

const INDUSTRY_LABELS = {
  restaurant: 'Restaurant',
  salon: 'Salon',
  contractor: 'Contractor',
  consultant: 'Consultant',
  photographer: 'Photographer',
  fitness: 'Fitness',
  barber: 'Barber',
  lawyer: 'Lawyer',
  cafe: 'Cafe',
  dentist: 'Dentist',
  band: 'Band',
  videoProduction: 'Video Production',
  postProduction: 'Post-Production',
  creativeStudio: 'Creative Studio',
};

function getPreviewImage(template) {
  const pages = template?.pages ?? [];
  const home = pages.find((p) => p.slug === '') ?? pages[0];
  if (!home) return null;

  const sections = home.sections ?? [];

  const hero = sections.find((s) => s.type === 'hero');
  if (hero?.content?.image) return hero.content.image;

  const gallery = sections.find((s) => s.type === 'gallery');
  if (gallery?.content?.images?.[0]?.src) {
    return gallery.content.images[0].src;
  }

  return null;
}

export default async function SitesPage() {
  await connectDB();

  const sites = await Site.find({ listed: true, published: true })
    .select('_id name industryId theme subdomain template createdAt')
    .sort({ createdAt: -1 })
    .limit(60)
    .lean();

  const items = sites.map((s) => ({
    id: String(s._id),
    name: s.name,
    industryId: s.industryId,
    industryLabel: INDUSTRY_LABELS[s.industryId] ?? s.industryId,
    preview: getPreviewImage(s.template),
  }));

  return (
    <div className="showcase">
      <div className="showcase-inner">
        <header className="showcase-header">
          <h1>Made with WebMaker</h1>
          <p>Every site here was built in minutes. Yours could be too.</p>
          <Link href="/build" className="showcase-cta">
            Build your own →
          </Link>
        </header>

        {items.length === 0 ? (
          <div className="showcase-empty">
            <p>No sites yet. Be the first.</p>
            <Link href="/build" className="showcase-cta">
              Create a site →
            </Link>
          </div>
        ) : (
          <div className="showcase-grid">
            {items.map((item) => (
              <Link
                key={item.id}
                href={`/site/${item.id}`}
                className="showcase-card"
              >
                <div className="showcase-card-preview">
                  {item.preview ? (
                    <img src={item.preview} alt="" loading="lazy" />
                  ) : (
                    <div className="showcase-card-placeholder">
                      {item.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="showcase-card-body">
                  <div className="showcase-card-name">{item.name}</div>
                  <div className="showcase-card-meta">{item.industryLabel}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}