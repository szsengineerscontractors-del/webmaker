// src/wizard/Step3Sections.jsx
'use client';

import { SECTION_LABELS, SECTION_DESCRIPTIONS } from './industries';

export default function Step3Sections({ industry, selected, onChange, onNext, onBack }) {
  if (!industry) return null;

  const isSelected = (id) => selected.includes(id);

  const toggle = (id) => {
    if (isSelected(id)) {
      onChange(selected.filter((s) => s !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  const move = (id, direction) => {
    const idx = selected.indexOf(id);
    if (idx < 0) return;
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= selected.length) return;
    const next = [...selected];
    [next[idx], next[newIdx]] = [next[newIdx], next[idx]];
    onChange(next);
  };

  const allOptional = [...industry.recommended, ...industry.optional];

  return (
    <div className="wizard-panel">
      <div className="wizard-panel-header">
        <h1>What should be on your site?</h1>
        <p>Hero is always included. Add or remove the rest.</p>
      </div>

      <div className="section-picker">
        {/* Compulsory */}
        <div className="section-picker-group">
          <div className="section-picker-group-label">Always included</div>
          {industry.compulsory.map((id) => (
            <div key={id} className="section-picker-item locked">
              <span className="section-picker-check">✓</span>
              <div className="section-picker-info">
                <span className="section-picker-name">
                  {SECTION_LABELS[id] ?? id}
                </span>
              </div>
              <span className="section-picker-badge">Required</span>
            </div>
          ))}
        </div>

        {/* Optional */}
        <div className="section-picker-group">
          <div className="section-picker-group-label">Add to your site</div>
          {allOptional.map((id) => {
            const checked = isSelected(id);
            const recommended = industry.recommended.includes(id);
            return (
              <label
                key={id}
                className={`section-picker-item ${checked ? 'checked' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(id)}
                />
                <div className="section-picker-info">
                  <span className="section-picker-name">
                    {SECTION_LABELS[id] ?? id}
                  </span>
                  {SECTION_DESCRIPTIONS[id] && (
                    <span className="section-picker-desc">
                      {SECTION_DESCRIPTIONS[id]}
                    </span>
                  )}
                </div>
                {recommended && (
                  <span className="section-picker-badge recommended">Recommended</span>
                )}
              </label>
            );
          })}
        </div>
      </div>

      {selected.length > 1 && (
        <div className="section-order">
          <div className="section-order-header">
            <span className="section-order-title">Order on the page</span>
            <span className="section-order-hint">Top to bottom</span>
          </div>
          <div className="section-order-list">
            {selected.map((id, i) => (
              <div key={id} className="section-order-item">
                <span className="section-order-num">{i + 1}</span>
                <span className="section-order-name">
                  {SECTION_LABELS[id] ?? id}
                </span>
                <div className="section-order-actions">
                  <button
                    type="button"
                    disabled={i === 0}
                    onClick={() => move(id, -1)}
                    aria-label="Move up"
                    className="section-order-btn"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    disabled={i === selected.length - 1}
                    onClick={() => move(id, 1)}
                    aria-label="Move down"
                    className="section-order-btn"
                  >
                    ↓
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="wizard-actions">
        <button className="wizard-btn ghost" onClick={onBack}>Back</button>
        <button
          className="wizard-btn primary"
          disabled={selected.length === 0}
          onClick={onNext}
        >
          Continue
        </button>
      </div>
    </div>
  );
}