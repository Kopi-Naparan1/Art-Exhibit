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

const artistJumps = [
  {
    href: "#student-artists",
    label: "Student Artists",
    detail: `${studentArtists.length} profiles`,
  },
  {
    href: "#professional-artists",
    label: "Professional Artists",
    detail: `${artists.length} profiles`,
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
            description="This page introduces the student artists first, then continues with professional artists whose works deepen the exhibition's context."
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

      <section className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_8px_24px_var(--ink-shadow)] sm:p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-xs tracking-[0.26em] text-[var(--gold)] uppercase">
              Quick Navigation
            </p>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              Jump directly to student or professional artist profiles.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {artistJumps.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[22px] border border-[var(--border)] bg-[var(--paper-strong)] px-4 py-3 transition-colors hover:bg-[var(--hover)]"
              >
                <p className="text-sm font-medium text-[var(--foreground)]">
                  {item.label}
                </p>
                <p className="mt-1 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
                  {item.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="student-artists" className="scroll-mt-28 space-y-6">
        <SectionHeader
          eyebrow="Student Artists"
          title="Creators behind the student showcase"
          description="These profiles identify the student artists featured in the gallery and summarize the perspectives each one contributes to the exhibition."
        />
        <ArtistGrid artists={studentArtists} compact />
      </section>

      <section
        id="professional-artists"
        className="scroll-mt-28 space-y-6 pt-2 md:pt-4"
      >
        <div className="border-t border-[var(--border)]" />
        <SectionHeader
          eyebrow="Professional Artists"
          title="Reference artists that ground the exhibit"
          description="These professional artists provide the broader historical and formal context that informs the exhibition's themes and comparisons."
        />
        <ArtistGrid artists={artists} />
      </section>
    </div>
  );
}
