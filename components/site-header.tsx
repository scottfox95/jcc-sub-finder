"use client";

import Link from "next/link";

export function SiteHeader({
  active,
  onWordmark,
}: {
  active: "finder" | "schedule";
  /** When provided (home page), the wordmark resets state instead of navigating. */
  onWordmark?: () => void;
}) {
  const wordmarkClass =
    "text-foreground hover:opacity-80 active:opacity-70 transition-opacity cursor-pointer";

  return (
    <header className="pt-11 pb-5 px-5 text-center">
      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground/90 mb-2.5">
        JCC Basketball &middot; Summer 2026
      </p>
      <h1 className="font-display text-[2.5rem] sm:text-5xl leading-none tracking-[0.01em]">
        {onWordmark ? (
          <button onClick={onWordmark} className={wordmarkClass} aria-label="Back to start">
            SUB FINDER
          </button>
        ) : (
          <Link href="/" className={wordmarkClass} aria-label="Back to start">
            SUB FINDER
          </Link>
        )}
      </h1>
      <div className="mt-3.5 mx-auto w-10 h-px bg-gradient-to-r from-transparent via-orange to-transparent" />

      {/* Segmented control */}
      <nav className="mt-6 inline-flex items-center gap-1 p-1 rounded-full bg-secondary/60 border border-border/50">
        <NavPill href="/" label="Sub Finder" active={active === "finder"} />
        <NavPill href="/schedule" label="Schedule" active={active === "schedule"} />
      </nav>
    </header>
  );
}

function NavPill({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        "px-4 py-1.5 rounded-full text-[0.7rem] uppercase tracking-[0.12em] font-semibold transition-all duration-200 " +
        (active
          ? "bg-orange text-background shadow-[0_1px_8px_-2px_rgba(255,107,43,0.6)]"
          : "text-muted-foreground hover:text-foreground")
      }
    >
      {label}
    </Link>
  );
}
