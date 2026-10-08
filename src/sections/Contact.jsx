// src/sections/Contact.jsx
'use client';
import { useState } from 'react';
import { Container, Stack, Grid, Split, Inline } from '../structures';
import { Heading, Text, Button, Input } from '../components';
import Reveal from '../components/Reveal';
import { resolveStyle, sectionMeta } from './_shared';
import { color, space } from '../components/tokens';

export const meta = sectionMeta({
  id: 'contact',
  name: 'Contact',
  category: 'contact',
  defaultLayout: 'split',
  layouts: [
    { id: 'split',     label: 'Split',      description: 'Info on left, form on right' },
    { id: 'centered',  label: 'Centered',   description: 'Header, info row, then form' },
    { id: 'info-only', label: 'Info only',  description: 'Address and hours, no form' },
  ],
});

export default function Contact({
  layout = 'split',
  style: styleKey = 'default',
  content = {},
  siteId,
}) {
  const s = resolveStyle(styleKey);
  const { eyebrow, heading, subheading, form = {}, info = [], map } = content;

  const header = (heading || subheading) && (
    <Stack gap={3} style={{ maxWidth: '560px' }}>
      {eyebrow && (
        <span style={{
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: styleKey === 'brand' ? s.textPrimary : color.brandPrimary,
        }}>
          {eyebrow}
        </span>
      )}
      {heading && <Heading level={2} color={s.textPrimary}>{heading}</Heading>}
      {subheading && <Text color={s.textSecondary}>{subheading}</Text>}
    </Stack>
  );

  return (
    <Container>
      {layout === 'split' && (
        <Split ratio="1fr 1fr" gap={12} collapseBelow="md">
          <Reveal>
            <Stack gap={6}>
              {header}
              <ContactInfo items={info} s={s} />
            </Stack>
          </Reveal>
          {/* Form is NOT wrapped in Reveal — it's interactive. */}
          <ContactForm form={form} s={s} siteId={siteId} />
        </Split>
      )}

      {layout === 'centered' && (
        <Stack gap={10} align="center" style={{ textAlign: 'center' }}>
          <Reveal>
            <Stack gap={3} align="center" style={{ maxWidth: '640px' }}>
              {eyebrow && (
                <span style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: styleKey === 'brand' ? s.textPrimary : color.brandPrimary,
                }}>
                  {eyebrow}
                </span>
              )}
              {heading && <Heading level={2} color={s.textPrimary}>{heading}</Heading>}
              {subheading && <Text color={s.textSecondary}>{subheading}</Text>}
            </Stack>
          </Reveal>

          {info.length > 0 && (
            <Reveal delay={100} style={{ width: '100%', maxWidth: '840px', margin: '0 auto' }}>
              <ContactInfoRow items={info} s={s} />
            </Reveal>
          )}

          {/* Form is NOT wrapped in Reveal — it's interactive. */}
          <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto' }}>
            <ContactForm form={form} s={s} siteId={siteId} />
          </div>
        </Stack>
      )}

      {layout === 'info-only' && (
        <Stack gap={10}>
          <Reveal>{header}</Reveal>
          <Reveal stagger delay={100}>
            <ContactInfo items={info} s={s} />
          </Reveal>
          {map && (
            <Reveal delay={200}>
              <div style={{
                aspectRatio: '21 / 9',
                background: s.surface,
                border: `1px solid ${s.border}`,
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}>
                {typeof map === 'string' ? (
                  <iframe src={map} title="Map" style={{ width: '100%', height: '100%', border: 0 }} loading="lazy" />
                ) : null}
              </div>
            </Reveal>
          )}
        </Stack>
      )}
    </Container>
  );
}

/* ─── INFO ─── */

// Vertical stack — used by `split` and `info-only`.
// Left-aligned by default, or centered when `centered` is true.
function ContactInfo({ items, s, centered = false }) {
  if (!items || items.length === 0) return null;
  return (
    <Stack gap={4} style={centered ? { alignItems: 'center' } : undefined}>
      {items.map((item, i) => (
        <Stack key={i} gap={1} style={centered ? { alignItems: 'center' } : undefined}>
          <span style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: s.textMuted,
          }}>
            {item.label}
          </span>
          <span style={{ fontSize: 'var(--text-base)', color: s.textPrimary }}>
            {item.value}
          </span>
        </Stack>
      ))}
    </Stack>
  );
}

// Horizontal row — used by `centered`.
// Lays items side by side, centered, with generous gaps.
// Wraps naturally on narrow screens.
function ContactInfoRow({ items, s }) {
  if (!items || items.length === 0) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: space(10),
        width: '100%',
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: space(1),
            minWidth: '140px',
            maxWidth: '240px',
          }}
        >
          <span style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: s.textMuted,
          }}>
            {item.label}
          </span>
          <span style={{
            fontSize: 'var(--text-base)',
            fontWeight: 500,
            color: s.textPrimary,
            lineHeight: 1.4,
          }}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─── FORM ─── */

function ContactForm({ form, s, siteId }) {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const {
    nameLabel = 'Name',
    emailLabel = 'Email',
    phoneLabel = 'Phone',
    messageLabel = 'Message',
    submitLabel = 'Send message',
  } = form;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteId,
          ...fields,
        }),
      });

      const data = await res.json();

      if (!data.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
        return;
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{
        padding: space(8),
        background: 'var(--color-state-success-bg)',
        border: '1px solid var(--color-state-success-border)',
        borderRadius: 'var(--radius-lg)',
        color: 'var(--color-state-success-text)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '32px', marginBottom: 8 }}>✓</div>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>Thanks — we'll be in touch soon.</div>
        <div style={{ fontSize: 'var(--text-sm)', opacity: 0.85 }}>
          We received your message.
        </div>
      </div>
    );
  }

  const disabled = status === 'submitting';

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: space(5),
        padding: space(8),
        background: s.surface,
        border: `1px solid ${s.border}`,
        borderRadius: 'var(--radius-lg)',
        textAlign: 'left',
      }}
    >
      <Input
        label={nameLabel}
        value={fields.name}
        onChange={(e) => setFields({ ...fields, name: e.target.value })}
        required
        disabled={disabled}
      />

      <Input
        label={emailLabel}
        type="email"
        value={fields.email}
        onChange={(e) => setFields({ ...fields, email: e.target.value })}
        required
        disabled={disabled}
      />

      <Input
        label={phoneLabel}
        type="tel"
        value={fields.phone}
        onChange={(e) => setFields({ ...fields, phone: e.target.value })}
        disabled={disabled}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: space(2) }}>
        <label style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: s.textPrimary }}>
          {messageLabel}
        </label>
        <textarea
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
          required
          disabled={disabled}
          rows={4}
          style={{
            width: '100%',
            padding: `${space(3)} ${space(4)}`,
            fontSize: 'var(--text-base)',
            fontFamily: 'inherit',
            color: s.textPrimary,
            background: 'var(--color-surface-1)',
            border: `1px solid ${s.border}`,
            borderRadius: 'var(--radius-md)',
            outline: 'none',
            resize: 'vertical',
            opacity: disabled ? 0.6 : 1,
          }}
        />
      </div>

      {status === 'error' && (
        <div style={{
          padding: `${space(3)} ${space(4)}`,
          background: 'var(--color-state-error-bg)',
          border: '1px solid var(--color-state-error-border)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--color-state-error-text)',
          fontSize: 'var(--text-sm)',
        }}>
          {errorMsg}
        </div>
      )}

      <Button
        label={disabled ? 'Sending...' : submitLabel}
        variant="primary"
        type="submit"
        fullWidth
        disabled={disabled}
      />
    </form>
  );
}