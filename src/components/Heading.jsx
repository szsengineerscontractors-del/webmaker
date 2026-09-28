// components/Heading.jsx
'use client'


import { color, type } from './tokens';

const LEVELS = {
  1: { token: 'heading-1', tag: 'h1' },
  2: { token: 'heading-2', tag: 'h2' },
  3: { token: 'heading-3', tag: 'h3' },
  4: { token: 'heading-4', tag: 'h4' },
  5: { token: 'heading-5', tag: 'h5' },
  6: { token: 'heading-6', tag: 'h6' },
};

export default function Heading({
  level = 2,
  children,
  as,
  color: colorProp,
  className = '',
  style = {},
  ...rest
}) {
  const cfg = LEVELS[level] ?? LEVELS[2];
  const Tag = as ?? cfg.tag;
  const t = type(cfg.token);

  return (
    <Tag
      className={className}
      style={{
        margin: 0,
        fontSize: t.fontSize,
        fontWeight: t.fontWeight,
        lineHeight: t.lineHeight,
        letterSpacing: t.letterSpacing,
        color: colorProp ?? color.textPrimary,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}