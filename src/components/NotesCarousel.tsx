"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { Note } from "@/data/notes";

/* Deep iridescent panels — Annihilation oil-slick, jewel-toned.
   Each note gets a theme; cream text rides on top of every one. */
type Theme = {
  panel: string;
  glow: string;
  accent: string;
};

const themes: Theme[] = [
  {
    // Violet / lilac
    panel: "linear-gradient(135deg, #241d3d 0%, #3d2f63 52%, #5a4488 100%)",
    glow:
      "radial-gradient(60% 80% at 80% 15%, rgba(180,150,255,0.55) 0%, transparent 60%), radial-gradient(50% 60% at 10% 90%, rgba(120,210,230,0.40) 0%, transparent 60%)",
    accent: "#dcceff",
  },
  {
    // Teal / cyan
    panel: "linear-gradient(135deg, #0f2f38 0%, #15454f 50%, #1f6f78 100%)",
    glow:
      "radial-gradient(60% 80% at 78% 18%, rgba(130,235,240,0.50) 0%, transparent 60%), radial-gradient(55% 65% at 8% 88%, rgba(170,235,200,0.38) 0%, transparent 62%)",
    accent: "#d7f3f4",
  },
  {
    // Amber / rose — warm desert tie-in
    panel: "linear-gradient(135deg, #3d1d18 0%, #6e3320 50%, #bd5a2c 100%)",
    glow:
      "radial-gradient(60% 80% at 80% 16%, rgba(255,200,120,0.50) 0%, transparent 60%), radial-gradient(55% 65% at 10% 90%, rgba(240,160,200,0.40) 0%, transparent 62%)",
    accent: "#f3d8e7",
  },
  {
    // Mint / green
    panel: "linear-gradient(135deg, #122e26 0%, #1f4d3a 50%, #357d5a 100%)",
    glow:
      "radial-gradient(60% 80% at 78% 18%, rgba(170,240,205,0.48) 0%, transparent 60%), radial-gradient(55% 65% at 8% 88%, rgba(130,220,235,0.38) 0%, transparent 62%)",
    accent: "#ddf2e6",
  },
];

export default function NotesCarousel({ notes }: { notes: Note[] }) {
  const [index, setIndex] = useState(0);
  const count = notes.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  return (
    <div className="w-full">
      {/* Viewport */}
      <div
        className="relative overflow-hidden rounded-[20px]"
        style={{ border: "1px solid var(--line-warm)" }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Notes"
      >
        <div
          className="flex transition-transform duration-[600ms]"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {notes.map((note, i) => {
            const theme = themes[i % themes.length];
            return (
              <article
                key={note.slug}
                className="min-w-full"
                aria-hidden={i !== index}
              >
                <div
                  className="relative flex flex-col justify-between min-h-[540px] md:min-h-[600px] p-8 md:p-14 overflow-hidden"
                  style={{ background: theme.panel }}
                >
                  {/* Iridescent overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: theme.glow,
                      mixBlendMode: "overlay",
                      filter: "blur(8px)",
                    }}
                  />
                  {/* Fine grid texture */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none opacity-[0.12]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                      backgroundSize: "56px 56px",
                      maskImage:
                        "radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 80%)",
                      WebkitMaskImage:
                        "radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 80%)",
                    }}
                  />

                  {/* Top row */}
                  <div className="relative flex items-center justify-between gap-4">
                    <span
                      className="font-mono text-[0.7rem] tracking-[0.2em] shrink-0 whitespace-nowrap"
                      style={{ color: "rgba(255,248,236,0.65)" }}
                    >
                      {String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                    </span>
                    <div className="flex flex-wrap justify-end gap-2">
                      {note.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[0.58rem] tracking-[0.14em] uppercase px-2 py-0.5 rounded-full"
                          style={{
                            color: "rgba(255,248,236,0.85)",
                            border: "1px solid rgba(255,248,236,0.28)",
                            background: "rgba(255,248,236,0.06)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="relative mt-10 md:mt-0">
                    <p
                      className="font-mono text-[0.62rem] tracking-[0.18em] uppercase mb-4"
                      style={{ color: theme.accent }}
                    >
                      {note.date}
                    </p>
                    <Link href={`/notes/${note.slug}`} className="group block">
                      <h3
                        className="font-display font-medium tracking-[0.04em] uppercase leading-[0.98] mb-6 transition-opacity duration-200 group-hover:opacity-80"
                        style={{
                          color: "var(--sand-100)",
                          fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
                        }}
                      >
                        {note.title}
                      </h3>
                    </Link>
                    <p
                      className="text-base md:text-lg leading-relaxed max-w-2xl mb-8"
                      style={{ color: "rgba(255,248,236,0.82)" }}
                    >
                      {note.summary}
                    </p>
                    <Link
                      href={`/notes/${note.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs tracking-[0.14em] uppercase transition-all duration-200"
                      style={{
                        color: "var(--sand-100)",
                        border: "1px solid rgba(255,248,236,0.4)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--sand-100)";
                        e.currentTarget.style.color = "#1f1711";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--sand-100)";
                      }}
                    >
                      Read note
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {notes.map((note, i) => (
            <button
              key={note.slug}
              onClick={() => go(i)}
              aria-label={`Go to ${note.title}`}
              aria-current={i === index}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? "28px" : "8px",
                background:
                  i === index ? "var(--amber-500)" : "var(--line-warm-strong)",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous note"
            className="w-11 h-11 rounded-full flex items-center justify-center font-mono text-sm transition-colors duration-150 hover:border-[var(--brown-700)]"
            style={{
              border: "1px solid var(--line-warm-strong)",
              color: "var(--brown-700)",
            }}
          >
            ←
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next note"
            className="w-11 h-11 rounded-full flex items-center justify-center font-mono text-sm transition-colors duration-150 hover:border-[var(--brown-700)]"
            style={{
              border: "1px solid var(--line-warm-strong)",
              color: "var(--brown-700)",
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
