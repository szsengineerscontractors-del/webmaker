// src/wizard/Step3Sections.jsx
'use client';

import { SECTION_LABELS, SECTION_DESCRIPTIONS } from './industries';
import { slugify, isReservedSlug } from './Wizard';

const MAX_PAGES = 6;

export default function Step3Sections({
  industry,
  pages,
  activePageIndex,
  onPagesChange,
  onActivePageChange,
  onNext,
  onBack,
}) {
  if (!industry) return null;

  const activePage = pages[activePageIndex] ?? pages[0];
  const selected = activePage?.selectedSections ?? [];

  const updateActivePage = (patch) => {
    onPagesChange(
      pages.map((p, i) => (i === activePageIndex ? { ...p, ...patch } : p))
    );
  };

  const isSelected = (id) => selected.includes(id);

  const toggle = (id) => {
    if (isSelected(id)) {
      updateActivePage({ selectedSections: selected.filter((s) => s !== id) });
    } else {
      updateActivePage({ selectedSections: [...selected, id] });
    }
  };

  const move = (id, direction) => {
    const idx = selected.indexOf(id);
    if (idx < 0) return;
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= selected.length) return;
    const next = [...selected];
    [next[idx], next[newIdx]] = [next[newIdx], next[idx]];
    updateActivePage({ selectedSections: next });
  };

  const addPage = () => {
    if (pages.length >= MAX_PAGES) return;
    const title = `Page ${pages.length + 1}`;
    onPagesChange([
      ...pages,
      {
        slug: slugify(title),
        title,
        selectedSections: [...industry.compulsory],
        content: {},
      },
    ]);
    onActivePageChange(pages.length);
  };

  const removePage = (index) => {
    if (index === 0) return; // can't remove home
    const next = pages.filter((_, i) => i !== index);
    onPagesChange(next);
    if (activePageIndex >= next.length) {
      onActivePageChange(next.length - 1);
    } else if (activePageIndex > index) {
      onActivePageChange(activePageIndex - 1);
    }
  };

  const renamePage = (index, title) => {
    const trimmed = title.trim() || 'Untitled';
    const autoSlug = slugify(trimmed);
    const safeSlug = isReservedSlug(autoSlug) ? `${autoSlug}-page` : autoSlug;
    onPagesChange(
      pages.map((p, i) =>
        i === index
          ? { ...p, title: trimmed, slug: index === 0 ? '' : safeSlug }
          : p
      )
    );
  };

  const allOptional = [...industry.recommended, ...industry.optional];

  return (
    <div className="wizard-panel">
      <div className="wizard-panel-header">
        <h1>What should be on your site?</h1>
        <p>Hero is always included. Add or remove the rest.</p>
      </div>

      {/* Page tabs */}
      <div className="page-tabs">
        {pages.map((p, i) => (
          <div
            key={i}
            className={`page-tab ${i === activePageIndex ? 'active' : ''}`}
          >
            <button
              type="button"
              className="page-tab-label"
              onClick={() => onActivePageChange(i)}
            >
              {p.title || 'Untitled'}
            </button>
            {i > 0 && (
              <button
                type="button"
                className="page-tab-remove"
                onClick={() => removePage(i)}
                aria-label={`Remove ${p.title}`}
              >
                ✕
              </button>
            )}
          </div>
        ))}
        {pages.length < MAX_PAGES && (
          <button
            type="button"
            className="page-tab-add"
            onClick={addPage}
          >
            + Add page
          </button>
        )}
      </div>

      {activePageIndex > 0 && (
        <label className="wizard-field">
          <span className="wizard-field-label">Page name</span>
          <input
            className="wizard-input"
            type="text"
            value={activePage.title ?? ''}
            onChange={(e) => renamePage(activePageIndex, e.target.value)}
          />
        </label>
      )}

      <div className="section-picker">
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
                  <span className="section-picker-badge recommended">
                    Recommended
                  </span>
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