import ArtworkCard from "@/components/ArtworkCard";

export default function GalleryGrid({ artworks }) {
  return (
    <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}
