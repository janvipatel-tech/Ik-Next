const companies = [
  "Google", "Meta", "Amazon", "Microsoft", "Apple", "Netflix",
  "Uber", "LinkedIn", "Oracle", "GitHub", "Cisco", "Adobe",
  "Atlassian", "Walmart",
];

export default function CompanyLogos() {
  const row = [...companies, ...companies];
  return (
    <section className="border-b border-ink-900/5 bg-white py-12">
      <div className="container-px">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink-700/50">
          Our alumni work at the world&apos;s top companies
        </p>
      </div>
      <div className="no-scrollbar mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-xl font-extrabold tracking-tight text-ink-900/30 transition-colors hover:text-ink-900/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
