// src/components/HeroAnim.jsx
'use client';

import { useEffect, useState } from 'react';

export default function HeroAnim({ children, className = '', ...rest }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Two rAFs: one to paint the "anim" state, one to flip to "ready".
    // A single rAF can race on some browsers.
    const id1 = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(() => setReady(true));
      return () => cancelAnimationFrame(id2);
    });
    return () => cancelAnimationFrame(id1);
  }, []);

  return (
    <div
      className={`wm-hero-anim ${ready ? 'wm-hero-ready' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}