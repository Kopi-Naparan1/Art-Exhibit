import ArtistCard from "@/components/ArtistCard";

export default function ArtistGrid({ artists, compact = false }) {
  return (
    <div
      className={
        compact
          ? "grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6"
          : "grid gap-5 sm:gap-6"
      }
    >
      {artists.map((artist) => (
        <ArtistCard key={artist.name} artist={artist} compact={compact} />
      ))}
    </div>
  );
}
