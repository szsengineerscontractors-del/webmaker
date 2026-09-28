// structures/Inline.jsx
import { sp } from './tokens';

const JUSTIFY = {
  start:   'flex-start',
  center:  'center',
  end:     'flex-end',
  between: 'space-between',
  around:  'space-around',
  evenly:  'space-evenly',
};

export default function Inline({
  gap = 3,
  align = 'center',
  justify = 'start',
  wrap = true,
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
        flexDirection: 'row',
        gap: sp(gap),
        alignItems: align,
        justifyContent: JUSTIFY[justify] ?? justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}