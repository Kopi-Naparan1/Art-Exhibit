"use client";

export default function SectionJumpLinks({ items }) {
  const handleJump = (event, href) => {
    event.preventDefault();

    const id = href.startsWith("#") ? href.slice(1) : href;
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const header = document.querySelector("header");
    const headerOffset = header ? header.getBoundingClientRect().height + 20 : 96;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });
  };

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(event) => handleJump(event, item.href)}
          className="rounded-[22px] border border-[var(--border)] bg-[var(--paper-strong)] px-4 py-3 transition-colors hover:bg-[var(--hover)]"
        >
          <p className="text-sm font-medium text-[var(--foreground)]">
            {item.label}
          </p>
          <p className="mt-1 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
            {item.detail}
          </p>
        </a>
      ))}
    </div>
  );
}
