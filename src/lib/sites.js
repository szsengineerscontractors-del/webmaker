// src/lib/sites.js
const globalForSites = globalThis;

if (!globalForSites.__sites) {
  globalForSites.__sites = new Map();
}

export const sites = globalForSites.__sites;