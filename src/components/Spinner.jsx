// components/Spinner.jsx
'use client'

import { color } from './tokens';

const SIZES = { xs: '12px', sm: '16px', md: '24px', lg: '32px' };

export default function Spinner({
  size = 'md',
  color: colorProp,
  className = '',
  style = {},
}) {
  const px = SIZES[size] ?? SIZES.md;
  const c = colorProp ?? color.brandPrimary;

  return (
    <span
      role="status"
      aria-label="Loading"
      className={className}
      style={{
        display: 'inline-block',
        width: px,
        height: px,
        border: `2px solid ${color.borderDefault}`,
        borderTopColor: c,
        borderRadius: '9999px',
        animation: 'wm-spin 0.6s linear infinite',
        ...style,
      }}
    >
      <style>{`
        @keyframes wm-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </span>
  );
}