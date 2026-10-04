// src/app/page.jsx
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import ThemeProvider from '@/theme/ThemeProvider';
import RenderTemplate from '@/renderer/RenderTemplate';
import { getSiteBySubdomain } from '@/lib/siteCache';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const h = await headers();
  const subdomain = h.get('x-tenant-subdomain');

  /* ── Tenant subdomain ── */
  if (subdomain) {
    await connectDB();
    const site = await getSiteBySubdomain(Site, subdomain);

    if (!site) {
      return (
        <div style={{ padding: 40, fontFamily: 'system-ui', maxWidth: 560, margin: '0 auto' }}>
          <h1 style={{ fontSize: 24, marginBottom: 8 }}>Nothing here yet</h1>
          <p style={{ color: '#666', marginBottom: 24 }}>
            <code>{subdomain}.szsdomains.com</code> isn&apos;t taken.
          </p>
          <a
            href="/build"
            style={{
              display: 'inline-block',
              padding: '10px 16px',
              background: '#111',
              color: '#fff',
              borderRadius: 6,
              textDecoration: 'none',
              fontSize: 14,
            }}
          >
            Claim this subdomain →
          </a>
        </div>
      );
    }

    const template = site.template; // already plain JSON
    const home =
      template.pages?.find((p) => p.slug === '') ??
      template.pages?.[0] ??
      null;

    return (
      <ThemeProvider themeName={String(site.theme)}>
        <RenderTemplate
          template={template}
          page={home}
          siteId={String(site._id)}
          routingMode="subdomain"
        />
      </ThemeProvider>
    );
  }

  /* ── Main app (no subdomain) ── */
  const user = await getCurrentUser();
  if (user) redirect('/dashboard');

  const SZSDOMAINS = process.env.NEXT_PUBLIC_SZSDOMAINS_URL || 'https://szsdomains.com';
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const returnTo = `${APP_URL}/dashboard`;

  redirect(`${SZSDOMAINS}/login?redirect=${encodeURIComponent(returnTo)}`);
}