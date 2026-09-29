// src/app/site/[id]/page.jsx
import { notFound } from 'next/navigation';
import RenderTemplate from '@/renderer/RenderTemplate';
import ThemeProvider from '@/theme/ThemeProvider';
import { sites } from '@/lib/sites';   // ← fixed import

export default async function SitePage({ params }) {
  const { id } = await params;
  const site = sites.get(id);

  if (!site) notFound();

  return (
    <ThemeProvider themeName={site.theme}>
      <RenderTemplate template={site} />
    </ThemeProvider>
  );
} 