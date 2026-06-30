---
name: edit-page
description: Edit an existing CMS page's content or images via a natural-language instruction. Fetches the current draft, applies the change, and updates Strapi without wiping other fields. Use when the user wants to change/modify/update copy or an image on a page.
---

# Edit a page

## Steps

1. **Resolve the slug.** If the user didn't give one, run
   `node scripts/list-pages.mjs` and ask which page.

2. **Fetch current content:** `node scripts/get-page.mjs <slug>` (draft version).
   Read it so you know the exact current values and structure.

3. **Compute the change** the user described. Build the SMALLEST partial JSON
   patch that expresses it — only the keys that change. The update script
   deep-merges, so you don't need to resend whole sections (objects merge;
   arrays replace). Example: `{"hero":{"heading":"New headline"}}`.
   - To replace one item in a repeatable list (e.g. one testimonial), you must
     send the FULL array for that field (arrays replace, not merge) — take the
     current array from step 2, change the one entry, send it back.

4. **Images.** If the user points at a local file, upload it first:
   `node scripts/upload-image.mjs <path>` → use the returned URL in the patch
   (e.g. `{"instructor":{"imageUrl":"<url>"}}`). If they give a URL, use it directly.

5. **Apply it:** `node scripts/update-page.mjs <slug> '<patch-json>'`
   (or write the patch to a scratchpad file and pass the path). Fix and retry on
   any validation error.

6. **Report** what changed. Edits land on the DRAFT. Remind the user to publish
   with `/publish-page <slug>` to push it live (then it appears within ~30s).
