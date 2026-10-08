// src/sections/CTA.jsx
import { Container, Stack, Inline, Center, Split } from '../structures';
import { Heading, Text, Button, Input } from '../components';
import Reveal from '../components/Reveal';
import { resolveStyle, sectionMeta } from './_shared';
import { color, space } from '../components/tokens';

export const meta = sectionMeta({
  id: 'cta',
  name: 'Call to action',
  category: 'cta',
  defaultLayout: 'centered',
  layouts: [
    { id: 'centered', label: 'Centered', description: 'Text and buttons centered' },
    { id: 'split',    label: 'Split',    description: 'Text left, image or form right' },
    { id: 'banner',   label: 'Banner',   description: 'Horizontal strip with text and button' },
  ],
});

export default function CTA({
  layout = 'centered',
  style: styleKey = 'default',
  content = {},
}) {
  const s = resolveStyle(styleKey);
  const { heading, subheading, primaryCta, secondaryCta, image, newsletter } = content;

  return (
    <Container>
      {layout === 'centered' && (
        <Center>
          <Reveal>
            <Stack gap={5} align="center" style={{ textAlign: 'center', maxWidth: '640px' }}>
              <Heading level={2} color={s.textPrimary}>{heading}</Heading>
              {subheading && <Text variant="body-lg" color={s.textSecondary}>{subheading}</Text>}
              <Inline gap={3}>
                {primaryCta && <Button label={primaryCta.label} href={primaryCta.href} variant="primary" size="lg" />}
                {secondaryCta && <Button label={secondaryCta.label} href={secondaryCta.href} variant="ghost" size="lg" />}
              </Inline>
            </Stack>
          </Reveal>
        </Center>
      )}

      {layout === 'split' && (
        <Split ratio="1fr 1fr" gap={12} collapseBelow="md">
          <Reveal>
            <Stack gap={5} justify="center">
              <Heading level={2} color={s.textPrimary}>{heading}</Heading>
              {subheading && <Text variant="body-lg" color={s.textSecondary}>{subheading}</Text>}
              {newsletter ? (
                <Inline gap={3} wrap={false}>
                  <div style={{ flex: 1 }}>
                    <Input type="email" placeholder="you@company.com" />
                  </div>
                  <Button label={primaryCta?.label ?? 'Subscribe'} variant="primary" />
                </Inline>
              ) : (
                <Inline gap={3}>
                  {primaryCta && <Button label={primaryCta.label} href={primaryCta.href} variant="primary" size="lg" />}
                  {secondaryCta && <Button label={secondaryCta.label} href={secondaryCta.href} variant="ghost" size="lg" />}
                </Inline>
              )}
            </Stack>
          </Reveal>
          {image && (
            <Reveal from="right" delay={100}>
              <div style={{
                aspectRatio: '4 / 3',
                background: s.surface,
                borderRadius: '16px',
                border: `1px solid ${s.border}`,
              }} />
            </Reveal>
          )}
        </Split>
      )}

      {layout === 'banner' && (
        <Reveal>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: space(6),
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: space(8),
            background: s.surface,
            border: `1px solid ${s.border}`,
            borderRadius: '16px',
          }}>
            <Stack gap={2} style={{ flex: '1 1 320px' }}>
              <Heading level={3} color={s.textPrimary}>{heading}</Heading>
              {subheading && <Text color={s.textSecondary}>{subheading}</Text>}
            </Stack>
            <Inline gap={3}>
              {primaryCta && <Button label={primaryCta.label} href={primaryCta.href} variant="primary" size="lg" />}
              {secondaryCta && <Button label={secondaryCta.label} href={secondaryCta.href} variant="ghost" size="lg" />}
            </Inline>
          </div>
        </Reveal>
      )}
    </Container>
  );
}