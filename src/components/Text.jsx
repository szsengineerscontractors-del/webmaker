// components/Text.jsx

'use client'


import { color, type } from './tokens';

const VARIANTS = {
  'body-lg': 'body-lg',
  'body':    'body',
  'body-sm': 'body-sm',
  'caption': 'caption',
  'label':   'label',
  'quote':   'quote',
};

export default function Text({
  variant = 'body',
  children,
  as: Tag = 'p',
  color: colorProp,
  className = '',
  style = {},
  ...rest
}) {
  const t = type(VARIANTS[variant] ?? 'body');

  return (
    <Tag
      className={className}
      style={{
        margin: 0,
        fontSize: t.fontSize,
        fontWeight: t.fontWeight,
        lineHeight: t.lineHeight,
        letterSpacing: t.letterSpacing,
        color: colorProp ?? color.textSecondary,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}