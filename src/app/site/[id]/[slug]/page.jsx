// src/app/site/[id]/[slug]/page.jsx
import { notFound } from 'next/navigation';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import ThemeProvider from '@/theme/ThemeProvider';
import RenderTemplate from '@/renderer/RenderTemplate';

export const revalidate = 60;

export default async function SiteSubPage({ params }) {
  const { id, slug } = await params;
  await connectDB();

  const site = await Site.findById(id).lean();
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
        routingMode="path"
      />
    </ThemeProvider>
  );
} 