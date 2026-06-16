import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { notes } from "@/data/notes";

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
  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();

  return (
    <>
      <section className="border-b" style={{ borderColor: "var(--line-warm)" }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-14 pb-12">
          <Link
            href="/notes"
            className="eyebrow mb-8 inline-flex items-center gap-2 transition-opacity duration-150 hover:opacity-70"
          >
            ← Notes
          </Link>

          <div className="flex items-center gap-3 mt-6 mb-6">
            <span className="font-mono text-xs tracking-[0.12em]" style={{ color: "var(--brown-500)" }}>
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

          <h1
            className="font-display text-[clamp(2rem,6vw,4.5rem)] font-medium tracking-[0.1em] uppercase leading-none"
            style={{ color: "var(--brown-950)" }}
          >
            {note.title}
          </h1>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-2xl">
          {note.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--brown-700)" }}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
