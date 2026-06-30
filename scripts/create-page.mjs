// Create a new page as a DRAFT from a JSON data file.
// Usage: node scripts/create-page.mjs <data.json> [--template talent-500]
//
// The JSON is the page `data` object: { title, slug, template, seo, hero, ... }.
// Validates against the template spec and checks slug uniqueness first.

import fs from "node:fs";
import { loadTemplate, createPage, slugExists, previewUrl } from "./strapi-client.mjs";
import { validatePage } from "./validate.mjs";

const args = process.argv.slice(2);
const dataFile = args.find((a) => !a.startsWith("--"));
const templateFlag = args.includes("--template") ? args[args.indexOf("--template") + 1] : null;

if (!dataFile) {
  console.error("Usage: node scripts/create-page.mjs <data.json> [--template <name>]");
  process.exit(2);
}

const data = JSON.parse(fs.readFileSync(dataFile, "utf8"));
const templateName = templateFlag || data.template;
if (!templateName) {
  console.error("No template specified (use --template or include a `template` field).");
  process.exit(2);
}
data.template = templateName;

const spec = loadTemplate(templateName);

const errors = validatePage(spec, data);
if (errors.length) {
  console.error(`✗ ${errors.length} validation error(s):`);
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}

if (!data.slug) {
  console.error("✗ slug is required");
  process.exit(1);
}
if (await slugExists(data.slug)) {
  console.error(`✗ slug "${data.slug}" already exists. Choose another.`);
  process.exit(1);
}

const created = await createPage(data);
console.log("✓ Created DRAFT");
console.log(`  documentId: ${created.documentId}`);
console.log(`  slug:       ${created.slug}`);
console.log(`  status:     draft (not yet public)`);
console.log(`  publish:    node scripts/publish-page.mjs ${created.slug}`);
console.log(`  will be at: ${previewUrl(spec, created.slug)}`);
