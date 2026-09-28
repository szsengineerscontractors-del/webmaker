// src/theme/ThemeProvider.jsx
'use client';

import { cssVars } from './presetData';
import { presets } from './presets';

/**
 * Injects CSS variables for the active theme into the page.
 * Wrap your app (or any subtree) with this and every component
 * inside reads the theme automatically via var(--...).
 */
export default function ThemeProvider({
  themeName = 'saasModern',
  children,
}) {
  const theme = presets[themeName];

  if (!theme) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`ThemeProvider: unknown theme "${themeName}". Falling back to saasModern.`);
    }
  }

  const active = theme ?? presets.saasModern;
  const vars = cssVars(active);

  const css = `:root {\n${
    Object.entries(vars)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join('\n')
  }\n}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {children}
    </>
  );
}