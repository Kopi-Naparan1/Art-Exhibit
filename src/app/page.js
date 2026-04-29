import Link from "next/link";
import { BrushCleaning, Leaf, Mountain, Sparkles } from "lucide-react";
import { artists, exhibitionConcept } from "@/data/artworks";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import ArtistGrid from "@/components/ArtistGrid";

const featuredArtists = artists.slice(0, 4);
const overviewHighlights = [
  {
    label: "Core Theme",
    value: "Land, memory, and myth",
    icon: Leaf,
  },
  {
    label: "Visual Range",
    value: "Pastoral to modernist",
    icon: BrushCleaning,
  },
  {
    label: "Setting",
    value: "Forest, farm, water, and mountain",
    icon: Mountain,
  },
];

export default function Home() {
  return (
    <div className="space-y-10 pb-12 md:space-y-14">
      <HeroSection
        eyebrow="Student Showcase"
        title="Nature in Filipino Art"
        subtitle="A curated exhibition of student works exploring nature through painting, drawing, calligraphy, photography, paper art, and animation."
        ctaLabel="View the Gallery"
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="overflow-hidden rounded-[34px] border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface)_0%,var(--paper)_100%)] px-6 py-8 shadow-[0_8px_24px_var(--ink-shadow)] md:px-10 md:py-10">
          <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <SectionHeader
              align="left"
              eyebrow="Exhibition Overview"
              title={exhibitionConcept.title}
              description={exhibitionConcept.body}
            />

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {overviewHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-[var(--border)] bg-[var(--paper-strong)] p-4 shadow-[0_6px_18px_var(--ink-shadow)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[10px] tracking-[0.22em] text-[var(--gold)] uppercase">
                        {item.label}
                      </p>
                      <Icon size={16} className="text-[var(--forest)]" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)] sm:text-[15px]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Featured Artists"
            title="Four artists central to the exhibition"
            description="A concise introduction to the artists whose works shape the exhibition's visual and thematic direction."
          />
          <Link
            href="/artists"
            className="hidden rounded-full border border-[var(--accent-border)] px-4 py-2 text-sm text-[var(--gold)] transition-colors hover:bg-[var(--accent-soft)] md:inline-flex"
          >
            View All Artists
          </Link>
        </div>
        <div className="rounded-[34px] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_8px_24px_var(--ink-shadow)] sm:p-5 md:p-6">
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-[var(--border)] pb-4 sm:mb-5">
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              Selected profiles provide a quick point of entry before the full
              artist directory.
            </p>
            <div className="hidden items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 text-[11px] tracking-[0.18em] text-[var(--gold)] uppercase lg:inline-flex">
              <Sparkles size={14} />
              Selected Profiles
            </div>
          </div>
          <ArtistGrid artists={featuredArtists} compact />
        </div>
        <div className="mt-6 md:hidden">
          <Link
            href="/artists"
            className="inline-flex w-full items-center justify-center rounded-full border border-[var(--accent-border)] px-4 py-3 text-sm text-[var(--gold)] transition-colors hover:bg-[var(--accent-soft)]"
          >
            View All Artists
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid gap-6 rounded-[34px] border border-[var(--border)] bg-[linear-gradient(135deg,var(--paper-deep)_0%,var(--surface-alt)_100%)] px-6 py-8 shadow-[0_10px_28px_var(--ink-shadow)] md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-10">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 text-xs tracking-[0.28em] text-[var(--gold)] uppercase">
              Full Collection
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--forest)] md:text-5xl">
              Explore the complete student collection
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base md:text-lg">
              Continue from the homepage into the full gallery, where the works
              are organized for clear viewing and closer study.
            </p>
          </div>
          <div className="grid gap-4 md:content-between">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[22px] border border-[var(--border)] bg-[var(--paper-strong)] p-4">
                <p className="text-[10px] tracking-[0.22em] text-[var(--gold)] uppercase">
                  Best For
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">
                  Browsing works by theme and medium
                </p>
              </div>
              <div className="hidden rounded-[22px] border border-[var(--border)] bg-[var(--paper-strong)] p-4 sm:block">
                <p className="text-[10px] tracking-[0.22em] text-[var(--gold)] uppercase">
                  Viewing Experience
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">
                  A clear transition from overview to full collection
                </p>
              </div>
            </div>
            <div className="flex items-center md:justify-end">
              <Link
                href="/gallery"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-strong)] sm:w-auto"
              >
                Explore Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
