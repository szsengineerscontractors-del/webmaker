// structures/Center.jsx
import { sp } from './tokens';

export default function Center({
  minHeight,
  padding = 8,
  inline = false,     // inline-flex vs flex
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
        display: inline ? 'inline-flex' : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: minHeight ?? undefined,
        padding: sp(padding),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}