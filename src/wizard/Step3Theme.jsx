// src/wizard/Step3Theme.jsx
'use client';

import { presets } from '@/theme/presets';
import { cssVars } from '@/theme/presetData';

export default function Step3Theme({
  industry,
  businessName,
  tagline,
  theme,
  onChange,
  onNext,
  onBack,
  isLastStep = false,
}) {
  if (!industry) return null;

  return (
    <div className="wizard-panel">
      <div className="wizard-panel-header">
        <h1>Pick a look</h1>
        <p>You can change this anytime.</p>
      </div>

      <div className="theme-grid">
        {industry.availableThemes.map((themeId) => {
          const t = presets[themeId];
          const vars = cssVars(t);
          const preview = {
            bg: vars['--color-background-base'],
            text: vars['--color-text-primary'],
            brand: vars['--color-brand-primary'],
            muted: vars['--color-text-secondary'],
            surface: vars['--color-surface-2'],
            border: vars['--color-border-default'],
            font: vars['--font-sans'],
            radius: vars['--radius-lg'],
          };

          return (
            <button
              key={themeId}
              type="button"
              className={`theme-card ${theme === themeId ? 'selected' : ''}`}
              onClick={() => onChange(themeId)}
              style={{ fontFamily: preview.font }}
            >
              <div className="theme-preview" style={{ background: preview.bg }}>
                <div className="theme-preview-nav" style={{ borderBottom: `1px solid ${preview.border}` }}>
                  <div style={{ color: preview.text, fontWeight: 700, fontSize: 12 }}>
                    {businessName || 'Your Business'}
                  </div>
                  <div style={{
                    background: preview.brand,
                    color: '#fff',
                    fontSize: 10,
                    padding: '3px 8px',
                    borderRadius: preview.radius,
                  }}>
                    Contact
                  </div>
                </div>
                <div className="theme-preview-hero" style={{ color: preview.text }}>
                  <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2 }}>
                    {businessName || 'Your Business'}
                  </div>
                  <div style={{ fontSize: 11, color: preview.muted, marginTop: 4 }}>
                    {tagline || t.description}
                  </div>
                  <div style={{
                    display: 'inline-block',
                    background: preview.brand,
                    color: '#fff',
                    fontSize: 10,
                    padding: '4px 10px',
                    borderRadius: preview.radius,
                    marginTop: 8,
                  }}>
                    Get started
                  </div>
                </div>
                <div className="theme-preview-cards">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      style={{
                        background: preview.surface,
                        border: `1px solid ${preview.border}`,
                        borderRadius: preview.radius,
                        height: 24,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="theme-card-label">
                <span className="theme-name">{t.name}</span>
                <span className="theme-check">{theme === themeId ? '✓' : ''}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="wizard-actions">
        <button className="wizard-btn ghost" onClick={onBack}>Back</button>
        <button className="wizard-btn primary" disabled={!theme} onClick={onNext}>
          {isLastStep ? 'Publish site →' : 'Continue'}
        </button>
      </div>
    </div>
  );
}