// src/app/site/[id]/page.jsx
import { notFound } from 'next/navigation';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import ThemeProvider from '@/theme/ThemeProvider';
import RenderTemplate from '@/renderer/RenderTemplate';

export default async function SitePage({ params }) {
  const { id } = await params;

  await connectDB();

  const site = await Site.findById(id).lean();
  if (!site) notFound();

  return (
    <ThemeProvider themeName={site.theme}>
      <RenderTemplate template={site.template} siteId={id} />
    </ThemeProvider>
  );
}