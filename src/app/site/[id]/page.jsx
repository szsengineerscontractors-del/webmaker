// src/app/site/[id]/page.jsx
import { notFound } from 'next/navigation';
import connectDB from '@/lib/db';
import Site from '@/models/Site';
import ThemeProvider from '@/theme/ThemeProvider';
import RenderTemplate from '@/renderer/RenderTemplate';


export const revalidate = 60;

export default async function SitePage({ params }) {
  const { id } = await params;
  await connectDB();

  const site = await Site.findById(id).lean();
  if (!site) notFound();

  // Deep-clone template to strip BSON types (Int32, ObjectId, etc.)
  // before crossing the server → client component boundary.
  const template = JSON.parse(JSON.stringify(site.template));
  const theme = String(site.theme);
  const siteId = String(site._id);

  const home =
    template.pages?.find((p) => p.slug === '') ??
    template.pages?.[0] ??
    null;

  return (
    <ThemeProvider themeName={theme}>
      <RenderTemplate template={template} page={home} siteId={siteId} />
    </ThemeProvider>
  );
}