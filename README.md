# Interview Kickstart — Landing Page

A responsive landing page inspired by [interviewkickstart.com](https://interviewkickstart.com),
built with **Next.js (App Router)**, **Tailwind CSS**, **vanilla JS/JSX**, and **jQuery**
for interactions.

## Tech stack

- **Next.js 14** (App Router, React 18) — page + component architecture
- **Tailwind CSS 3** — utility-first styling with a custom brand theme
- **jQuery 3** — sticky header, mobile nav, smooth scrolling, scroll-reveal, animated
  stat counters and accordions (see `components/Interactions.js`)
- Plain HTML/CSS/JS throughout the JSX components

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.js        # root layout + metadata + global CSS
  page.js          # assembles all sections
  globals.css      # Tailwind layers + custom utilities
components/
  Interactions.js  # all jQuery-powered behaviour
  Header.js        # sticky nav + mobile menu
  Hero.js          # headline, stats, cohort card
  CompanyLogos.js  # animated logo marquee
  LearningPaths.js # 3 program cards
  WhyChoose.js     # 6 feature grid
  Stats.js         # animated counters
  WebinarCTA.js    # webinar registration form (with validation)
  SuccessStories.js
  Instructors.js
  Testimonials.js
  Press.js
  Footer.js
```

> Logos and avatars are rendered as styled text/initials placeholders — drop in real
> assets under `public/` and swap them in when ready.

---

## Strapi CMS + the `talent-500` template

The project also includes a **Strapi 5 headless CMS** (`cms/`, SQLite) that powers a
fully dynamic landing-page template called **`talent-500`** — modelled on the
[Talent500 event page](https://interviewkickstart.com/in/landing/event/15apr_talent500).
Every section's content **and design** is editable in the CMS, and you can spin up
unlimited pages from the same template — only the content changes.

### Run the CMS + frontend together

```bash
# terminal 1 — CMS (http://localhost:1337, admin at /admin)
cd cms && npm run develop

# terminal 2 — frontend (http://localhost:3000)
npm run dev
```

On first boot the CMS:
- syncs the schema (Page type + section components),
- grants the **public** role read access to the Pages API automatically,
- seeds one sample page at slug **`15apr-talent500`**.

Visit **http://localhost:3000/15apr-talent500** to see the template rendered from CMS data.
Create an admin user at http://localhost:1337/admin to edit content.

### How it fits together

```
cms/                                   # Strapi 5 (SQLite)
  src/components/shared/               # design (theme/accent/align/padding) + seo
  src/components/sections/             # hero, feature-list, instructor, credibility,
                                       #   testimonials, rich-section, cta-banner + item parts
  src/api/page/                        # the "Page" collection type (title, slug,
                                       #   template, seo + one component per section)
  src/seed-data.js / src/index.js      # auto permissions + sample page seed

lib/strapi.js                          # REST client (deep-populate by slug)
app/[slug]/page.js                     # dynamic route: fetch by slug, set SEO metadata,
                                       #   pick the template, render
components/talent500/                  # the template + one React component per section
  Template.js                          # fixed section order for the talent-500 layout
  theme.js                             # maps the CMS `design` fields -> Tailwind classes
```

### Dynamic fields managed in Strapi

- **Page-level:** `title`, `slug`, `template`, and an **SEO** group
  (meta title, meta description, keywords, canonical URL, OG image URL).
- **Per section:** all copy (headings, body, list items, stats, logos, testimonials,
  event dates, CTA labels/URLs) **plus a `design` group** on every section —
  `theme` (light / muted / dark / brand-gradient), `accentColor`, text alignment,
  and vertical padding. Leave a section empty and it simply won't render.

### Create another page from the same template

1. Open the Strapi admin → **Content Manager → Page → Create new entry**
   (or **duplicate** the seeded entry).
2. Fill in a new `title`/`slug`, keep `template = talent-500`, edit the section
   content/design, and **Publish**.
3. The page is instantly live at `http://localhost:3000/<your-slug>` — no code changes,
   no rebuild (the frontend revalidates every 30s).

To add a *different* template later, create a new renderer under `components/`
and register it in the `TEMPLATES` map in [`app/[slug]/page.js`](app/[slug]/page.js).
