"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { ThinkingOrb } from "thinking-orbs";
import {
  TEAM_NAMES,
  PLAYERS,
  getTeamPlayers,
  getTeamGames,
  getOpponent,
  formatTime,
} from "@/lib/data";
import { findEligibleSubs, type EligibleSub } from "@/lib/find-subs";
import { isGameOver } from "@/lib/game-time";
import { useNow } from "@/lib/use-now";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Phone,
  Mail,
  MessageSquare,
  Copy,
  Check,
  RotateCcw,
  ChevronRight,
} from "lucide-react";

function RankBadge({ ranking }: { ranking: number }) {
  return (
    <span className="inline-flex items-center justify-center min-w-[2.25rem] h-7 px-2 rounded-md bg-orange/10 text-orange font-semibold text-xs tabular-nums tracking-wide shadow-[inset_0_0_0_1px_rgba(255,107,43,0.2)]">
      {ranking}
    </span>
  );
}

/** Rolls 0 → value on mount (ease-out quint ≈ --ease-smooth), instant under reduced motion. */
function RollingCount({ value, durationMs = 650 }: { value: number; durationMs?: number }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t0 = performance.now();
    let raf = requestAnimationFrame(function step(t) {
      const p = reduce ? 1 : Math.min(1, (t - t0) / durationMs);
      setShown(Math.round(value * (1 - Math.pow(1 - p, 5))));
      if (p < 1) raf = requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(raf);
  }, [value, durationMs]);
  return <>{shown}</>;
}

function SectionLabel({
  step,
  label,
}: {
  step: number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange/15 text-orange text-xs font-bold tabular-nums">
        {step}
      </span>
      <h2 className="font-display text-lg tracking-wide uppercase text-foreground/80">
        {label}
      </h2>
    </div>
  );
}

function CompletedStep({
  step,
  label,
  value,
  extra,
  onClear,
}: {
  step: number;
  label: string;
  value: string;
  extra?: string;
  onClear: () => void;
}) {
  return (
    <div className="flex items-center gap-3 py-3 animate-fade-in">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange text-background text-xs font-bold tabular-nums shrink-0">
        {step}
      </span>
      <span className="text-sm text-muted-foreground uppercase tracking-wider shrink-0">
        {label}
      </span>
      <ChevronRight className="w-3 h-3 text-muted-foreground/50 shrink-0" />
      <span className="text-sm font-medium text-foreground truncate">
        {value}
      </span>
      {extra && (
        <span className="text-sm text-muted-foreground truncate hidden sm:inline">
          {extra}
        </span>
      )}
      <button
        onClick={onClear}
        className="ml-auto text-xs text-muted-foreground hover:text-orange transition-colors shrink-0 px-2 py-1 rounded hover:bg-orange/5 active:scale-[0.98]"
      >
        Change
      </button>
    </div>
  );
}

export function SubFinder() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const scanTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const now = useNow();

  const teamPlayers = useMemo(
    () => (selectedTeam ? getTeamPlayers(selectedTeam) : []),
    [selectedTeam]
  );

  const teamGames = useMemo(
    () => (selectedTeam ? getTeamGames(selectedTeam) : []),
    [selectedTeam]
  );

  const selectedPlayerData = useMemo(
    () => teamPlayers.find((p) => p.name === selectedPlayer) ?? null,
    [teamPlayers, selectedPlayer]
  );

  const selectedGameData = useMemo(
    () =>
      selectedTeam && selectedDate
        ? teamGames.find((g) => g.date === selectedDate) ?? null
        : null,
    [teamGames, selectedTeam, selectedDate]
  );

  const eligibleSubs = useMemo(() => {
    if (!selectedTeam || !selectedPlayer || !selectedDate) return [];
    return findEligibleSubs(selectedTeam, selectedPlayer, selectedDate);
  }, [selectedTeam, selectedPlayer, selectedDate]);

  const nextGameDate = useMemo(
    () =>
      now == null
        ? null
        : teamGames.find((g) => !isGameOver(g.date, g.time, now))?.date ?? null,
    [teamGames, now]
  );

  const stopScan = useCallback(() => {
    if (scanTimer.current) clearTimeout(scanTimer.current);
    setScanning(false);
  }, []);

  /** Picking a game runs a short "scanning the league" beat before results reveal. */
  const selectDate = useCallback((date: string) => {
    setSelectedDate(date);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (scanTimer.current) clearTimeout(scanTimer.current);
    setScanning(true);
    scanTimer.current = setTimeout(() => setScanning(false), 900);
  }, []);

  const clearTeam = useCallback(() => {
    stopScan();
    setSelectedTeam(null);
    setSelectedPlayer(null);
    setSelectedDate(null);
  }, [stopScan]);

  const clearPlayer = useCallback(() => {
    stopScan();
    setSelectedPlayer(null);
    setSelectedDate(null);
  }, [stopScan]);

  const clearDate = useCallback(() => {
    stopScan();
    setSelectedDate(null);
  }, [stopScan]);

  const reset = useCallback(() => {
    stopScan();
    setSelectedTeam(null);
    setSelectedPlayer(null);
    setSelectedDate(null);
  }, [stopScan]);

  const copyToClipboard = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2000);
  }, []);

  const showTeamSelector = !selectedTeam;
  const showPlayerSelector = selectedTeam && !selectedPlayer;
  const showDateSelector = selectedTeam && selectedPlayer && !selectedDate;
  const showResults = selectedTeam && selectedPlayer && selectedDate;

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      {/* Header */}
      <SiteHeader active="finder" onWordmark={reset} />

      {/* Main content */}
      <main className="flex-1 px-4 sm:px-6 pb-12 max-w-lg mx-auto w-full">
        {/* Completed steps summary */}
        <div className="space-y-0 divide-y divide-border/50">
          {selectedTeam && !showTeamSelector && (
            <CompletedStep
              step={1}
              label="Team"
              value={selectedTeam}
              onClear={clearTeam}
            />
          )}
          {selectedPlayer && !showPlayerSelector && (
            <CompletedStep
              step={2}
              label="Out"
              value={selectedPlayer}
              extra={selectedPlayerData ? `(${selectedPlayerData.ranking})` : ""}
              onClear={clearPlayer}
            />
          )}
          {selectedDate && !showDateSelector && selectedGameData && selectedTeam && (
            <CompletedStep
              step={3}
              label="Game"
              value={selectedDate}
              extra={`@ ${formatTime(selectedGameData.time)} vs ${getOpponent(selectedGameData, selectedTeam)}`}
              onClear={clearDate}
            />
          )}
        </div>

        {/* Divider after completed steps */}
        {(selectedTeam || selectedPlayer || selectedDate) && (
          <div className="my-4" />
        )}

        {/* Step 1: Team Selection */}
        {showTeamSelector && (
          <section className="animate-enter">
            <SectionLabel step={1} label="Select Your Team" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 stagger-children">
              {TEAM_NAMES.map((team) => (
                <button
                  key={team}
                  onClick={() => setSelectedTeam(team)}
                  className="surface surface-interactive h-14 rounded-xl text-sm font-medium text-foreground/85 hover:text-foreground"
                >
                  {team}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Step 2: Player Selection */}
        {showPlayerSelector && (
          <section className="animate-enter">
            <SectionLabel step={2} label="Who's Out?" />
            <div className="space-y-2 stagger-children">
              {teamPlayers.map((player) => (
                <button
                  key={player.name}
                  onClick={() => setSelectedPlayer(player.name)}
                  className="surface surface-interactive group w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left"
                >
                  <RankBadge ranking={player.ranking} />
                  <span className="text-sm font-medium text-foreground/85 group-hover:text-foreground transition-colors">
                    {player.name}
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Step 3: Date Selection */}
        {showDateSelector && selectedTeam && (
          <section className="animate-enter">
            <SectionLabel step={3} label="Which Game?" />
            <div className="space-y-2 stagger-children">
              {teamGames.map((game) => {
                const played = now != null && isGameOver(game.date, game.time, now);
                const isNext = game.date === nextGameDate;
                return (
                  <button
                    key={game.date}
                    onClick={() => selectDate(game.date)}
                    className={
                      "surface surface-interactive group w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left" +
                      (isNext ? " surface-next" : "")
                    }
                  >
                    <div className="flex flex-col min-w-0 flex-1">
                      <span
                        className={
                          "flex items-center gap-2 text-sm font-medium group-hover:text-foreground transition-colors " +
                          (played ? "text-foreground/40" : "text-foreground/85")
                        }
                      >
                        {game.date}
                        {isNext && (
                          <span className="px-1.5 py-0.5 rounded-md bg-orange/15 text-orange text-[0.6rem] font-semibold uppercase tracking-[0.12em]">
                            Next up
                          </span>
                        )}
                        {played && (
                          <span className="text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground/60">
                            Played
                          </span>
                        )}
                      </span>
                      <span
                        className={
                          "text-xs mt-0.5 " +
                          (played ? "text-muted-foreground/50" : "text-muted-foreground")
                        }
                      >
                        {formatTime(game.time)} &middot; vs{" "}
                        {getOpponent(game, selectedTeam)}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-orange group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Step 4a: scanning beat */}
        {showResults && scanning && selectedGameData && (
          <section
            role="status"
            aria-live="polite"
            className="animate-enter flex flex-col items-center text-center py-14"
          >
            <ThinkingOrb state="searching" size={64} color="#FF6B2B" aria-label="Searching for subs" />
            <p className="mt-5 font-display text-lg tracking-wide uppercase text-foreground/80">
              Scanning the league
            </p>
            <p className="mt-1.5 text-xs text-muted-foreground">
              {PLAYERS.length} players &middot; skipping teams on court at{" "}
              {formatTime(selectedGameData.time)}
            </p>
          </section>
        )}

        {/* Step 4b: Results */}
        {showResults && !scanning && (
          <section className="animate-enter">
            {/* Results count header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl text-orange animate-count-up tabular-nums">
                  <RollingCount value={eligibleSubs.length} />
                </span>
                <span className="font-display text-lg tracking-wide uppercase text-foreground/60">
                  {eligibleSubs.length === 1 ? "Sub Available" : "Subs Available"}
                </span>
              </div>
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-orange transition-colors px-2.5 py-1.5 rounded-md hover:bg-orange/5 active:scale-[0.98]"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {eligibleSubs.length === 0 ? (
              <div className="flex flex-col items-center text-center py-12 animate-fade-in">
                <ThinkingOrb state="breathing" size={32} theme="dark" aria-hidden="true" className="mb-4 opacity-60" />
                <p className="text-muted-foreground text-sm">
                  No eligible subs found at this ranking for this time slot.
                </p>
              </div>
            ) : (
              <div className="space-y-2.5 stagger-children">
                {eligibleSubs.map((sub) => (
                  <SubCard
                    key={sub.name}
                    sub={sub}
                    copiedField={copiedField}
                    onCopy={copyToClipboard}
                  />
                ))}
              </div>
            )}
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function SubCard({
  sub,
  copiedField,
  onCopy,
}: {
  sub: EligibleSub;
  copiedField: string | null;
  onCopy: (text: string, id: string) => void;
}) {
  const phoneId = `phone-${sub.name}`;
  const emailId = `email-${sub.name}`;

  const actionBtn =
    "flex items-center justify-center gap-1.5 h-8 px-3 rounded-lg bg-secondary/60 hairline hairline-interactive text-xs text-muted-foreground hover:text-orange hover:bg-orange/5 active:scale-[0.98] transition-all";
  const iconBtn =
    "flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/60 hairline hairline-interactive text-muted-foreground hover:text-orange hover:bg-orange/5 active:scale-[0.98] transition-all";

  return (
    <div className="surface rounded-xl px-4 py-4 space-y-3.5">
      {/* Name + team + ranking */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.95rem] font-semibold text-foreground truncate leading-tight">
            {sub.name}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Team {sub.team}
          </p>
          {sub.ownGame ? (
            <p className="text-xs text-orange-dim mt-2">
              Playing @ {formatTime(sub.ownGame.time)} vs {sub.ownGame.opponent}
            </p>
          ) : (
            <span className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded-md bg-emerald-500/10 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)] text-[0.7rem] font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Bye this week
            </span>
          )}
        </div>
        <RankBadge ranking={sub.ranking} />
      </div>

      {/* Phone row */}
      <div className="flex items-center gap-1.5">
        <span className="flex-1 text-xs tabular-nums text-foreground/70 pl-0.5">
          {sub.phone}
        </span>
        <a href={`sms:${sub.phone}`} className={actionBtn}>
          <MessageSquare className="w-3 h-3" />
          <span>Text</span>
        </a>
        <a href={`tel:${sub.phone}`} className={actionBtn}>
          <Phone className="w-3 h-3" />
          <span>Call</span>
        </a>
        <button
          onClick={() => onCopy(sub.phone, phoneId)}
          className={iconBtn}
          title="Copy phone"
        >
          {copiedField === phoneId ? (
            <Check className="w-3 h-3 text-green-500" />
          ) : (
            <Copy className="w-3 h-3" />
          )}
        </button>
      </div>

      {/* Email row */}
      <div className="flex items-center gap-1.5">
        <span className="flex-1 text-xs text-foreground/70 truncate pl-0.5">
          {sub.email}
        </span>
        <a href={`mailto:${sub.email}`} className={actionBtn}>
          <Mail className="w-3 h-3" />
          <span>Email</span>
        </a>
        <button
          onClick={() => onCopy(sub.email, emailId)}
          className={iconBtn}
          title="Copy email"
        >
          {copiedField === emailId ? (
            <Check className="w-3 h-3 text-green-500" />
          ) : (
            <Copy className="w-3 h-3" />
          )}
        </button>
      </div>
    </div>
  );
}
