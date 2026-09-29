// src/wizard/Step4Content.jsx
'use client';

import { useState } from 'react';
import { SECTION_LABELS } from './industries';

/* ─────────────────────────────────────────────────────────────
   Field type registry — decides which input to render for a
   given key, based on its value in the placeholder.
   ───────────────────────────────────────────────────────────── */

const FIELD_LABELS = {
  eyebrow: 'Eyebrow',
  heading: 'Heading',
  subheading: 'Subheading',
  name: 'Name',
  role: 'Role',
  bio: 'Bio',
  body: 'Body',
  label: 'Label',
  value: 'Value',
  quote: 'Quote',
  description: 'Description',
  prefix: 'Prefix',
  suffix: 'Suffix',
  rating: 'Rating (1–5)',
  avatar: 'Avatar URL',
  image: 'Image URL',
  src: 'Image URL',
  alt: 'Alt text',
  href: 'Link',
  ctaLabel: 'Button text',
  ctaHref: 'Button link',
  monthlyPrice: 'Monthly price',
  yearlyPrice: 'Yearly price',
  featured: 'Featured plan',
  address: 'Address',
  phone: 'Phone',
  email: 'Email',
  hours: 'Hours',
};

const TEXTAREA_KEYS = new Set(['subheading', 'body', 'bio', 'quote', 'description']);
const NUMBER_KEYS = new Set(['rating', 'monthlyPrice', 'yearlyPrice']);
const BOOLEAN_KEYS = new Set(['featured']);

const ADD_LABELS = {
  items: 'item',
  members: 'member',
  tiers: 'plan',
  info: 'detail',
  images: 'image',
  features: 'feature',
};

export default function Step4Content({
  industry,
  selectedSections = [],
  content,
  onChange,
  onBack,
  onPublish,
}) {
  const [activeSection, setActiveSection] = useState(selectedSections[0] ?? null);
  const [publishing, setPublishing] = useState(false);

  if (!industry) return null;

  if (selectedSections.length === 0) {
    return (
      <div className="wizard-panel">
        <div className="wizard-panel-header">
          <h1>No sections selected</h1>
          <p>Go back and pick at least one section.</p>
        </div>
        <div className="wizard-actions">
          <button className="wizard-btn ghost" onClick={onBack}>Back</button>
        </div>
      </div>
    );
  }

  const updateSection = (section, patch) => {
    onChange({
      ...content,
      [section]: {
        ...(content[section] ?? {}),
        ...patch,
      },
    });
  };

  const handlePublish = async () => {
    setPublishing(true);
    await onPublish?.();
    setPublishing(false);
  };

  return (
    <div className="wizard-panel wizard-panel-wide">
      <div className="wizard-panel-header">
        <h1>Fill in your content</h1>
        <p>We've pre-filled everything. Edit what you like.</p>
      </div>

      <div className="content-layout">
        <nav className="content-sidebar">
          {selectedSections.map((section) => (
            <button
              key={section}
              className={`content-sidebar-item ${activeSection === section ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              {SECTION_LABELS[section] ?? section}
            </button>
          ))}
        </nav>

        <div className="content-form">
          {activeSection && (
            <SectionForm
              key={activeSection}
              placeholder={industry.placeholder[activeSection] ?? {}}
              value={content[activeSection] ?? {}}
              onChange={(patch) => updateSection(activeSection, patch)}
            />
          )}
        </div>
      </div>

      <div className="wizard-actions">
        <button className="wizard-btn ghost" onClick={onBack}>Back</button>
        <button className="wizard-btn primary" onClick={handlePublish} disabled={publishing}>
          {publishing ? 'Publishing...' : 'Publish site →'}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SectionForm — renders inputs for every field in the section
   ───────────────────────────────────────────────────────────── */

function SectionForm({ placeholder, value, onChange }) {
  // Merge: user edits override placeholder
  const data = { ...placeholder, ...value };

  const setField = (key, val) => onChange({ [key]: val });

  return (
    <div className="section-form">
      {Object.entries(data).map(([key, val]) => (
        <FieldRenderer
          key={key}
          fieldKey={key}
          value={val}
          placeholder={placeholder[key]}
          onChange={(newVal) => setField(key, newVal)}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FieldRenderer — decides what kind of input to render
   based on the field's shape.
   ───────────────────────────────────────────────────────────── */

function FieldRenderer({ fieldKey, value, placeholder, onChange }) {
  // CTA objects — { label, href }
  if (isCtaObject(value) || isCtaObject(placeholder)) {
    return (
      <CtaField
        fieldKey={fieldKey}
        value={value ?? placeholder ?? { label: '', href: '' }}
        onChange={onChange}
      />
    );
  }

  // Arrays — items, members, tiers, etc.
  if (Array.isArray(value) || Array.isArray(placeholder)) {
    return (
      <ArrayField
        fieldKey={fieldKey}
        items={value ?? placeholder ?? []}
        placeholderItems={placeholder ?? []}
        onChange={onChange}
      />
    );
  }

  // Booleans
  if (typeof value === 'boolean' || typeof placeholder === 'boolean') {
    return (
      <BooleanField
        fieldKey={fieldKey}
        value={value ?? placeholder ?? false}
        onChange={onChange}
      />
    );
  }

  // Skip object-only fields we don't handle (like {type, value} for brand)
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return null;
  }

  // Everything else is a scalar
  return (
    <ScalarField
      fieldKey={fieldKey}
      value={value ?? placeholder ?? ''}
      onChange={onChange}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   ScalarField — text, textarea, number
   ───────────────────────────────────────────────────────────── */

function ScalarField({ fieldKey, value, onChange }) {
  const label = FIELD_LABELS[fieldKey] ?? humanize(fieldKey);
  const isTextarea = TEXTAREA_KEYS.has(fieldKey);
  const isNumber = NUMBER_KEYS.has(fieldKey);

  if (isNumber) {
    return (
      <label className="wizard-field">
        <span className="wizard-field-label">{label}</span>
        <input
          className="wizard-input"
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
        />
      </label>
    );
  }

  if (isTextarea) {
    return (
      <label className="wizard-field">
        <span className="wizard-field-label">{label}</span>
        <textarea
          className="wizard-input"
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    );
  }

  return (
    <label className="wizard-field">
      <span className="wizard-field-label">{label}</span>
      <input
        className="wizard-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

/* ─────────────────────────────────────────────────────────────
   BooleanField — checkbox
   ───────────────────────────────────────────────────────────── */

function BooleanField({ fieldKey, value, onChange }) {
  const label = FIELD_LABELS[fieldKey] ?? humanize(fieldKey);
  return (
    <label className="wizard-field wizard-field-inline">
      <input
        type="checkbox"
        checked={Boolean(value)}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="wizard-field-label">{label}</span>
    </label>
  );
}

/* ─────────────────────────────────────────────────────────────
   CtaField — label + href pair
   ───────────────────────────────────────────────────────────── */

function CtaField({ fieldKey, value, onChange }) {
  const label = FIELD_LABELS[fieldKey] ?? humanize(fieldKey);
  const cta = value ?? { label: '', href: '' };

  return (
    <div className="section-form-group">
      <div className="section-form-group-label">{label}</div>
      <div className="section-form-row">
        <input
          className="wizard-input"
          type="text"
          placeholder="Button text"
          value={cta.label ?? ''}
          onChange={(e) => onChange({ ...cta, label: e.target.value })}
        />
        <input
          className="wizard-input"
          type="text"
          placeholder="#link or /path"
          value={cta.href ?? ''}
          onChange={(e) => onChange({ ...cta, href: e.target.value })}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ArrayField — list of items with add/remove
   ───────────────────────────────────────────────────────────── */

function ArrayField({ fieldKey, items, placeholderItems, onChange }) {
  const label = humanize(fieldKey);
  const addLabel = ADD_LABELS[fieldKey] ?? 'item';

  const addItem = () => {
    const template = items[0] ?? placeholderItems[0] ?? {};
    // Build a blank copy of the template shape
    const blank = Object.fromEntries(
      Object.entries(template).map(([k, v]) => [k, blankValue(v)])
    );
    onChange([...items, blank]);
  };

  const removeItem = (index) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const updateItem = (index, patch) => {
    onChange(items.map((item, i) => (i === index ? { ...item, ...patch } : item)));
  };

  const moveItem = (index, direction) => {
    const newIdx = index + direction;
    if (newIdx < 0 || newIdx >= items.length) return;
    const next = [...items];
    [next[index], next[newIdx]] = [next[newIdx], next[index]];
    onChange(next);
  };

  return (
    <div className="section-form-array">
      <div className="section-form-array-header">
        <span className="section-form-array-title">{label}</span>
        <span className="section-form-array-count">{items.length}</span>
      </div>

      {items.map((item, i) => (
        <div key={i} className="section-form-array-item">
          <div className="section-form-array-item-header">
            <span className="section-form-array-item-num">#{i + 1}</span>
            <div className="section-form-array-item-actions">
              <button
                type="button"
                disabled={i === 0}
                onClick={() => moveItem(i, -1)}
                className="section-order-btn"
                aria-label="Move up"
              >↑</button>
              <button
                type="button"
                disabled={i === items.length - 1}
                onClick={() => moveItem(i, 1)}
                className="section-order-btn"
                aria-label="Move down"
              >↓</button>
              <button
                type="button"
                onClick={() => removeItem(i)}
                className="section-order-btn remove"
                aria-label="Remove"
              >✕</button>
            </div>
          </div>

          <div className="section-form-array-item-body">
            {Object.entries(item).map(([k, v]) => {
              // Skip nested arrays inside arrays (rare)
              if (Array.isArray(v)) return null;

              return (
                <FieldRenderer
                  key={k}
                  fieldKey={k}
                  value={v}
                  placeholder={placeholderItems[i]?.[k]}
                  onChange={(newVal) => updateItem(i, { [k]: newVal })}
                />
              );
            })}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addItem}
        className="section-form-add"
      >
        + Add {addLabel}
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Helpers
   ───────────────────────────────────────────────────────────── */

function isCtaObject(val) {
  return val
    && typeof val === 'object'
    && !Array.isArray(val)
    && ('label' in val || 'href' in val);
}

function blankValue(v) {
  if (typeof v === 'string') return '';
  if (typeof v === 'number') return 0;
  if (typeof v === 'boolean') return false;
  if (Array.isArray(v)) return [];
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.entries(v).map(([k, sub]) => [k, blankValue(sub)]));
  }
  return '';
}

function humanize(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}