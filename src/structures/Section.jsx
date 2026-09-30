// src/structures/Section.jsx
import { sp } from './tokens';

const DENSITY = {
  sm: { y: 12, yMd: 16 },
  md: { y: 16, yMd: 24 },
  lg: { y: 20, yMd: 32 },
};

export default function Section({
  density = 'md',
  background,               // ← new: any valid CSS background value
  id,
  as: Tag = 'section',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const d = DENSITY[density] ?? DENSITY.md;

  return (
    <Tag
      id={id}
      data-density={density}
      className={`wm-section ${className}`.trim()}
      style={{
        paddingTop: sp(d.y),
        paddingBottom: sp(d.y),
        background: background ?? undefined,   // ← apply here
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}