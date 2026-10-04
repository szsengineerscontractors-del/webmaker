// src/renderer/RenderTemplate.jsx
import { sectionRegistry } from '@/sections';
import { frameRegistry } from '@/frames';
import { Section } from '@/structures';

export default function RenderTemplate({ template, page, siteId, routingMode = 'path' }) {
  console.log('[RT] routingMode:', routingMode);
  const { frames = {} } = template;

  const resolvedPage =
    page ??
    (template.pages && template.pages[0]) ??
    { sections: template.sections ?? [] };

  const sections = resolvedPage.sections ?? [];

  return (
    <>
      {frames.announcement && (
        <FrameSlot instance={frames.announcement} siteId={siteId} routingMode={routingMode} />
      )}
      {frames.navbar && (
        <FrameSlot instance={frames.navbar} siteId={siteId} routingMode={routingMode} />
      )}

      <main>
        {sections.map((instance, i) => (
          <SectionSlot key={i} instance={instance} index={i} siteId={siteId} />
        ))}
      </main>

      {frames.footer && (
        <FrameSlot instance={frames.footer} siteId={siteId} routingMode={routingMode} />
      )}
    </>
  );
}

function SectionSlot({ instance, index, siteId }) {
  const entry = sectionRegistry[instance.type];
  if (!entry) return null;

  const { component: Component } = entry;

  return (
    <Section
      density={instance.density ?? 'md'}
      id={instance.id ?? `section-${index}`}
    >
      <Component
        layout={instance.layout}
        style={instance.style}
        content={instance.content ?? {}}
        siteId={siteId}
      />
    </Section>
  );
}

function FrameSlot({ instance, siteId, routingMode }) {
  const entry = frameRegistry[instance.type];
  if (!entry) return null;

  const { component: Component } = entry;

  return (
    <Component
      layout={instance.layout}
      style={instance.style}
      behavior={instance.behavior}
      content={instance.content ?? {}}
      siteId={siteId}
      routingMode={routingMode}
    />
  );
}