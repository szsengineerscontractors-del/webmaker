// src/structures/Split.jsx
import { sp, breakpoints } from './tokens';

export default function Split({
  ratio = '1fr 1fr',
  gap = 8,
  collapseBelow = 'md',
  reverse = false,
  align = 'center',
  as: Tag = 'div',
  className = '',
  style = {},
  children,
  ...rest
}) {
  // Deterministic uid from props — same on server and client
  const uid = `split-${ratio.replace(/\s/g, '')}-${reverse}-${collapseBelow}`;
  const min = breakpoints[collapseBelow];

  const colTemplate = reverse
    ? ratio.split(' ').reverse().join(' ')
    : ratio;

  const rules = [
    `[data-split="${uid}"] { grid-template-columns: 1fr; }`,
    min
      ? `@media (min-width: ${min}px) { [data-split="${uid}"] { grid-template-columns: ${colTemplate}; } }`
      : '',
  ].filter(Boolean);

  return (
    <>
      <style suppressHydrationWarning>{rules.join('\n')}</style>
      <Tag
        data-split={uid}
        className={className}
        style={{
          display: 'grid',
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