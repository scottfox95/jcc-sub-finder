"use client";

import { useState } from "react";
import {
  TEAM_NAMES,
  PLAYOFFS,
  getGameDates,
  getGamesByDate,
  getByeTeams,
  formatTime,
} from "@/lib/data";
import { SiteHeader } from "@/components/site-header";

function fmtDate(d: string): string {
  const parts = d.split(" ");
  return parts.length === 3 ? `${parts[0]}, ${parts[1]} ${parts[2]}` : d;
}

function byeDateForTeam(team: string, dates: string[]): string {
  const d = dates.find((date) => getByeTeams(date).includes(team));
  return d ? fmtDate(d) : "—";
}

export function Schedule() {
  const [team, setTeam] = useState<string | null>(null);
  const dates = getGameDates();

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <SiteHeader active="schedule" />

      <main className="flex-1 px-4 sm:px-6 pb-12 max-w-lg mx-auto w-full">
        {/* Team filter */}
        <div className="mb-4 -mx-4 px-4 overflow-x-auto">
          <div className="flex gap-2 w-max pb-1">
            <FilterPill label="All" active={team === null} onClick={() => setTeam(null)} />
            {TEAM_NAMES.map((t) => (
              <FilterPill
                key={t}
                label={t}
                active={team === t}
                onClick={() => setTeam(team === t ? null : t)}
              />
            ))}
          </div>
        </div>

        {team && (
          <p className="text-xs text-muted-foreground mb-4 animate-fade-in">
            Highlighting <span className="text-orange font-semibold">{team}</span> &middot; bye{" "}
            {byeDateForTeam(team, dates)}
          </p>
        )}

        <div className="space-y-4 stagger-children">
          {dates.map((date, i) => (
            <NightCard key={date} date={date} gameNum={i + 1} highlight={team} />
          ))}
        </div>

        {/* Playoffs */}
        <section className="mt-8">
          <h2 className="font-display text-lg tracking-wide uppercase text-foreground/80 mb-3">
            Playoffs
          </h2>
          <div className="rounded-xl bg-card border border-border/50 divide-y divide-border/40 overflow-hidden">
            {PLAYOFFS.map((p) => (
              <div key={p.round} className="flex items-center justify-between px-4 py-3">
                <span className="text-sm text-foreground/90">{p.round}</span>
                <span className="text-sm text-muted-foreground tabular-nums">
                  {fmtDate(p.date)}
                </span>
              </div>
            ))}
          </div>
        </section>

        <p className="text-[0.7rem] leading-relaxed text-muted-foreground/80 mt-5">
          Sunday games are mornings (8:30 / 9:30 / 10:30 AM). Team order in a matchup is
          listing order only &mdash; not home/away.
        </p>
      </main>
    </div>
  );
}

function NightCard({
  date,
  gameNum,
  highlight,
}: {
  date: string;
  gameNum: number;
  highlight: string | null;
}) {
  const games = getGamesByDate(date);
  const byes = getByeTeams(date);
  const teamOnBye = highlight != null && byes.includes(highlight);

  return (
    <section className="rounded-xl bg-card border border-border/50 overflow-hidden">
      <div className="flex items-center justify-between gap-2 px-4 py-2.5 bg-secondary/40 border-b border-border/40">
        <div className="flex items-baseline gap-2 min-w-0">
          <span className="font-display text-orange text-sm shrink-0">GAME {gameNum}</span>
          <span className="text-sm font-medium text-foreground truncate">{fmtDate(date)}</span>
        </div>
        {byes.length > 0 && (
          <span
            className={
              "text-[0.7rem] px-2 py-1 rounded-md shrink-0 " +
              (teamOnBye
                ? "bg-orange/20 text-orange font-semibold"
                : "bg-secondary text-muted-foreground")
            }
          >
            Bye: {byes.join(", ")}
          </span>
        )}
      </div>

      <div className="divide-y divide-border/30">
        {games.map((g, idx) => {
          const hl =
            highlight != null && (g.team1 === highlight || g.team2 === highlight);
          return (
            <div
              key={idx}
              className={
                "flex items-center gap-3 px-4 py-2.5 transition-colors " +
                (hl ? "bg-orange/10" : "")
              }
            >
              <span className="text-xs tabular-nums text-muted-foreground w-[4.5rem] shrink-0">
                {formatTime(g.time)}
              </span>
              <span
                className={
                  "text-sm flex-1 " + (hl ? "text-foreground font-medium" : "text-foreground/80")
                }
              >
                {g.team1} <span className="text-muted-foreground/50">vs</span> {g.team2}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors border active:scale-[0.97] " +
        (active
          ? "bg-orange/15 text-orange font-semibold border-orange/25"
          : "bg-card text-muted-foreground border-border/50 hover:text-foreground")
      }
    >
      {label}
    </button>
  );
}
