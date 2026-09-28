// structures/Stack.jsx
import { sp } from './tokens';

export default function Stack({
  gap = 4,             // spacing token
  align = 'stretch',   // flex align-items
  justify = 'start',   // flex justify-content
  wrap = false,
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
        flexDirection: 'column',
        gap: sp(gap),
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}