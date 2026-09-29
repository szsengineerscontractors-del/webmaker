// src/sections/Testimonials.jsx
import { Container, Stack, Grid, Center } from '../structures';
import { Heading, Text, Card, Avatar } from '../components';
import { resolveStyle, sectionMeta } from './_shared';
import { color, space } from '../components/tokens';

export const meta = sectionMeta({
  id: 'testimonials',
  name: 'Testimonials',
  category: 'testimonials',
  defaultLayout: '3up',
  layouts: [
    { id: '3up',  label: 'Three columns', description: '3 cards side by side' },
    { id: '2up',  label: 'Two columns',   description: '2 larger cards' },
    { id: 'wall', label: 'Wall',          description: 'Dense grid of many short reviews' },
  ],
});

export default function Testimonials({
  layout = '3up',
  style: styleKey = 'default',
  content = {},
}) {
  const s = resolveStyle(styleKey);
  const { eyebrow, heading, subheading, items = [] } = content;

  const cols =
    layout === '2up'  ? { base: 1, md: 2 } :
    layout === 'wall' ? { base: 1, md: 2, lg: 3 } :
                        { base: 1, md: 3 };

  return (
    <Container width="wide">
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

        <Grid columns={cols} gap={6}>
          {items.map((item, i) => (
            <TestimonialCard key={i} item={item} s={s} compact={layout === 'wall'} />
          ))}
        </Grid>
      </Stack>
    </Container>
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
          <Avatar src={avatar} name={name} size="sm" />
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