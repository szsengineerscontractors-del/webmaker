// src/wizard/Step2Business.jsx
'use client';

import { slugify } from './Wizard';

function getBaseDomain() {
  // Prefer explicit env if set (prod overrides this)
  const explicit = process.env.NEXT_PUBLIC_SITE_BASE_DOMAIN;
  if (explicit) return explicit;

  // Derive from NEXT_PUBLIC_APP_URL
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  try {
    const u = new URL(appUrl);
    // Keep the port for local dev so the preview shows localhost:3000
    return u.host; // "localhost:3000" or "szsdomains.com"
  } catch {
    return 'szsdomains.com';
  }
}

export default function Step2Business({ value, onChange, onNext, onBack }) {
  const canContinue = value.businessName.trim().length > 0;
  const subdomain = value.subdomain ?? '';
  const baseDomain = getBaseDomain();
  const displayBase = baseDomain.split(':')[0]; // "localhost" or "szsdomains.com"

  const handleNameChange = (businessName) => {
    const patch = { businessName };
    if (!subdomain) {
      patch.subdomain = slugify(businessName);
    }
    onChange(patch);
  };

  return (
    <div className="wizard-panel">
      <div className="wizard-panel-header">
        <h1>Tell us about your business</h1>
        <p>We&apos;ll use this throughout your site.</p>
      </div>

      <div className="wizard-form">
        <label className="wizard-field">
          <span className="wizard-field-label">Business name *</span>
          <input
            className="wizard-input"
            type="text"
            placeholder="Joe's Pizza"
            value={value.businessName}
            onChange={(e) => handleNameChange(e.target.value)}
            autoFocus
          />
        </label>

        <label className="wizard-field">
          <span className="wizard-field-label">Tagline (optional)</span>
          <input
            className="wizard-input"
            type="text"
            placeholder="Best slice in Brooklyn"
            value={value.tagline}
            onChange={(e) => onChange({ tagline: e.target.value })}
          />
        </label>

        <label className="wizard-field">
          <span className="wizard-field-label">Subdomain</span>
          <div className="wizard-subdomain-input">
            <input
              className="wizard-input"
              type="text"
              placeholder="joespizza"
              value={subdomain}
              onChange={(e) =>
                onChange({ subdomain: slugify(e.target.value) })
              }
              maxLength={30}
            />
            <span className="wizard-subdomain-suffix">.{displayBase}</span>
          </div>
          <span className="wizard-hint">
            {subdomain
              ? `Your site will be at ${subdomain}.${displayBase}`
              : 'Letters, numbers, and hyphens only.'}
          </span>
        </label>
      </div>

      <div className="wizard-actions">
        <button className="wizard-btn ghost" onClick={onBack}>Back</button>
        <button className="wizard-btn primary" disabled={!canContinue} onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}