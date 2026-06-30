// Validate a page data object against a template spec BEFORE writing to Strapi,
// so we fail fast with a readable error instead of a raw 400.
//
// Usage: node scripts/validate.mjs <template> <data.json>
//   programmatic: import { validatePage } from "./validate.mjs"

import fs from "node:fs";
import { loadTemplate } from "./strapi-client.mjs";

const DESIGN_ENUMS = {
  theme: ["light", "muted", "dark", "brand"],
  align: ["left", "center"],
  paddingY: ["sm", "md", "lg"],
};

function checkDesign(design, where, errors) {
  if (!design) return;
  for (const [key, allowed] of Object.entries(DESIGN_ENUMS)) {
    if (design[key] != null && !allowed.includes(design[key])) {
      errors.push(`${where}.design.${key}="${design[key]}" not in [${allowed.join(", ")}]`);
    }
  }
}

function checkFields(obj, fieldSpec, where, errors) {
  for (const [name, spec] of Object.entries(fieldSpec)) {
    if (name === "design") {
      checkDesign(obj?.design, where, errors);
      continue;
    }
    const val = obj?.[name];
    if (spec.required && (val == null || val === "")) {
      errors.push(`${where}.${name} is required`);
    }
    if (spec.type === "enum" && val != null && !spec.enum.includes(val)) {
      errors.push(`${where}.${name}="${val}" not in [${spec.enum.join(", ")}]`);
    }
    if (spec.type === "repeatable" && val != null) {
      if (!Array.isArray(val)) {
        errors.push(`${where}.${name} must be an array`);
      } else if (spec.item) {
        val.forEach((it, i) => checkFields(it, spec.item, `${where}.${name}[${i}]`, errors));
      }
    }
  }
}

export function validatePage(spec, data) {
  const errors = [];

  // page-level
  for (const [name, ps] of Object.entries(spec.page || {})) {
    const val = data?.[name];
    if (ps.required && (val == null || val === "")) errors.push(`${name} is required`);
    if (ps.type === "const" && val !== ps.value) {
      errors.push(`${name} must be "${ps.value}" (got "${val}")`);
    }
  }

  if (spec.seo?.fields && data.seo) checkFields(data.seo, spec.seo.fields, "seo", errors);

  for (const section of spec.sections || []) {
    const obj = data?.[section.key];
    if (obj == null) continue; // sections are optional; absent = not rendered
    checkFields(obj, section.fields, section.key, errors);
  }

  return errors;
}

// CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  const [, , templateName, dataFile] = process.argv;
  if (!templateName || !dataFile) {
    console.error("Usage: node scripts/validate.mjs <template> <data.json>");
    process.exit(2);
  }
  const spec = loadTemplate(templateName);
  const data = JSON.parse(fs.readFileSync(dataFile, "utf8"));
  const errors = validatePage(spec, data);
  if (errors.length) {
    console.error(`✗ ${errors.length} validation error(s):`);
    for (const e of errors) console.error("  - " + e);
    process.exit(1);
  }
  console.log("✓ valid");
}
