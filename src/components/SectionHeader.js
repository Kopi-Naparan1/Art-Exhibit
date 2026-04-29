export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-center md:items-start text-center md:text-left";

  return (
    <div className={`flex flex-col gap-3 w-full max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="inline-flex w-fit rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 text-xs tracking-[0.28em] text-[var(--gold)] uppercase">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--forest)] sm:text-[2.25rem] md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg hidden md:block">
          {description}
        </p>
      ) : null}
    </div>
  );
}
