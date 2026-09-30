// src/sections/Contact.jsx
'use client';
import { useState } from 'react';
import { Container, Stack, Grid, Split, Inline } from '../structures';
import { Heading, Text, Button, Input } from '../components';
import { resolveStyle, sectionMeta } from './_shared';
import { color, space } from '../components/tokens';

export const meta = sectionMeta({
  id: 'contact',
  name: 'Contact',
  category: 'contact',
  defaultLayout: 'split',
  layouts: [
    { id: 'split',     label: 'Split',      description: 'Info on left, form on right' },
    { id: 'centered',  label: 'Centered',   description: 'Everything centered, form below' },
    { id: 'info-only', label: 'Info only',  description: 'Address and hours, no form' },
  ],
});

export default function Contact({
  layout = 'split',
  style: styleKey = 'default',
  content = {},
  siteId,               // ← NEW: passed by renderer
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
          <Stack gap={6}>
            {header}
            <ContactInfo items={info} s={s} />
          </Stack>
          <ContactForm form={form} s={s} siteId={siteId} />
        </Split>
      )}

      {layout === 'centered' && (
        <Stack gap={8} align="center" style={{ textAlign: 'center' }}>
          <Stack gap={3} align="center" style={{ maxWidth: '640px' }}>
            {header}
          </Stack>
          <div style={{ width: '100%', maxWidth: '560px' }}>
            <ContactForm form={form} s={s} siteId={siteId} />
          </div>
          <ContactInfo items={info} s={s} centered />
        </Stack>
      )}

      {layout === 'info-only' && (
        <Stack gap={10}>
          {header}
          <ContactInfo items={info} s={s} />
          {map && (
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
          )}
        </Stack>
      )}
    </Container>
  );
}

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