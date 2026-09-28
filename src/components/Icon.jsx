// components/Icon.jsx
'use client'


import { color, space, text } from './tokens';

const SIZES = {
  xs: '12px',
  sm: '16px',
  md: '20px',
  lg: '24px',
  xl: '32px',
};

export default function Icon({
  as: Glyph,
  size = 'md',
  color: colorProp,
  className = '',
  style = {},
  ...rest
}) {
  const px = SIZES[size] ?? SIZES.md;

  if (!Glyph) {
    // Render a placeholder box
    return (
      <span
        className={className}
        style={{
          display: 'inline-block',
          width: px,
          height: px,
          background: color.surface3,
          borderRadius: '4px',
          ...style,
        }}
        {...rest}
      />
    );
  }

  return (
    <Glyph
      size={px}
      color={colorProp ?? color.textPrimary}
      className={className}
      style={{ flexShrink: 0, ...style }}
      {...rest}
    />
  );
}