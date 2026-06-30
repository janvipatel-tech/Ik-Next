const heroStats = [
  { value: "$300,000+", label: "Average salary after the program" },
  { value: "25,000+", label: "Professionals trained worldwide" },
  { value: "60%+", label: "Average salary increase" },
];

export default function Hero() {
  return (
    <section id="top" className="mesh relative overflow-hidden pt-28 pb-24 text-white">
      <div className="container-px relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* copy */}
        <div className="reveal max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide">
            🚀 New · Build production-ready AI Agents
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Build AI skills that get you{" "}
            <span className="bg-gradient-to-r from-brand-300 to-accent bg-clip-text text-transparent">
              hired at FAANG+
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Learn real-world AI skills from FAANG+ experts. Live classes, hands-on
            projects, mock interviews, and end-to-end career support to land your
            dream role in tech.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#webinar" className="btn-primary text-base">
              Join the next webinar
            </a>
            <a href="#paths" className="btn-ghost text-base">
              Explore courses
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-white/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* visual card */}
        <div className="reveal relative">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white/70">
                Live cohort · AI Engineering
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                Live now
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {[
                ["Foundations of LLMs", "Week 1–3"],
                ["Building AI Agents", "Week 4–7"],
                ["System design for AI", "Week 8–10"],
                ["Mock interviews + offers", "Week 11–12"],
              ].map(([title, weeks], i) => (
                <div
                  key={title}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                >
                  <span className="flex items-center gap-3 text-sm font-medium">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-xs font-bold">
                      {i + 1}
                    </span>
                    {title}
                  </span>
                  <span className="text-xs text-white/50">{weeks}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-gradient-to-r from-brand-500/30 to-accent/20 px-4 py-3">
              <div className="flex -space-x-2">
                {["A", "M", "S", "J"].map((c) => (
                  <span
                    key={c}
                    className="grid h-8 w-8 place-items-center rounded-full border-2 border-ink-900 bg-brand text-xs font-bold"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <span className="text-xs text-white/80">
                700+ FAANG mentors guiding every cohort
              </span>
            </div>
          </div>

          <div className="absolute -right-4 -top-4 rounded-2xl bg-white px-4 py-3 text-ink-900 shadow-card">
            <p className="text-xs font-semibold text-brand">Highest offer</p>
            <p className="text-xl font-extrabold">$1.2M</p>
          </div>
        </div>
      </div>
    </section>
  );
}
