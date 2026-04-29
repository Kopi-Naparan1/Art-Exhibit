import Image from "next/image";
import Link from "next/link";
import bardagoTree from "@/app/assets/our-arts/bardago-tree.avif";
import naparanCoffee from "@/app/assets/our-arts/naparan-coffee.avif";
import echavezMountain from "@/app/assets/our-arts/echaves-mountain.avif";

const heroArtworks = [
  {
    title: "Tree",
    detail: "Cubist structure, layered greens, and abstracted natural form",
    image: bardagoTree,
    priority: true,
  },
  {
    title: "Nature Coffee Painting",
    detail: "Coffee tones, quiet atmosphere, and organic texture",
    image: naparanCoffee,
  },
  {
    title: "Mountain",
    detail: "Pencil shading, distance, and a calm mountain landscape",
    image: echavezMountain,
  },
];

export default function HeroSection({
  eyebrow = "Virtual Museum Exhibit",
  title,
  subtitle,
  ctaHref = "/gallery",
  ctaLabel = "Explore Gallery",
}) {
  const [primaryArtwork, firstSecondaryArtwork, secondSecondaryArtwork] =
    heroArtworks;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-14">
      <div className="grid items-start gap-6 rounded-4xl border border-[var(--border)] bg-[var(--paper)] p-4 shadow-[0_16px_40px_var(--ink-shadow)] sm:gap-8 sm:p-6 lg:grid-cols-[0.96fr_1.04fr] lg:gap-10 lg:p-8 xl:p-10">
        <div className="order-1 space-y-5 self-center lg:space-y-7">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
              {eyebrow}
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-[var(--forest)] sm:text-5xl md:text-6xl xl:text-7xl">
              {title}
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base md:text-lg">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href={ctaHref}
              style={{ color: "#fffdf7" }}
              className="inline-flex w-full items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[#fffdf7] transition-colors hover:bg-[var(--accent-strong)] hover:text-[#fffdf7] sm:w-auto"
            >
              {ctaLabel}
            </Link>
            <span className="hidden text-sm text-[var(--muted)] sm:block sm:max-w-[18rem]">
              Featuring landscapes, harvest scenes, and works shaped by
              mythology and place.
            </span>
          </div>

          <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-alt)] p-4 sm:hidden">
            <p className="inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 text-[11px] tracking-[0.24em] text-[var(--gold)] uppercase">
              Exhibit Focus
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              The opening sequence foregrounds artworks that examine nature
              through labor, landscape, and folklore.
            </p>
          </div>
        </div>

        <div className="order-2 grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative aspect-[4/4.2] overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface-alt)] sm:aspect-[4/4.6] lg:min-h-[430px]">
            <Image
              src={primaryArtwork.image}
              alt={primaryArtwork.title}
              fill
              priority={primaryArtwork.priority}
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,42,28,0.32)] via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <div className="max-w-[18rem] rounded-[22px] border border-[var(--frame-border)] bg-[rgba(24,43,29,0.58)] p-3 text-[var(--on-accent)] backdrop-blur-sm sm:p-4">
                <p className="text-[10px] tracking-[0.26em] uppercase text-[var(--on-accent-muted)]">
                  Featured Artwork
                </p>
                <h2 className="mt-1 font-display text-2xl leading-tight sm:text-[2rem]">
                  {primaryArtwork.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-[var(--on-accent-muted)]">
                  {primaryArtwork.detail}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface-alt)] sm:aspect-[1/1] lg:min-h-[170px]">
              <Image
                src={firstSecondaryArtwork.image}
                alt={firstSecondaryArtwork.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(21,38,25,0.72)] via-[rgba(21,38,25,0.14)] to-transparent p-3">
                <p className="text-[10px] tracking-[0.22em] uppercase text-[var(--on-accent-muted)]">
                  Secondary Work
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--on-accent)]">
                  {firstSecondaryArtwork.title}
                </p>
              </div>
            </div>

            <div className="hidden overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface-alt)] sm:block lg:min-h-[170px]">
              <div className="relative aspect-[4/3] sm:aspect-[1/1] lg:h-full">
                <Image
                  src={secondSecondaryArtwork.image}
                  alt={secondSecondaryArtwork.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(21,38,25,0.72)] via-[rgba(21,38,25,0.14)] to-transparent p-3">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[var(--on-accent-muted)]">
                    Secondary Work
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--on-accent)]">
                    {secondSecondaryArtwork.title}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface-alt)] p-4 sm:col-span-2 sm:block sm:p-5 lg:col-span-1">
              <p className="inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 text-[11px] tracking-[0.24em] text-[var(--gold)] uppercase">
                Exhibition Focus
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                Landscapes, harvest scenes, and forest imagery establish the
                exhibition's visual language from the first screen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
