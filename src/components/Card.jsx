// components/Card.jsx
'use client'

import { color, space, radius, shadow, text, type } from './tokens';

const VARIANTS = {
  basic:       { bg: color.surface1, padding: space(6),   showBorder: true },
  icon:        { bg: color.surface1, padding: space(6),   showBorder: true },
  image:       { bg: color.surface1, padding: space(0),   showBorder: true, imageFull: true },
  feature:     { bg: color.surface1, padding: space(6),   showBorder: true },
  pricing:     { bg: color.surface1, padding: space(8),   showBorder: true },
  testimonial: { bg: color.surface1, padding: space(6),   showBorder: true },
};

const ELEVATIONS = {
  flat:     'none',
  raised:   shadow('sm'),
  floating: shadow('lg'),
};

export default function Card({
  media,
  eyebrow,
  heading,
  body,
  footer,
  variant = 'basic',
  elevation = 'raised',
  interactive = false,
  href,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const v = VARIANTS[variant] ?? VARIANTS.basic;
  const isImage = variant === 'image';

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    background: v.bg,
    borderRadius: radius('lg'),
    border: v.showBorder ? `1px solid ${color.borderDefault}` : 'none',
    boxShadow: ELEVATIONS[elevation] ?? 'none',
    overflow: 'hidden',
    textDecoration: 'none',
    color: color.textPrimary,
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    cursor: interactive ? 'pointer' : 'default',
    ...style,
  };

  const innerPadding = isImage
    ? { padding: `${space(6)} ${space(6)} ${space(6)}` }
    : { padding: v.padding };

  const handleEnter = (e) => {
    if (!interactive) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = shadow('md');
  };
  const handleLeave = (e) => {
    if (!interactive) return;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = ELEVATIONS[elevation];
  };

  const content = (
    <>
      {media && (
        <div style={{
          background: color.surface2,
          aspectRatio: isImage ? '16 / 9' : undefined,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {media}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: space(3), ...innerPadding }}>
        {eyebrow && (
          <span style={{
            fontSize: text('xs'),
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: color.brandPrimary,
          }}>
            {eyebrow}
          </span>
        )}

        {heading && (
          <h3 style={{
            margin: 0,
            fontSize: type('heading-4').fontSize,
            fontWeight: type('heading-4').fontWeight,
            lineHeight: type('heading-4').lineHeight,
            color: color.textPrimary,
          }}>
            {heading}
          </h3>
        )}

        {body && (
          <p style={{
            margin: 0,
            fontSize: type('body').fontSize,
            lineHeight: type('body').lineHeight,
            color: color.textSecondary,
          }}>
            {body}
          </p>
        )}

        {children}

        {footer && (
          <div style={{ marginTop: space(2) }}>
            {footer}
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={className}
        style={cardStyle}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={className}
      style={cardStyle}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {content}
    </div>
  );
}