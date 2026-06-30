const stories = [
  { name: "Sanjog Jadhav", from: "Service-based co.", role: "SDE II", company: "Amazon", hike: "+85%" },
  { name: "Angel Calderon", from: "Startup", role: "ML Engineer", company: "Meta", hike: "+120%" },
  { name: "Tomasz Gorka", from: "Mid-size co.", role: "Senior SWE", company: "Google", hike: "+70%" },
  { name: "Joshua Francis", from: "Bootcamp grad", role: "Software Engineer", company: "Microsoft", hike: "+95%" },
];

export default function SuccessStories() {
  return (
    <section id="stories" className="section bg-brand-50/40">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Success stories</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Real people. Real offers. Life-changing outcomes.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((s) => (
            <div
              key={s.name}
              className="reveal rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                  {s.name.split(" ").map((w) => w[0]).join("")}
                </span>
                <div>
                  <p className="text-sm font-bold">{s.name}</p>
                  <p className="text-xs text-ink-700/60">{s.from}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-brand-50 px-4 py-3">
                <div>
                  <p className="text-xs text-ink-700/60">Now at</p>
                  <p className="text-sm font-extrabold text-brand">{s.company}</p>
                  <p className="text-xs text-ink-700/70">{s.role}</p>
                </div>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-sm font-bold text-accent">
                  {s.hike}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
