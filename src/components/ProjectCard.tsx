import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel panel--spectral scan-line rounded-sm relative overflow-hidden group">
      <div className="p-6 md:p-8">
        {/* Number */}
        <div className="mb-4">
          <span className="font-mono text-xs" style={{ color: "var(--brown-500)" }}>
            {project.number}
          </span>
        </div>

        {/* Name */}
        <h3
          className="font-display text-lg font-medium tracking-[0.1em] uppercase mb-2"
          style={{ color: "var(--brown-950)" }}
        >
          {project.name}
        </h3>

        {/* Summary */}
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "var(--brown-700)" }}
        >
          {project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.6rem] tracking-[0.12em] px-2 py-0.5"
              style={{
                color: "var(--brown-500)",
                background: "rgba(78,55,31,0.06)",
                border: "1px solid var(--line-warm)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] tracking-[0.12em] uppercase transition-colors duration-150 flex items-center gap-1.5"
              style={{ color: "var(--amber-500)" }}
            >
              {link.label}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
          <Link
            href={`/work/${project.id}`}
            className="font-mono text-[0.65rem] tracking-[0.12em] uppercase transition-colors duration-150 flex items-center gap-1.5"
            style={{ color: "var(--brown-500)" }}
          >
            Details
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
