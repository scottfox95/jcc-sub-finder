"use client";

import { RotateCcw } from "lucide-react";
import { PLAYOFFS, TEAM_NAMES, formatTime } from "@/lib/data";
import {
  FIRST_ROUND,
  getFirstRound,
  getFirstRoundByes,
  isFirstRoundUpcoming,
} from "@/lib/playoffs";
import { useNow } from "@/lib/use-now";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function fmtDate(d: string): string {
  const parts = d.split(" ");
  return parts.length === 3 ? `${parts[0]}, ${parts[1]} ${parts[2]}` : d;
}

const SHORT_ROUND: Record<string, string> = {
  "First Round": "Round 1",
  Quarterfinals: "Quarters",
  Semifinals: "Semis",
  Championship: "Final",
};

/** Teams still alive going into each round. */
const FIELD = [TEAM_NAMES.length, 8, 4, 2];

export function PlayoffBracket() {
  const matchups = getFirstRound();
  const byes = getFirstRoundByes();
  const now = useNow();
  const upcoming = now == null || isFirstRoundUpcoming(now);

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <SiteHeader active="playoffs" />

      <main className="flex-1 px-4 sm:px-6 pb-12 max-w-lg mx-auto w-full">
        {/* Round strip */}
        <ol className="surface rounded-xl grid grid-cols-4 mb-6 overflow-hidden">
          {PLAYOFFS.map((p, i) => {
            const current = i === 0 && upcoming;
            return (
              <li
                key={p.round}
                className={
                  "relative px-2 py-2.5 text-center" +
                  (i > 0 ? " border-l border-border/40" : "") +
                  (current ? " bg-orange/[0.08]" : "")
                }
              >
                {current && <span className="absolute inset-x-0 top-0 h-0.5 bg-orange" />}
                <p
                  className={
                    "text-[0.66rem] font-semibold uppercase tracking-[0.1em] " +
                    (current ? "text-orange" : "text-foreground/75")
                  }
                >
                  {SHORT_ROUND[p.round] ?? p.round}
                </p>
                <p className="text-[0.68rem] text-muted-foreground tabular-nums mt-0.5">
                  {p.date === "TBA" ? "TBA" : p.date.split(" ").slice(1).join(" ")}
                  <span className="text-muted-foreground/50"> &middot; {FIELD[i]}</span>
                </p>
              </li>
            );
          })}
        </ol>

        {/* First round */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <h2 className="font-display text-lg tracking-wide uppercase text-foreground/90">
              {FIRST_ROUND.round}
            </h2>
            {upcoming && (
              <span className="px-1.5 py-0.5 rounded-md bg-orange/15 text-orange text-[0.6rem] font-semibold uppercase tracking-[0.12em]">
                Next up
              </span>
            )}
          </div>
          <span className="text-sm text-muted-foreground tabular-nums">
            {fmtDate(FIRST_ROUND.date)}
          </span>
        </div>
        <div className="space-y-2.5 mb-6">
          {matchups.map((m) => (
            <div key={m.high.team} className="surface rounded-xl flex items-stretch overflow-hidden">
              <div className="flex-1 min-w-0 py-1.5">
                <TeamRow seed={m.high.seed} team={m.high.team} />
                <TeamRow seed={m.low.seed} team={m.low.team} />
              </div>
              <div className="w-[5.5rem] shrink-0 flex items-center justify-center border-l border-border/40">
                <span className="text-sm font-semibold tabular-nums text-foreground">
                  {formatTime(m.game.time)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Byes */}
        <div className="surface rounded-xl px-4 py-3.5">
          <p className="text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
            Bye &middot; top 3 seeds
          </p>
          <div className="flex flex-wrap gap-2 mt-2.5">
            {byes.map((t) => (
              <span
                key={t}
                className="inline-flex items-center h-8 px-3 rounded-full bg-orange/10 shadow-[inset_0_0_0_1px_rgba(255,107,43,0.25)] text-sm font-medium text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed">
            They meet the five first-round winners in the quarterfinals on{" "}
            {fmtDate(PLAYOFFS[1].date)}. Matchups post after {FIRST_ROUND.date.split(" ").slice(1).join(" ")}.
          </p>
        </div>

        {upcoming && (
          <a
            href="/playoffs?intro"
            className="mt-8 inline-flex items-center gap-1.5 h-11 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Replay the intro
          </a>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function TeamRow({ seed, team }: { seed: number | null; team: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-1.5">
      <span className="w-6 text-right font-display text-sm text-orange tabular-nums shrink-0">
        {seed ?? "–"}
      </span>
      <span className="text-[0.95rem] text-foreground truncate">{team}</span>
    </div>
  );
}
