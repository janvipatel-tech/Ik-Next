const outlets = ["TIME", "Forbes", "GSV Summit", "CNBC TV18", "Business Insider"];

export default function Press() {
  return (
    <section id="press" className="border-y border-ink-900/5 bg-white py-14">
      <div className="container-px">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink-700/50">
          As featured in
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {outlets.map((o) => (
            <span
              key={o}
              className="text-2xl font-black tracking-tight text-ink-900/30 transition-colors hover:text-ink-900/60"
            >
              {o}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
