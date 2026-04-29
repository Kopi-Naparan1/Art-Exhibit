import { Palette, Users, Image as ImageIcon, Sparkles } from "lucide-react";
import studentArtworks from "@/data/student-artworks";
import professionalArtworks from "@/data/artworks";
import SectionHeader from "@/components/SectionHeader";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Student Art Showcase + Filipino Masters",
  description:
    "Browse the student artwork collection first, followed by the 10 Filipino professional artworks that inspired the exhibit.",
};

const collectionStats = [
  {
    label: "Artworks",
    value: studentArtworks.length + professionalArtworks.length,
    icon: ImageIcon,
    detail: "Student and professional works combined",
  },
  {
    label: "Artists",
    value:
      new Set([
        ...studentArtworks.map((artwork) => artwork.artist),
        ...professionalArtworks.map((artwork) => artwork.artist),
      ]).size,
    icon: Users,
    detail: "Distinct creators across both collections",
  },
  {
    label: "Categories",
    value:
      new Set([
        ...studentArtworks.map((artwork) => artwork.category || artwork.medium),
        ...professionalArtworks.map(
          (artwork) => artwork.medium || "Professional Works"
        ),
      ]).size,
    icon: Palette,
    detail: "Mediums and visual styles represented",
  },
  {
    label: "Showcase",
    value: "Two-part",
    icon: Sparkles,
    detail: "Student works followed by professional references",
  },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-4 py-8 sm:px-6 md:px-8 md:py-16">
      <section className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-[linear-gradient(135deg,var(--paper-strong)_0%,var(--paper-deep)_55%,var(--paper)_100%)] px-6 py-8 shadow-[0_14px_36px_var(--ink-shadow)] md:px-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <SectionHeader
            eyebrow="Student Showcase"
            title="Student artworks first, professional masterpieces below"
            description="The gallery opens with the full student collection, then transitions into the 10 Filipino professional artworks that ground the exhibit in a wider art-historical context."
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

      <GalleryGrid artworks={studentArtworks} />

      <section className="space-y-6 pt-2 md:pt-4">
        <div className="border-t border-[var(--border)]" />
        <SectionHeader
          eyebrow="Professional References"
          title="Ten Filipino masters that frame the exhibit"
          description="These works remain available at the bottom of the page so the student showcase stays primary while the professional collection provides a reference point for comparison and discussion."
        />
        <GalleryGrid artworks={professionalArtworks} />
      </section>
    </div>
  );
}
