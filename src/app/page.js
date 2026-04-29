import Link from "next/link";
import { artists, exhibitionConcept } from "@/data/artworks";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import ArtistGrid from "@/components/ArtistGrid";

const featuredArtists = artists.slice(0, 4);

export default function Home() {
  return (
    <div className="space-y-10 pb-12 md:space-y-14">
      <HeroSection
        eyebrow="Student Showcase"
        title="Nature in Filipino Art"
        subtitle="A curated student exhibition that presents coffee painting, drawing, cubism, calligraphy, photography, paper art, and animation in one gallery."
        ctaLabel="View Student Gallery"
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="rounded-[34px] border border-[var(--border)] bg-[var(--surface)] px-6 py-12 shadow-[0_8px_24px_var(--ink-shadow)] md:px-10">
          <SectionHeader
            align="center"
            eyebrow="Exhibition Overview"
            title={exhibitionConcept.title}
            description={exhibitionConcept.body}
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Featured Artists"
            title="Four voices that shape the exhibit"
            description="A preview of artists whose works frame the relationship between land, memory, myth, and everyday life."
          />
          <Link
            href="/artists"
            className="hidden rounded-full border border-[var(--accent-border)] px-4 py-2 text-sm text-[var(--gold)] transition-colors hover:bg-[var(--accent-soft)] md:inline-flex"
          >
            View All Artists
          </Link>
        </div>
        <ArtistGrid artists={featuredArtists} compact />
        <div className="mt-6 md:hidden">
          <Link
            href="/artists"
            className="inline-flex rounded-full border border-[var(--accent-border)] px-4 py-2 text-sm text-[var(--gold)] transition-colors hover:bg-[var(--accent-soft)]"
          >
            View All Artists
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid gap-6 rounded-[34px] border border-[var(--border)] bg-[var(--paper-deep)] px-6 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-12">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 text-xs tracking-[0.28em] text-[var(--gold)] uppercase">
              Full Collection
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--forest)] md:text-5xl">
              Explore the full student collection
            </h2>
          </div>
          <div className="flex items-center md:justify-end">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[#fff7ea] transition-colors hover:bg-[var(--accent-strong)]"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
