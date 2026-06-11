"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/systems", label: "Work" },
  { href: "/field-work", label: "Experience" },
  { href: "/notes", label: "Notes" },
  { href: "/life", label: "Life" },
  { href: "/machine", label: "Resume" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full">
      <div
        className="panel border-x-0 border-t-0"
        style={{ borderBottom: "1px solid var(--line-warm)" }}
      >
        <div
          className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between"
          style={{ height: "56px" }}
        >
          {/* Brand */}
          <Link
            href="/"
            className="font-display font-medium tracking-[0.18em] text-sm uppercase"
            style={{ color: "var(--brown-900)" }}
          >
            <span className="hidden sm:inline" style={{ color: "var(--amber-500)" }}>
              [-/&nbsp;
            </span>
            <span>RR</span>
            <span className="hidden sm:inline" style={{ color: "var(--amber-500)" }}>
              &nbsp;]
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {links.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className="font-mono text-xs tracking-[0.14em] uppercase transition-colors duration-150 relative"
                  style={{
                    color: active ? "var(--amber-500)" : "var(--brown-700)",
                  }}
                >
                  {label}
                  {active && (
                    <span
                      className="absolute -bottom-[1px] left-0 right-0 h-px"
                      style={{ background: "var(--amber-500)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className="block w-5 h-px transition-all duration-200"
              style={{
                background: "var(--brown-700)",
                transform: open ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-5 h-px transition-all duration-200"
              style={{
                background: "var(--brown-700)",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-px transition-all duration-200"
              style={{
                background: "var(--brown-700)",
                transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div
          className="md:hidden absolute top-full left-0 right-0 panel border-x-0 border-t-0 py-4 px-6 flex flex-col gap-4"
          style={{ zIndex: 99 }}
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs tracking-[0.14em] uppercase py-1"
                style={{ color: active ? "var(--amber-500)" : "var(--brown-700)" }}
              >
                {active && <span className="mr-2">›</span>}
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
