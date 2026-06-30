---
description: Edit an existing CMS page's content or images via a natural-language instruction.
argument-hint: <slug> <change, e.g. "make the hero headline punchier">
---

Read `.claude/skills/edit-page/SKILL.md` and follow it exactly to edit a page.

Request: $ARGUMENTS

If no slug is given, run `node scripts/list-pages.mjs` and ask which page to edit.
