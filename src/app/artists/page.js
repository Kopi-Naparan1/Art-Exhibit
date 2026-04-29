import { Palette, Image as ImageIcon, Sparkles, Users } from "lucide-react";
import { artists } from "@/data/artworks";
import studentArtists from "@/data/student-artists";
import studentArtworks from "@/data/student-artworks";
import SectionHeader from "@/components/SectionHeader";
import ArtistGrid from "@/components/ArtistGrid";

const collectionStats = [
  {
    label: "Student Artists",
    value: studentArtists.length,
    icon: Users,
    detail: "Creators featured in the top section",
  },
  {
    label: "Professional Artists",
    value: artists.length,
    icon: Palette,
    detail: "Established Filipino artists in the bottom section",
  },
  {
    label: "Works in Gallery",
    value: studentArtworks.length + artists.length,
    icon: ImageIcon,
    detail: "Names and artworks linked from the gallery",
  },
  {
    label: "Presentation",
    value: "Two-part",
    icon: Sparkles,
    detail: "Students first, professionals second",
  },
];

export default function ArtistsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-4 py-8 sm:px-6 md:px-8 md:py-16">
      <section className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-[linear-gradient(135deg,var(--paper-strong)_0%,var(--paper-deep)_55%,var(--paper)_100%)] px-6 py-8 shadow-[0_14px_36px_var(--ink-shadow)] md:px-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <SectionHeader
            eyebrow="Artists"
            title="Student artists first, Filipino masters below"
            description="This page shows the student artists at the top so viewers can connect each gallery artwork to its creator, then continues with the professional artists that inform the exhibit."
          />

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {collectionStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-[var(--border)] bg-[var(--paper-soft)] p-4 shadow-[0_8px_22px_var(--ink-shadow)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] tracking-[0.22em] text-[var(--gold)] uppercase">
                      {stat.label}
                    </p>
                    <Icon size={16} className="text-[var(--forest)]" />
                  </div>
                  <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--forest)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                    {stat.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Student Artists"
          title="Creators behind the student showcase"
          description="Select an artist name in the gallery to jump directly to the matching profile here."
        />
        <ArtistGrid artists={studentArtists} compact />
      </section>

      <section className="space-y-6 pt-2 md:pt-4">
        <div className="border-t border-[var(--border)]" />
        <SectionHeader
          eyebrow="Professional Artists"
          title="Reference artists that ground the exhibit"
          description="These artists remain available below for comparison, discussion, and the broader art appreciation context of the course."
        />
        <ArtistGrid artists={artists} />
      </section>
    </div>
  );
}
