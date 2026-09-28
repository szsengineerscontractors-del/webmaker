// src/structures/tokens.js
import { spacing, breakpoints as _breakpoints, containerWidth } from '@/theme/presetData';

/**
 * Resolve a spacing token key (e.g. 4) to a CSS value ('16px').
 */
export const sp = (key, fallback = '0px') =>
  key === undefined || key === null ? fallback : (spacing[key] ?? fallback);

/**
 * Resolve responsive value: { base: 1, md: 2, lg: 3 } → object.
 */
export const responsive = (value) => {
  if (value === undefined || value === null) return {};
  if (typeof value !== 'object' || Array.isArray(value)) {
    return { base: value };
  }
  return value;
};

/**
 * Media query helper.
 */
export const mq = (bp) => `@media (min-width: ${_breakpoints[bp]}px)`;

/**
 * Container width resolver.
 */
export const cw = (key) => {
  if (key === 'full') return '100%';
  const v = containerWidth[key];
  return v ? `${v}px` : '100%';
};

/**
 * Re-export breakpoints so structures can read them directly.
 * (Grid, Split, Sidebar, Switcher all need this.)
 */
export const breakpoints = _breakpoints;

/**
 * Re-export containerWidth too — some structures may want it.
 */
export { containerWidth };