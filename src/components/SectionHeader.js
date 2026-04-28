export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex w-full max-w-3xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <p className="inline-flex w-fit items-center rounded-full border border-[rgba(203,160,90,0.38)] bg-[rgba(203,160,90,0.12)] px-3 py-1 text-xs tracking-[0.28em] text-[var(--gold)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--forest)] sm:text-[2.25rem] md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
