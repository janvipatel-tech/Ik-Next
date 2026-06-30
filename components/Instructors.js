const instructors = [
  { name: "Ahsan Ali", title: "Senior Applied Scientist", company: "Amazon" },
  { name: "Michael Frasco", title: "Staff ML Engineer", company: "Netflix" },
  { name: "Alex Mitchell", title: "Engineering Manager", company: "Google" },
  { name: "Ashish Desai", title: "Principal Engineer", company: "Microsoft" },
  { name: "Jacob Markus", title: "Senior SWE", company: "Meta" },
  { name: "Vijay Swamy", title: "Lead Data Scientist", company: "Uber" },
];

export default function Instructors() {
  return (
    <section id="instructors" className="section bg-white">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Learn from the best</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Experts who build and hire at FAANG+
          </h2>
          <p className="mt-4 text-ink-700/70">
            Every instructor is an active engineer or hiring manager at a top tech company.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((p) => (
            <div
              key={p.name}
              className="reveal flex items-center gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft transition-all hover:border-brand hover:shadow-card"
            >
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-400 text-xl font-bold text-white">
                {p.name.split(" ").map((w) => w[0]).join("")}
              </span>
              <div>
                <p className="text-base font-bold">{p.name}</p>
                <p className="text-sm text-ink-700/70">{p.title}</p>
                <p className="text-sm font-semibold text-brand">{p.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
