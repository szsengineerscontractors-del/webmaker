// scripts/migrate-to-pages.js
//
// Migrates v0 templates (flat `sections`) → v1 (`pages: [{ slug, title, sections }]`).
// Idempotent — safe to run multiple times.
//
// Usage:
//   node -r dotenv/config scripts/migrate-to-pages.js

import mongoose from 'mongoose';
import connectDB from '../src/lib/db.js';

const TEMPLATE_VERSION = 1;

async function main() {
  await connectDB();
  console.log('[migrate] connected');

  const collection = mongoose.connection.collection('sites');

  const cursor = collection.find({
    'template.sections': { $exists: true },
    'template.pages': { $exists: false },
  });

  let migrated = 0;
  let skipped = 0;

  for await (const site of cursor) {
    try {
      const template = site.template ?? {};
      const sections = template.sections ?? [];

      const newTemplate = {
        ...template,
        templateVersion: TEMPLATE_VERSION,
        pages: [{ slug: '', title: 'Home', sections }],
      };
      delete newTemplate.sections;

      await collection.updateOne(
        { _id: site._id },
        { $set: { template: newTemplate } }
      );
      migrated++;
      console.log(`  ✓ ${site._id} — ${site.name ?? 'untitled'}`);
    } catch (err) {
      skipped++;
      console.error(`  ✗ ${site._id}:`, err.message);
    }
  }

  console.log(`\n[migrate] done. migrated=${migrated} skipped=${skipped}`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error('[migrate] failed:', err);
  process.exit(1);
});