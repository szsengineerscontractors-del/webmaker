// structures/Split.jsx
import { sp, breakpoints } from './tokens';

export default function Split({
  ratio = '1fr 1fr',   // CSS grid-template-columns
  gap = 8,
  collapseBelow = 'md', // stack below this breakpoint
  reverse = false,      // swap order (main becomes second)
  align = 'center',
  as: Tag = 'div',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const uid = 's' + Math.random().toString(36).slice(2, 8);
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
      <style>{rules.join('\n')}</style>
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