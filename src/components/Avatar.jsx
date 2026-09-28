// components/Avatar.jsx
'use client'

import { color, text } from './tokens';

const SIZES = {
  xs: '24px',
  sm: '32px',
  md: '40px',
  lg: '56px',
  xl: '80px',
};

export default function Avatar({
  src,
  name,
  size = 'md',
  shape = 'circle',
  className = '',
  style = {},
  ...rest
}) {
  const px = SIZES[size] ?? SIZES.md;
  const initials = (name ?? '')
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div
      className={className}
      style={{
        width: px,
        height: px,
        borderRadius: shape === 'circle' ? '9999px' : '8px',
        overflow: 'hidden',
        background: color.brandPrimary,
        color: color.textInverse,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `calc(${px} * 0.4)`,
        fontWeight: 600,
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img
          src={src}
          alt={name ?? ''}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}