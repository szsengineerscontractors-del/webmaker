// structures/Cluster.jsx
import { sp } from './tokens';

export default function Cluster({
  gap = 2,
  rowGap,
  align = 'center',
  justify = 'start',
  as: Tag = 'div',
  className = '',
  style = {},
  children,
  ...rest
}) {
  return (
    <Tag
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: `${sp(rowGap ?? gap)} ${sp(gap)}`,
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}