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

  const template = JSON.parse(JSON.stringify(site.template));
  const home =
    template.pages?.find((p) => p.slug === '') ??
    template.pages?.[0] ??
    null;

  if (!home) notFound();

  return (
    <ThemeProvider themeName={String(site.theme)}>
      <RenderTemplate
        template={template}
        page={home}
        siteId={String(site._id)}
        routingMode="path"
      />
    </ThemeProvider>
  );
}