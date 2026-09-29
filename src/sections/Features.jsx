// src/sections/Features.jsx
import { Container, Stack, Grid, Section, Split } from '../structures';
import { Heading, Text, Card, Button } from '../components';
import { resolveStyle, sectionMeta } from './_shared';
import { color, space } from '../components/tokens';

export const meta = sectionMeta({
  id: 'features',
  name: 'Features',
  category: 'features',
  defaultLayout: 'grid',
  layouts: [
    { id: 'grid',        label: 'Grid',        description: '3-column card grid' },
    { id: 'alternating', label: 'Alternating', description: 'Large rows alternating text and image' },
    { id: 'bento',       label: 'Bento',       description: 'Asymmetric grid with a featured card' },
  ],
});

export default function Features({
  layout = 'grid',
  style: styleKey = 'default',
  content = {},
}) {
  const s = resolveStyle(styleKey);
  const { eyebrow, heading, subheading, items = [] } = content;

  return (
    <Container width="wide">
      <Stack gap={12}>
        {(heading || subheading) && (
          <Stack gap={3} align="center" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
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
        )}

        {layout === 'grid' && <FeaturesGrid s={s} items={items} />}
        {layout === 'alternating' && <FeaturesAlternating s={s} items={items} />}
        {layout === 'bento' && <FeaturesBento s={s} items={items} />}
      </Stack>
    </Container>
  );
}

function FeaturesGrid({ s, items }) {
  return (
    <Grid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
      {items.map((item, i) => (
        <Card
          key={i}
          variant="feature"
          eyebrow={item.eyebrow}
          heading={item.heading}
          body={item.body}
          interactive={Boolean(item.href)}
          href={item.href}
        />
      ))}
    </Grid>
  );
}

function FeaturesAlternating({ s, items }) {
  return (
    <Stack gap={16}>
      {items.map((item, i) => (
        <Split key={i} ratio="1fr 1fr" gap={12} reverse={i % 2 === 1} collapseBelow="md">
          <Stack gap={4} justify="center">
            {item.eyebrow && (
              <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: color.brandPrimary }}>
                {item.eyebrow}
              </span>
            )}
            <Heading level={3} color={s.textPrimary}>{item.heading}</Heading>
            {item.body && <Text color={s.textSecondary}>{item.body}</Text>}
            {item.cta && <Button label={item.cta.label} href={item.cta.href} variant="link" />}
          </Stack>
          <div style={{
            aspectRatio: '4 / 3',
            background: s.surface,
            borderRadius: '16px',
            border: `1px solid ${s.border}`,
          }} />
        </Split>
      ))}
    </Stack>
  );
}

function FeaturesBento({ s, items }) {
  const [first, second, third, ...rest] = items;
  return (
    <Grid columns={{ base: 1, md: 4 }} gap={6}>
      {first && (
        <div style={{ gridColumn: { base: 'span 1', md: 'span 2' }, gridRow: { base: 'auto', md: 'span 2' } }}>
          <Card variant="feature" heading={first.heading} body={first.body} style={{ height: '100%' }} />
        </div>
      )}
      {second && (
        <div style={{ gridColumn: { base: 'span 1', md: 'span 2' } }}>
          <Card variant="feature" heading={second.heading} body={second.body} style={{ height: '100%' }} />
        </div>
      )}
      {third && (
        <div style={{ gridColumn: { base: 'span 1', md: 'span 1' } }}>
          <Card variant="feature" heading={third.heading} body={third.body} style={{ height: '100%' }} />
        </div>
      )}
      {rest[0] && (
        <div style={{ gridColumn: { base: 'span 1', md: 'span 1' } }}>
          <Card variant="feature" heading={rest[0].heading} body={rest[0].body} style={{ height: '100%' }} />
        </div>
      )}
    </Grid>
  );
}