import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Notes — Rishabh Raj",
  description: "Writing on software, tools, systems, and the things adjacent to building.",
};

const notes = [
  {
    slug: "#",
    date: "Coming Soon",
    title: "Software Is Toolmaking",
    summary:
      "Every line of code is an attempt to shape something useful out of raw material. The oldest engineers didn't write — they knapped.",
    tags: ["philosophy", "engineering"],
  },
  {
    slug: "#",
    date: "Coming Soon",
    title: "What Flint-knapping Taught Me About Debugging",
    summary:
      "You can't un-strike a flake. You can't undo a bad commit in prod. Both teach you to understand before you act.",
    tags: ["debugging", "craftsmanship"],
  },
  {
    slug: "#",
    date: "Coming Soon",
    title: "Why Voice AI Needs Tools",
    summary:
      "A voice model without tools is a very expensive parrot. Real utility starts when the model can act on the world.",
    tags: ["ai", "voice", "tool-calling"],
  },
  {
    slug: "#",
    date: "Coming Soon",
    title: "Building a Homelab in the Desert Heat",
    summary:
      "Thermal management, cable management, and the surprisingly useful lessons you learn when your cluster shares a room with a climbing rack.",
    tags: ["infra", "homelab", "hardware"],
  },
  {
    slug: "#",
    date: "Coming Soon",
    title: "Climbing Routes and Graph Search",
    summary:
      "Route-finding on rock is a graph traversal problem. The heuristics you develop in the field translate to better algorithm intuition at a desk.",
    tags: ["algorithms", "climbing", "systems"],
  },
];

export default function NotesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative border-b" style={{ borderColor: "var(--line-warm)" }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-14">
          <p className="eyebrow mb-4">/ Field Notes</p>
          <h1
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-[0.1em] uppercase leading-none mb-4"
            style={{ color: "var(--brown-950)" }}
          >
            Notes
          </h1>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: "var(--brown-700)" }}>
            Writing on software, tools, systems, and the things adjacent to building.
          </p>
        </div>
      </section>

      {/* Notes list */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col divide-y" style={{ borderColor: "var(--line-warm)" }}>
          {notes.map((note, i) => (
            <article key={i} className="py-8 group">
              <a href={note.slug} className="block" aria-disabled={note.slug === "#"}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-mono text-[0.6rem] tracking-[0.12em]" style={{ color: "var(--brown-500)" }}>
                    {note.date}
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
                  className="font-display text-lg md:text-xl font-medium tracking-[0.06em] uppercase mb-2 transition-colors duration-150 group-hover:text-[var(--amber-500)]"
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

        <div
          className="mt-6 panel rounded-sm p-5 text-center"
          style={{ maxWidth: "480px" }}
        >
          <p className="font-mono text-xs tracking-[0.1em]" style={{ color: "var(--brown-500)" }}>
            Notes are in progress. Check back soon.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
