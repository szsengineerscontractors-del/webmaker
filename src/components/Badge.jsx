// components/Badge.jsx
'use client'


import { color, space, radius, text } from './tokens';

const VARIANTS = {
  default: { bg: color.surface2,            fg: color.textPrimary,   border: color.borderDefault },
  brand:   { bg: color.brandPrimary,        fg: color.textInverse,   border: 'transparent' },
  success: { bg: color.stateSuccessBg,      fg: color.stateSuccessTx, border: 'transparent' },
  warning: { bg: color.stateWarningBg,      fg: color.stateWarningTx, border: 'transparent' },
  error:   { bg: color.stateErrorBg,        fg: color.stateErrorTx,   border: 'transparent' },
  info:    { bg: color.stateInfoBg,         fg: color.stateInfoTx,    border: 'transparent' },
  outline: { bg: 'transparent',             fg: color.textSecondary,  border: color.borderDefault },
};

export default function Badge({
  label,
  variant = 'default',
  size = 'md',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const s = VARIANTS[variant] ?? VARIANTS.default;
  const pad = size === 'sm'
    ? `${space(1)} ${space(2)}`
    : `${space(1)} ${space(3)}`;
  const fs = size === 'sm' ? text('xs') : text('sm');

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: space(1),
        padding: pad,
        fontSize: fs,
        fontWeight: 500,
        lineHeight: 1.4,
        borderRadius: radius('full'),
        background: s.bg,
        color: s.fg,
        border: `1px solid ${s.border}`,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {label ?? children}
    </span>
  );
}