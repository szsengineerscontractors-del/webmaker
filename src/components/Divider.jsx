// components/Divider.jsx
'use client'


import { color, space } from './tokens';

export default function Divider({
  orientation = 'horizontal',
  spacing = 6,
  label,
  className = '',
  style = {},
  ...rest
}) {
  const isH = orientation === 'horizontal';

  if (label) {
    return (
      <div
        role="separator"
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: space(3),
          margin: isH ? `${space(spacing)} 0` : `0 ${space(spacing)}`,
          ...style,
        }}
        {...rest}
      >
        <span style={{ flex: 1, height: '1px', background: color.borderDefault }} />
        <span style={{ fontSize: '12px', color: color.textMuted }}>{label}</span>
        <span style={{ flex: 1, height: '1px', background: color.borderDefault }} />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={className}
      style={{
        width: isH ? '100%' : '1px',
        height: isH ? '1px' : '100%',
        background: color.borderDefault,
        margin: isH ? `${space(spacing)} 0` : `0 ${space(spacing)}`,
        ...style,
      }}
      {...rest}
    />
  );
}