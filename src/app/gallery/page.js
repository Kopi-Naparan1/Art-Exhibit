import artworks from "@/data/artworks";
import SectionHeader from "@/components/SectionHeader";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-4 py-8 sm:px-6 md:px-8 md:py-16">
      <SectionHeader
        eyebrow="Gallery"
        title="Ten nature-themed Filipino artworks"
        description="A balanced two-column gallery designed for careful viewing, with short descriptions that support teacher-friendly presentation."
      />

      <GalleryGrid artworks={artworks} />
    </div>
  );
}
