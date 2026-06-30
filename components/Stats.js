const stats = [
  { count: 10, suffix: "", prefix: "", label: "Years of proven track record" },
  { count: 25, suffix: "K+", prefix: "", label: "Alumni placed worldwide" },
  { count: 1.2, suffix: "M", prefix: "$", label: "Highest offer received" },
  { count: 700, suffix: "+", prefix: "", label: "FAANG+ mentors" },
  { count: 40, suffix: "+", prefix: "", label: "Specialized courses" },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-ink-900 py-16 text-white">
      <div className="container-px">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-3xl font-extrabold sm:text-4xl"
                data-count={s.count}
                data-suffix={s.suffix}
                data-prefix={s.prefix}
              >
                {s.prefix}0{s.suffix}
              </p>
              <p className="mt-2 text-xs text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
