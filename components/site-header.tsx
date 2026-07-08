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
    <header className="pt-10 pb-4 px-5 text-center">
      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground mb-2">
        JCC Basketball &middot; Summer 2026
      </p>
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide">
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
      <div className="mt-3 mx-auto w-12 h-0.5 bg-gradient-to-r from-transparent via-orange to-transparent" />
      <nav className="mt-5 flex items-center justify-center gap-2">
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
        "px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors border " +
        (active
          ? "bg-orange/15 text-orange font-semibold border-orange/20"
          : "text-muted-foreground hover:text-foreground border-transparent hover:border-border/50")
      }
    >
      {label}
    </Link>
  );
}
