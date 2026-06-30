---
name: publish-page
description: Publish a CMS page draft so it goes live on the public site. Use when the user wants to publish/go live with a page.
---

# Publish a page

1. Resolve the slug (if missing, run `node scripts/list-pages.mjs` and ask).
2. Run `node scripts/publish-page.mjs <slug>`.
3. Report the live URL. Note it appears on the public site within ~30s (ISR).
