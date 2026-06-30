const columns = [
  {
    title: "Programs",
    links: ["Interview Prep", "Build AI Agents", "Switch to AI", "Data Science", "Engineering Management"],
  },
  {
    title: "Company",
    links: ["About us", "Instructors", "Success stories", "For Business", "Careers"],
  },
  {
    title: "Resources",
    links: ["Blog", "Free webinars", "Interview guides", "Salary reports", "FAQ"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand font-black">IK</span>
              <span className="text-lg font-extrabold">
                Interview<span className="text-brand-300">Kickstart</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/55">
              Real-world AI and interview skills taught by FAANG+ experts. Build the career
              you deserve.
            </p>
            <div className="mt-6 flex gap-3">
              {["in", "𝕏", "f", "▶"].map((s) => (
                <a
                  key={s}
                  href="#top"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-sm transition-colors hover:bg-brand"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/80">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-white/55 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Interview Kickstart. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-white">Privacy Policy</a>
            <a href="#top" className="hover:text-white">Terms of Service</a>
            <a href="#top" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
