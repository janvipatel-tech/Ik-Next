// Strapi REST client helpers for the Next.js frontend.

export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// Populate every section + its one-level-deep nested components.
// In Strapi 5, `populate[field][populate]=*` fills a component's own
// nested components/relations (events, items, stats, design, ...).
const PAGE_POPULATE = [
  "populate[seo]=true",
  "populate[hero][populate]=*",
  "populate[whyAttend][populate]=*",
  "populate[instructor][populate]=*",
  "populate[credibility][populate]=*",
  "populate[ikEdge][populate]=*",
  "populate[testimonials][populate]=*",
  "populate[audience][populate]=*",
  "populate[marketShift][populate]=*",
  "populate[finalCta][populate]=*",
].join("&");

async function strapiFetch(path) {
  try {
    const res = await fetch(`${STRAPI_URL}${path}`, {
      // ISR-friendly: revalidate so CMS edits show up without a rebuild.
      next: { revalidate: 30 },
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Strapi fetch failed:", err.message);
    return null;
  }
}

// Fetch a single published page by its slug. Returns the flattened
// Strapi 5 entry object, or null if not found / CMS unreachable.
export async function getPageBySlug(slug) {
  const json = await strapiFetch(
    `/api/pages?filters[slug][$eq]=${encodeURIComponent(slug)}&${PAGE_POPULATE}`
  );
  if (!json || !Array.isArray(json.data) || json.data.length === 0) return null;
  return json.data[0];
}

// Fetch all page slugs (used for static path generation).
export async function getAllPageSlugs() {
  const json = await strapiFetch(`/api/pages?fields[0]=slug&pagination[pageSize]=100`);
  if (!json || !Array.isArray(json.data)) return [];
  return json.data.map((p) => p.slug).filter(Boolean);
}
