import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Life — Rishabh Raj",
  description: "Outside the terminal — climbing, dragon boat, flint-knapping, cycling, and film.",
};

const activities = [
  {
    label: "Rock Climbing",
    tag: "Sport & Trad",
    description:
      "Desert sandstone and limestone. Climbing teaches the same problem-solving loop as debugging: read the route, hypothesize a sequence, commit, adapt when you're wrong. The rock doesn't care about your confidence level.",
    detail: "Favorite areas: Arizona desert crags, Red Rock Canyon",
  },
  {
    label: "Dragon Boat Racing",
    tag: "Competitive",
    description:
      "Twenty people, one drum, one hull. Dragon boat is the closest sport to deploying infrastructure — individual timing doesn't matter, only synchronized cadence does. Every race is a distributed systems problem.",
    detail: "Racing with ASU Dragon Boat",
  },
  {
    label: "Flint-knapping",
    tag: "Stone Tool Making",
    description:
      "Shaping obsidian and chert into tools using pressure and percussion — the oldest form of engineering. Flint-knapping is unforgiving: every strike is irreversible. It built my tolerance for the cost of mistakes and the value of planning.",
    detail: "Bifacial points, scrapers, arrowheads",
  },
  {
    label: "Cycling",
    tag: "Road & Gravel",
    description:
      "Long rides in the Arizona heat. Cycling is time to think without a screen — the only kind of thinking that actually works on hard problems. Some of my best architectural decisions have happened at mile 40.",
    detail: "Road and gravel, desert routes",
  },
  {
    label: "Film",
    tag: "Letterboxd Tracked",
    description:
      "I watch films the way I read documentation — looking for the structure underneath. Favorites include Blade Runner 2049, Dune, Annihilation, DEVS, Oblivion, and most things by Denis Villeneuve and Alex Garland. The design language of this site owes them something.",
    detail: "Tracked on Letterboxd",
  },
];

export default function LifePage() {
  return (
    <>
      {/* Header */}
      <section className="relative border-b" style={{ borderColor: "var(--line-warm)" }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-14">
          <p className="eyebrow mb-4">Outside the Terminal</p>
          <h1
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-[0.1em] uppercase leading-none mb-4"
            style={{ color: "var(--brown-950)" }}
          >
            Life
          </h1>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: "var(--brown-700)" }}>
            The things I do when I'm not writing code — and why they make me better at it.
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col gap-6">
          {activities.map((act, i) => (
            <article key={act.label} className="panel panel--spectral rounded-sm p-6 md:p-8 grid md:grid-cols-[2fr_3fr] gap-6 md:gap-12">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="font-mono text-[0.6rem] tracking-[0.16em]"
                    style={{ color: "var(--brown-500)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-mono text-[0.6rem] tracking-[0.14em] uppercase px-2 py-0.5 border"
                    style={{
                      color: "var(--amber-500)",
                      borderColor: "rgba(200,107,29,0.28)",
                      background: "rgba(200,107,29,0.06)",
                    }}
                  >
                    {act.tag}
                  </span>
                </div>
                <h2
                  className="font-display text-xl font-medium tracking-[0.08em] uppercase mb-2"
                  style={{ color: "var(--brown-950)" }}
                >
                  {act.label}
                </h2>
                <p className="font-mono text-[0.65rem] tracking-[0.1em]" style={{ color: "var(--brown-500)" }}>
                  {act.detail}
                </p>
              </div>

              {/* Right */}
              <p className="text-base leading-relaxed self-center" style={{ color: "var(--brown-700)" }}>
                {act.description}
              </p>
            </article>
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}
