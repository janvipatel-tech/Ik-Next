// Edit an existing page (the DRAFT version). Fetches the current page, deep-
// merges your partial change, and PUTs it back — so changing one field never
// wipes the rest of a section (Strapi replaces a component wholesale on write).
//
// Usage:
//   node scripts/update-page.mjs <slug> <partial.json>
//   node scripts/update-page.mjs <slug> '{"hero":{"heading":"New headline"}}'
//
// Re-run scripts/publish-page.mjs <slug> afterwards to push edits live.

import fs from "node:fs";
import {
  getPageBySlug,
  updatePage,
  loadTemplate,
  previewUrl,
} from "./strapi-client.mjs";
import { validatePage } from "./validate.mjs";

const [, , slug, patchArg] = process.argv;
if (!slug || !patchArg) {
  console.error("Usage: node scripts/update-page.mjs <slug> <partial.json | json-string>");
  process.exit(2);
}

const patch = fs.existsSync(patchArg)
  ? JSON.parse(fs.readFileSync(patchArg, "utf8"))
  : JSON.parse(patchArg);

const current = await getPageBySlug(slug, "draft") || await getPageBySlug(slug, "published");
if (!current) {
  console.error(`✗ No page with slug "${slug}"`);
  process.exit(1);
}

// Deep merge: objects merge recursively; arrays & scalars replace.
function merge(base, over) {
  if (Array.isArray(over) || over === null || typeof over !== "object") return over;
  const out = { ...(base && typeof base === "object" ? base : {}) };
  for (const [k, v] of Object.entries(over)) out[k] = merge(base?.[k], v);
  return out;
}

const merged = merge(current, patch);

// Strapi-managed fields must not be sent back in the body.
const STRIP = ["id", "documentId", "createdAt", "updatedAt", "publishedAt", "locale", "createdBy", "updatedBy"];
function clean(obj) {
  if (Array.isArray(obj)) return obj.map(clean);
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (STRIP.includes(k)) continue;
      out[k] = clean(v);
    }
    return out;
  }
  return obj;
}
const body = clean(merged);

const spec = loadTemplate(body.template || current.template);
const errors = validatePage(spec, body);
if (errors.length) {
  console.error(`✗ ${errors.length} validation error(s) after merge:`);
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}

await updatePage(current.documentId, body);
console.log(`✓ Updated DRAFT for "${slug}"`);
console.log(`  publish: node scripts/publish-page.mjs ${slug}`);
console.log(`  preview after publish: ${previewUrl(spec, slug)}`);
