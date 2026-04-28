"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/artists", label: "Artists" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(247,243,237,0.96)] transition-shadow",
        isScrolled ? "shadow-[0_10px_24px_rgba(43,43,43,0.08)]" : "shadow-none",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8 md:py-4">
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="font-display text-base tracking-[0.16em] text-[var(--forest)] uppercase sm:text-lg sm:tracking-[0.18em]">
            Nature in Filipino Art
          </span>
          <span className="text-[10px] tracking-[0.24em] text-[var(--muted)] uppercase sm:text-xs sm:tracking-[0.28em]">
            Virtual Gallery Exhibit
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--forest)] md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={[
                  "relative text-sm tracking-wide transition-colors",
                  active
                    ? "text-[var(--forest)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]",
                ].join(" ")}
              >
                {item.label}
                <span
                  className={[
                    "absolute -bottom-1 left-0 h-px w-full origin-left bg-[var(--forest)] transition-transform",
                    active ? "scale-x-100" : "scale-x-0",
                  ].join(" ")}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      <div
        id="primary-navigation"
        className={[
          "border-t border-[var(--border)] bg-[rgba(247,243,237,0.98)] px-4 py-4 md:hidden sm:px-6",
          menuOpen ? "block" : "hidden",
        ].join(" ")}
      >
        <nav
          aria-label="Mobile primary"
          className="mx-auto grid max-w-7xl gap-2"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={[
                  "rounded-2xl border px-4 py-3 text-sm tracking-wide transition-colors",
                  active
                    ? "border-[var(--forest)] bg-[var(--hover)] text-[var(--forest)]"
                    : "border-[var(--border)] text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--foreground)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
