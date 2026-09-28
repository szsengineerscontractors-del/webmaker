// components/Link.jsx
'use client'


import { color } from './tokens';

export default function Link({
  href,
  children,
  external = false,
  className = '',
  style = {},
  ...rest
}) {
  const props = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href}
      className={className}
      style={{
        color: color.textLink,
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        textDecorationThickness: '1px',
        ...style,
      }}
      {...props}
      {...rest}
    >
      {children}
    </a>
  );
}