// src/sections/Team.jsx
import { Container, Stack, Grid, Inline } from '../structures';
import { Heading, Text, Avatar, Link } from '../components';
import { resolveStyle, sectionMeta } from './_shared';
import { color, space } from '../components/tokens';

export const meta = sectionMeta(
  'team',
  'Team',
  'team',
  ['grid', 'list', 'featured'],
  ['default', 'muted', 'dark', 'brand']
);

export default function Team({
  layout = 'grid',
  style: styleKey = 'default',
  content = {},
}) {
  const s = resolveStyle(styleKey);
  const { eyebrow, heading, subheading, members = [] } = content;

  return (
    <Container width="wide">
      <Stack gap={10}>
        {(heading || subheading) && (
          <Stack gap={3} align="center" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            {eyebrow && (
              <span style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: styleKey === 'brand' ? s.textPrimary : color.brandPrimary,
              }}>
                {eyebrow}
              </span>
            )}
            {heading && <Heading level={2} color={s.textPrimary}>{heading}</Heading>}
            {subheading && <Text color={s.textSecondary}>{subheading}</Text>}
          </Stack>
        )}

        {layout === 'grid' && <TeamGrid s={s} members={members} />}
        {layout === 'list' && <TeamList s={s} members={members} />}
        {layout === 'featured' && <TeamFeatured s={s} members={members} />}
      </Stack>
    </Container>
  );
}

/* ─── LAYOUTS ─── */

function TeamGrid({ s, members }) {
  return (
    <Grid columns={{ base: 2, md: 3, lg: 4 }} gap={6}>
      {members.map((m, i) => (
        <TeamCard key={i} member={m} s={s} />
      ))}
    </Grid>
  );
}

function TeamList({ s, members }) {
  return (
    <Stack gap={4}>
      {members.map((m, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: space(5),
            padding: space(5),
            background: s.surface,
            border: `1px solid ${s.border}`,
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <Avatar src={m.avatar} name={m.name} size="lg" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: space(1), flex: 1 }}>
            <span style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: s.textPrimary }}>
              {m.name}
            </span>
            {m.role && (
              <span style={{ fontSize: 'var(--text-sm)', color: color.brandPrimary }}>
                {m.role}
              </span>
            )}
            {m.bio && (
              <Text variant="body-sm" color={s.textSecondary} style={{ marginTop: space(1) }}>
                {m.bio}
              </Text>
            )}
          </div>
        </div>
      ))}
    </Stack>
  );
}

function TeamFeatured({ s, members }) {
  const [first, ...rest] = members;
  if (!first) return null;

  return (
    <Stack gap={10}>
      {/* Featured member — large */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: space(5),
        textAlign: 'center',
        maxWidth: '560px',
        margin: '0 auto',
      }}>
        <Avatar src={first.avatar} name={first.name} size="xl" />
        <Stack gap={2}>
          <span style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: s.textPrimary }}>
            {first.name}
          </span>
          {first.role && (
            <span style={{ fontSize: 'var(--text-base)', color: color.brandPrimary, fontWeight: 500 }}>
              {first.role}
            </span>
          )}
          {first.bio && (
            <Text color={s.textSecondary} style={{ marginTop: space(2) }}>
              {first.bio}
            </Text>
          )}
        </Stack>
      </div>

      {/* Rest — small grid */}
      {rest.length > 0 && (
        <Grid columns={{ base: 2, md: 3, lg: 4 }} gap={6}>
          {rest.map((m, i) => (
            <TeamCard key={i} member={m} s={s} compact />
          ))}
        </Grid>
      )}
    </Stack>
  );
}

/* ─── CARD ─── */

function TeamCard({ member, s, compact = false }) {
  const { name, role, bio, avatar, links = [] } = member;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: space(3),
      padding: compact ? space(4) : space(5),
      textAlign: 'center',
      background: s.surface,
      border: `1px solid ${s.border}`,
      borderRadius: 'var(--radius-lg)',
      height: '100%',
    }}>
      <Avatar src={avatar} name={name} size={compact ? 'md' : 'lg'} />

      <Stack gap={1} style={{ alignItems: 'center' }}>
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: s.textPrimary }}>
          {name}
        </span>
        {role && (
          <span style={{ fontSize: 'var(--text-sm)', color: color.brandPrimary }}>
            {role}
          </span>
        )}
        {bio && !compact && (
          <Text variant="body-sm" color={s.textSecondary} style={{ marginTop: space(2) }}>
            {bio}
          </Text>
        )}
      </Stack>

      {links.length > 0 && (
        <Inline gap={3} justify="center">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              style={{
                fontSize: 'var(--text-xs)',
                color: s.textMuted,
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </Inline>
      )}
    </div>
  );
}