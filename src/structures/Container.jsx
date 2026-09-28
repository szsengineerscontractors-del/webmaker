// structures/Container.jsx
import { sp } from './tokens';

const WIDTHS = {
  narrow:   '640px',
  default:  '1024px',
  wide:     '1280px',
  xl:       '1536px',
  full:     '100%',
};

export default function Container({
  width = 'default',
  padding = 4,        // horizontal padding token (mobile)
  paddingMd = 6,      // horizontal padding token (desktop)
  center = true,
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
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: WIDTHS[width] ?? WIDTHS.default,
        marginLeft: center ? 'auto' : 0,
        marginRight: center ? 'auto' : 0,
        paddingLeft: sp(padding),
        paddingRight: sp(padding),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}