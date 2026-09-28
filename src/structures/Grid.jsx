// structures/Grid.jsx (cleaner)
import { sp, responsive, breakpoints } from './tokens';

export default function Grid({
  columns = 12,
  gap = 6,
  rowGap,
  align = 'stretch',
  justify = 'stretch',
  as: Tag = 'div',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const cols = responsive(columns);
  const baseCols = cols.base ?? 1;

  // Build responsive rules using unique class + data attribute
  const uid = `grid-${baseCols}-${Object.entries(cols).map(([k,v]) => `${k}${v}`).join('-')}`;
  const rules = [`[data-grid="${uid}"] { grid-template-columns: repeat(${baseCols}, minmax(0, 1fr)); }`];

  for (const [bp, value] of Object.entries(cols)) {
    if (bp === 'base') continue;
    const min = breakpoints[bp];
    if (!min) continue;
    rules.push(
      `@media (min-width: ${min}px) { [data-grid="${uid}"] { grid-template-columns: repeat(${value}, minmax(0, 1fr)); } }`
    );
  }

  return (
    <>
      <style>{rules.join('\n')}</style>
      <Tag
        data-grid={uid}
        className={className}
        style={{
          display: 'grid',
          gap: `${sp(rowGap ?? gap)} ${sp(gap)}`,
          alignItems: align,
          justifyContent: justify,
          ...style,
        }}
        {...rest}
      >
        {children}
      </Tag>
    </>
  );
}