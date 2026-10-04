// src/structures/Section.jsx
import { sp } from './tokens';

const DENSITY = {
  none: { y: 0,  yMd: 0 },
  sm: { y: 12, yMd: 16 },
  md: { y: 16, yMd: 24 },
  lg: { y: 20, yMd: 32 },
};

export default function Section({
  density = 'md',
  background,
  id,
  as: Tag = 'section',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const d = DENSITY[density] ?? DENSITY.md;
  const isFull = density !== 'none';

  return (
    <Tag
      id={id}
      data-density={density}
      className={`wm-section ${className}`.trim()}
      style={{
        paddingTop: sp(d.y),
        paddingBottom: sp(d.y),
        ...(isFull && {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }),
        background: background ?? undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}