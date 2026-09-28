// components/Image.jsx
'use client'

import { color, radius } from './tokens';

export default function Image({
  src,
  alt = '',
  aspectRatio,
  fit = 'cover',
  width,
  height,
  rounded = false,
  className = '',
  style = {},
  ...rest
}) {
  return (
    <div style={{
      width: width ?? '100%',
      aspectRatio: aspectRatio ?? undefined,
      overflow: 'hidden',
      borderRadius: rounded ? radius('lg') : undefined,
      background: color.surface2,
      ...style,
    }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={className}
        style={{
          width: '100%',
          height: '100%',
          objectFit: fit,
          display: 'block',
        }}
        {...rest}
      />
    </div>
  );
}