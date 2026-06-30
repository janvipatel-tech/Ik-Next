const navItems = [
  { label: "Courses", href: "#paths" },
  { label: "Masterclass", href: "#webinar" },
  { label: "Instructors", href: "#instructors" },
  { label: "Resources", href: "#stories" },
  { label: "For Business", href: "#press" },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white font-black">
        IK
      </span>
      <span className="text-lg font-extrabold tracking-tight text-ink-900">
        Interview<span className="text-brand">Kickstart</span>
      </span>
    </a>
  );
}

export default function Header() {
  return (
    <header
      id="site-header"
      className="fixed inset-x-0 top-0 z-50 bg-white/85 backdrop-blur-md transition-shadow"
    >
      <div className="container-px flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-ink-700 transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#webinar" className="text-sm font-semibold text-ink-700 hover:text-brand">
            Login
          </a>
          <a href="#paths" className="btn-outline">
            Build AI Agents
          </a>
          <a href="#webinar" className="btn-primary">
            Join Next Webinar
          </a>
        </div>

        <button
          data-nav-toggle
          aria-label="Toggle navigation"
          className="grid h-10 w-10 place-items-center rounded-lg border border-ink-900/10 lg:hidden"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {/* mobile nav */}
      <div id="mobile-nav" className="hidden border-t border-ink-900/5 bg-white lg:hidden">
        <div className="container-px flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-700 hover:bg-brand-50 hover:text-brand"
            >
              {item.label}
            </a>
          ))}
          <a href="#webinar" className="btn-primary mt-3 w-full">
            Join Next Webinar
          </a>
        </div>
      </div>
    </header>
  );
}
