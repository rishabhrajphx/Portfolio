import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { notes, themeForIndex } from "@/data/notes";

export async function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return {};
  return {
    title: `${note.title} — Rishabh Raj`,
    description: note.summary,
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = notes.findIndex((n) => n.slug === slug);
  if (index === -1) notFound();

  const note = notes[index];
  const theme = themeForIndex(index);
  const next = notes[(index + 1) % notes.length];

  return (
    <>
      {/* ── Themed hero — full bleed colour block ─────────────────────── */}
      <section
        className="relative overflow-hidden"
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
        <div className="relative max-w-[1100px] mx-auto px-4 md:px-8 lg:px-12 pt-12 pb-16 md:pt-16 md:pb-24">
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.18em] uppercase transition-opacity duration-150 hover:opacity-70"
            style={{ color: "rgba(255,248,236,0.7)" }}
          >
            ← All notes
          </Link>

          <div className="mt-12 md:mt-20 flex flex-wrap items-center gap-3">
            <span
              className="font-mono text-[0.62rem] tracking-[0.2em] uppercase"
              style={{ color: theme.accent }}
            >
              {note.date}
            </span>
            <span style={{ color: "rgba(255,248,236,0.35)" }}>·</span>
            {note.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[0.58rem] tracking-[0.14em] uppercase px-2 py-0.5 rounded-full"
                style={{
                  color: "rgba(255,248,236,0.85)",
                  border: "1px solid rgba(255,248,236,0.28)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <h1
            className="mt-5 font-display font-medium tracking-[0.03em] uppercase leading-[0.98] max-w-4xl"
            style={{
              color: "var(--sand-100)",
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
            }}
          >
            {note.title}
          </h1>
        </div>
      </section>

      {/* ── Editorial body ────────────────────────────────────────────── */}
      <section className="max-w-[720px] mx-auto px-4 md:px-8 lg:px-12 py-14 md:py-20">
        {note.paragraphs.map((p, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "text-xl md:text-2xl leading-[1.6] mb-8"
                : "text-base md:text-lg leading-[1.85] mb-6"
            }
            style={{ color: i === 0 ? "var(--brown-900)" : "var(--brown-700)" }}
          >
            {p}
          </p>
        ))}
      </section>

      {/* ── Next note ─────────────────────────────────────────────────── */}
      {next.slug !== note.slug && (
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 lg:px-12 pb-8">
          <Link
            href={`/notes/${next.slug}`}
            className="group block rounded-[16px] p-6 md:p-8 transition-colors duration-200"
            style={{ border: "1px solid var(--line-warm)" }}
          >
            <p className="eyebrow mb-3">Next</p>
            <div className="flex items-center justify-between gap-6">
              <h2
                className="font-display text-xl md:text-2xl font-medium tracking-[0.05em] uppercase transition-colors duration-150 group-hover:text-[var(--amber-500)]"
                style={{ color: "var(--brown-950)" }}
              >
                {next.title}
              </h2>
              <span
                className="font-mono text-lg shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: "var(--amber-500)" }}
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </Link>
        </section>
      )}

      <Footer />
    </>
  );
}
