// src/sections/About.jsx
import { Container, Stack, Split, Grid, Inline } from '../structures';
import { Heading, Text, Image, Button } from '../components';
import { resolveStyle, sectionMeta } from './_shared';
import { color, space } from '../components/tokens';

export const meta = sectionMeta({
  id: 'about',
  name: 'About',
  category: 'about',
  defaultLayout: 'split',
  layouts: [
    { id: 'split',         label: 'Text + image', description: 'Text left, image right' },
    { id: 'split-reverse', label: 'Image + text', description: 'Image left, text right' },
    { id: 'centered',      label: 'Centered',     description: 'Text centered, no image' },
    { id: 'facts',         label: 'With facts',   description: 'Text + list of facts' },
  ],
});

export default function About({
  layout = 'split',
  style: styleKey = 'default',
  content = {},
}) {
  const s = resolveStyle(styleKey);
  const {
    eyebrow,
    heading,
    body,
    image,
    facts = [],
  } = content;

  const paragraphs = Array.isArray(body) ? body : [body].filter(Boolean);

  return (
    <Container>
      {layout === 'split' && (
        <AboutSplit s={s} content={content} paragraphs={paragraphs} reverse={false} />
      )}

      {layout === 'split-reverse' && (
        <AboutSplit s={s} content={content} paragraphs={paragraphs} reverse={true} />
      )}

      {layout === 'centered' && (
        <AboutCentered s={s} content={content} paragraphs={paragraphs} />
      )}

      {layout === 'facts' && (
        <AboutFacts s={s} content={content} paragraphs={paragraphs} facts={facts} />
      )}
    </Container>
  );
}

/* ─── LAYOUTS ─── */

function AboutSplit({ s, content, paragraphs, reverse }) {
  const { eyebrow, heading, image } = content;
  return (
    <div className="wm-about-split">
      <Split ratio="1fr 1fr" gap={12} reverse={reverse} collapseBelow="md">
        <Stack gap={5} justify="center">
          {eyebrow && (
            <span style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: color.brandPrimary,
            }}>
              {eyebrow}
            </span>
          )}

          <Heading level={2} color={s.textPrimary}>{heading}</Heading>

          {paragraphs.map((p, i) => (
            <Text key={i} variant="body-lg" color={s.textSecondary}>{p}</Text>
          ))}
        </Stack>

        <div>
          {image ? (
            <Image src={image} alt="" aspectRatio="4 / 3" rounded />
          ) : (
            <div style={{
              aspectRatio: '4 / 3',
              background: s.surface,
              borderRadius: '16px',
              border: `1px solid ${s.border}`,
            }} />
          )}
        </div>
      </Split>
    </div>
  );
}

function AboutCentered({ s, content, paragraphs }) {
  const { eyebrow, heading } = content;
  return (
    <Stack gap={5} align="center" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
      {eyebrow && (
        <span style={{
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: color.brandPrimary,
        }}>
          {eyebrow}
        </span>
      )}

      <Heading level={2} color={s.textPrimary}>{heading}</Heading>

      {paragraphs.map((p, i) => (
        <Text key={i} variant="body-lg" color={s.textSecondary}>{p}</Text>
      ))}
    </Stack>
  );
}

function AboutFacts({ s, content, paragraphs, facts }) {
  const { eyebrow, heading } = content;
  return (
    <Stack gap={10}>
      <Stack gap={5} style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        {eyebrow && (
          <span style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: color.brandPrimary,
          }}>
            {eyebrow}
          </span>
        )}

        <Heading level={2} color={s.textPrimary}>{heading}</Heading>

        {paragraphs.map((p, i) => (
          <Text key={i} variant="body-lg" color={s.textSecondary}>{p}</Text>
        ))}
      </Stack>

      {facts.length > 0 && (
        <Grid columns={{ base: 2, md: 4 }} gap={6}>
          {facts.map((fact, i) => (
            <Stack key={i} gap={2} style={{ textAlign: 'center' }}>
              <span style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                lineHeight: 1,
                color: color.brandPrimary,
              }}>
                {fact.value}
              </span>
              <span style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color: s.textSecondary,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {fact.label}
              </span>
            </Stack>
          ))}
        </Grid>
      )}
    </Stack>
  );
}