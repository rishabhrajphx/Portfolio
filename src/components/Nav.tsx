"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useCallback } from "react";

const links = [
  { href: "/systems", label: "Work" },
  { href: "/field-work", label: "Experience" },
  { href: "/notes", label: "Notes" },
  { href: "/life", label: "Life" },
  { href: "/machine", label: "Resume" },
];

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*";
const SHORT   = "RR";
const FULL    = "RISHABH RAJ";

function useScramble() {
  const [text, setText] = useState(SHORT);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrambleTo = useCallback((target: string) => {
    if (timer.current) clearInterval(timer.current);
    let frame = 0;
    const totalFrames = target.length * 4; // frames before fully locked
    timer.current = setInterval(() => {
      const progress = frame / 4; // chars locked per frame-group
      setText(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < progress) return target[i];
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );
      frame++;
      if (frame > totalFrames) {
        setText(target);
        clearInterval(timer.current!);
        timer.current = null;
      }
    }, 32);
  }, []);

  return { text, scrambleTo };
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { text: brandText, scrambleTo } = useScramble();

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
          {/* Brand — scrambles RR → RISHABH RAJ on hover */}
          <Link
            href="/"
            className="font-display font-medium tracking-[0.18em] text-sm uppercase select-none"
            style={{ color: "var(--brown-900)", minWidth: "2.5rem" }}
            onMouseEnter={() => scrambleTo(FULL)}
            onMouseLeave={() => scrambleTo(SHORT)}
            onFocus={() => scrambleTo(FULL)}
            onBlur={() => scrambleTo(SHORT)}
            aria-label="Rishabh Raj — home"
          >
            <span className="hidden sm:inline" style={{ color: "var(--amber-500)" }}>
              [-/&nbsp;
            </span>
            <span
              className="font-mono inline-block transition-none"
              style={{ color: "var(--brown-900)", letterSpacing: "0.14em" }}
            >
              {brandText}
            </span>
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
                  style={{ color: active ? "var(--amber-500)" : "var(--brown-700)" }}
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
            {[
              open ? "translateY(6px) rotate(45deg)" : "none",
              null,
              open ? "translateY(-6px) rotate(-45deg)" : "none",
            ].map((transform, i) =>
              transform === null ? (
                <span
                  key={i}
                  className="block w-5 h-px transition-all duration-200"
                  style={{ background: "var(--brown-700)", opacity: open ? 0 : 1 }}
                />
              ) : (
                <span
                  key={i}
                  className="block w-5 h-px transition-all duration-200"
                  style={{ background: "var(--brown-700)", transform }}
                />
              )
            )}
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
