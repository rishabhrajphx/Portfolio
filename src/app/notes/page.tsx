import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { notes } from "@/data/notes";

export const metadata: Metadata = {
  title: "Notes — Rishabh Raj",
  description: "Writing on software, building things, and everything adjacent.",
};

export default function NotesPage() {
  return (
    <>
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

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col divide-y" style={{ borderColor: "var(--line-warm)" }}>
          {notes.map((note) => (
            <article key={note.slug} className="py-8 group">
              <Link href={`/notes/${note.slug}`} className="block">
                <div className="flex items-center gap-3 mb-3">
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
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
