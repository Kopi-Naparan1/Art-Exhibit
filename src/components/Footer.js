const footerMeta = [
  "GROUP 2",
  "Course / Section: BSIT 1A",
  "Subject: GEC 16 - Art Appreciation",
  "Developed by: NYRO's WEB AGENCY",
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(239,231,218,0.62)]">
      <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 text-sm text-[var(--muted)] sm:px-6 md:grid-cols-2 md:px-8">
        <p className="font-display text-base text-[var(--forest)]">
          Nature in Filipino Art
        </p>
        <div className="grid gap-1 text-left md:text-right">
          {footerMeta.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
