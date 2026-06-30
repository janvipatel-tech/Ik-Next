const paths = [
  {
    tag: "Prep for Interviews",
    duration: "12-week programs · live classes",
    desc: "Crack technical interviews at FAANG+ with structured prep, mock interviews, and offer negotiation.",
    tracks: ["Software Engineering", "Engineering Management", "Data Science & ML", "Front-End Engineering"],
    featured: false,
  },
  {
    tag: "Build AI Agents",
    duration: "7–14 week domain-specific training",
    desc: "Go hands-on building production-grade AI agents, RAG systems, and LLM apps from day one.",
    tracks: ["AI Agents Bootcamp", "Generative AI", "LLM Engineering", "Applied ML"],
    featured: true,
  },
  {
    tag: "Switch to AI",
    duration: "6–12 month comprehensive programs",
    desc: "Make a complete career pivot into AI with end-to-end mentorship and portfolio projects.",
    tracks: ["AI/ML Career Switch", "Data Engineering", "MLOps", "Applied AI for PMs"],
    featured: false,
  },
];

export default function LearningPaths() {
  return (
    <section id="paths" className="section bg-brand-50/40">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Choose a learning path</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Programs designed for every stage of your tech career
          </h2>
          <p className="mt-4 text-ink-700/70">
            Whether you&apos;re prepping for interviews or switching into AI, there&apos;s a
            path built around live instruction and real outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {paths.map((p) => (
            <div
              key={p.tag}
              className={`reveal flex flex-col rounded-3xl border p-7 transition-transform hover:-translate-y-1 ${
                p.featured
                  ? "border-brand bg-ink-900 text-white shadow-card"
                  : "border-ink-900/10 bg-white shadow-soft"
              }`}
            >
              {p.featured && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-extrabold">{p.tag}</h3>
              <p className={`mt-1 text-sm font-semibold ${p.featured ? "text-brand-200" : "text-brand"}`}>
                {p.duration}
              </p>
              <p className={`mt-4 text-sm ${p.featured ? "text-white/70" : "text-ink-700/70"}`}>
                {p.desc}
              </p>

              <ul className="mt-6 space-y-2.5">
                {p.tracks.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm">
                    <span className={`grid h-5 w-5 place-items-center rounded-full text-[10px] ${p.featured ? "bg-accent/20 text-accent" : "bg-brand-50 text-brand"}`}>
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <a
                href="#webinar"
                className={`mt-7 ${p.featured ? "btn bg-white text-ink-900 hover:bg-white/90" : "btn-outline"} w-full`}
              >
                Explore programs
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
