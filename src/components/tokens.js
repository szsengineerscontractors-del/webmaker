

export const v = (name) => `var(--${name})`;

export const color = {
  bgBase:        v('color-background-base'),
  bgSubtle:      v('color-background-subtle'),
  bgMuted:       v('color-background-muted'),
  bgInverse:     v('color-background-inverse'),
  bgElevated:    v('color-background-elevated'),

  surface1:      v('color-surface-1'),
  surface2:      v('color-surface-2'),
  surface3:      v('color-surface-3'),

  textPrimary:   v('color-text-primary'),
  textSecondary: v('color-text-secondary'),
  textMuted:     v('color-text-muted'),
  textDisabled:  v('color-text-disabled'),
  textInverse:   v('color-text-inverse'),
  textLink:      v('color-text-link'),

  borderDefault: v('color-border-default'),
  borderSubtle:  v('color-border-subtle'),
  borderStrong:  v('color-border-strong'),
  borderFocus:   v('color-border-focus'),

  brandPrimary:   v('color-brand-primary'),
  brandSecondary: v('color-brand-secondary'),
  brandAccent:    v('color-brand-accent'),

  stateSuccessBg: v('color-state-success-bg'),
  stateSuccessTx: v('color-state-success-text'),
  stateWarningBg: v('color-state-warning-bg'),
  stateWarningTx: v('color-state-warning-text'),
  stateErrorBg:   v('color-state-error-bg'),
  stateErrorTx:   v('color-state-error-text'),
  stateInfoBg:    v('color-state-info-bg'),
  stateInfoTx:    v('color-state-info-text'),

  interactiveHover:    v('color-interactive-hover'),
  interactiveActive:   v('color-interactive-active'),
  interactiveFocus:    v('color-interactive-focus'),
  interactiveDisabled: v('color-interactive-disabled'),
};

export const space  = (n) => v(`space-${n}`);
export const text   = (n) => v(`text-${n}`);
export const radius = (n) => v(`radius-${n}`);
export const shadow = (n) => v(`shadow-${n}`);
export const blur   = (n) => v(`blur-${n}`);

// Z-index tokens — as CSS var strings (safe for both style and query use)
export const zIndex = {
  base:          v('z-base'),
  dropdown:      v('z-dropdown'),
  sticky:        v('z-sticky'),
  fixed:         v('z-fixed'),
  modalBackdrop: v('z-modal-backdrop'),
  modal:         v('z-modal'),
  popover:       v('z-popover'),
  tooltip:       v('z-tooltip'),
  toast:         v('z-toast'),
};

export const type = (token) => ({
  fontSize:      v(`type-${token}-size`),
  fontWeight:    v(`type-${token}-weight`),
  lineHeight:    v(`type-${token}-line-height`),
  letterSpacing: v(`type-${token}-tracking`),
});