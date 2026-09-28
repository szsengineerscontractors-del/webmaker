// src/sections/Testimonials.jsx
import { Container, Stack, Grid, Center } from '../structures';
import { Heading, Text, Card, Avatar } from '../components';
import { resolveStyle, sectionMeta } from './_shared';
import { color, space } from '../components/tokens';

export const meta = sectionMeta(
  'testimonials',
  'Testimonials',
  'testimonials',
  ['3up', '2up', 'wall'],
  ['default', 'muted', 'dark', 'brand']
);

export default function Testimonials({
  layout = '3up',
  style: styleKey = 'default',
  content = {},
}) {
  const s = resolveStyle(styleKey);
  const { eyebrow, heading, subheading, items = [] } = content;

  return (
    <Container width="wide">
      <Stack gap={10}>
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

        {layout === '3up' && <TestimonialsGrid s={s} items={items} cols={{ base: 1, md: 3 }} />}
        {layout === '2up' && <TestimonialsGrid s={s} items={items} cols={{ base: 1, md: 2 }} />}
        {layout === 'wall' && <TestimonialsGrid s={s} items={items} cols={{ base: 1, md: 2, lg: 3 }} compact />}
      </Stack>
    </Container>
  );
}

function TestimonialsGrid({ s, items, cols, compact = false }) {
  return (
    <Grid columns={cols} gap={6}>
      {items.map((item, i) => (
        <TestimonialCard key={i} item={item} s={s} compact={compact} />
      ))}
    </Grid>
  );
}

function TestimonialCard({ item, s, compact }) {
  const { quote, name, role, avatar, rating } = item;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: space(4),
      padding: compact ? space(6) : space(8),
      background: s.surface,
      border: `1px solid ${s.border}`,
      borderRadius: 'var(--radius-lg)',
      height: '100%',
    }}>
      {rating != null && (
        <div style={{ display: 'flex', gap: '2px', color: '#f59e0b', fontSize: '14px' }}>
          {'★'.repeat(Math.min(5, Math.max(0, rating)))}
          {'☆'.repeat(Math.max(0, 5 - rating))}
        </div>
      )}

      <Text color={s.textPrimary} style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', flex: 1 }}>
        "{quote}"
      </Text>

      {(name || role) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: space(3) }}>
          {avatar ? (
            <Avatar src={avatar} name={name} size="sm" />
          ) : (
            <Avatar name={name} size="sm" />
          )}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {name && (
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: s.textPrimary }}>
                {name}
              </span>
            )}
            {role && (
              <span style={{ fontSize: 'var(--text-xs)', color: s.textSecondary }}>
                {role}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}