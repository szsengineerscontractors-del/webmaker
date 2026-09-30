// src/structures/Sidebar.jsx
import { sp, breakpoints } from './tokens';

export default function Sidebar({
  side = 'left',
  sideWidth = '280px',
  gap = 8,
  collapseBelow = 'lg',
  as: Tag = 'div',
  className = '',
  style = {},
  children,
  ...rest
}) {
  // Deterministic uid
  const uid = `sidebar-${side}-${sideWidth.replace(/\s/g, '')}-${collapseBelow}`;
  const min = breakpoints[collapseBelow];

  const desktopTemplate = side === 'left'
    ? `${sideWidth} minmax(0, 1fr)`
    : `minmax(0, 1fr) ${sideWidth}`;

  const rules = [
    `[data-sidebar="${uid}"] { grid-template-columns: 1fr; }`,
    min
      ? `@media (min-width: ${min}px) { [data-sidebar="${uid}"] { grid-template-columns: ${desktopTemplate}; } }`
      : '',
  ].filter(Boolean);

  return (
    <>
      <style suppressHydrationWarning>{rules.join('\n')}</style>
      <Tag
        data-sidebar={uid}
        className={className}
        style={{
          display: 'grid',
          gap: sp(gap),
          alignItems: 'start',
          ...style,
        }}
        {...rest}
      >
        {children}
      </Tag>
    </>
  );
}