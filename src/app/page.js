// src/app/page.js
import RenderTemplate from '@/renderer/RenderTemplate';
import { saasLanding } from '@/templates/saasLanding';

export default function Home() {
  return <RenderTemplate template={saasLanding} />;
}