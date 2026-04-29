import ArtworkCard from "@/components/ArtworkCard";

export default function GalleryGrid({ artworks }) {
  const sections = artworks.reduce((result, artwork) => {
    const key = artwork.category || artwork.medium || "Collection";
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(artwork);
    return result;
  }, {});

  return (
    <div className="space-y-12">
      {Object.entries(sections).map(([category, items]) => (
        <section
          key={category}
          className="space-y-5 rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_8px_24px_var(--ink-shadow)] sm:p-5 md:p-6"
        >
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--border)] pb-4">
            <div className="space-y-1">
              <p className="text-xs tracking-[0.28em] text-[var(--gold)] uppercase">
                Collection Group
              </p>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-[var(--forest)] sm:text-[2rem]">
                {category}
              </h3>
            </div>
            <p className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--muted)]">
              {items.length} {items.length === 1 ? "work" : "works"}
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
