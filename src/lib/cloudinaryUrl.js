// src/lib/cloudinaryUrl.js

/**
 * Inject Cloudinary transformations into a URL.
 *
 * @example
 *   cdnUrl('https://res.cloudinary.com/demo/image/upload/v123/sample.jpg', { w: 800 })
 *   // → 'https://res.cloudinary.com/demo/image/upload/w_800,f_auto,q_auto/v123/sample.jpg'
 */
export function cdnUrl(url, opts = {}) {
  if (!url || typeof url !== 'string') return url;

  // Only transform Cloudinary URLs
  if (!url.includes('res.cloudinary.com') || !url.includes('/upload/')) {
    return url;
  }

  const [before, after] = url.split('/upload/');
  if (!after) return url;

  const {
    w,
    h,
    fit = 'fill',        // fill | fit | crop | scale | limit
    q = 'auto',          // auto | number
    f = 'auto',          // auto | webp | jpg | png
    dpr = 'auto',        // auto | 1 | 2
    gravity,             // auto | face | center
  } = opts;

  const parts = [
    w && `w_${w}`,
    h && `h_${h}`,
    fit && `c_${fit}`,
    dpr && `dpr_${dpr}`,
    gravity && `g_${gravity}`,
    f && `f_${f}`,
    q && `q_${q}`,
  ].filter(Boolean);

  if (parts.length === 0) return url;

  return `${before}/upload/${parts.join(',')}/${after}`;
}

/**
 * Convenience presets for common contexts.
 */
export const cdnPresets = {
  hero:       (url) => cdnUrl(url, { w: 1600, h: 1200, fit: 'fill', q: 'auto:good' }),
  heroBg:     (url) => cdnUrl(url, { w: 2000, h: 1200, fit: 'fill', q: 'auto:good' }),
  feature:    (url) => cdnUrl(url, { w: 800,  h: 600,  fit: 'fill' }),
  gallery:    (url) => cdnUrl(url, { w: 800,  h: 800,  fit: 'fill' }),
  galleryLarge: (url) => cdnUrl(url, { w: 1200, h: 900, fit: 'fill' }),
  avatar:     (url) => cdnUrl(url, { w: 300,  h: 300,  fit: 'fill', gravity: 'face' }),
  avatarSm:   (url) => cdnUrl(url, { w: 96,   h: 96,   fit: 'fill', gravity: 'face' }),
  about:      (url) => cdnUrl(url, { w: 1200, h: 900,  fit: 'fill' }),
  cta:        (url) => cdnUrl(url, { w: 1200, h: 900,  fit: 'fill' }),
};