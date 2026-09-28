// frames/AnnouncementBar.jsx
'use client'


import { Container, Inline } from '../structures';
import { Link } from '../components';
import { resolveFrameStyle, frameMeta } from './_shared';
import { space, text } from '../components/tokens';

export const meta = frameMeta(
  'announcement-bar',
  'Announcement Bar',
  'announcement',
  ['centered', 'split'],
  ['default', 'muted', 'dark', 'brand'],
  ['dismissible', 'static']
);

export default function AnnouncementBar({
  layout = 'centered',
  style: styleKey = 'brand',
  content = {},
}) {
  const s = resolveFrameStyle(styleKey);
  const { message, cta, dismissible } = content;

  if (layout === 'split' && cta) {
    return (
      <div style={{ background: s.background, color: s.textPrimary, fontSize: text('sm') }}>
        <Container width="wide">
          <Inline gap={3} justify="between" style={{ padding: `${space(2)} 0` }}>
            <span>{message}</span>
            <Link href={cta.href} style={{ color: s.textPrimary, textDecoration: 'underline' }}>
              {cta.label}
            </Link>
          </Inline>
        </Container>
      </div>
    );
  }

  return (
    <div style={{
      background: s.background,
      color: s.textPrimary,
      fontSize: text('sm'),
      textAlign: 'center',
      padding: `${space(2)} ${space(4)}`,
    }}>
      {message}
      {cta && (
        <>
          {' '}
          <Link href={cta.href} style={{ color: s.textPrimary, textDecoration: 'underline' }}>
            {cta.label}
          </Link>
        </>
      )}
    </div>
  );
}