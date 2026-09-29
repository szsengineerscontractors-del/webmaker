// src/frames/Navbar.jsx
'use client';
import { useEffect, useState } from 'react';
import { Container, Stack } from '../structures';
import { Button } from '../components';
import { resolveFrameStyle, frameMeta } from './_shared';
import { color, space, text, radius } from '../components/tokens';

export const meta = frameMeta(
  'navbar',
  'Navbar',
  'nav',
  ['logo-left', 'logo-center', 'logo-right'],
  ['default', 'muted', 'dark', 'brand', 'transparent'],
  ['static', 'sticky', 'transparent-until-scroll']
);

export default function Navbar({
  layout = 'logo-left',
  style: styleKey = 'default',
  behavior = 'sticky',
  content = {},
}) {
  const s = resolveFrameStyle(styleKey);
  const { brand, links = [], actions = [] } = content;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (behavior !== 'transparent-until-scroll') return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [behavior]);

  const isTransparent = styleKey === 'transparent' && !scrolled;
  const activeStyle = isTransparent
    ? { ...s, background: 'transparent', textPrimary: '#fff', border: 'transparent' }
    : s;

  const position =
    behavior === 'static' ? 'relative' :
    behavior === 'transparent-until-scroll' ? 'fixed' :
    'sticky';

  return (
    <>
      {/* Spacer so fixed nav doesn't overlap content */}
      {behavior === 'transparent-until-scroll' && !scrolled && (
        <div style={{ height: '72px' }} aria-hidden="true" />
      )}

      <header
        style={{
          position,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          background: isTransparent ? 'transparent' : activeStyle.background,
          borderBottom: `1px solid ${isTransparent ? 'transparent' : activeStyle.border}`,
          backdropFilter: styleKey === 'transparent' && scrolled ? 'blur(12px)' : undefined,
          transition: 'background 200ms ease, border-color 200ms ease',
        }}
      >
        <Container width="wide">
          <div
            style={{
              height: '72px',
              display: 'grid',
              alignItems: 'center',
              gridTemplateColumns:
                layout === 'logo-right' ? 'auto 1fr auto' : 'auto 1fr auto',
              gap: space(4),
            }}
          >
            {/* Left: brand */}
            <Brand brand={brand} color={activeStyle.textPrimary} />

            {/* Center: desktop nav links */}
            <nav className="wm-nav-links" style={{ color: activeStyle.textPrimary }}>
              {links.map((link, i) => (
                <NavLink key={i} link={link} color={activeStyle.textPrimary} />
              ))}
            </nav>

            {/* Right: actions + mobile trigger */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: space(2),
                justifyContent: 'flex-end',
              }}
            >
              {/* Desktop action buttons — hidden on mobile via class */}
              <div className="wm-nav-actions-desktop" style={{ display: 'flex', gap: space(2) }}>
                {actions.map((action, i) => (
                  <Button
                    key={i}
                    label={action.label}
                    href={action.href}
                    variant={action.variant ?? (i === actions.length - 1 ? 'primary' : 'ghost')}
                    size="sm"
                  />
                ))}
              </div>

              {/* Mobile trigger */}
              <button
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="wm-nav-mobile-trigger"
                style={{ color: activeStyle.textPrimary }}
              >
                {mobileOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="wm-nav-drawer"
          style={{ background: activeStyle.background, color: activeStyle.textPrimary }}
        >
          <Stack gap={2}>
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: text('lg'),
                  color: activeStyle.textPrimary,
                  textDecoration: 'none',
                  padding: `${space(3)} 0`,
                  borderBottom: `1px solid ${activeStyle.border}`,
                }}
              >
                {link.label}
              </a>
            ))}
          </Stack>
          {actions.length > 0 && (
            <Stack gap={2} style={{ marginTop: space(6) }}>
              {actions.map((action, i) => (
                <Button
                  key={i}
                  label={action.label}
                  href={action.href}
                  variant={action.variant ?? 'primary'}
                  fullWidth
                />
              ))}
            </Stack>
          )}
        </div>
      )}
    </>
  );
}

/* ─── Sub-parts ─── */

function Brand({ brand, color: c }) {
  if (!brand) return <div />;
  const isLogo = brand.type === 'logo';
  return (
    <a
      href={brand.href ?? '/'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: space(2),
        color: c,
        fontWeight: 700,
        fontSize: text('lg'),
        textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {isLogo ? (
        <img src={brand.value} alt="" style={{ height: '28px', display: 'block' }} />
      ) : (
        <span>{brand.value}</span>
      )}
    </a>
  );
}

function NavLink({ link, color: c }) {
  const [open, setOpen] = useState(false);
  const hasChildren = (link.children ?? []).length > 0;

  if (!hasChildren) {
    return (
      <a
        href={link.href}
        style={{
          color: c,
          textDecoration: 'none',
          fontSize: text('sm'),
          fontWeight: 500,
          opacity: 0.85,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.85)}
      >
        {link.label}
      </a>
    );
  }

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        style={{
          background: 'transparent',
          border: 'none',
          color: c,
          fontSize: text('sm'),
          fontWeight: 500,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: space(1),
          padding: 0,
          opacity: open ? 1 : 0.85,
        }}
      >
        {link.label}
        <span style={{ fontSize: '10px' }}>▾</span>
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: space(3),
            minWidth: '240px',
            padding: space(2),
            background: color.bgElevated,
            border: `1px solid ${color.borderDefault}`,
            borderRadius: radius('lg'),
            zIndex: 50,
          }}
        >
          <Stack gap={1}>
            {link.children.map((child, i) => (
              <a
                key={i}
                href={child.href}
                style={{
                  display: 'block',
                  padding: `${space(2)} ${space(3)}`,
                  borderRadius: radius('md'),
                  textDecoration: 'none',
                  color: color.textPrimary,
                }}
              >
                <div style={{ fontSize: text('sm'), fontWeight: 500 }}>{child.label}</div>
                {child.description && (
                  <div style={{ fontSize: text('xs'), color: color.textMuted, marginTop: '2px' }}>
                    {child.description}
                  </div>
                )}
              </a>
            ))}
          </Stack>
        </div>
      )}
    </div>
  );
}