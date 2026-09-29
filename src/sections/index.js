// src/sections/index.js
import Hero         from './Hero';
import Features     from './Features';
import Pricing      from './Pricing';
import CTA          from './CTA';
import Gallery      from './Gallery';
import Testimonials from './Testimonials';
import Contact      from './Contact';
import Team         from './Team';
import Stats        from './Stats';

import { meta as heroMeta }         from './Hero';
import { meta as featuresMeta }     from './Features';
import { meta as pricingMeta }      from './Pricing';
import { meta as ctaMeta }          from './CTA';
import { meta as galleryMeta }      from './Gallery';
import { meta as testimonialsMeta } from './Testimonials';
import { meta as contactMeta }      from './Contact';
import { meta as teamMeta }         from './Team';
import { meta as statsMeta }        from './Stats';

export {
  Hero, Features, Pricing, CTA,
  Gallery, Testimonials, Contact,
  Team, Stats,
};

export const sectionRegistry = {
  hero:         { component: Hero,         meta: heroMeta },
  features:     { component: Features,     meta: featuresMeta },
  pricing:      { component: Pricing,      meta: pricingMeta },
  cta:          { component: CTA,          meta: ctaMeta },
  gallery:      { component: Gallery,      meta: galleryMeta },
  testimonials: { component: Testimonials, meta: testimonialsMeta },
  contact:      { component: Contact,      meta: contactMeta },
  team:         { component: Team,         meta: teamMeta },
  stats:        { component: Stats,        meta: statsMeta },
};

/* ─────────────────────────────────────────────────────────────
   HELPERS — read from each section's meta
   ───────────────────────────────────────────────────────────── */

/** Get a section's default layout (used by the wizard). */
export const getDefaultLayout = (type) => {
  const entry = sectionRegistry[type];
  return entry?.meta?.defaultLayout ?? 'default';
};

/** Get all layouts a section supports. */
export const getLayouts = (type) => {
  const entry = sectionRegistry[type];
  return entry?.meta?.layouts ?? [];
};

/** Get a section's display name. */
export const getSectionName = (type) => {
  const entry = sectionRegistry[type];
  return entry?.meta?.name ?? type;
};

/** Get a section's available styles. */
export const getStyles = (type) => {
  const entry = sectionRegistry[type];
  return entry?.meta?.styles ?? [];
};