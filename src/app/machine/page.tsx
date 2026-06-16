import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { experience, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "Resume — Rishabh Raj",
  description:
    "Resume for Rishabh Raj — engineer building AI systems, mobile apps, and infrastructure tools.",
};

export default function MachinePage() {
  return (
    <>
      {/* Header */}
      <section className="relative border-b" style={{ borderColor: "var(--line-warm)" }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-12">
          <p className="eyebrow mb-4">Resume</p>
          <h1
            className="font-display text-[clamp(2rem,6vw,4.5rem)] font-medium tracking-[0.1em] uppercase leading-none mb-3"
            style={{ color: "var(--brown-950)" }}
          >
            Rishabh Raj
          </h1>
          <p className="font-mono text-sm tracking-[0.08em]" style={{ color: "var(--brown-700)" }}>
            Software Engineer · AI Systems / Full-Stack / iOS / Infrastructure
          </p>
          <p className="font-mono text-xs mt-1" style={{ color: "var(--brown-500)" }}>
            Tempe, AZ · rraj31@asu.edu
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://github.com/rraj31"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-150"
              style={{ color: "var(--amber-500)" }}
            >
              GitHub →
            </a>
            <a
              href="https://linkedin.com/in/rishabhraj31"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-150"
              style={{ color: "var(--amber-500)" }}
            >
              LinkedIn →
            </a>
            <a
              href="/resume.json"
              className="font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-150"
              style={{ color: "var(--brown-500)" }}
            >
              resume.json
            </a>
            <a
              href="/projects.json"
              className="font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-150"
              style={{ color: "var(--brown-500)" }}
            >
              projects.json
            </a>
            <a
              href="/llms.txt"
              className="font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-150"
              style={{ color: "var(--brown-500)" }}
            >
              llms.txt
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 flex flex-col gap-14">
        {/* Bio */}
        <div>
          <p className="eyebrow mb-4">About</p>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--brown-700)" }}>
            Software engineer based in Tempe, AZ. I build practical tools for humans, teams, and machines —
            working across AI agents, mobile applications, automation systems, and infrastructure. I turn messy
            workflows into systems that people actually use. Outside code, I climb, row, knapp stone, cycle,
            and watch films.
          </p>
        </div>

        {/* Skills */}
        <div>
          <p className="eyebrow mb-5">Skills</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { cat: "AI / ML", items: ["OpenAI APIs", "LangChain", "PyTorch", "Whisper", "Tool Calling", "RAG", "OCR"] },
              { cat: "Languages", items: ["Python", "TypeScript", "Swift", "Go", "SQL", "Bash"] },
              { cat: "Frontend", items: ["React", "Next.js", "SwiftUI", "Tailwind CSS"] },
              { cat: "Backend", items: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "WebSockets"] },
              { cat: "Infrastructure", items: ["Kubernetes", "Docker", "AWS", "Linux", "Terraform", "Tailscale"] },
              { cat: "Tooling", items: ["Git", "Grafana", "Prometheus", "Tesseract", "Jupyter"] },
            ].map(({ cat, items }) => (
              <div key={cat} className="panel rounded-sm p-4">
                <p className="font-mono text-[0.6rem] tracking-[0.16em] uppercase mb-2" style={{ color: "var(--amber-500)" }}>
                  {cat}
                </p>
                <p className="font-mono text-xs leading-relaxed" style={{ color: "var(--brown-700)" }}>
                  {items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <p className="eyebrow mb-5">Projects</p>
          <div className="flex flex-col gap-4">
            {projects.map((p) => (
              <div key={p.id} className="panel rounded-sm p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[0.6rem] tracking-[0.16em] uppercase px-2 py-0.5 border" style={{ color: "var(--amber-500)", borderColor: "rgba(200,107,29,0.28)", background: "rgba(200,107,29,0.06)" }}>
                    {p.type}
                  </span>
                  <span className="font-mono text-[0.6rem] tracking-[0.1em]" style={{ color: "var(--brown-500)" }}>
                    {p.status}
                  </span>
                </div>
                <h2
                  className="font-display text-sm font-medium tracking-[0.08em] uppercase mb-1"
                  style={{ color: "var(--brown-950)" }}
                >
                  {p.name}
                </h2>
                <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--brown-700)" }}>
                  {p.summary}
                </p>
                <p className="font-mono text-[0.62rem]" style={{ color: "var(--brown-500)" }}>
                  {p.stack.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <p className="eyebrow mb-5">Experience</p>
          <div className="flex flex-col gap-4">
            {experience.map((role, i) => (
              <div key={i} className="panel rounded-sm p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h2 className="font-display text-sm font-medium tracking-[0.06em] uppercase" style={{ color: "var(--brown-950)" }}>
                      {role.role}
                    </h2>
                    <p className="font-mono text-xs" style={{ color: "var(--brown-700)" }}>
                      {role.org} · {role.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs shrink-0" style={{ color: "var(--brown-500)" }}>
                    {role.start}–{role.end}
                  </span>
                </div>
                <ul className="space-y-1 mb-3">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="text-sm" style={{ color: "var(--brown-700)" }}>
                      · {b}
                    </li>
                  ))}
                </ul>
                <p className="font-mono text-[0.62rem]" style={{ color: "var(--brown-500)" }}>
                  {role.stack.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <p className="eyebrow mb-4">Education</p>
          <div className="panel rounded-sm p-5 max-w-xl">
            <h2 className="font-display text-sm font-medium tracking-[0.06em] uppercase mb-1" style={{ color: "var(--brown-950)" }}>
              {education.degree}
            </h2>
            <p className="font-mono text-xs mb-0.5" style={{ color: "var(--brown-700)" }}>
              {education.institution} · {education.location}
            </p>
            <p className="font-mono text-xs mb-2" style={{ color: "var(--brown-500)" }}>
              {education.start}–{education.end}
            </p>
            <p className="text-sm" style={{ color: "var(--brown-700)" }}>
              {education.notes}
            </p>
          </div>
        </div>

        {/* Last updated */}
        <p className="font-mono text-[0.6rem] tracking-[0.12em]" style={{ color: "var(--brown-500)" }}>
          Last updated: 2026-05-18
        </p>
      </section>

      <Footer />
    </>
  );
}
