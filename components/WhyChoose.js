const features = [
  {
    icon: "🎯",
    title: "Practical, industry-first learning",
    desc: "Curriculum built around what FAANG+ companies actually test and what AI teams ship.",
  },
  {
    icon: "🎥",
    title: "Live classes with experts",
    desc: "Learn in real time from engineers who build and hire at top tech companies.",
  },
  {
    icon: "📚",
    title: "40+ customized programs",
    desc: "Specialized tracks for every role, level, and career goal — no one-size-fits-all.",
  },
  {
    icon: "🧠",
    title: "Mock interview sessions",
    desc: "Unlimited mock interviews with detailed feedback to sharpen your performance.",
  },
  {
    icon: "🔀",
    title: "Flexible pathways",
    desc: "Designed for working professionals — learn on a schedule that fits your life.",
  },
  {
    icon: "🤝",
    title: "Comprehensive career support",
    desc: "Resume reviews, referrals, and salary negotiation help until you get the offer.",
  },
];

export default function WhyChoose() {
  return (
    <section className="section bg-white">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Interview Kickstart</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything you need to land the offer
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal group rounded-2xl border border-ink-900/10 bg-white p-7 transition-all hover:border-brand hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl transition-colors group-hover:bg-brand group-hover:text-white">
                {f.icon}
              </span>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-700/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
