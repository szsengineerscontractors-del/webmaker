// components/Button.jsx
'use client'

import { color, space, radius, text, type } from './tokens';

const STYLES = {
  primary: {
    background: color.brandPrimary,
    color: color.textInverse,
    border: '1px solid transparent',
    hover: `color-mix(in srgb, ${color.brandPrimary} 90%, black)`,
  },
  secondary: {
    background: color.surface2,
    color: color.textPrimary,
    border: `1px solid ${color.borderDefault}`,
    hover: color.interactiveHover,
  },
  ghost: {
    background: 'transparent',
    color: color.textPrimary,
    border: '1px solid transparent',
    hover: color.interactiveHover,
  },
  danger: {
    background: color.stateErrorTx,
    color: color.textInverse,
    border: '1px solid transparent',
    hover: `color-mix(in srgb, ${color.stateErrorTx} 90%, black)`,
  },
  link: {
    background: 'transparent',
    color: color.textLink,
    border: '1px solid transparent',
    hover: 'underline',
  },
};

const SIZES = {
  sm: { padding: `${space(2)} ${space(3)}`, fontSize: text('sm'),  radius: radius('md') },
  md: { padding: `${space(3)} ${space(5)}`, fontSize: text('base'),radius: radius('md') },
  lg: { padding: `${space(4)} ${space(6)}`, fontSize: text('lg'),  radius: radius('lg') },
};

export default function Button({
  label,
  href,
  leadingIcon,
  trailingIcon,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  type: htmlType = 'button',
  onClick,
  className = '',
  style = {},
  ...rest
}) {
  const s = STYLES[variant] ?? STYLES.primary;
  const z = SIZES[size] ?? SIZES.md;

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space(2),
    padding: z.padding,
    fontSize: z.fontSize,
    fontWeight: 500,
    lineHeight: 1.2,
    borderRadius: z.radius,
    border: s.border,
    background: s.background,
    color: s.color,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    width: fullWidth ? '100%' : undefined,
    textDecoration: 'none',
    transition: 'background 150ms ease, opacity 150ms ease, transform 150ms ease',
    fontFamily: 'inherit',
    ...style,
  };

  const handleMouseEnter = (e) => {
    if (disabled || loading) return;
    if (variant === 'link') e.currentTarget.style.textDecoration = 'underline';
    else e.currentTarget.style.background = s.hover;
  };
  const handleMouseLeave = (e) => {
    if (disabled || loading) return;
    if (variant === 'link') e.currentTarget.style.textDecoration = 'none';
    else e.currentTarget.style.background = s.background;
  };

  const content = (
    <>
      {loading ? <Spinner size={size === 'sm' ? 'xs' : 'sm'} /> : leadingIcon}
      <span>{label}</span>
      {trailingIcon}
    </>
  );

  if (href && !disabled && !loading) {
    return (
      <a
        href={href}
        className={className}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={htmlType}
      disabled={disabled || loading}
      onClick={onClick}
      className={className}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {content}
    </button>
  );
}

// Local import to avoid circular deps
import Spinner from './Spinner';