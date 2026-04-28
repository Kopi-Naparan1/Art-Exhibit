import Image from "next/image";
import Link from "next/link";
import marketVendors from "@/app/assets/arts/market-vendors.avif";
import FernandoAmorsolo from "@/app/assets/artist-picture/Fernando_Amorsolo.jpg.avif";
import AnitaMagsaysay from "@/app/assets/artist-picture/anita-magsaysay.jpg.avif";

export default function HeroSection({ title, subtitle, ctaHref = "/gallery" }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-16">
      <div className="grid items-center gap-8 rounded-4xl border border-[var(--border)] bg-[rgba(255,255,255,0.55)] p-4 shadow-[0_16px_40px_rgba(43,43,43,0.06)] sm:gap-10 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-10">
        <div className="order-1 space-y-6 lg:order-none lg:space-y-8">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
              Virtual Museum Exhibit
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight leading-tight text-[var(--forest)] sm:text-5xl md:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full border border-[rgba(203,160,90,0.42)] bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[#d4af67]"
            >
              Enter Gallery
            </Link>
            <span className="text-sm text-[var(--muted)] sm:max-w-xs">
              Museum-style presentation for school exhibit viewing
            </span>
          </div>
        </div>

        <div className="order-2 grid gap-4 sm:grid-cols-[1.1fr_0.9fr] lg:order-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface-alt)] sm:aspect-[4/4.6] lg:min-h-[420px]">
            <Image
              src={marketVendors}
              alt="Featured artwork collage"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(47,79,62,0.18)] via-transparent to-transparent" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface-alt)] sm:aspect-[1/1] lg:min-h-[180px]">
              <Image
                src={FernandoAmorsolo}
                alt="Fernando Amorsolo"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface-alt)] sm:aspect-[1/1] lg:min-h-[180px]">
              <Image
                src={AnitaMagsaysay}
                alt="Anita Magsaysay-Ho"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, 50vw"
              />
            </div>
            <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface-alt)] p-4 sm:col-span-2 sm:p-5 lg:col-span-1">
              <p className="inline-flex items-center rounded-full border border-[rgba(203,160,90,0.38)] bg-[rgba(203,160,90,0.12)] px-3 py-1 text-[11px] tracking-[0.24em] text-[var(--gold)] uppercase">
                Exhibition Focus
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                Landscapes, harvests, forests, and mythic scenes as expressions
                of Filipino identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
