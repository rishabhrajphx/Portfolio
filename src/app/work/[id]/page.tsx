import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.name} — Rishabh Raj`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <>
      <section className="border-b" style={{ borderColor: "var(--line-warm)" }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-14 pb-12">
          <Link
            href="/work"
            className="eyebrow mb-8 inline-flex items-center gap-2 transition-colors duration-150 hover:opacity-70"
          >
            ← Work
          </Link>

          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="font-mono text-sm" style={{ color: "var(--brown-500)" }}>
              {project.number}
            </span>
            <span
              className="font-mono text-[0.6rem] tracking-[0.16em] px-2 py-0.5 border"
              style={{
                color: "var(--amber-500)",
                borderColor: "rgba(200,107,29,0.28)",
                background: "rgba(200,107,29,0.06)",
              }}
            >
              {project.type}
            </span>
          </div>

          <h1
            className="font-display text-[clamp(2.5rem,7vw,5rem)] font-medium tracking-[0.1em] uppercase leading-none mb-6"
            style={{ color: "var(--brown-950)" }}
          >
            {project.name}
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--brown-700)" }}>
            {project.summary}
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Overview</p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--brown-700)" }}>
              {project.description}
            </p>

            {/* Stack */}
            <p className="eyebrow mb-3">Stack</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[0.65rem] tracking-[0.1em] px-3 py-1"
                  style={{
                    color: "var(--brown-700)",
                    background: "rgba(78,55,31,0.07)",
                    border: "1px solid var(--line-warm)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs tracking-[0.14em] uppercase transition-opacity duration-150 hover:opacity-80"
                  style={{
                    background: "var(--amber-500)",
                    color: "var(--sand-100)",
                    border: "1px solid rgba(120,62,18,0.3)",
                  }}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>

          {/* Sidebar metadata */}
          <aside>
            <div className="panel rounded-sm p-5">
              {[
                ["Role", project.role],
                ["Status", project.status],
                ["Type", project.type],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="py-3 border-b last:border-0"
                  style={{ borderColor: "var(--line-warm)" }}
                >
                  <p className="font-mono text-[0.6rem] tracking-[0.14em] uppercase mb-1" style={{ color: "var(--brown-500)" }}>
                    {k}
                  </p>
                  <p className="font-mono text-xs" style={{ color: "var(--brown-900)" }}>
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}
