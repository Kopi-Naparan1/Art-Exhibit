"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2, X } from "lucide-react";

export default function ArtworkCard({ artwork }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const category = artwork.category || artwork.medium || "Artwork";
  const yearLabel = artwork.year || "Undated";
  const mediumLabel =
    artwork.medium && artwork.medium !== category ? artwork.medium : null;
  const artistName = artwork.artistSlug ? (
    <Link
      href={`/artists#${artwork.artistSlug}`}
      className="font-medium text-[var(--gold)] transition-colors hover:text-[var(--forest)]"
      aria-label={`Go to ${artwork.artist} on the Artists page`}
    >
      {artwork.artist}
    </Link>
  ) : (
    <span className="font-medium text-[var(--foreground)]">{artwork.artist}</span>
  );

  return (
    <>
      <article className="group overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_10px_28px_var(--ink-shadow)] transition-transform duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden border-b border-[var(--border)] bg-[linear-gradient(180deg,var(--paper-deep)_0%,var(--paper-strong)_100%)] p-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-[var(--frame-border)] bg-[var(--frame)] shadow-[inset_0_1px_0_var(--frame-border)]">
            <Image
              placeholder="blur"
              src={artwork.image}
              alt={artwork.title}
              fill
              loading="lazy"
              className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(min-width: 1536px) 30vw, (min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border border-[var(--frame-border)] bg-[var(--paper-strong)] px-3 py-2 text-xs font-medium text-[var(--forest)] shadow-[0_6px_16px_var(--ink-shadow-strong)] transition hover:bg-[var(--surface)]"
            aria-label={`Open preview for ${artwork.title}`}
          >
            <Maximize2 size={14} />
            View
          </button>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(24,49,31,0.24)] via-transparent to-transparent" />
        </div>

        <div className="space-y-4 p-5 sm:p-6 md:p-7">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 text-[11px] tracking-[0.22em] text-[var(--gold)] uppercase">
              {category}
            </span>
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-1 text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase">
              {yearLabel}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              {artwork.title}
            </h3>

            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface-alt)]">
                {artwork.artistImage ? (
                  <Image
                    src={artwork.artistImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                ) : null}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] tracking-[0.22em] text-[var(--muted)] uppercase">
                  Artist
                </p>
                <p className="truncate text-sm text-[var(--foreground)]">
                  {artistName}
                </p>
              </div>
            </div>
          </div>

          <p className="text-base leading-relaxed text-[var(--foreground)]">
            {artwork.description}
          </p>

          <details className="group">
            <summary className="cursor-pointer list-none text-sm font-medium text-[var(--forest)]">
              <span className="border-b border-transparent pb-0.5 transition-colors group-open:border-[var(--forest)]">
                Curatorial note
              </span>
            </summary>

            <div className="mt-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-4 text-sm leading-relaxed text-[var(--muted)]">
              Presented within the exhibition sequence as part of a broader
              study of nature, memory, labor, and place in Filipino art.
            </div>
          </details>
        </div>
      </article>

      {isOpen ? (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 overflow-y-auto bg-[var(--overlay)] px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-5"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative mx-auto my-auto w-full max-w-3xl overflow-hidden rounded-[28px] border border-[var(--frame-border)] bg-[var(--paper-strong)] shadow-[0_18px_56px_var(--ink-shadow-strong)] max-sm:max-h-[calc(100vh-2rem)] max-sm:overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label={`${artwork.title} preview`}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--paper-strong)] text-[var(--foreground)] shadow-md transition hover:-translate-y-0.5 hover:bg-[var(--surface)] sm:right-4 sm:top-4 sm:h-11 sm:w-11"
              aria-label="Close preview"
            >
              <X size={18} />
            </button>

            <div className="grid gap-0 xl:grid-cols-[0.96fr_0.84fr]">
              <div className="relative bg-[linear-gradient(180deg,var(--paper-deep)_0%,var(--paper-strong)_100%)] p-3 sm:p-4 md:p-5">
                <div className="relative mx-auto aspect-[4/4.6] max-w-[320px] overflow-hidden rounded-[24px] border border-[var(--frame-border)] bg-[var(--frame)] shadow-[0_12px_28px_var(--ink-shadow-strong)] sm:max-w-[340px] md:max-w-[360px]">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-contain p-3 sm:p-4"
                    sizes="(min-width: 1280px) 45vw, 100vw"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 p-4 pt-4 sm:p-5 xl:p-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 text-[11px] tracking-[0.22em] text-[var(--gold)] uppercase">
                      {category}
                    </span>
                    {mediumLabel ? (
                      <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-1 text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase">
                        {mediumLabel}
                      </span>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <h3 className="pr-10 font-display text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
                      {artwork.title}
                    </h3>
                    <p className="text-sm tracking-[0.18em] text-[var(--muted)] uppercase">
                      {artwork.artist}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-[var(--foreground)] sm:text-base">
                    {artwork.description}
                  </p>
                </div>

                <div className="grid gap-3 rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--muted)] sm:grid-cols-2 xl:grid-cols-3">
                  <div>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-[var(--gold)]">
                      Category
                    </p>
                    <p className="mt-1 text-[var(--foreground)]">{category}</p>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-[var(--gold)]">
                      Medium
                    </p>
                    <p className="mt-1 text-[var(--foreground)]">
                      {artwork.medium || category}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-[var(--gold)]">
                      Year
                    </p>
                    <p className="mt-1 text-[var(--foreground)]">{yearLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
