// Publish a page draft (draft -> published), making it public.
// Usage: node scripts/publish-page.mjs <slug>

import { getPageBySlug, publishPage, loadTemplate, previewUrl } from "./strapi-client.mjs";

const [, , slug] = process.argv;
if (!slug) {
  console.error("Usage: node scripts/publish-page.mjs <slug>");
  process.exit(2);
}

const page = (await getPageBySlug(slug, "draft")) || (await getPageBySlug(slug, "published"));
if (!page) {
  console.error(`✗ No page with slug "${slug}"`);
  process.exit(1);
}

await publishPage(page.documentId);
const spec = loadTemplate(page.template);
console.log(`✓ Published "${slug}"`);
console.log(`  live (≤30s ISR): ${previewUrl(spec, slug)}`);
