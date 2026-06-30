const reviews = [
  {
    quote:
      "The mock interviews were brutally honest and exactly what I needed. By the time I sat in front of Google, nothing surprised me. Worth every minute.",
    name: "Ryan M. Lence",
    role: "Software Engineer @ Google",
  },
  {
    quote:
      "I switched from a non-CS background into ML. The structured curriculum and mentor support made an intimidating goal feel completely achievable.",
    name: "Orville Clarke",
    role: "ML Engineer @ Meta",
  },
  {
    quote:
      "The AI agents track is hands-on from day one. I shipped real projects I could talk about in interviews — that's what set me apart.",
    name: "Dwaraknath Bakshi",
    role: "AI Engineer @ Amazon",
  },
  {
    quote:
      "Beyond the tech, the salary negotiation coaching alone paid for the program several times over. I got a 60% bump on my previous offer.",
    name: "Sreekanth Iyer",
    role: "Senior SWE @ Microsoft",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-brand-50/40">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">What our learners say</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Loved by thousands of engineers
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="reveal flex flex-col rounded-2xl border border-ink-900/10 bg-white p-7 shadow-soft"
            >
              <div className="text-accent">★★★★★</div>
              <blockquote className="mt-4 flex-1 text-ink-900/85">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-900/5 pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                  {r.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-bold">{r.name}</p>
                  <p className="text-xs text-ink-700/60">{r.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
