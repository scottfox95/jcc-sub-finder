"use client";

import Link from "next/link";
import { PLAYOFFS, SEASON_NAME, SEASON_YEAR, formatTime } from "@/lib/data";
import { formatCountdown, nextGameNight } from "@/lib/game-time";
import { useNow } from "@/lib/use-now";

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
    <header className="relative overflow-hidden pt-11 pb-5 px-5 text-center">
      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground/90 mb-4">
        JCC Basketball &middot; {SEASON_NAME} {SEASON_YEAR}
      </p>
      <h1 className="font-display text-[2.5rem] sm:text-5xl leading-none tracking-[0.01em]">
        <span className="relative inline-block isolate">
          <CourtLines />
          {onWordmark ? (
            <button onClick={onWordmark} className={wordmarkClass} aria-label="Back to start">
              SUB FINDER
            </button>
          ) : (
            <Link href="/" className={wordmarkClass} aria-label="Back to start">
              SUB FINDER
            </Link>
          )}
        </span>
      </h1>

      <NextTipoff />

      {/* Segmented control */}
      <nav className="mt-4 inline-flex items-center gap-1 p-1 rounded-full bg-secondary/60 hairline">
        <NavPill href="/" label="Sub Finder" active={active === "finder"} />
        <NavPill href="/schedule" label="Schedule" active={active === "schedule"} />
      </nav>
    </header>
  );
}

/**
 * Center circle (seen in perspective, so an ellipse) hugging the wordmark with a
 * fixed 48px / 14px margin, plus the half-court line running out from its sides.
 * Sized off the text box, so it fits at every breakpoint.
 */
function CourtLines() {
  return (
    <span aria-hidden="true" className="court pointer-events-none absolute -inset-x-12 -inset-y-3.5 -z-10">
      <svg fill="none" className="absolute inset-0 w-full h-full overflow-visible">
        <ellipse
          cx="50%"
          cy="50%"
          rx="50%"
          ry="50%"
          pathLength={1}
          stroke="rgba(255,107,43,0.3)"
          strokeWidth="1"
        />
      </svg>
      <span className="court-line absolute top-1/2 right-full w-[42vw] h-px origin-right bg-gradient-to-l from-orange/30 to-transparent" />
      <span className="court-line absolute top-1/2 left-full w-[42vw] h-px origin-left bg-gradient-to-r from-orange/30 to-transparent" />
    </span>
  );
}

/** Live countdown to the next game night; "Live now" while games are on. */
function NextTipoff() {
  const now = useNow();
  const night = now == null ? null : nextGameNight(now);

  return (
    <div className="mt-5 h-7 flex justify-center" aria-live="polite">
      {now != null && (
        <div className="animate-fade-in inline-flex items-center gap-2 h-7 pl-2.5 pr-3 rounded-full bg-secondary/50 hairline text-[0.68rem]">
          <span className="relative flex w-1.5 h-1.5 shrink-0">
            <span className="absolute inset-0 rounded-full bg-orange animate-live-ping" />
            <span className="relative w-1.5 h-1.5 rounded-full bg-orange" />
          </span>
          {night ? (
            night.live ? (
              <>
                <span className="uppercase tracking-[0.14em] text-orange font-semibold">Live now</span>
                <span className="text-foreground/85">Game night &middot; {night.date}</span>
              </>
            ) : (
              <>
                <span className="uppercase tracking-[0.14em] text-muted-foreground">Next tip-off</span>
                <span className="text-foreground/85">
                  {night.date} &middot; {formatTime(night.firstTime)}
                </span>
                <span className="text-orange font-semibold tabular-nums">
                  {formatCountdown(night.start - now)}
                </span>
              </>
            )
          ) : (
            <>
              <span className="uppercase tracking-[0.14em] text-muted-foreground">Playoffs</span>
              <span className="text-foreground/85">{PLAYOFFS[0].date}</span>
            </>
          )}
        </div>
      )}
    </div>
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
        "px-4 py-1.5 rounded-full text-[0.7rem] uppercase tracking-[0.12em] font-semibold transition-all duration-[var(--dur-base)] active:scale-[0.98] " +
        (active
          ? "bg-orange text-background shadow-[0_1px_8px_-2px_rgba(255,107,43,0.6)]"
          : "text-muted-foreground hover:text-foreground")
      }
    >
      {label}
    </Link>
  );
}
