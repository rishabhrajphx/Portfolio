export default function Footer() {
  const links = [
    { label: "GitHub", href: "https://github.com/rishabhrajphx" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rishabhrajcs/" },
    { label: "Letterboxd", href: "https://letterboxd.com" },
    { label: "Email", href: "mailto:raj@rishabhraj.net" },
  ];

  return (
    <footer className="relative z-10 mt-24 border-t" style={{ borderColor: "var(--line-warm)" }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* Coordinates block */}
          <div>
            <p
              className="font-mono text-[0.6rem] tracking-[0.18em] uppercase mb-2"
              style={{ color: "var(--amber-500)" }}
            >
              Coordinates
            </p>
            <p
              className="font-mono text-xs tracking-[0.1em]"
              style={{ color: "var(--brown-700)" }}
            >
              33.4207° N, 111.9340° W
            </p>
            <p
              className="font-mono text-xs tracking-[0.1em]"
              style={{ color: "var(--brown-500)" }}
            >
              Tempe, AZ / MST
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-5" aria-label="Social links">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-150 hover:text-[var(--amber-500)]"
                style={{ color: "var(--brown-500)" }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderColor: "var(--line-warm)" }}
        >
          <p
            className="font-mono text-[0.6rem] tracking-[0.12em]"
            style={{ color: "var(--brown-500)" }}
          >
            RISHABH RAJ
          </p>
          <div className="flex gap-4">
            <a
              href="/machine"
              className="font-mono text-[0.6rem] tracking-[0.12em] uppercase transition-colors duration-150 hover:text-[var(--amber-500)]"
              style={{ color: "var(--brown-500)" }}
            >
              /machine
            </a>
            <a
              href="/sitemap.xml"
              className="font-mono text-[0.6rem] tracking-[0.12em] uppercase transition-colors duration-150 hover:text-[var(--amber-500)]"
              style={{ color: "var(--brown-500)" }}
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
