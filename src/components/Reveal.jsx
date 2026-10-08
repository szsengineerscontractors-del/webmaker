// components/Reveal.jsx
'use client'

import { useEffect, useRef, useState } from 'react';

/**
 * Reveal
 * Wraps content and animates it in when it enters the viewport.
 *
 * Usage:
 *   <Reveal>...</Reveal>                         // fade up
 *   <Reveal from="left">...</Reveal>              // fade from left
 *   <Reveal stagger>...</Reveal>                  // children stagger in sequence
 *   <Reveal once={false}>...</Reveal>             // re-animate on every entry
 *
 * Props:
 *   as       — element tag (default 'div')
 *   from     — 'up' | 'left' | 'right' | 'scale' (default 'up')
 *   stagger  — if true, applies .wm-stagger so children sequence
 *   once     — animate only the first time (default true)
 *   delay    — extra delay in ms before revealing
 *   rootMargin — how early to trigger (default '0px 0px -10% 0px')
 *   className, style, children — passed through
 */
export default function Reveal({
  as: Tag = 'div',
  from = 'up',
  stagger = false,
  once = true,
  delay = 0,
  rootMargin = '0px 0px -10% 0px',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion: skip observer, show immediately.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true);
      return;
    }

    // If IntersectionObserver isn't available, show immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => setVisible(true), delay);
            } else {
              setVisible(true);
            }
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { rootMargin, threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, delay, rootMargin]);

  const classes = [
    stagger ? 'wm-stagger' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Tag
      ref={ref}
      data-reveal={visible ? 'visible' : ''}
      data-reveal-from={from !== 'up' ? from : undefined}
      className={classes}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}