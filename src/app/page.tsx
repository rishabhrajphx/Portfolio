import Link from "next/link";
import TopoSVG from "@/components/TopoSVG";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Annihilation shimmer blobs — translucent iridescent overlay */}
        <div className="shimmer-field" aria-hidden="true">
          <div className="shimmer-blob shimmer-blob--lilac" />
          <div className="shimmer-blob shimmer-blob--cyan" />
          <div className="shimmer-blob shimmer-blob--rose" />
          <div className="shimmer-blob shimmer-blob--mint" />
          <div className="shimmer-blob shimmer-blob--pearl" />
        </div>

        {/* Topo background */}
        <div className="absolute inset-0 flex items-end pointer-events-none">
          <TopoSVG className="w-full h-auto opacity-100" spectral />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-20 pb-24 md:pt-32 md:pb-36 relative">
          {/* Status eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "var(--amber-500)" }}
              aria-hidden="true"
            />
            <span className="eyebrow">System Status — Online</span>
          </div>

          {/* Name */}
          <h1
            className="hero-title text-[clamp(4rem,12vw,10rem)] mb-6"
            style={{ color: "var(--brown-950)" }}
          >
            Rishabh
            <br />
            Raj
          </h1>

          {/* Tagline */}
          <p
            className="font-display text-[clamp(1rem,2.5vw,1.35rem)] font-medium tracking-[0.08em] uppercase mb-6 max-w-lg"
            style={{ color: "var(--brown-700)" }}
          >
            I build tools for humans,
            <br />
            teams, and machines.
          </p>

          {/* Description */}
          <p
            className="text-base leading-relaxed max-w-xl mb-10"
            style={{ color: "var(--brown-700)" }}
          >
            Software engineer working across AI agents, mobile apps, automation,
            and infrastructure. I turn messy workflows into practical systems
            people actually use.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/systems"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-[0.14em] uppercase transition-all duration-200 hover:opacity-90"
              style={{
                background: "var(--amber-500)",
                color: "var(--sand-100)",
                border: "1px solid rgba(120,62,18,0.3)",
              }}
            >
              View Work
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/machine"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-[0.14em] uppercase transition-all duration-200 hover:border-[var(--brown-700)]"
              style={{
                background: "var(--glass-light)",
                color: "var(--brown-900)",
                border: "1px solid var(--line-warm-strong)",
                backdropFilter: "blur(12px)",
              }}
            >
              Resume
            </Link>
          </div>
        </div>
      </section>

      {/* ── SYSTEM OVERVIEW ─────────────────────────────────────────── */}
      <section aria-labelledby="overview-heading" className="relative">
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--line-warm)" }} aria-hidden="true" />
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-14 md:py-16">
          <p className="eyebrow mb-6">&gt;_ Overview</p>

          <dl className="panel rounded-sm max-w-2xl" style={{ padding: "1.5rem 2rem" }}>
            {[
              ["Location", "Tempe, AZ"],
              ["Focus", "AI Systems / Full-Stack / iOS / Infra"],
              ["Current Mode", "Building / Climbing / Rowing / Watching Films"],
              ["Uptime", "Always Improving"],
            ].map(([key, val]) => (
              <div
                key={key}
                className="flex gap-4 py-2.5 border-b last:border-0"
                style={{ borderColor: "var(--line-warm)" }}
              >
                <dt
                  className="font-mono text-xs tracking-[0.12em] uppercase w-32 shrink-0"
                  style={{ color: "var(--brown-500)" }}
                >
                  {key}
                </dt>
                <dd className="font-mono text-xs tracking-[0.08em]" style={{ color: "var(--brown-900)" }}>
                  {val}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── FEATURED SYSTEMS ────────────────────────────────────────── */}
      <section aria-labelledby="systems-heading" className="relative">
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--line-warm)" }} aria-hidden="true" />
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-2">/ Selected Work</p>
              <h2
                id="systems-heading"
                className="font-display text-2xl md:text-3xl font-medium tracking-[0.06em] uppercase"
                style={{ color: "var(--brown-950)" }}
              >
                Selected Work
              </h2>
            </div>
            <Link
              href="/systems"
              className="hidden sm:flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-150"
              style={{ color: "var(--amber-500)" }}
            >
              All Work →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/systems" className="font-mono text-[0.65rem] tracking-[0.14em] uppercase" style={{ color: "var(--amber-500)" }}>
              All Work →
            </Link>
          </div>
        </div>
      </section>

      {/* ── OUTSIDE THE TERMINAL ────────────────────────────────────── */}
      <section aria-labelledby="outside-heading" className="relative">
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--line-warm)" }} aria-hidden="true" />
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
          <p className="eyebrow mb-3">Outside the Terminal</p>
          <h2
            id="outside-heading"
            className="font-display text-2xl md:text-3xl font-medium tracking-[0.06em] uppercase mb-10"
            style={{ color: "var(--brown-950)" }}
          >
            Life Beyond the Stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { label: "Climbing", detail: "Sport & trad, desert rock" },
              { label: "Dragon Boat", detail: "Competitive racing" },
              { label: "Flint-knapping", detail: "Stone tool making" },
              { label: "Cycling", detail: "Road & gravel" },
              { label: "Film", detail: "Letterboxd tracked" },
            ].map(({ label, detail }) => (
              <div key={label} className="panel rounded-sm p-4 md:p-5">
                <p
                  className="font-display text-sm font-medium tracking-[0.08em] uppercase mb-1"
                  style={{ color: "var(--brown-900)" }}
                >
                  {label}
                </p>
                <p className="font-mono text-[0.62rem] tracking-[0.08em]" style={{ color: "var(--brown-500)" }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/life"
              className="font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-150"
              style={{ color: "var(--amber-500)" }}
            >
              More about life outside code →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
