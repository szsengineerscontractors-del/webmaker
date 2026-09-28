// src/renderer/RenderTemplate.jsx
import { sectionRegistry } from '@/sections';
import { frameRegistry } from '@/frames';
import { Section } from '@/structures';

/**
 * Renders a full page from a template JSON.
 *
 * Template shape:
 * {
 *   id, name, theme,
 *   frames:    { navbar, announcement, footer },
 *   sections:  [ { type, layout, style, density, content } ]
 * }
 */
export default function RenderTemplate({ template }) {
  const { frames = {}, sections = [] } = template;

  return (
    <>
      {/* Top chrome */}
      {frames.announcement && <FrameSlot instance={frames.announcement} />}
      {frames.navbar && <FrameSlot instance={frames.navbar} />}

      {/* Page content */}
      <main>
        {sections.map((instance, i) => (
          <SectionSlot key={i} instance={instance} index={i} />
        ))}
      </main>

      {/* Bottom chrome */}
      {frames.footer && <FrameSlot instance={frames.footer} />}
    </>
  );
}

function SectionSlot({ instance, index }) {
  const entry = sectionRegistry[instance.type];

  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[RenderTemplate] Unknown section: "${instance.type}"`);
    }
    return null;
  }

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
      />
    </Section>
  );
}

function FrameSlot({ instance }) {
  const entry = frameRegistry[instance.type];

  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[RenderTemplate] Unknown frame: "${instance.type}"`);
    }
    return null;
  }

  const { component: Component } = entry;

  return (
    <Component
      layout={instance.layout}
      style={instance.style}
      behavior={instance.behavior}
      content={instance.content ?? {}}
    />
  );
}