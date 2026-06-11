import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import TopoSVG from "@/components/TopoSVG";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Rishabh Raj",
  description: "Projects built across AI agents, mobile, infrastructure, and automation.",
};

export default function SystemsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b" style={{ borderColor: "var(--line-warm)" }}>
        <div className="absolute inset-0 flex items-end pointer-events-none opacity-60">
          <TopoSVG className="w-full h-auto" spectral={false} />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-14 relative">
          <p className="eyebrow mb-4">/ Work</p>
          <h1
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-[0.1em] uppercase leading-none mb-4"
            style={{ color: "var(--brown-950)" }}
          >
            Work
          </h1>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: "var(--brown-700)" }}>
            Practical tools, not demos. Each project solves a real problem for real people.
          </p>
        </div>
      </section>

      {/* Filter row — static labels for now */}
      <div
        className="sticky top-[56px] z-30 border-b"
        style={{
          borderColor: "var(--line-warm)",
          background: "var(--glass-strong)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-3 flex gap-4 flex-wrap">
          {["ALL", "AI", "TOOL", "APP", "INFRA"].map((t) => (
            <span
              key={t}
              className="font-mono text-[0.6rem] tracking-[0.16em] px-3 py-1 cursor-default"
              style={{
                color: t === "ALL" ? "var(--amber-500)" : "var(--brown-500)",
                border: t === "ALL" ? "1px solid rgba(200,107,29,0.4)" : "1px solid transparent",
                background: t === "ALL" ? "rgba(200,107,29,0.06)" : "transparent",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Project grid */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
