// structures/Cover.jsx
import { sp } from './tokens';

export default function Cover({
  minHeight = '100vh',
  gap = 6,
  header,
  footer,
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
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        gap: sp(gap),
        minHeight,
        ...style,
      }}
      {...rest}
    >
      {header ? <div>{header}</div> : <div />}
      <div>{children}</div>
      {footer ? <div>{footer}</div> : <div />}
    </Tag>
  );
}