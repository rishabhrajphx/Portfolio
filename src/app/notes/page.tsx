import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Notes — Rishabh Raj",
  description: "Writing on software, building things, and everything adjacent.",
};

const notes = [
  {
    slug: "#",
    title: "Software Is Toolmaking",
    summary:
      "Flint-knapping is the oldest engineering discipline. Stone, then bronze, then steel, then silicon. The medium changes. The loop stays the same.",
    tags: ["philosophy", "engineering"],
  },
  {
    slug: "#",
    title: "What Flint-knapping Taught Me About Debugging",
    summary:
      "You cannot un-strike a flake. One bad hit and you're making a scraper instead of a point. I think about irreversibility every time I'm about to touch production.",
    tags: ["debugging", "craftsmanship"],
  },
  {
    slug: "#",
    title: "Why Voice AI Needs Tools",
    summary:
      "I spent a month building a voice assistant that could not do anything useful. It was very good at sounding capable. Adding tool calls changed everything.",
    tags: ["ai", "voice", "tool-calling"],
  },
  {
    slug: "#",
    title: "Building a Homelab in the Desert Heat",
    summary:
      "Running a server rack in a Phoenix apartment has a real thermal problem. Here is what I got wrong first, and what I changed.",
    tags: ["infra", "homelab", "hardware"],
  },
  {
    slug: "#",
    title: "Climbing Routes and Graph Search",
    summary:
      "A climbing route is a graph. Holds are nodes, body position is state. Once I started thinking about it that way, both problems got easier.",
    tags: ["algorithms", "climbing"],
  },
];

export default function NotesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative border-b" style={{ borderColor: "var(--line-warm)" }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-14">
          <p className="eyebrow mb-4">/ Notes</p>
          <h1
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-[0.1em] uppercase leading-none mb-4"
            style={{ color: "var(--brown-950)" }}
          >
            Notes
          </h1>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: "var(--brown-700)" }}>
            Writing on software, building things, and everything adjacent.
          </p>
        </div>
      </section>

      {/* Notes list */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col divide-y" style={{ borderColor: "var(--line-warm)" }}>
          {notes.map((note, i) => (
            <article key={i} className="py-8 group">
              <a href={note.slug} className="block" aria-disabled={note.slug === "#"}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="font-mono text-[0.58rem] tracking-[0.14em] uppercase px-1.5 py-0.5"
                    style={{
                      color: "var(--amber-500)",
                      border: "1px solid rgba(200,107,29,0.28)",
                      background: "rgba(200,107,29,0.06)",
                    }}
                  >
                    Upcoming
                  </span>
                  {note.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.58rem] tracking-[0.12em] uppercase px-1.5 py-0.5"
                      style={{
                        color: "var(--brown-500)",
                        border: "1px solid var(--line-warm)",
                        background: "rgba(78,55,31,0.04)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2
                  className="font-display text-lg md:text-xl font-medium tracking-[0.06em] uppercase mb-2"
                  style={{ color: "var(--brown-950)" }}
                >
                  {note.title}
                </h2>
                <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--brown-700)" }}>
                  {note.summary}
                </p>
              </a>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
