// src/sections/Pricing.jsx
'use client';
import { useState } from 'react';
import { Container, Stack, Grid, Inline, Center } from '../structures';
import { Heading, Text, Card, Button, Badge } from '../components';
import { resolveStyle, sectionMeta } from './_shared';
import { color, space, radius, shadow, text } from '../components/tokens';

export const meta = sectionMeta({
  id: 'pricing',
  name: 'Pricing',
  category: 'pricing',
  defaultLayout: 'tiers',
  layouts: [
    { id: 'tiers',             label: 'Tiers',             description: 'Cards side by side' },
    { id: 'tiers-with-toggle', label: 'Tiers with toggle', description: 'Cards with monthly/yearly toggle' },
  ],
});

export default function Pricing({
  layout = 'tiers',
  style: styleKey = 'default',
  content = {},
}) {
  const s = resolveStyle(styleKey);
  const { eyebrow, heading, subheading, tiers = [], toggle } = content;
  const [interval, setInterval] = useState('monthly');

  return (
    <Container>
      <Stack gap={10}>
        {(heading || subheading) && (
          <Stack gap={3} align="center" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            {eyebrow && (
              <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: styleKey === 'brand' ? s.textPrimary : color.brandPrimary }}>
                {eyebrow}
              </span>
            )}
            {heading && <Heading level={2} color={s.textPrimary}>{heading}</Heading>}
            {subheading && <Text color={s.textSecondary}>{subheading}</Text>}
          </Stack>
        )}

        {layout === 'tiers-with-toggle' && toggle && (
          <Center>
            <div style={{
              display: 'inline-flex',
              background: s.surface,
              border: `1px solid ${s.border}`,
              borderRadius: radius('full'),
              padding: space(1),
            }}>
              {['monthly', 'yearly'].map((key) => (
                <button
                  key={key}
                  onClick={() => setInterval(key)}
                  style={{
                    padding: `${space(2)} ${space(5)}`,
                    border: 'none',
                    borderRadius: radius('full'),
                    background: interval === key ? color.brandPrimary : 'transparent',
                    color: interval === key ? color.textInverse : s.textPrimary,
                    fontSize: text('sm'),
                    fontWeight: 500,
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                  }}
                >
                  {key}
                </button>
              ))}
            </div>
          </Center>
        )}

        <Grid columns={{ base: 1, md: 3 }} gap={6}>
          {tiers.map((tier, i) => (
            <PricingCard key={i} tier={tier} interval={interval} s={s} featured={tier.featured} />
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

function PricingCard({ tier, interval, s, featured }) {
  const price = interval === 'yearly' ? tier.yearlyPrice : tier.monthlyPrice;
  const suffix = interval === 'yearly' ? '/yr' : '/mo';

  return (
    <div style={{ position: 'relative' }}>
      {featured && (
        <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
          <Badge label="Most popular" variant="brand" size="sm" />
        </div>
      )}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: space(6),
        padding: space(8),
        borderRadius: radius('lg'),
        background: featured ? color.brandPrimary : s.surface,
        border: `1px solid ${featured ? 'transparent' : s.border}`,
        color: featured ? color.textInverse : s.textPrimary,
        boxShadow: featured ? shadow('lg') : shadow('sm'),
        height: '100%',
      }}>
        <Stack gap={2}>
          <Heading level={4} color={featured ? color.textInverse : s.textPrimary}>
            {tier.name}
          </Heading>
          {tier.description && (
            <Text variant="body-sm" color={featured ? 'rgba(255,255,255,0.75)' : s.textSecondary}>
              {tier.description}
            </Text>
          )}
        </Stack>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: space(1) }}>
          <span style={{ fontSize: text('5xl'), fontWeight: 700, lineHeight: 1 }}>
            ${price}
          </span>
          <span style={{ fontSize: text('sm'), color: featured ? 'rgba(255,255,255,0.75)' : s.textSecondary }}>
            {suffix}
          </span>
        </div>

        <Stack gap={3} style={{ flex: 1 }}>
          {(tier.features ?? []).map((feature, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: space(3), fontSize: text('sm') }}>
              <span style={{
                width: '16px',
                height: '16px',
                borderRadius: '9999px',
                background: featured ? 'rgba(255,255,255,0.2)' : color.stateSuccessBg,
                color: featured ? color.textInverse : color.stateSuccessTx,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                flexShrink: 0,
              }}>✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </Stack>

        <Button
          label={tier.ctaLabel ?? 'Choose plan'}
          href={tier.ctaHref}
          variant={featured ? 'secondary' : 'primary'}
          fullWidth
        />
      </div>
    </div>
  );
}