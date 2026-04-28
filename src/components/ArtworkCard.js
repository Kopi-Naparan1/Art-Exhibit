"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArtworkCard({ artwork }) {
  const [isOpen, setIsOpen] = useState(false);
  const artistHref = artwork.artistSlug ? `/artists#${artwork.artistSlug}` : "/artists";

  return (
    <>
      <article className="overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_8px_24px_rgba(43,43,43,0.05)]">
        <div className="relative aspect-[4/5] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-alt)]">
          <Image
            placeholder="blur"
            src={artwork.image}
            alt={artwork.title}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />

          <button
            onClick={() => setIsOpen(true)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 shadow-md transition hover:scale-105"
            aria-label="View full image"
          >
            ⤢
          </button>

          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(43,43,43,0.28)] via-transparent to-transparent" />
        </div>

        <div className="space-y-4 p-5 sm:p-6 md:p-8">
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-medium tracking-tight text-[var(--foreground)] sm:text-[2rem]">
              {artwork.title}
            </h3>

            <p className="text-sm text-[var(--muted)]">
              <Link
                href={artistHref}
                className="font-medium text-[var(--gold)] transition-colors hover:text-[var(--forest)]"
                aria-label={`Go to ${artwork.artist} on the Artists page`}
              >
                {artwork.artist}
              </Link>{" "}
              · {artwork.medium}
            </p>
          </div>

          <p className="text-base leading-relaxed text-[var(--foreground)]">
            {artwork.description}
          </p>

          <details className="group">
            <summary className="cursor-pointer list-none text-sm font-medium text-[var(--forest)]">
              <span className="border-b border-transparent pb-0.5 group-open:border-[var(--forest)]">
                Read More
              </span>
            </summary>

            <div className="mt-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-4 text-sm leading-relaxed text-[var(--muted)]">
              This work is presented as part of the exhibit&apos;s visual study
              of nature, identity, and Filipino cultural memory.
            </div>
          </details>
        </div>
      </article>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-2xl bg-white p-4 shadow-xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-lg font-semibold shadow-md transition hover:scale-105"
              aria-label="Close preview"
            >
              ✕
            </button>

            <div className="relative mx-auto aspect-[4/5] w-full max-h-[70vh] max-w-md overflow-hidden rounded-xl md:max-w-lg lg:max-w-2xl">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {artwork.title}
              </h3>
              <p className="text-sm text-[var(--muted)]">{artwork.artist}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
