// src/sections/Stats.jsx
import { Container, Stack, Grid, Inline } from '../structures';
import { Heading, Text } from '../components';
import Reveal from '../components/Reveal';
import { resolveStyle, sectionMeta } from './_shared';
import { color, space } from '../components/tokens';

export const meta = sectionMeta({
  id: 'stats',
  name: 'Stats',
  category: 'stats',
  defaultLayout: '3up',
  layouts: [
    { id: '3up',   label: 'Three columns', description: '3 numbers side by side' },
    { id: '4up',   label: 'Four columns',  description: '4 numbers side by side' },
    { id: 'split', label: 'Split',         description: 'Heading left, numbers right' },
  ],
});

export default function Stats({
  layout = '3up',
  style: styleKey = 'default',
  content = {},
}) {
  const s = resolveStyle(styleKey);
  const { eyebrow, heading, subheading, items = [] } = content;

  const cols =
    layout === '4up'   ? { base: 2, md: 4 } :
    layout === 'split' ? { base: 2, md: 2 } :
                         { base: 1, md: 3 };

  return (
    <Container width="wide">
      <Stack gap={10}>
        {(heading || subheading) && layout !== 'split' && (
          <Reveal>
            <Stack gap={3} align="center" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
              {eyebrow && (
                <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: styleKey === 'brand' ? s.textPrimary : color.brandPrimary }}>
                  {eyebrow}
                </span>
              )}
              {heading && <Heading level={2} color={s.textPrimary}>{heading}</Heading>}
              {subheading && <Text color={s.textSecondary}>{subheading}</Text>}
            </Stack>
          </Reveal>
        )}

        {layout === 'split' ? (
          <Grid columns={{ base: 1, md: 2 }} gap={12}>
            <Reveal>
              <Stack gap={4} justify="center">
                {eyebrow && <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: color.brandPrimary }}>{eyebrow}</span>}
                {heading && <Heading level={2} color={s.textPrimary}>{heading}</Heading>}
                {subheading && <Text color={s.textSecondary}>{subheading}</Text>}
              </Stack>
            </Reveal>
            <Reveal stagger delay={100}>
              <Grid columns={{ base: 2, md: 2 }} gap={6}>
                {items.map((item, i) => <StatItem key={i} item={item} s={s} />)}
              </Grid>
            </Reveal>
          </Grid>
        ) : (
          <Reveal stagger delay={100}>
            <Grid columns={cols} gap={6}>
              {items.map((item, i) => <StatItem key={i} item={item} s={s} />)}
            </Grid>
          </Reveal>
        )}
      </Stack>
    </Container>
  );
}

function StatItem({ item, s }) {
  const { value, label, description, prefix = '', suffix = '' } = item;
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: space(2),
      padding: space(6), background: s.surface,
      border: `1px solid ${s.border}`, borderRadius: 'var(--radius-lg)', height: '100%',
    }}>
      <span style={{
        fontSize: 'var(--text-5xl)', fontWeight: 800, lineHeight: 1,
        color: color.brandPrimary, letterSpacing: '-0.02em',
      }}>
        {prefix}{value}{suffix}
      </span>
      <span style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: s.textPrimary, marginTop: space(1) }}>
        {label}
      </span>
      {description && <Text variant="body-sm" color={s.textSecondary}>{description}</Text>}
    </div>
  );
}