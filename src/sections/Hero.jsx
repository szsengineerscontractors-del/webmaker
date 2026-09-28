// sections/Hero.jsx
import { Container, Stack, Inline, Split, Cover, Center } from '../structures';
import { Button, Heading, Text, Badge, Image } from '../components';
import { resolveStyle, sectionMeta } from './_shared';
import { color, space } from '../components/tokens';

export const meta = sectionMeta(
  'hero',
  'Hero',
  'hero',
  ['centered', 'split', 'split-reverse', 'bg-image'],
  ['default', 'muted', 'dark', 'brand']
);

export default function Hero({
  layout = 'centered',
  style: styleKey = 'default',
  content = {},
}) {
  const s = resolveStyle(styleKey);
  const {
    eyebrow,
    heading,
    subheading,
    primaryCta,
    secondaryCta,
    image,
  } = content;

  const inner = (() => {
    switch (layout) {
      case 'split':
        return <HeroSplit s={s} content={content} reverse={false} />;
      case 'split-reverse':
        return <HeroSplit s={s} content={content} reverse={true} />;
      case 'bg-image':
        return <HeroBgImage s={s} content={content} />;
      case 'centered':
      default:
        return <HeroCentered s={s} content={content} />;
    }
  })();

  return (
    <div style={{ background: s.background, color: s.textPrimary }}>
      {inner}
    </div>
  );
}

/* ─── LAYOUTS ─── */

function HeroCentered({ s, content }) {
  const { eyebrow, heading, subheading, primaryCta, secondaryCta } = content;
  return (
    <Container width="default">
      <div className="wm-hero-centered">
        <Stack gap={6} align="center" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          {eyebrow && (
            <span style={{
              display: 'inline-block',
              padding: '4px 12px',
              fontSize: '12px',
              fontWeight: 600,
              borderRadius: '9999px',
              background: s.surface,
              color: s.textPrimary,
              border: `1px solid ${s.border}`,
            }}>
              {eyebrow}
            </span>
          )}
          <Heading level={1} color={s.textPrimary}>{heading}</Heading>
          {subheading && <Text variant="body-lg" color={s.textSecondary}>{subheading}</Text>}

          <div className="wm-hero-cta">
            {primaryCta && (
              <Button
                label={primaryCta.label}
                href={primaryCta.href}
                variant="primary"
                size="lg"
                fullWidth
              />
            )}
            {secondaryCta && (
              <Button
                label={secondaryCta.label}
                href={secondaryCta.href}
                variant="ghost"
                size="lg"
                fullWidth
              />
            )}
          </div>
        </Stack>
      </div>
    </Container>
  );
}

function HeroSplit({ s, content, reverse }) {
  const { eyebrow, heading, subheading, primaryCta, secondaryCta, image } = content;
  return (
    <Container>
      <Split ratio="1fr 1fr" gap={12} reverse={reverse} collapseBelow="md">
        <Stack gap={5} justify="center">
          {eyebrow && (
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: color.brandPrimary }}>
              {eyebrow}
            </span>
          )}
          <Heading level={1} color={s.textPrimary}>{heading}</Heading>
          {subheading && <Text variant="body-lg" color={s.textSecondary}>{subheading}</Text>}
          <Inline gap={3}>
            {primaryCta && <Button label={primaryCta.label} href={primaryCta.href} variant="primary" size="lg" />}
            {secondaryCta && <Button label={secondaryCta.label} href={secondaryCta.href} variant="ghost" size="lg" />}
          </Inline>
        </Stack>
        <div>
          {image ? (
            <Image src={image} alt="" aspectRatio="4 / 3" rounded />
          ) : (
            <div style={{
              aspectRatio: '4 / 3',
              background: s.surface,
              borderRadius: '16px',
              border: `1px solid ${s.border}`,
            }} />
          )}
        </div>
      </Split>
    </Container>
  );
}

function HeroBgImage({ s, content }) {
  const { eyebrow, heading, subheading, primaryCta, secondaryCta, image } = content;
  return (
    <div
      className="wm-hero-bg"
      style={{
        position: 'relative',
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
      }} />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Stack gap={6} align="center" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          {eyebrow && (
            <span style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              {eyebrow}
            </span>
          )}
          <Heading level={1} color="#fff">{heading}</Heading>
          {subheading && <Text variant="body-lg" color="rgba(255,255,255,0.85)">{subheading}</Text>}

          <div className="wm-hero-cta">
            {primaryCta && (
              <Button label={primaryCta.label} href={primaryCta.href} variant="primary" size="lg" fullWidth />
            )}
            {secondaryCta && (
              <Button label={secondaryCta.label} href={secondaryCta.href} variant="secondary" size="lg" fullWidth />
            )}
          </div>
        </Stack>
      </Container>
    </div>
  );
}

// tiny helper used by HeroCentered for brand style contrast
function styleKeyIsBrand(s) {
  return s.background === color.brandPrimary;
}