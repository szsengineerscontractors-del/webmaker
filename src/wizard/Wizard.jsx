// src/wizard/Wizard.jsx
'use client';

import { useState } from 'react';
import { industries, industryList } from './industries';
import { getDefaultLayout } from '@/sections';
import StepIndicator from './StepIndicator';
import Step1Industry from './Step1Industry';
import Step2Business from './Step2Business';
import Step3Theme from './Step3Theme';
import Step3Sections from './Step3Sections';
import Step4Content from './Step4Content';

const STEPS = [
  { id: 1, label: 'Business type' },
  { id: 2, label: 'Your details' },
  { id: 3, label: 'Pick a look' },
  { id: 4, label: 'Sections' },
  { id: 5, label: 'Content' },
];

const TEMPLATE_VERSION = 1;

const RESERVED_SLUGS = new Set([
  'edit', 'dashboard', 'api', 'build', 'site', 'login', 'new',
]);

const RESERVED_SUBDOMAINS = new Set([
  'www', 'app', 'api', 'admin', 'dashboard', 'builder', 'login', 'signup', 'mail',
]);

/* ─── Slug helpers ─── */

export function slugify(title) {
  return String(title || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function isReservedSlug(slug) {
  return RESERVED_SLUGS.has(slug);
}

export function isReservedSubdomain(sub) {
  return RESERVED_SUBDOMAINS.has(sub);
}

/* ─── Navbar helpers ─── */

/**
 * Navbar links = pages. Home → "/", other pages → "/{slug}".
 * resolveHref in the Navbar component turns these into /site/{id}/...
 * at render time.
 */
function buildNavLinks(pages) {
  return pages.map((page) => ({
    label: page.title || 'Untitled',
    href: page.slug === '' ? '/' : `/${page.slug}`,
  }));
}

/**
 * CTA points to a contact page if one exists, else falls back to
 * the #contact anchor on the current page.
 */
function navCtaHref(pages) {
  const contactPage = pages.find((p) => p.slug === 'contact');
  return contactPage ? '/contact' : '#contact';
}

function navCtaLabel(industryId) {
  const map = {
    restaurant: 'Reserve',
    salon: 'Book now',
    contractor: 'Get a quote',
    consultant: 'Book a call',
    photographer: 'Book now',
  };
  return map[industryId] ?? 'Contact';
}

function layoutFor(industry, type) {
  return industry.layout?.[type] ?? getDefaultLayout(type);
}

/* ─── Footer helpers ─── */

function buildFooter(state, industry) {
  const { pages = [], businessName, tagline } = state;

  const pageLinks = pages
    .filter((p) => p.slug || p.title)
    .map((p) => ({
      label: p.title || 'Home',
      href: p.slug === '' ? '/' : `/${p.slug}`,
    }));

  const columns = [];

  if (pageLinks.length > 0) {
    columns.push({ heading: 'Explore', links: pageLinks });
  }

  return {
    type: 'footer',
    layout: 'multicol',
    style: 'dark',
    content: {
      brand: {
        name: businessName || 'Your Business',
        tagline: tagline || '',
      },
      columns,
      legal: `© ${new Date().getFullYear()} ${businessName || 'Your Business'}. All rights reserved.`,
      social: [
        { label: 'Twitter', href: 'https://twitter.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'Facebook', href: 'https://facebook.com' },
      ],
    },
  };
}

/* ─── Template ↔ wizard state ─── */

function makeHomePage(selectedSections = [], content = {}) {
  return {
    slug: '',
    title: 'Home',
    selectedSections,
    content,
  };
}

function templateSectionsToWizardPage(page) {
  const sections = page.sections ?? [];
  return {
    slug: page.slug ?? '',
    title: page.title ?? 'Home',
    selectedSections: sections.map((s) => s.type),
    content: Object.fromEntries(
      sections.map((s) => [s.type, s.content ?? {}])
    ),
  };
}

/**
 * Accepts v0 (flat `sections`) and v1 (`pages: [...]`) templates.
 */
function stateFromTemplate(template) {
  if (!template) return null;

  const rawPages =
    Array.isArray(template.pages) && template.pages.length > 0
      ? template.pages
      : [
          {
            slug: '',
            title: 'Home',
            sections: template.sections ?? [],
          },
        ];

  const footerContent = template.frames?.footer?.content ?? {};

  return {
    industryId: template.industryId ?? null,
    businessName: template.name ?? '',
    tagline: footerContent.brand?.tagline ?? '',
    subdomain: template.subdomain ?? '',
    theme: template.theme ?? null,
    pages: rawPages.map(templateSectionsToWizardPage),
    activePageIndex: 0,
  };
}

/* ─── Wizard ─── */

export default function Wizard({
  onPublish,
  initialState = null,
  editMode = false,
  templateId = null,
}) {
  const [step, setStep] = useState(1);
  const [state, setState] = useState(() => {
    if (initialState) {
      const restored = stateFromTemplate(initialState);
      if (restored) return restored;
    }
    return {
      industryId: null,
      businessName: '',
      tagline: '',
      subdomain: '',
      theme: null,
      pages: [makeHomePage()],
      activePageIndex: 0,
    };
  });

  const industry = state.industryId ? industries[state.industryId] : null;

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));
  const update = (patch) => setState((s) => ({ ...s, ...patch }));

  const updatePages = (pages) => setState((s) => ({ ...s, pages }));

  const buildTemplate = () => {
    if (!industry) return null;

    const pages = state.pages.map((page) => ({
      slug: page.slug ?? '',
      title: page.title || 'Untitled',
      sections: page.selectedSections.map((type) => {
        const placeholder = industry.placeholder[type] ?? {};
        const userEdits = page.content[type] ?? {};
        const merged = { ...placeholder, ...userEdits };

        if (type === 'hero') {
          if (state.businessName && !userEdits.heading)
            merged.heading = state.businessName;
          if (state.tagline && !userEdits.subheading)
            merged.subheading = state.tagline;
        }

        return {
          id: type === 'hero' ? 'top' : type,
          type,
          layout: layoutFor(industry, type),
          style: 'default',
          density: type === 'hero' ? 'none' : 'md',
          content: merged,
        };
      }),
    }));

    return {
      id: templateId ?? `site-${Date.now()}`,
      templateVersion: TEMPLATE_VERSION,
      industryId: state.industryId,
      name: state.businessName || 'Untitled Site',
      subdomain: state.subdomain || undefined,
      theme: state.theme || industry.theme,
      frames: {
        navbar: {
          type: 'navbar',
          layout: 'logo-left',
          style: 'default',
          behavior: 'sticky',
          content: {
            brand: {
              type: 'text',
              value: state.businessName || 'Your Business',
              href: '/',
            },
            links: buildNavLinks(state.pages),
            actions: [
              {
                type: 'button',
                label: navCtaLabel(state.industryId),
                href: navCtaHref(state.pages),
                variant: 'primary',
              },
            ],
          },
        },
        footer: buildFooter(state, industry),
      },
      pages,
    };
  };

  return (
    <div className="wizard">
      <StepIndicator steps={STEPS} current={step} />

      <div className="wizard-body">
        {step === 1 && (
          <Step1Industry
            industries={industryList}
            selected={state.industryId}
            onSelect={(id) => {
              const ind = industries[id];
              update({
                industryId: id,
                theme: ind.theme,
                pages: [
                  makeHomePage([...ind.compulsory, ...ind.recommended]),
                ],
                activePageIndex: 0,
              });
            }}
            onNext={next}
          />
        )}

        {step === 2 && (
          <Step2Business
            value={{
              businessName: state.businessName,
              tagline: state.tagline,
              subdomain: state.subdomain ?? '',
            }}
            onChange={update}
            onNext={next}
            onBack={back}
          />
        )}

        {step === 3 && (
          <Step3Theme
            industry={industry}
            businessName={state.businessName}
            tagline={state.tagline}
            theme={state.theme}
            onChange={(theme) => update({ theme })}
            onNext={next}
            onBack={back}
          />
        )}

        {step === 4 && (
          <Step3Sections
            industry={industry}
            pages={state.pages}
            activePageIndex={state.activePageIndex}
            onPagesChange={updatePages}
            onActivePageChange={(i) => update({ activePageIndex: i })}
            onNext={next}
            onBack={back}
          />
        )}

        {step === 5 && (
          <Step4Content
            industry={industry}
            pages={state.pages}
            activePageIndex={state.activePageIndex}
            onPagesChange={updatePages}
            onActivePageChange={(i) => update({ activePageIndex: i })}
            onBack={back}
            editMode={editMode}
            onPublish={() => onPublish?.(buildTemplate())}
          />
        )}
      </div>
    </div>
  );
}