import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Life — Rishabh Raj",
  description: "Outside the terminal — climbing, dragon boat, flint-knapping, cycling, and film.",
};

const activities = [
  {
    label: "Rock Climbing",
    tag: "Bouldering & Sport",
    description:
      "I climb V3 at Bouldering Project and 5.11c at Phoenix Rock Gym. I like climbing because it is social, physical, and technical without needing too much explanation. It is a good way to spend time with friends and solve problems and work out by pushing your mind and body to its limits.",
    detail: "Bouldering Project; Phoenix Rock Gym",
  },
  {
    label: "Dragon Boat Racing",
    tag: "Competitive",
    description:
      "I race dragon boat with ASU at Tempe Town Lake. It is loud, tiring, and a lot more fun than it looks from shore. Everyone has to pull together, so it is a good sport for people who like teams and do not mind working hard.",
    detail: "ASU Dragon Boat at Tempe Town Lake",
  },
  {
    label: "Flint-knapping",
    tag: "Experimental Archaeology",
    description:
      "I am an officer in ASU's Experimental Archaeology Club, where we practice flint-knapping in the Ancient Technology Lab. We make hand axes, arrowheads, arrows, pump drills with knapped stone tips. We also do red ochre rock painting using methods based on ancient techniques.",
    detail: "Experimental Archaeology Club @ ASU",
  },
  {
    label: "Cycling",
    tag: "Road",
    description:
      "I ride mostly around Tempe and Phoenix, especially on the bike path along the lake between the two cities. It is one of the better places in the area to ride without constantly dealing with traffic. Long rides help me clear my head and spend time outside for a while. I also built my bike from parts at Bike Saviours Co-Op in Tempe.",
    detail: "Tempe and Phoenix routes",
  },
  {
    label: "Film",
    tag: "AMC A-List",
    description:
      "I am an AMC A-Lister and I watch a lot of movies. Favorites include Blade Runner 2049, Dune, Annihilation, DEVS, Oblivion, and most things by Denis Villeneuve and Alex Garland. The design language of this site owes them something. My Letterboxd Top 4: Dune, Top Gun: Maverick, The Fall, and Megalopolis.",
    detail: "Tracked on Letterboxd",
    href: "https://letterboxd.com/muadibmaverick/",
  },
];

export default function LifePage() {
  return (
    <>
      {/* Header */}
      <section className="relative border-b" style={{ borderColor: "var(--line-warm)" }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-14">
          <p className="eyebrow mb-4">/ Life</p>
          <h1
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-[0.1em] uppercase leading-none mb-4"
            style={{ color: "var(--brown-950)" }}
          >
            Life
          </h1>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: "var(--brown-700)" }}>
            What I do when I am not writing code.
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
                  <span className="font-mono text-[0.6rem] tracking-[0.16em]" style={{ color: "var(--brown-500)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2
                  className="font-display text-xl font-medium tracking-[0.08em] uppercase mb-2"
                  style={{ color: "var(--brown-950)" }}
                >
                  {act.label}
                </h2>
                {"href" in act ? (
                  <a
                    href={act.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.65rem] tracking-[0.1em] transition-colors duration-150 hover:text-[var(--amber-500)]"
                    style={{ color: "var(--brown-500)" }}
                  >
                    {act.detail} →
                  </a>
                ) : (
                  <p className="font-mono text-[0.65rem] tracking-[0.1em]" style={{ color: "var(--brown-500)" }}>
                    {act.detail}
                  </p>
                )}
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
