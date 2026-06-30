// The entire "talent-500" template lives in this single file: the design-token
// resolver, every section component, and the top-level orchestrator. Behavior is
// identical to the previous one-file-per-section layout — just consolidated.

// ---------------------------------------------------------------------------
// Design tokens
// Maps the Strapi `design` component on each section to concrete styling.
// design = { theme: "light"|"muted"|"dark"|"brand", accentColor: "#hex", align: "left"|"center", paddingY: "sm"|"md"|"lg" }
// ---------------------------------------------------------------------------

const THEMES = {
  light: { section: "bg-white text-ink-900", muted: "text-ink-700/70", isDark: false },
  muted: { section: "bg-brand-50/40 text-ink-900", muted: "text-ink-700/70", isDark: false },
  dark: { section: "bg-ink-900 text-white", muted: "text-white/60", isDark: true },
  brand: { section: "mesh text-white", muted: "text-white/70", isDark: true },
};

const PADDING = {
  sm: "py-12 sm:py-14",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-24",
};

function resolveDesign(design) {
  const theme = THEMES[design?.theme] || THEMES.light;
  return {
    ...theme,
    accent: design?.accentColor || "#5b34ea",
    align: design?.align === "center" ? "text-center items-center" : "text-left items-start",
    centered: design?.align === "center",
    padding: PADDING[design?.paddingY] || PADDING.lg,
  };
}

// ---------------------------------------------------------------------------
// Chrome
// ---------------------------------------------------------------------------

function MiniHeader({ ctaLabel, ctaUrl }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-900/5 bg-white/90 backdrop-blur-md">
      <div className="container-px flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand font-black text-white">IK</span>
          <span className="text-lg font-extrabold tracking-tight">
            Interview<span className="text-brand">Kickstart</span>
          </span>
        </a>
        <a href={ctaUrl || "#register"} className="btn-primary">
          {ctaLabel || "Reserve Your Free Spot"}
        </a>
      </div>
    </header>
  );
}

function MiniFooter() {
  return (
    <footer className="bg-ink-900 py-10 text-white/55">
      <div className="container-px flex flex-col items-center justify-between gap-4 text-xs sm:flex-row">
        <p>© {new Date().getFullYear()} Interview Kickstart · in partnership with Talent500</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function Hero({ data }) {
  if (!data) return null;
  const d = resolveDesign(data.design);

  return (
    <section className={`relative overflow-hidden pt-28 ${d.section} ${d.padding}`}>
      <div className="container-px relative">
        <div className={`mx-auto flex max-w-4xl flex-col ${d.align}`}>
          {data.badge && (
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold"
              style={{ borderColor: `${d.accent}55`, color: d.isDark ? "#fff" : d.accent }}
            >
              {data.badge}
            </span>
          )}

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {data.heading}
          </h1>

          {data.subheading && (
            <p className={`mt-5 max-w-2xl text-lg ${d.muted}`}>{data.subheading}</p>
          )}

          {Array.isArray(data.events) && data.events.length > 0 && (
            <div className={`mt-8 flex flex-wrap gap-3 ${d.centered ? "justify-center" : ""}`}>
              {data.events.map((ev, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm ${
                    d.isDark ? "bg-white/10" : "bg-brand-50"
                  }`}
                >
                  <span className="text-lg">📅</span>
                  <span className="font-semibold">{ev.label}</span>
                  {ev.time && <span className={d.muted}>· {ev.time}</span>}
                </div>
              ))}
            </div>
          )}

          <div className={`mt-9 flex flex-wrap gap-4 ${d.centered ? "justify-center" : ""}`}>
            {data.primaryCtaLabel && (
              <a
                href={data.primaryCtaUrl || "#register"}
                className="btn text-base text-white shadow-soft transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: d.accent }}
              >
                {data.primaryCtaLabel}
              </a>
            )}
            {data.secondaryCtaLabel && (
              <a
                href={data.secondaryCtaUrl || "#register"}
                className={`btn text-base ${
                  d.isDark ? "border border-white/20 text-white hover:bg-white/10" : "btn-outline"
                }`}
              >
                {data.secondaryCtaLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Reused for "Why Attend", "The IK Edge", and "Market Shift" sections.
function FeatureList({ data }) {
  if (!data) return null;
  const d = resolveDesign(data.design);
  const items = Array.isArray(data.items) ? data.items : [];
  const cols = items.length % 4 === 0 ? "lg:grid-cols-4" : items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <section className={`${d.section} ${d.padding}`}>
      <div className="container-px">
        <div className={`mx-auto flex max-w-2xl flex-col ${d.align}`}>
          {data.eyebrow && (
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: d.accent }}>
              {data.eyebrow}
            </span>
          )}
          {data.heading && (
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{data.heading}</h2>
          )}
          {data.subheading && <p className={`mt-4 ${d.muted}`}>{data.subheading}</p>}
        </div>

        {items.length > 0 && (
          <div className={`mt-12 grid gap-6 sm:grid-cols-2 ${cols}`}>
            {items.map((it, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-7 transition-all hover:-translate-y-1 ${
                  d.isDark
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-ink-900/10 bg-white hover:shadow-card"
                }`}
              >
                {it.icon && (
                  <span
                    className="grid h-12 w-12 place-items-center rounded-xl text-2xl"
                    style={{ backgroundColor: `${d.accent}1a` }}
                  >
                    {it.icon}
                  </span>
                )}
                <h3 className="mt-5 text-lg font-bold">{it.title}</h3>
                {it.description && <p className={`mt-2 text-sm ${d.muted}`}>{it.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Instructor({ data }) {
  if (!data) return null;
  const d = resolveDesign(data.design);
  const highlights = Array.isArray(data.highlights) ? data.highlights : [];
  const initials = (data.name || "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <section className={`${d.section} ${d.padding}`}>
      <div className="container-px">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* portrait */}
          <div className="flex justify-center">
            <div className="relative">
              {data.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data.imageUrl}
                  alt={data.name}
                  className="h-64 w-64 rounded-3xl object-cover shadow-card"
                />
              ) : (
                <div
                  className="grid h-64 w-64 place-items-center rounded-3xl text-6xl font-black text-white shadow-card"
                  style={{ background: `linear-gradient(135deg, ${d.accent}, #19c3a6)` }}
                >
                  {initials}
                </div>
              )}
            </div>
          </div>

          {/* bio */}
          <div>
            {data.eyebrow && (
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: d.accent }}>
                {data.eyebrow}
              </span>
            )}
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">{data.name}</h2>
            {data.title && <p className="mt-1 font-semibold" style={{ color: d.accent }}>{data.title}</p>}
            {data.bio && <p className={`mt-4 ${d.muted}`}>{data.bio}</p>}

            {highlights.length > 0 && (
              <ul className="mt-6 space-y-3">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] text-white"
                      style={{ backgroundColor: d.accent }}
                    >
                      ✓
                    </span>
                    {h.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Credibility({ data }) {
  if (!data) return null;
  const d = resolveDesign(data.design);
  const logos = Array.isArray(data.logos) ? data.logos : [];
  const stats = Array.isArray(data.stats) ? data.stats : [];

  return (
    <section className={`${d.section} ${d.padding}`}>
      <div className="container-px">
        {data.heading && (
          <h2 className="mx-auto max-w-3xl text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
            {data.heading}
          </h2>
        )}

        {logos.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {logos.map((l, i) => (
              <span
                key={i}
                className={`text-xl font-extrabold tracking-tight ${
                  d.isDark ? "text-white/40" : "text-ink-900/30"
                }`}
              >
                {l.name}
              </span>
            ))}
          </div>
        )}

        {stats.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 text-center ${d.isDark ? "bg-white/5" : "bg-brand-50"}`}
              >
                <p className="text-3xl font-extrabold" style={{ color: d.isDark ? "#fff" : d.accent }}>
                  {s.value}
                </p>
                <p className={`mt-1 text-xs ${d.muted}`}>{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Testimonials({ data }) {
  if (!data) return null;
  const d = resolveDesign(data.design);
  const items = Array.isArray(data.items) ? data.items : [];

  return (
    <section className={`${d.section} ${d.padding}`}>
      <div className="container-px">
        <div className={`mx-auto flex max-w-2xl flex-col ${d.align}`}>
          {data.eyebrow && (
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: d.accent }}>
              {data.eyebrow}
            </span>
          )}
          {data.heading && (
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{data.heading}</h2>
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {items.map((t, i) => (
              <figure
                key={i}
                className={`flex flex-col rounded-2xl border p-7 ${
                  d.isDark ? "border-white/10 bg-white/5" : "border-ink-900/10 bg-white shadow-soft"
                }`}
              >
                <div style={{ color: d.accent }}>★★★★★</div>
                <blockquote className="mt-4 flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-current/5 pt-5">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: d.accent }}
                  >
                    {(t.name || "")
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className={`text-xs ${d.muted}`}>
                      {t.role}
                      {t.company ? ` · ${t.company}` : ""}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Free-form copy block (used for the "Who should sign up?" audience section).
function RichSection({ data }) {
  if (!data) return null;
  const d = resolveDesign(data.design);
  const paragraphs = (data.body || "").split("\n").filter(Boolean);

  return (
    <section className={`${d.section} ${d.padding}`}>
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          {data.eyebrow && (
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: d.accent }}>
              {data.eyebrow}
            </span>
          )}
          {data.heading && (
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{data.heading}</h2>
          )}
          {paragraphs.length > 0 && (
            <div className={`mt-6 space-y-4 text-left ${d.muted}`}>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CtaBanner({ data }) {
  if (!data) return null;
  const d = resolveDesign(data.design);

  return (
    <section id="register" className={`${d.section} ${d.padding}`}>
      <div className="container-px">
        <div className="mesh overflow-hidden rounded-3xl px-6 py-14 text-center text-white sm:px-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            {data.heading}
          </h2>
          {data.subheading && (
            <p className="mx-auto mt-4 max-w-xl text-white/75">{data.subheading}</p>
          )}
          {data.ctaLabel && (
            <a
              href={data.ctaUrl || "#"}
              className="btn mt-8 text-base text-ink-900 shadow-soft transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#fff" }}
            >
              {data.ctaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Template
// Renders a fixed set of sections in order; each section only appears if the
// matching component is filled in Strapi, so every page shares the layout while
// content/design vary per page.
// ---------------------------------------------------------------------------

export default function Talent500Template({ page }) {
  const cta = page?.hero?.primaryCtaLabel;
  const ctaUrl = page?.hero?.primaryCtaUrl;

  return (
    <div id="top">
      <MiniHeader ctaLabel={cta} ctaUrl={ctaUrl} />
      <main>
        <Hero data={page.hero} />
        <FeatureList data={page.whyAttend} />
        <Instructor data={page.instructor} />
        <Credibility data={page.credibility} />
        <FeatureList data={page.ikEdge} />
        <Testimonials data={page.testimonials} />
        <RichSection data={page.audience} />
        <FeatureList data={page.marketShift} />
        <CtaBanner data={page.finalCta} />
      </main>
      <MiniFooter />
    </div>
  );
}
