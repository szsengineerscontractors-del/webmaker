// src/lib/siteCache.js
//
// In-memory cache for site lookups used by subdomain routes.
// Per-instance. Not shared across Vercel lambdas. Good enough for now.
//
// TTL is short on purpose — invalidation on save handles the common case,
// the TTL catches anything we miss.

const TTL_MS = 60_000;

// Reuse the cache across HMR in dev (same trick as the Mongo connection).
const store =
  globalThis.__siteCache ?? (globalThis.__siteCache = new Map());

function get(key) {
  const hit = store.get(key);
  if (!hit) return undefined;
  if (hit.expiresAt < Date.now()) {
    store.delete(key);
    return undefined;
  }
  return hit.value;
}

function set(key, value) {
  store.set(key, { value, expiresAt: Date.now() + TTL_MS });
}

/**
 * Look up a site by subdomain, with a 60s in-memory cache.
 * Returns the plain-JSON site object (safe for Client Components) or null.
 */
export async function getSiteBySubdomain(Site, subdomain) {
  const key = `sub:${subdomain}`;
  const cached = get(key);
  if (cached !== undefined) return cached;

  const site = await Site.findOne({ subdomain }).lean();
  const plain = site ? JSON.parse(JSON.stringify(site)) : null;

  set(key, plain);
  return plain;
}

/**
 * Look up a site by ID, with a 60s in-memory cache.
 * Returns the plain-JSON site object or null.
 */
export async function getSiteById(Site, id) {
  const key = `id:${String(id)}`;
  const cached = get(key);
  if (cached !== undefined) return cached;

  const site = await Site.findById(id).lean();
  const plain = site ? JSON.parse(JSON.stringify(site)) : null;

  set(key, plain);
  return plain;
}

/**
 * Bust cache entries after create/update/delete.
 * Pass whichever keys you know. Missing keys are just skipped.
 */
export function invalidateSiteCache({ id, subdomain, previousSubdomain } = {}) {
  if (id) store.delete(`id:${String(id)}`);
  if (subdomain) store.delete(`sub:${subdomain}`);
  if (previousSubdomain && previousSubdomain !== subdomain) {
    store.delete(`sub:${previousSubdomain}`);
  }
}