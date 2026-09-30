// src/structures/Switcher.jsx
import { sp, breakpoints } from './tokens';

export default function Switcher({
  threshold = 'md',
  gap = 8,
  reverse = false,
  align = 'center',
  as: Tag = 'div',
  className = '',
  style = {},
  children,
  ...rest
}) {
  // Deterministic uid
  const uid = `switcher-${threshold}-${reverse}`;
  const min = breakpoints[threshold];
  const dir = reverse ? 'row-reverse' : 'row';

  const rules = [
    `[data-switcher="${uid}"] { flex-direction: column; }`,
    min
      ? `@media (min-width: ${min}px) { [data-switcher="${uid}"] { flex-direction: ${dir}; } }`
      : '',
  ].filter(Boolean);

  return (
    <>
      <style suppressHydrationWarning>{rules.join('\n')}</style>
      <Tag
        data-switcher={uid}
        className={className}
        style={{
          display: 'flex',
          gap: sp(gap),
          alignItems: align,
          ...style,
        }}
        {...rest}
      >
        {children}
      </Tag>
    </>
  );
}