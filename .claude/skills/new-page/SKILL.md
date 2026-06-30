---
name: new-page
description: Create a new CMS landing page from a natural-language brief. Asks which template to use, AI-generates every field, validates, and creates it as a draft in Strapi. Use when the user wants to create/add a new page.
---

# Create a new page

You generate the content; the scripts handle auth, validation, and writing to Strapi.

## Steps

1. **Pick the template.** List available templates by reading the filenames in
   `content/templates/*.json` (each file's `template` and `label`). If more than
   one exists, ask the user which to use with AskUserQuestion. If only one
   (`talent-500`), confirm it briefly and proceed.

2. **Read the chosen spec** at `content/templates/<template>.json`. It is the
   content contract: every section, field, type, `required` flag, enum values,
   and a `guide` string telling you what to write. Follow the guides.

3. **Gather the brief.** Use what the user already said. If critical specifics
   are missing (topic, audience, instructor name, session dates), ask a few
   concise questions — otherwise infer sensible, on-brand content. This is
   Interview Kickstart (developer interview prep); keep copy credible, concrete,
   benefit-driven, no fluff.

4. **Generate the full page JSON.** Produce a single `data` object whose keys
   match the spec exactly: `title`, `slug` (kebab-case, derived from title),
   `template`, `seo`, and every section key. Fill all `required` fields. Include
   3–4 items in feature grids, 2–4 testimonials, 4 stats. Set a sensible
   `design` per section (vary theme: hero `brand`, credibility `dark`, finalCta
   `brand`, others `light`/`muted`). Use single emojis for feature icons. For
   images (`instructor.imageUrl`, `seo.metaImageUrl`): if the user gave a local
   path, upload it first with `node scripts/upload-image.mjs <path>` and use the
   returned URL; if they gave a URL, use it; otherwise omit (instructor renders
   initials).

5. **Write the JSON** to the scratchpad (e.g. `<scratchpad>/<slug>.json`).

6. **Create the draft:** run `node scripts/create-page.mjs <file>`. If it reports
   validation errors or a slug collision, fix the JSON and retry.

7. **Report** the documentId, the draft status, and the future URL. Show the user
   a short summary of the generated content. Tell them they can:
   - edit it: `/edit-page <slug>` (or describe a change)
   - publish it: `/publish-page <slug>`

Do NOT publish automatically — new pages stay as drafts until the user asks.
