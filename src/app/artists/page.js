import { artists } from "@/data/artworks";
import SectionHeader from "@/components/SectionHeader";
import ArtistGrid from "@/components/ArtistGrid";

export default function ArtistsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-4 py-8 sm:px-6 md:px-8 md:py-16">
      <SectionHeader
        eyebrow="Artists"
        title="Artist backgrounds"
        description="Academic-style profiles for the artists represented in the exhibit, organized to support exhibition requirements and classroom discussion."
      />

      <ArtistGrid artists={artists} />
    </div>
  );
}
