import Image from "next/image";

export default function ArtistCard({ artist, compact = false }) {
  if (compact) {
    return (
      <article
        id={artist.slug}
        className="scroll-mt-28 flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_8px_24px_var(--ink-shadow)]"
      >
        <div className="relative aspect-[4/3] bg-[var(--surface-alt)]">
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 25vw, 100vw"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          <div className="space-y-2">
            <p className="inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-2.5 py-1 text-[10px] tracking-[0.2em] text-[var(--gold)] uppercase">
              Featured Artist
            </p>
            <h3 className="font-display text-2xl text-[var(--foreground)]">
              {artist.name}
            </h3>
            <p className="text-sm text-[var(--gold)]">{artist.style}</p>
          </div>
          <p className="hidden text-base leading-relaxed text-[var(--muted)] sm:block">
            {artist.bio}
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)] sm:hidden">
            {artist.contribution}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article
      id={artist.slug}
      className="scroll-mt-28 grid gap-0 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_8px_24px_var(--ink-shadow)] md:grid-cols-[240px_1fr]"
    >
      <div className="relative aspect-[4/4.8] bg-[var(--surface-alt)] md:min-h-[260px]">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 240px, 100vw"
        />
      </div>
      <div className="flex flex-col gap-4 p-5 sm:p-6 md:p-8">
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-medium text-[var(--foreground)]">
            {artist.name}
          </h3>
          <p className="text-sm tracking-wide text-[var(--gold)] uppercase">
            {artist.style}
          </p>
        </div>
        <p className="text-base leading-relaxed text-[var(--muted)]">
          {artist.bio}
        </p>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-4">
          <p className="text-sm font-medium text-[var(--forest)]">
            Contribution
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
            {artist.contribution}
          </p>
        </div>
      </div>
    </article>
  );
}
