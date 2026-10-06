// src/wizard/Step4Content.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { SECTION_LABELS } from './industries';

/* ─────────────────────────────────────────────────────────────
   Field type registry
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
  avatar: 'Avatar',
  image: 'Image',
  src: 'Image',
  alt: 'Alt text',
  href: 'Link',
  ctaLabel: 'Button text',
  ctaHref: 'Button link',
  monthlyPrice: 'Monthly price',
  yearlyPrice: 'Yearly price',
  featured: 'Featured plan',
};

const TEXTAREA_KEYS = new Set(['subheading', 'body', 'bio', 'quote', 'description']);
const NUMBER_KEYS = new Set(['rating', 'monthlyPrice', 'yearlyPrice']);
const BOOLEAN_KEYS = new Set(['featured']);
const IMAGE_KEYS = new Set(['image', 'src', 'avatar']);

const ADD_LABELS = {
  items: 'item',
  members: 'member',
  tiers: 'plan',
  info: 'detail',
  images: 'image',
  features: 'feature',
};

/* ─────────────────────────────────────────────────────────────
   Step4Content — top-level component
   ───────────────────────────────────────────────────────────── */

export default function Step4Content({
  industry,
  pages,
  activePageIndex,
  onPagesChange,
  onActivePageChange,
  onBack,
  onPublish,
  editMode = false,
}) {
  const activePage = pages[activePageIndex] ?? pages[0];
  const selectedSections = activePage?.selectedSections ?? [];
  const content = activePage?.content ?? {};

  const [activeSection, setActiveSection] = useState(selectedSections[0] ?? null);
  const [publishing, setPublishing] = useState(false);

  // Reset active section when switching pages
  useEffect(() => {
    setActiveSection(selectedSections[0] ?? null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePageIndex]);

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
    const nextContent = {
      ...content,
      [section]: {
        ...(content[section] ?? {}),
        ...patch,
      },
    };
    onPagesChange(
      pages.map((p, i) =>
        i === activePageIndex ? { ...p, content: nextContent } : p
      )
    );
  };

  const handlePublish = async () => {
    setPublishing(true);
    await onPublish?.();
    setPublishing(false);
  };

  const publishLabel = editMode ? 'Save changes' : 'Publish site →';
  const publishingLabel = editMode ? 'Saving...' : 'Publishing...';

  return (
    <div className="wizard-panel wizard-panel-wide">
      <div className="wizard-panel-header">
        <h1>Fill in your content</h1>
        <p>We&apos;ve pre-filled everything. Edit what you like.</p>
      </div>

      {/* Page tabs */}
      <div className="page-tabs">
        {pages.map((p, i) => (
          <button
            key={i}
            type="button"
            className={`page-tab-label ${i === activePageIndex ? 'active' : ''}`}
            onClick={() => onActivePageChange(i)}
          >
            {p.title || 'Untitled'}
          </button>
        ))}
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
              key={`${activePageIndex}-${activeSection}`}
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
          {publishing ? publishingLabel : publishLabel}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SectionForm
   ───────────────────────────────────────────────────────────── */

function SectionForm({ placeholder, value, onChange }) {
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
   FieldRenderer — dispatch to the right input
   ───────────────────────────────────────────────────────────── */

function FieldRenderer({ fieldKey, value, placeholder, onChange }) {
  // Image fields — URL with preview
  if (IMAGE_KEYS.has(fieldKey)) {
    return (
      <ImageField
        fieldKey={fieldKey}
        value={value ?? placeholder ?? ''}
        onChange={onChange}
      />
    );
  }

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

  // Arrays
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

  // Skip opaque objects
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return null;
  }

  // Scalars
  return (
    <ScalarField
      fieldKey={fieldKey}
      value={value ?? placeholder ?? ''}
      onChange={onChange}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   ImageField — URL input with thumbnail preview
   ───────────────────────────────────────────────────────────── */

function ImageField({ fieldKey, value, onChange }) {
  const label = FIELD_LABELS[fieldKey] ?? humanize(fieldKey);
  const [urlInput, setUrlInput] = useState(value ?? '');
  const [imgError, setImgError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);

  const applyUrl = (url) => {
    setImgError(false);
    onChange(url);
  };

  const handleFileSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError('');
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!data.ok) {
        setUploadError(data.error || 'Upload failed');
        return;
      }

      setUrlInput(data.url);
      applyUrl(data.url);
    } catch (err) {
      setUploadError('Network error. Try again.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="image-field">
      <span className="wizard-field-label">{label}</span>

      <div className="image-field-body">
        <div className="image-field-preview">
          {uploading ? (
            <div className="image-field-placeholder">⏳</div>
          ) : value && !imgError ? (
            <img
              src={value}
              alt=""
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="image-field-placeholder">
              {imgError ? '⚠' : '🖼'}
            </div>
          )}
        </div>

        <div className="image-field-controls">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />

          <div className="image-field-actions">
            <button
              type="button"
              className="image-field-btn primary"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Upload image'}
            </button>

            {value && !uploading && (
              <button
                type="button"
                className="image-field-btn danger"
                onClick={() => {
                  setUrlInput('');
                  applyUrl('');
                }}
              >
                Remove
              </button>
            )}
          </div>

          <input
            className="wizard-input"
            type="url"
            placeholder="Or paste an image URL…"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onBlur={() => applyUrl(urlInput)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                applyUrl(urlInput);
              }
            }}
            disabled={uploading}
          />

          {uploadError && (
            <div className="image-field-error">{uploadError}</div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ScalarField
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
   BooleanField
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
   CtaField — { label, href }
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
   ArrayField — list with add/remove/reorder
   ───────────────────────────────────────────────────────────── */

function ArrayField({ fieldKey, items, placeholderItems, onChange }) {
  const label = humanize(fieldKey);
  const addLabel = ADD_LABELS[fieldKey] ?? 'item';

  const addItem = () => {
    const template = items[0] ?? placeholderItems[0];
    if (!template) {
      if (fieldKey === 'images') {
        onChange([...items, { src: '', alt: '' }]);
      } else {
        onChange([...items, {}]);
      }
      return;
    }
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
            {typeof item === 'string' ? (
              <ImageField
                fieldKey="src"
                value={item}
                onChange={(val) => updateItem(i, val)}
              />
            ) : (
              Object.entries(item).map(([k, v]) => {
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
              })
            )}
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
  return (
    val &&
    typeof val === 'object' &&
    !Array.isArray(val) &&
    ('label' in val || 'href' in val)
  );
}

function blankValue(v) {
  if (typeof v === 'string') return '';
  if (typeof v === 'number') return 0;
  if (typeof v === 'boolean') return false;
  if (Array.isArray(v)) return [];
  if (v && typeof v === 'object') {
    return Object.fromEntries(
      Object.entries(v).map(([k, sub]) => [k, blankValue(sub)])
    );
  }
  return '';
}

function humanize(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}