// sections/Footer.jsx


'use client'



import { Container, Stack, Grid, Inline } from '../structures';
import { Heading, Text, Link } from '../components';
import { resolveStyle, sectionMeta } from '../sections/_shared';
import { color, space, text } from '../components/tokens';

export const meta = sectionMeta(
  'footer',
  'Footer',
  'footer',
  ['simple', 'multicol'],
  ['default', 'muted', 'dark', 'brand']
);

export default function Footer({
  layout = 'multicol',
  style: styleKey = 'default',
  content = {},
}) {
  const s = resolveStyle(styleKey);
  const { brand, columns = [], legal, social = [] } = content;

  return (
    <footer className="wm-footer" style={{ background: s.background, color: s.textPrimary }}>
      <Container width="wide">
        <Stack gap={10}>
          {layout === 'multicol' ? (
            <Grid columns={{ base: 1, md: 2, lg: 4 }} gap={10}>
              <Stack gap={4}>
                {brand?.name && (
                  <Heading level={4} color={s.textPrimary}>{brand.name}</Heading>
                )}
                {brand?.tagline && (
                  <Text variant="body-sm" color={s.textSecondary}>{brand.tagline}</Text>
                )}
              </Stack>

              {columns.map((col, i) => (
                <Stack key={i} gap={3}>
                  <span style={{
                    fontSize: text('sm'),
                    fontWeight: 600,
                    color: s.textPrimary,
                  }}>
                    {col.heading}
                  </span>
                  {col.links.map((link, j) => (
                    <Link key={j} href={link.href} style={{ color: s.textSecondary, textDecoration: 'none', fontSize: text('sm') }}>
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Grid>
          ) : (
            <Inline gap={8} justify="between" align="start" wrap>
              <Stack gap={2}>
                {brand?.name && <Heading level={4} color={s.textPrimary}>{brand.name}</Heading>}
                {brand?.tagline && <Text variant="body-sm" color={s.textSecondary}>{brand.tagline}</Text>}
              </Stack>
              <Inline gap={6}>
                {columns.flatMap((col) => col.links).map((link, i) => (
                  <Link key={i} href={link.href} style={{ color: s.textSecondary, textDecoration: 'none', fontSize: text('sm') }}>
                    {link.label}
                  </Link>
                ))}
              </Inline>
            </Inline>
          )}

          <div style={{ borderTop: `1px solid ${s.border}`, paddingTop: space(6) }}>
            <Inline gap={4} justify="between" wrap>
              <Text variant="body-sm" color={s.textMuted}>
                {legal ?? `© ${new Date().getFullYear()} ${brand?.name ?? ''}`}
              </Text>
              {social.length > 0 && (
                <Inline gap={4}>
                  {social.map((item, i) => (
                    <Link key={i} href={item.href} style={{ color: s.textMuted, textDecoration: 'none', fontSize: text('sm') }}>
                      {item.label}
                    </Link>
                  ))}
                </Inline>
              )}
            </Inline>
          </div>
        </Stack>
      </Container>
    </footer>
  );
}