// presetData.js
// Website Maker — Structural token constants + CSS variable generator.
// Aesthetic values (colors, fonts, radius, shadows) live in presets.js.
//
// CHANGES vs previous version (all additive / backward compatible):
//  - cssVars: tracking now falls back to the raw bundle value if the name
//    is not found in TRACKING (was: silently became '0em').
//  - cssVars: font family emits a valid var() only when the family key is
//    known; unknown keys fall back to 'sans'.
//  - cssVars: typeScale emits a fallback --text-* for any missing name so
//    consumers of var(--text-*) never silently break.
//  - All structural constants unchanged.

/* ─────────────────────────────────────────────────────────────
   1. STRUCTURAL CONSTANTS — never change, lock forever
   ───────────────────────────────────────────────────────────── */

export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
  40: '160px',
  48: '192px',
};

// Fluid vertical rhythm for sections. Scales with viewport so mobile
// stays compact and desktop gets generous whitespace.
export const sectionSpacing = {
  sm: 'clamp(2.5rem, 6vw, 4rem)',
  md: 'clamp(3.5rem, 9vw, 6rem)',
  lg: 'clamp(4.5rem, 12vw, 8rem)',
  xl: 'clamp(5.5rem, 15vw, 10rem)',
};

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  toast: 1700,
};

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const opacity = {
  0: 0,
  5: 0.05,
  10: 0.10,
  20: 0.20,
  25: 0.25,
  30: 0.30,
  40: 0.40,
  50: 0.50,
  60: 0.60,
  70: 0.70,
  75: 0.75,
  80: 0.80,
  90: 0.90,
  95: 0.95,
  100: 1,
};

export const borderWidth = {
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
};

export const motion = {
  duration: {
    instant: 0,
    fast: 150,
    normal: 250,
    slow: 400,
    slower: 700,
  },
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  },
};

export const containerWidth = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  full: '100%',
};

export const aspectRatio = {
  square: '1 / 1',
  video: '16 / 9',
  '4/3': '4 / 3',
  '3/2': '3 / 2',
  '2/3': '2 / 3',
  '21/9': '21 / 9',
};

export const positionAnchor = [
  'top',
  'bottom',
  'left',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'center',
];

export const blur = {
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '24px',
};

/* ─────────────────────────────────────────────────────────────
   2. UNIVERSAL NAMES — the labels every theme must define
   ───────────────────────────────────────────────────────────── */

export const typeScaleNames = [
  'xs', 'sm', 'base', 'lg', 'xl',
  '2xl', '3xl', '4xl', '5xl', '6xl',
];

// `display` is for 60px+ headings (hero). `heading` for mid-size headings.
// Existing names are kept so old templates keep working.
export const lineHeightNames = {
  none: 1,
  display: 1.05,
  heading: 1.12,
  tight: 1.2,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.7,
  loose: 2,
};

export const fontWeightCore = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const fontWeightExtended = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export const letterSpacingCore = {
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
};

export const radiusNames = [
  'none', 'sm', 'md', 'lg', 'xl', '2xl', 'full',
];

export const shadowNames = [
  'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'inner',
];

export const compositeTypeNames = [
  'heading-1', 'heading-2', 'heading-3',
  'heading-4', 'heading-5', 'heading-6',
  'body-lg', 'body', 'body-sm',
  'caption', 'label', 'code', 'quote',
];

export const semanticColorSlots = {
  background: ['base', 'subtle', 'muted', 'inverse', 'elevated'],
  surface: ['1', '2', '3'],
  text: ['primary', 'secondary', 'muted', 'disabled', 'inverse', 'link'],
  border: ['default', 'subtle', 'strong', 'focus'],
  brand: ['primary', 'secondary', 'accent'],
  state: ['success', 'warning', 'error', 'info'],
  interactive: ['hover', 'active', 'focus', 'disabled'],
  overlay: ['light', 'dark'],
};

/* ─────────────────────────────────────────────────────────────
   3. RESOLVER HELPERS
   ───────────────────────────────────────────────────────────── */

/**
 * Resolve a spacing token key to a CSS value.
 * @example spacingValue(4) → '16px'
 */
export const spacingValue = (key) => spacing[key] ?? '0px';

/* ─────────────────────────────────────────────────────────────
   4. cssVars — flatten a theme OBJECT into CSS custom properties
   ───────────────────────────────────────────────────────────── */

const TRACKING = {
  tighter: '-0.04em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

// Fallback sizes for --text-* so that direct consumers of var(--text-*)
// never silently lose a value if a preset forgets a scale key.
// Kept in sync with the smallest sensible scale; presets override.
const TYPE_SCALE_FALLBACK = {
  xs:   '12px',
  sm:   '14px',
  base: '16px',
  lg:   '18px',
  xl:   '20px',
  '2xl':'24px',
  '3xl':'30px',
  '4xl':'36px',
  '5xl':'48px',
  '6xl':'60px',
};

/**
 * Flatten a theme object into CSS custom properties.
 *
 * @param {object} theme - A theme object (e.g. presets.saasModern)
 * @returns {object} Map of CSS variable names → values
 *
 * @example
 *   const vars = cssVars(presets.saasModern);
 *   // { '--space-4': '16px', '--color-text-primary': '#111827', ... }
 */
export const cssVars = (theme) => {
  if (!theme || typeof theme !== 'object') return {};
  const vars = {};

  /* ── Structural constants ── */
  for (const [k, v] of Object.entries(spacing))
    vars[`--space-${k}`] = v;

  for (const [k, v] of Object.entries(sectionSpacing))
    vars[`--space-section-${k}`] = v;

  for (const [k, v] of Object.entries(zIndex))
    vars[`--z-${k}`] = String(v);

  for (const [k, v] of Object.entries(breakpoints))
    vars[`--bp-${k}`] = `${v}px`;

  for (const [k, v] of Object.entries(opacity))
    vars[`--opacity-${k}`] = String(v);

  for (const [k, v] of Object.entries(borderWidth))
    vars[`--border-width-${k}`] = v;

  for (const [k, v] of Object.entries(aspectRatio))
    vars[`--aspect-${k}`] = v;

  for (const [k, v] of Object.entries(blur))
    vars[`--blur-${k}`] = v;

  for (const [k, v] of Object.entries(containerWidth))
    vars[`--container-${k}`] = typeof v === 'number' ? `${v}px` : v;

  for (const [k, v] of Object.entries(motion.duration))
    vars[`--duration-${k}`] = `${v}ms`;

  for (const [k, v] of Object.entries(motion.easing))
    vars[`--ease-${k}`] = v;

  for (const [k, v] of Object.entries(lineHeightNames))
    vars[`--leading-${k}`] = String(v);

  for (const [k, v] of Object.entries(fontWeightExtended))
    vars[`--font-weight-${k}`] = String(v);

  /* ── Type scale (from theme) ──
     Emit every canonical name. Use the theme's value when present,
     otherwise fall back to a sensible default so var(--text-*) never
     resolves to nothing. */
  for (const name of typeScaleNames) {
    const value = theme.typeScale?.[name] ?? TYPE_SCALE_FALLBACK[name];
    if (value != null) vars[`--text-${name}`] = value;
  }

  /* ── Composite type tokens (from theme) ── */
  const familyKeys = theme.fontFamily ?? {};
  for (const [name, bundle] of Object.entries(theme.compositeType ?? {})) {
    const size     = theme.typeScale?.[bundle.size] ?? bundle.size;
    const weight   = fontWeightExtended?.[bundle.weight] ?? bundle.weight;
    const lh       = lineHeightNames?.[bundle.lineHeight] ?? bundle.lineHeight;
    // Fall back to the raw tracking value when it isn't a known name,
    // so presets can pass a raw CSS length if needed without losing it.
    const tracking = TRACKING[bundle.tracking] ?? bundle.tracking ?? '0em';

    vars[`--type-${name}-size`]        = size;
    vars[`--type-${name}-weight`]      = String(weight);
    vars[`--type-${name}-line-height`] = String(lh);
    vars[`--type-${name}-tracking`]    = tracking;

    // Font family + text-transform per composite token.
    // `family` is 'sans' | 'serif' | 'mono' and must exist in the theme's
    // fontFamily map. Unknown keys fall back to 'sans' so the var always
    // resolves to a real font stack.
    const familyKey =
      bundle.family && familyKeys[bundle.family] ? bundle.family : 'sans';
    vars[`--type-${name}-family`]    = `var(--font-${familyKey})`;
    vars[`--type-${name}-transform`] = bundle.transform ?? 'none';
  }

  /* ── Radius (from theme) ── */
  for (const [k, v] of Object.entries(theme.radius ?? {}))
    vars[`--radius-${k}`] = v;

  /* ── Shadow (from theme) ── */
  for (const [k, v] of Object.entries(theme.shadow ?? {}))
    vars[`--shadow-${k}`] = v;

  /* ── Font families (from theme) ── */
  for (const [k, v] of Object.entries(theme.fontFamily ?? {}))
    vars[`--font-${k}`] = v;

  /* ── Semantic colors (nested, theme-specific) ── */
  const sem = theme.semantic ?? {};
  for (const [group, names] of Object.entries(sem)) {
    if (!names || typeof names !== 'object') continue;
    for (const [name, value] of Object.entries(names)) {
      if (typeof value === 'string') {
        vars[`--color-${group}-${name}`] = value;
      } else if (value && typeof value === 'object') {
        for (const [sub, subVal] of Object.entries(value)) {
          vars[`--color-${group}-${name}-${sub}`] = subVal;
        }
      }
    }
  }

  return vars;
};

/* ─────────────────────────────────────────────────────────────
   5. DEFAULT EXPORT
   ───────────────────────────────────────────────────────────── */

export default {
  // Structural
  spacing,
  sectionSpacing,
  zIndex,
  breakpoints,
  opacity,
  borderWidth,
  motion,
  containerWidth,
  aspectRatio,
  positionAnchor,
  blur,

  // Universal names
  typeScaleNames,
  lineHeightNames,
  fontWeightCore,
  fontWeightExtended,
  letterSpacingCore,
  radiusNames,
  shadowNames,
  compositeTypeNames,
  semanticColorSlots,

  // Helpers
  spacingValue,
  cssVars,
};