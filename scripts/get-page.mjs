// Dump a page's current content as JSON (for editing).
// Usage: node scripts/get-page.mjs <slug> [--published]
// Default reads the DRAFT version (what edits target).

import { getPageBySlug } from "./strapi-client.mjs";

const args = process.argv.slice(2);
const slug = args.find((a) => !a.startsWith("--"));
const status = args.includes("--published") ? "published" : "draft";

if (!slug) {
  console.error("Usage: node scripts/get-page.mjs <slug> [--published]");
  process.exit(2);
}

const page = await getPageBySlug(slug, status);
if (!page) {
  console.error(`✗ No ${status} page with slug "${slug}"`);
  process.exit(1);
}
console.log(JSON.stringify(page, null, 2));
