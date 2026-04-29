import { curatorNote, exhibitionConcept } from "@/data/artworks";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-4 py-8 sm:px-6 md:px-8 md:py-16">
      <SectionHeader
        eyebrow="About"
        title="Exhibition concept and curator's note"
        description="This page explains the academic purpose of the exhibit and gives a concise reflection for grading and presentation."
      />

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_8px_24px_var(--ink-shadow)] md:p-8">
          <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
            Why This Theme?
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--forest)]">
            Why nature, why Filipino artists?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            Nature was chosen because it is one of the clearest ways Filipino
            artists express identity, labor, memory, myth, and belonging.
            Filipino art often treats the land not as decoration, but as a lived
            environment shaped by farming, seasons, mountains, forests, and
            coastal life.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            The selected artworks show a range of approaches: pastoral realism,
            modernist figuration, folklore-inspired imagery, and symbolic
            contemporary painting. Together, they create a coherent view of how
            the natural world appears in Philippine visual culture.
          </p>
        </article>

        <article className="rounded-[30px] border border-[var(--border)] bg-[var(--surface-alt)] p-6 shadow-[0_8px_24px_var(--ink-shadow)] md:p-8">
          <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
            Exhibition Concept
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--forest)]">
            {exhibitionConcept.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            {exhibitionConcept.body}
          </p>
        </article>
      </section>

      <section className="rounded-[34px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_8px_24px_var(--ink-shadow)] md:p-8">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          Curator&apos;s Note
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--forest)]">
          {curatorNote.title}
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
          {curatorNote.body}
        </p>
      </section>

      <CTASection
        title="Use the gallery as your exhibit walkthrough"
        description="The site is organized so teachers can move from the home introduction to the gallery, then to the artists and about page for context."
        href="/gallery"
        label="View Gallery"
      />
    </div>
  );
}
