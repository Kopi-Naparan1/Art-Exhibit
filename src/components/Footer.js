const footerMeta = ["Group 2", "BSIT 1A", "GEC 16 - Art Appreciation"];

const developerUrl = "https://instagram.com/nyro_k1";

const services = ["Landing pages", "Portfolio sites", "Student projects"];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(139,109,72,0.22)] bg-[#d3cbbd]">
      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="font-serif text-lg font-semibold tracking-tight text-[#3a2e1e]">
              Nature in Filipino Art
            </p>
            <p className="mt-1.5 max-w-[280px] text-sm leading-relaxed text-[#7a6a52]">
              A visual study of how nature shapes Filipino identity, memory,
              labor, folklore, and belonging - told through art.
            </p>
            <div className="my-5 h-px w-8 bg-[rgba(139,109,72,0.35)]" />
            <div className="flex flex-col gap-1">
              {footerMeta.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs text-[#7a6a52]"
                >
                  <span className="h-1 w-1 rounded-full bg-[rgba(139,109,72,0.45)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[rgba(139,109,72,0.2)] bg-[#f5f0e8] p-6">
            <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full border-[18px] border-[rgba(139,109,72,0.08)]" />
            <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-[#a07840]">
              Open for work
            </p>
            <p className="font-serif text-[17px] font-semibold leading-snug text-[#2c2218]">
              Need a website that actually looks good?
            </p>
            <p className="mt-2.5 mb-4 text-sm leading-relaxed text-[#6b5c46]">
              I design and build modern websites - for businesses, student orgs,
              and personal brands. Clean code, responsive layout, real attention
              to detail.
            </p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[rgba(160,120,64,0.22)] bg-[rgba(160,120,64,0.12)] px-2.5 py-0.5 text-[11px] font-medium text-[#7a5c2e]"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs text-[#7a6a52]">Let's talk:</span>
              <a
                href={developerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[rgba(215,165,83,0.42)]  px-4 py-1.5 text-[12.5px] font-medium transition-all duration-200 hover:-translate-y-px hover:bg-[#d7b596] hover:shadow-md active:scale-95"
                aria-label="Message @nyro_k1 on Instagram"
              >
                @nyro_k1
                <span className="text-[#7a6a52] transition-transform duration-200 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-[rgba(139,109,72,0.15)] pt-5">
          <span className="text-[11px] text-[#a89880]">
            Built with care for Art Appreciation · GEC 16 · 2025
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-[#6b8a5e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7baa6d]" />
            Available for freelance
          </span>
        </div>
      </div>
    </footer>
  );
}
