// sections/_shared.js
// Resolves a style variant into a set of semantic tokens.
// Styles are ORTHOGONAL to layouts — same style works on any layout.

import { color, space } from '../components/tokens';

export const STYLE_VARIANTS = {
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
};

export const resolveStyle = (styleKey) =>
  STYLE_VARIANTS[styleKey] ?? STYLE_VARIANTS.default;

/**
 * Build a section's meta block.
 * Every section calls this once with its own data.
 */
export const sectionMeta = ({
  id,
  name,
  category,
  version = '1.0.0',
  defaultLayout,
  layouts,
  defaultStyle = 'default',
  styles = [
    { id: 'default', label: 'Default' },
    { id: 'muted',   label: 'Muted' },
    { id: 'dark',    label: 'Dark' },
    { id: 'brand',   label: 'Brand' },
  ],
}) => ({
  id,
  name,
  category,
  version,
  defaultLayout,
  layouts,
  defaultStyle,
  styles,
});