import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { experience, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience — Rishabh Raj",
  description: "Roles, internships, and what I built at each one.",
};

export default function ExperiencePage() {
  return (
    <>
      {/* Header */}
      <section className="relative border-b" style={{ borderColor: "var(--line-warm)" }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-14">
          <p className="eyebrow mb-4">/ Experience</p>
          <h1
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-[0.1em] uppercase leading-none mb-4"
            style={{ color: "var(--brown-950)" }}
          >
            Experience
          </h1>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: "var(--brown-700)" }}>
            Where I've worked and what I built there.
          </p>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--line-warm)" }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10">
            {experience.map((role, i) => (
              <article
                key={i}
                className="relative md:flex gap-8"
              >
                {/* Date column */}
                <div className="md:w-[200px] shrink-0 pb-2 md:pb-0 md:text-right md:pr-8">
                  <span
                    className="font-mono text-xs tracking-[0.12em]"
                    style={{ color: "var(--brown-500)" }}
                  >
                    {role.start} – {role.end}
                  </span>
                  <br />
                  <span
                    className="font-mono text-[0.6rem] tracking-[0.14em] uppercase"
                    style={{ color: "var(--amber-500)" }}
                  >
                    {role.type}
                  </span>
                </div>

                {/* Timeline dot */}
                <div
                  className="hidden md:block absolute left-[196px] top-1 w-2 h-2 rounded-full border"
                  style={{
                    background: "var(--sand-200)",
                    borderColor: "var(--amber-500)",
                  }}
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="flex-1 panel panel--spectral rounded-sm p-5 md:p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h2
                        className="font-display text-base font-medium tracking-[0.06em] uppercase"
                        style={{ color: "var(--brown-950)" }}
                      >
                        {role.role}
                      </h2>
                      <p className="font-mono text-xs mt-0.5" style={{ color: "var(--brown-700)" }}>
                        {role.org} · {role.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--brown-700)" }}>
                        <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: "var(--amber-400)" }} aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {role.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[0.58rem] tracking-[0.1em] px-2 py-0.5"
                        style={{
                          color: "var(--brown-500)",
                          background: "rgba(78,55,31,0.06)",
                          border: "1px solid var(--line-warm)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <p className="eyebrow mb-6">Education</p>
          <div className="panel rounded-sm p-5 md:p-7 max-w-xl">
            <h2
              className="font-display text-base font-medium tracking-[0.06em] uppercase mb-1"
              style={{ color: "var(--brown-950)" }}
            >
              {education.degree}
            </h2>
            <p className="font-mono text-xs mb-0.5" style={{ color: "var(--brown-700)" }}>
              {education.institution} · {education.location}
            </p>
            <p className="font-mono text-xs mb-3" style={{ color: "var(--brown-500)" }}>
              {education.start} – {education.end}
            </p>
            <p className="text-sm" style={{ color: "var(--brown-700)" }}>
              {education.notes}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-14">
          <p className="eyebrow mb-6">Materials</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            [
              {
                category: "Languages",
                items: ["TypeScript", "Python", "Java", "C", "C++", "C#", "Swift"],
              },
              {
                category: "Frameworks & Libraries",
                items: ["React", "Node.js", "Tailwind", "PyTorch", "SwiftUI"],
              },
              {
                category: "Databases",
                items: ["PostgreSQL", "MySQL", "NoSQL"],
              },
              {
                category: "AI & Machine Learning",
                items: ["LLM Infrastructure", "RAG", "Reinforcement Learning", "Fine-tuning", "AI Agents", "Tool Calling"],
              },
              {
                category: "DevOps & Infrastructure",
                items: ["Docker", "Kubernetes", "Linux", "Git", "Unit Testing"],
              },
              {
                category: "Other",
                items: ["Cybersecurity", "HCI / Figma", "Full-stack Development", "iOS Development", "PowerShell", "GPU Resource Management"],
              },
            ].map(({ category, items }) => (
              <div key={category} className="panel rounded-sm p-4">
                <p className="eyebrow mb-3">{category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[0.62rem] tracking-[0.08em] px-2 py-0.5"
                      style={{
                        color: "var(--brown-700)",
                        background: "rgba(78,55,31,0.05)",
                        border: "1px solid var(--line-warm)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
