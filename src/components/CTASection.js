import Link from "next/link";

export default function CTASection({ title, description, href, label }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:px-8 md:py-12">
      <div className="rounded-[34px] border border-[var(--border)] bg-[var(--surface-alt)] px-6 py-10 text-center shadow-[0_10px_26px_var(--ink-shadow)] md:px-10 md:py-14">
        <p className="mx-auto mb-3 inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 text-xs tracking-[0.28em] text-[var(--gold)] uppercase">
          Final Reflection
        </p>

        <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--forest)] md:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
          {description}
        </p>

        <div className="mt-8">
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[#fff7ea] transition-colors hover:bg-[var(--accent-strong)]"
          >
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
