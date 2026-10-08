// sections/Hero.jsx
'use client'
import { Container, Stack, Inline, Split, Cover, Center } from '../structures';
import { Button, Heading, Text, Badge, Image } from '../components';
import HeroAnim from '../components/HeroAnim';
import { resolveStyle, sectionMeta } from './_shared';
import { color, space } from '../components/tokens';
import { useEffect, useState } from 'react';

export const meta = sectionMeta({
  id: 'hero',
  name: 'Hero',
  category: 'hero',
  defaultLayout: 'centered',
  layouts: [
    { id: 'centered', label: 'Centered', description: 'Text centered' },
    { id: 'split', label: 'Text left', description: 'Text left, image right' },
    { id: 'split-reverse', label: 'Text right', description: 'Image left, text right' },
    { id: 'bg-image', label: 'Full image', description: 'Background image' },
    { id: 'bg-slideshow', label: 'Slideshow', description: 'Auto-changing background images' },
  ],
});

export default function Hero({
  layout = 'centered',
  style: styleKey = 'default',
  content = {},
}) {
  const s = resolveStyle(styleKey);

  const inner = (() => {
    switch (layout) {
      case 'split':
        return <HeroSplit s={s} content={content} reverse={false} />;
      case 'split-reverse':
        return <HeroSplit s={s} content={content} reverse={true} />;
      case 'bg-image':
        return <HeroBgImage s={s} content={content} />;
      case 'bg-slideshow':
        return <HeroSlideshow s={s} content={content} />;
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
      <HeroAnim className="wm-hero-centered">
        <Stack gap={6} align="center" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          {eyebrow && (
            <span
              data-hero-part="eyebrow"
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                fontSize: '12px',
                fontWeight: 600,
                borderRadius: '9999px',
                background: s.surface,
                color: s.textPrimary,
                border: `1px solid ${s.border}`,
              }}
            >
              {eyebrow}
            </span>
          )}
          <span data-hero-part="heading">
            <Heading level={1} color={s.textPrimary}>{heading}</Heading>
          </span>
          {subheading && (
            <span data-hero-part="subheading" style={{ display: 'block' }}>
              <Text variant="body-lg" color={s.textSecondary}>{subheading}</Text>
            </span>
          )}

          <div data-hero-part="cta" className="wm-hero-cta">
            {primaryCta && (
              <Button label={primaryCta.label} href={primaryCta.href} variant="primary" size="lg" fullWidth />
            )}
            {secondaryCta && (
              <Button label={secondaryCta.label} href={secondaryCta.href} variant="ghost" size="lg" fullWidth />
            )}
          </div>
        </Stack>
      </HeroAnim>
    </Container>
  );
}

function HeroSplit({ s, content, reverse }) {
  const { eyebrow, heading, subheading, primaryCta, secondaryCta, image } = content;
  return (
    <Container>
      <div className="wm-hero-split">
        <Split ratio="1fr 1.15fr" gap={12} reverse={reverse} collapseBelow="md">
          <HeroAnim>
            <Stack
              gap={5}
              justify="center"
              style={{
                maxWidth: '540px',
                marginLeft: reverse ? 'auto' : 0,
                marginRight: reverse ? 0 : 'auto',
              }}
            >
              {eyebrow && (
                <span
                  data-hero-part="eyebrow"
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: color.brandPrimary,
                  }}
                >
                  {eyebrow}
                </span>
              )}

              <span data-hero-part="heading" style={{ display: 'block' }}>
                <Heading level={1} color={s.textPrimary}>{heading}</Heading>
              </span>

              {subheading && (
                <span data-hero-part="subheading" style={{ display: 'block' }}>
                  <Text variant="body-lg" color={s.textSecondary}>{subheading}</Text>
                </span>
              )}

              <div data-hero-part="cta">
                <Inline gap={3} wrap={false}>
                  {primaryCta && (
                    <Button
                      label={primaryCta.label}
                      href={primaryCta.href}
                      variant="primary"
                      size="lg"
                    />
                  )}
                  {secondaryCta && (
                    <Button
                      label={secondaryCta.label}
                      href={secondaryCta.href}
                      variant="ghost"
                      size="lg"
                    />
                  )}
                </Inline>
              </div>
            </Stack>
          </HeroAnim>

          <HeroAnim>
            <div
              data-hero-part="image"
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {image ? (
                <div style={{ width: '100%' }}>
                  <Image src={image} alt="" aspectRatio="4 / 3" rounded />
                </div>
              ) : (
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '4 / 3',
                    background: s.surface,
                    borderRadius: '16px',
                    border: `1px solid ${s.border}`,
                  }}
                />
              )}
            </div>
          </HeroAnim>
        </Split>
      </div>
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
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <HeroAnim>
          <Stack gap={6} align="center" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            {eyebrow && (
              <span
                data-hero-part="eyebrow"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {eyebrow}
              </span>
            )}
            <span data-hero-part="heading">
              <Heading level={1} color="#fff">{heading}</Heading>
            </span>
            {subheading && (
              <span data-hero-part="subheading" style={{ display: 'block' }}>
                <Text variant="body-lg" color="rgba(255,255,255,0.85)">{subheading}</Text>
              </span>
            )}
            <div data-hero-part="cta" className="wm-hero-cta">
              {primaryCta && <Button label={primaryCta.label} href={primaryCta.href} variant="primary" size="lg" fullWidth />}
              {secondaryCta && <Button label={secondaryCta.label} href={secondaryCta.href} variant="secondary" size="lg" fullWidth />}
            </div>
          </Stack>
        </HeroAnim>
      </Container>
    </div>
  );
}

function HeroSlideshow({ s, content }) {
  const {
    eyebrow,
    heading,
    subheading,
    primaryCta,
    secondaryCta,
    slideshow = {},
  } = content;

  const images = (slideshow.images ?? [])
    .map((img) => (typeof img === 'string' ? img : img?.src))
    .filter(Boolean);
  const interval = slideshow.interval ?? 5000;
  const fadeDuration = slideshow.fadeDuration ?? 1000;

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, paused]);

  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [images]);

  if (images.length === 0) {
    return (
      <div className="wm-hero-bg" style={{ background: s.surface }}>
        <Container>
          <HeroAnim>
            <Stack gap={6} align="center" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
              <span data-hero-part="heading">
                <Heading level={1} color={s.textPrimary}>{heading}</Heading>
              </span>
              {subheading && (
                <span data-hero-part="subheading" style={{ display: 'block' }}>
                  <Text variant="body-lg" color={s.textSecondary}>{subheading}</Text>
                </span>
              )}
            </Stack>
          </HeroAnim>
        </Container>
      </div>
    );
  }

  return (
    <div
      className="wm-hero-bg"
      style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === current ? 1 : 0,
            transition: `opacity ${fadeDuration}ms ease-in-out`,
            zIndex: 0,
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
          zIndex: 1,
        }}
      />

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <HeroAnim>
          <Stack gap={6} align="center" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            {eyebrow && (
              <span
                data-hero-part="eyebrow"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {eyebrow}
              </span>
            )}
            <span data-hero-part="heading">
              <Heading level={1} color="#fff">{heading}</Heading>
            </span>
            {subheading && (
              <span data-hero-part="subheading" style={{ display: 'block' }}>
                <Text variant="body-lg" color="rgba(255,255,255,0.85)">{subheading}</Text>
              </span>
            )}
            <div data-hero-part="cta" className="wm-hero-cta">
              {primaryCta && <Button label={primaryCta.label} href={primaryCta.href} variant="primary" size="lg" fullWidth />}
              {secondaryCta && <Button label={secondaryCta.label} href={secondaryCta.href} variant="secondary" size="lg" fullWidth />}
            </div>
          </Stack>
        </HeroAnim>
      </Container>

      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            zIndex: 3,
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                borderRadius: '9999px',
                border: 'none',
                background: i === current ? '#fff' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 300ms ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}