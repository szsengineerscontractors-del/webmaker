// src/sections/Gallery.jsx
import { Container, Stack, Grid } from '../structures';
import { Heading, Text, Image } from '../components';
import { resolveStyle, sectionMeta } from './_shared';
import { color } from '../components/tokens';

export const meta = sectionMeta({
  id: 'gallery',
  name: 'Gallery',
  category: 'gallery',
  defaultLayout: 'grid',
  layouts: [
    { id: 'grid',     label: 'Grid',     description: 'Uniform grid' },
    { id: 'masonry',  label: 'Masonry',  description: 'Pinterest-style columns' },
    { id: 'featured', label: 'Featured', description: 'One large image with smaller ones below' },
  ],
});

export default function Gallery({
  layout = 'grid',
  style: styleKey = 'default',
  content = {},
}) {
  const s = resolveStyle(styleKey);
  const { eyebrow, heading, subheading, images = [] } = content;

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

        {layout === 'grid' && <GalleryGrid images={images} />}
        {layout === 'masonry' && <GalleryMasonry images={images} />}
        {layout === 'featured' && <GalleryFeatured images={images} />}
      </Stack>
    </Container>
  );
}

function GalleryGrid({ images }) {
  return (
    <Grid columns={{ base: 2, md: 3, lg: 4 }} gap={3}>
      {images.map((img, i) => (
        <GalleryItem key={i} image={img} aspect="1 / 1" />
      ))}
    </Grid>
  );
}

function GalleryMasonry({ images }) {
  return (
    <div className="wm-masonry" style={{ columnCount: 2, columnGap: '12px' }}>
      {images.map((img, i) => (
        <div key={i} style={{ breakInside: 'avoid', marginBottom: '12px' }}>
          <GalleryItem image={img} aspect={i % 3 === 0 ? '3 / 4' : '1 / 1'} />
        </div>
      ))}
    </div>
  );
}

function GalleryFeatured({ images }) {
  const [hero, ...rest] = images;
  if (!hero) return null;

  return (
    <Stack gap={3}>
      <GalleryItem image={hero} aspect="16 / 9" />
      {rest.length > 0 && (
        <Grid columns={{ base: 2, md: 4 }} gap={3}>
          {rest.slice(0, 4).map((img, i) => (
            <GalleryItem key={i} image={img} aspect="1 / 1" />
          ))}
        </Grid>
      )}
    </Stack>
  );
}

function GalleryItem({ image, aspect = '1 / 1' }) {
  const src = typeof image === 'string' ? image : image?.src;
  const alt = typeof image === 'string' ? '' : (image?.alt ?? '');

  return (
    <div style={{ aspectRatio: aspect, overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div style={{ width: '100%', height: '100%', background: 'var(--color-surface-2)' }} />
      )}
    </div>
  );
}