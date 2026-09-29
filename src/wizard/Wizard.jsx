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

const NAV_LINK_LABELS = {
  features: 'Services',
  pricing: 'Pricing',
  gallery: 'Gallery',
  testimonials: 'Reviews',
  contact: 'Contact',
  cta: 'Contact',
  team: 'Team',
  stats: 'About',
};

const HIDDEN_IN_NAV = new Set(['stats', 'team']);

function buildNavLinks(selectedSections) {
  const links = [{ label: 'Home', href: '#top' }];

  for (const type of selectedSections) {
    if (type === 'hero') continue;
    if (HIDDEN_IN_NAV.has(type)) continue;
    if (type === 'contact') continue;

    links.push({
      label: NAV_LINK_LABELS[type] ?? type,
      href: `#${type}`,
    });
  }

  return links;
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

export default function Wizard({ onPublish }) {
  const [step, setStep] = useState(1);
  const [state, setState] = useState({
    industryId: null,
    businessName: '',
    tagline: '',
    theme: null,
    selectedSections: [],
    content: {},
  });

  const industry = state.industryId ? industries[state.industryId] : null;

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));
  const update = (patch) => setState((s) => ({ ...s, ...patch }));

  const buildTemplate = () => {
    if (!industry) return null;

    const sections = state.selectedSections.map((type) => {
      const placeholder = industry.placeholder[type] ?? {};
      const userEdits = state.content[type] ?? {};
      const merged = { ...placeholder, ...userEdits };

      if (type === 'hero') {
        if (state.businessName && !userEdits.heading) merged.heading = state.businessName;
        if (state.tagline && !userEdits.subheading) merged.subheading = state.tagline;
      }

      return {
        id: type === 'hero' ? 'top' : type,
        type,
        layout: layoutFor(industry, type),
        style: 'default',
        density: type === 'hero' ? 'lg' : 'md',
        content: merged,
      };
    });

    return {
      id: `site-${Date.now()}`,
      name: state.businessName || 'Untitled Site',
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
              href: '#top',
            },
            links: buildNavLinks(state.selectedSections),
            actions: [
              {
                type: 'button',
                label: navCtaLabel(state.industryId),
                href: '#contact',
                variant: 'primary',
              },
            ],
          },
        },
        footer: {
          type: 'footer',
          layout: 'simple',
          style: 'dark',
          content: {
            brand: {
              name: state.businessName || 'Your Business',
              tagline: state.tagline || '',
            },
            columns: [],
          },
        },
      },
      sections,
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
                selectedSections: [...ind.compulsory, ...ind.recommended],
                content: {},
              });
            }}
            onNext={next}
          />
        )}

        {step === 2 && (
          <Step2Business
            value={{ businessName: state.businessName, tagline: state.tagline }}
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
            selected={state.selectedSections}
            onChange={(selectedSections) => update({ selectedSections })}
            onNext={next}
            onBack={back}
          />
        )}

        {step === 5 && (
          <Step4Content
            industry={industry}
            selectedSections={state.selectedSections}
            content={state.content}
            onChange={(content) => update({ content })}
            onBack={back}
            onPublish={() => onPublish?.(buildTemplate())}
          />
        )}
      </div>
    </div>
  );
}