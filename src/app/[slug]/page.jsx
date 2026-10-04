// src/app/[slug]/page.jsx
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import ThemeProvider from '@/theme/ThemeProvider';
import RenderTemplate from '@/renderer/RenderTemplate';



export const dynamic = 'force-dynamic';

export default async function SubdomainSlugPage({ params }) {
  const { slug } = await params;
  const h = await headers();
  const subdomain = h.get('x-tenant-subdomain');

  if (!subdomain) notFound();

  await connectDB();
  const site = await Site.findOne({ subdomain }).lean();
  if (!site) notFound();

  const template = JSON.parse(JSON.stringify(site.template));
  const page = template.pages?.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <ThemeProvider themeName={String(site.theme)}>
      <RenderTemplate
        template={template}
        page={page}
        siteId={String(site._id)}
        routingMode="subdomain"
      />
    </ThemeProvider>
  );
}