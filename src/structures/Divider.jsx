// structures/Divider.jsx
import { sp } from './tokens';

export default function Divider({
  orientation = 'horizontal',
  spacing = 6,
  style = {},
  ...rest
}) {
  const isH = orientation === 'horizontal';
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      style={{
        width: isH ? '100%' : '1px',
        height: isH ? '1px' : '100%',
        margin: isH ? `${sp(spacing)} 0` : `0 ${sp(spacing)}`,
        borderTop: isH ? 'var(--border-width, 1px) solid var(--color-border-default)' : 'none',
        borderLeft: isH ? 'none' : 'var(--border-width, 1px) solid var(--color-border-default)',
        ...style,
      }}
      {...rest}
    />
  );
}