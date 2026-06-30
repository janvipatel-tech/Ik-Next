// List all pages with their template and publish status.
// Usage: node scripts/list-pages.mjs

import { listPages } from "./strapi-client.mjs";

const pages = await listPages();
if (!pages.length) {
  console.log("(no pages)");
  process.exit(0);
}
const w = Math.max(...pages.map((p) => (p.slug || "").length), 4);
console.log(`${"SLUG".padEnd(w)}  STATUS     TEMPLATE      TITLE`);
for (const p of pages.sort((a, b) => (a.slug > b.slug ? 1 : -1))) {
  console.log(
    `${(p.slug || "").padEnd(w)}  ${(p.status || "").padEnd(9)}  ${(p.template || "").padEnd(12)}  ${p.title || ""}`
  );
}
