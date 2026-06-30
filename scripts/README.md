# Content automation scripts

Create and edit CMS pages from the command line (and via Claude Code skills).
Claude generates the content; these scripts handle auth, validation, and
read/write against Strapi.

## Setup

Auth is **automatic**: when the CMS boots (`cd cms && npm run develop`), its
bootstrap mints a full-access API token and writes it to `scripts/.env`
(gitignored). No admin steps needed.

To regenerate the token, delete `scripts/.env` and restart the CMS.

## Commands

```bash
# Create a new page as a DRAFT from a JSON data file
node scripts/create-page.mjs <data.json> [--template talent-500]

# Print a page's current content (DRAFT by default) for editing
node scripts/get-page.mjs <slug> [--published]

# Edit a page (DRAFT): deep-merges a partial change, never wipes a section
node scripts/update-page.mjs <slug> '{"hero":{"heading":"New headline"}}'
node scripts/update-page.mjs <slug> patch.json

# Upload a local image -> prints its public URL
node scripts/upload-image.mjs ./photo.jpg

# Publish a draft (make it public)
node scripts/publish-page.mjs <slug>

# List all pages with status + template
node scripts/list-pages.mjs

# Validate a data file against a template spec (no write)
node scripts/validate.mjs <template> <data.json>
```

## How it fits together

- `content/templates/<name>.json` — the **content contract**: every field a
  template needs, with types, required flags, enums, and writing guidance.
  Claude reads this to know exactly what to produce.
- Create writes a **draft** (Strapi `draftAndPublish` is on). Preview the draft
  via `get-page.mjs`; it only renders on the public site after `publish-page.mjs`.
- Edits target the draft, then re-publish to push live. The frontend uses ISR
  (`revalidate: 30`), so published changes appear within ~30s.

## Adding a template

1. Add `content/templates/<name>.json` (the spec).
2. Add a frontend renderer in `components/<name>/` and register it in
   `app/[slug]/page.js`.
3. Add the value to the `template` enum in the page schema
   (`cms/src/api/page/content-types/page/schema.json`).
