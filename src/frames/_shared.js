// frames/_shared.js
import { color, space } from '../components/tokens';

export const FRAME_STYLE_VARIANTS = {
  default: {
    background: color.bgBase,
    textPrimary: color.textPrimary,
    textSecondary: color.textSecondary,
    border: color.borderDefault,
    surface: color.surface1,
  },
  muted: {
    background: color.bgSubtle,
    textPrimary: color.textPrimary,
    textSecondary: color.textSecondary,
    border: color.borderDefault,
    surface: color.surface2,
  },
  dark: {
    background: color.bgInverse,
    textPrimary: color.textInverse,
    textSecondary: 'rgba(255,255,255,0.75)',
    border: 'rgba(255,255,255,0.12)',
    surface: 'rgba(255,255,255,0.06)',
  },
  brand: {
    background: color.brandPrimary,
    textPrimary: color.textInverse,
    textSecondary: 'rgba(255,255,255,0.8)',
    border: 'rgba(255,255,255,0.16)',
    surface: 'rgba(255,255,255,0.1)',
  },
  transparent: {
    background: 'transparent',
    textPrimary: color.textPrimary,
    textSecondary: color.textSecondary,
    border: 'transparent',
    surface: 'transparent',
  },
};

export const resolveFrameStyle = (key) =>
  FRAME_STYLE_VARIANTS[key] ?? FRAME_STYLE_VARIANTS.default;

export const frameMeta = (id, name, category, layoutVariants, styleVariants, behaviors) => ({
  id,
  name,
  category,
  layoutVariants,
  styleVariants,
  behaviors, // e.g. ['static', 'sticky', 'transparent-until-scroll']
  version: '1.0.0',
});