// Thin authenticated Strapi 5 REST client for the content-automation scripts.
// Auth comes from scripts/.env (STRAPI_URL, STRAPI_API_TOKEN), auto-generated
// by the cms bootstrap. Uses native fetch/FormData (Node 18+; tested on 24).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, "..");
const TEMPLATES_DIR = path.join(REPO_ROOT, "content", "templates");

// --- env -------------------------------------------------------------------
function loadEnv() {
  const f = path.join(__dirname, ".env");
  if (!fs.existsSync(f)) return;
  for (const line of fs.readFileSync(f, "utf8").split("\n")) {
    const m = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}
loadEnv();

export const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const TOKEN = process.env.STRAPI_API_TOKEN;

function authHeaders(extra = {}) {
  if (!TOKEN) {
    throw new Error(
      "STRAPI_API_TOKEN missing. Start the CMS (cd cms && npm run develop) so it writes scripts/.env, or set the token manually."
    );
  }
  return { Authorization: `Bearer ${TOKEN}`, ...extra };
}

async function api(pathname, opts = {}) {
  const res = await fetch(`${STRAPI_URL}${pathname}`, opts);
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = text;
  }
  if (!res.ok) {
    const detail =
      json?.error?.message || (typeof json === "string" ? json : JSON.stringify(json));
    throw new Error(`Strapi ${res.status} ${opts.method || "GET"} ${pathname}: ${detail}`);
  }
  return json;
}

// --- specs -----------------------------------------------------------------
export function listTemplates() {
  if (!fs.existsSync(TEMPLATES_DIR)) return [];
  return fs
    .readdirSync(TEMPLATES_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(TEMPLATES_DIR, f), "utf8")));
}

export function loadTemplate(name) {
  const spec = listTemplates().find((t) => t.template === name);
  if (!spec) throw new Error(`Unknown template "${name}". Available: ${listTemplates().map((t) => t.template).join(", ") || "(none)"}`);
  return spec;
}

// Deep-populate query covering every section key across all known templates.
function populateQuery() {
  const keys = new Set(["seo"]);
  for (const spec of listTemplates()) {
    for (const s of spec.sections || []) keys.add(s.key);
  }
  return [...keys]
    .map((k) => (k === "seo" ? "populate[seo]=true" : `populate[${k}][populate]=*`))
    .join("&");
}

// --- page CRUD -------------------------------------------------------------

// Fetch a page by slug. status: "draft" (default, for editing) | "published".
export async function getPageBySlug(slug, status = "draft") {
  const q = `filters[slug][$eq]=${encodeURIComponent(slug)}&status=${status}&${populateQuery()}`;
  const json = await api(`/api/pages?${q}`, { headers: authHeaders() });
  return json?.data?.[0] || null;
}

export async function slugExists(slug) {
  // Check both versions so we never collide.
  const draft = await getPageBySlug(slug, "draft");
  if (draft) return true;
  const pub = await getPageBySlug(slug, "published");
  return Boolean(pub);
}

export async function createPage(data) {
  // ?status=draft forces a true hidden draft. A plain POST in Strapi 5.48
  // publishes immediately, which would defeat draft-then-publish.
  const json = await api(`/api/pages?status=draft`, {
    method: "POST",
    headers: authHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify({ data }),
  });
  return json.data;
}

export async function updatePage(documentId, data) {
  // Edit the draft version only; publish is a separate, explicit step.
  const json = await api(`/api/pages/${documentId}?status=draft`, {
    method: "PUT",
    headers: authHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify({ data }),
  });
  return json.data;
}

export async function publishPage(documentId) {
  return api(`/api/pages/${documentId}/publish`, {
    method: "POST",
    headers: authHeaders(),
  });
}

export async function listPages() {
  const fields = "fields[0]=slug&fields[1]=title&fields[2]=template";
  const [pub, draft] = await Promise.all([
    api(`/api/pages?${fields}&status=published&pagination[pageSize]=100`, { headers: authHeaders() }),
    api(`/api/pages?${fields}&status=draft&pagination[pageSize]=100`, { headers: authHeaders() }),
  ]);
  const byId = new Map();
  for (const p of draft?.data || []) byId.set(p.documentId, { ...p, status: "draft" });
  for (const p of pub?.data || []) byId.set(p.documentId, { ...p, status: "published" });
  return [...byId.values()];
}

// --- media -----------------------------------------------------------------

// Upload a local file to Strapi's media library; returns its absolute URL.
export async function uploadImage(localPath) {
  const abs = path.resolve(localPath);
  if (!fs.existsSync(abs)) throw new Error(`File not found: ${abs}`);
  const buf = fs.readFileSync(abs);
  const form = new FormData();
  form.append("files", new Blob([buf]), path.basename(abs));

  const json = await api(`/api/upload`, {
    method: "POST",
    headers: authHeaders(),
    body: form,
  });
  const file = Array.isArray(json) ? json[0] : json;
  const url = file?.url || "";
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

export function previewUrl(spec, slug) {
  const base = spec?.previewBase || "http://localhost:3000";
  return `${base}/${slug}`;
}
