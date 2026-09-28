// structures/Switcher.jsx
import { sp, breakpoints } from './tokens';

export default function Switcher({
  threshold = 'md',     // breakpoint key
  gap = 8,
  reverse = false,
  align = 'center',
  as: Tag = 'div',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const min = breakpoints[threshold];
  const dir = reverse ? 'row-reverse' : 'row';

  const rules = [
    `[data-switcher] { flex-direction: column; }`,
    min
      ? `@media (min-width: ${min}px) { [data-switcher] { flex-direction: ${dir}; } }`
      : '',
  ].filter(Boolean);

  return (
    <>
      <style>{rules.join('\n')}</style>
      <Tag
        data-switcher
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