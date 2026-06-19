import type { Metadata } from "next";
import Footer from "@/components/Footer";
import NotesCarousel from "@/components/NotesCarousel";
import { notes } from "@/data/notes";

export const metadata: Metadata = {
  title: "Notes — Rishabh Raj",
  description: "Writing on software, building things, and everything adjacent.",
};

export default function NotesPage() {
  return (
    <>
      {/* Header — two-column editorial */}
      <section className="relative border-b" style={{ borderColor: "var(--line-warm)" }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-14">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end">
            <div>
              <p className="eyebrow mb-4">/ Notes</p>
              <h1
                className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-[0.1em] uppercase leading-none"
                style={{ color: "var(--brown-950)" }}
              >
                Notes
              </h1>
            </div>
            <p
              className="text-base md:text-lg leading-relaxed max-w-md md:pb-2"
              style={{ color: "var(--brown-700)" }}
            >
              Writing on software, building things, and everything adjacent. Use the arrows or
              swipe through.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <NotesCarousel notes={notes} />
      </section>

      <Footer />
    </>
  );
}
