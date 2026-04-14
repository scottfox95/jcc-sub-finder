"use client";

import { useState, useMemo, useCallback } from "react";
import {
  TEAM_NAMES,
  getTeamPlayers,
  getTeamGames,
  getOpponent,
  formatTime,
} from "@/lib/data";
import { findEligibleSubs, type EligibleSub } from "@/lib/find-subs";
import { Badge } from "@/components/ui/badge";
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
    <span className="inline-flex items-center justify-center min-w-[2.25rem] h-7 px-2 rounded-md bg-orange/10 text-orange font-semibold text-xs tabular-nums tracking-wide border border-orange/20">
      {ranking}
    </span>
  );
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
        className="ml-auto text-xs text-muted-foreground hover:text-orange transition-colors shrink-0 px-2 py-1 rounded hover:bg-orange/5"
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

  const clearTeam = useCallback(() => {
    setSelectedTeam(null);
    setSelectedPlayer(null);
    setSelectedDate(null);
  }, []);

  const clearPlayer = useCallback(() => {
    setSelectedPlayer(null);
    setSelectedDate(null);
  }, []);

  const clearDate = useCallback(() => {
    setSelectedDate(null);
  }, []);

  const reset = useCallback(() => {
    setSelectedTeam(null);
    setSelectedPlayer(null);
    setSelectedDate(null);
  }, []);

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
      <header className="pt-10 pb-6 px-5 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground mb-2">
          JCC Basketball &middot; Spring 2026
        </p>
        <h1 className="font-display text-4xl sm:text-5xl tracking-wide text-foreground">
          SUB FINDER
        </h1>
        <div className="mt-3 mx-auto w-12 h-0.5 bg-gradient-to-r from-transparent via-orange to-transparent" />
      </header>

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
          <section className="animate-slide-up">
            <SectionLabel step={1} label="Select Your Team" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 stagger-children">
              {TEAM_NAMES.map((team) => (
                <button
                  key={team}
                  onClick={() => setSelectedTeam(team)}
                  className="group relative h-14 rounded-lg bg-card border border-border/50 text-sm font-medium text-foreground/90 transition-all duration-150 hover:border-orange/30 hover:bg-card/80 hover:text-foreground active:scale-[0.97]"
                >
                  <span className="relative z-10">{team}</span>
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-orange/[0.03] to-transparent" />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Step 2: Player Selection */}
        {showPlayerSelector && (
          <section className="animate-slide-up">
            <SectionLabel step={2} label="Who's Out?" />
            <div className="space-y-2 stagger-children">
              {teamPlayers.map((player) => (
                <button
                  key={player.name}
                  onClick={() => setSelectedPlayer(player.name)}
                  className="group w-full flex items-center gap-4 px-4 py-3.5 rounded-lg bg-card border border-border/50 transition-all duration-150 hover:border-orange/30 hover:bg-card/80 active:scale-[0.99] text-left"
                >
                  <RankBadge ranking={player.ranking} />
                  <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                    {player.name}
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Step 3: Date Selection */}
        {showDateSelector && selectedTeam && (
          <section className="animate-slide-up">
            <SectionLabel step={3} label="Which Game?" />
            <div className="space-y-2 stagger-children">
              {teamGames.map((game) => (
                <button
                  key={game.date}
                  onClick={() => setSelectedDate(game.date)}
                  className="group w-full flex items-center gap-4 px-4 py-3.5 rounded-lg bg-card border border-border/50 transition-all duration-150 hover:border-orange/30 hover:bg-card/80 active:scale-[0.99] text-left"
                >
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                      {game.date}
                    </span>
                    <span className="text-xs text-muted-foreground mt-0.5">
                      {formatTime(game.time)} &middot; vs{" "}
                      {getOpponent(game, selectedTeam)}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-orange/50 transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Step 4: Results */}
        {showResults && (
          <section className="animate-slide-up">
            {/* Results count header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl text-orange animate-count-up tabular-nums">
                  {eligibleSubs.length}
                </span>
                <span className="font-display text-lg tracking-wide uppercase text-foreground/60">
                  {eligibleSubs.length === 1 ? "Sub Available" : "Subs Available"}
                </span>
              </div>
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-orange transition-colors px-2.5 py-1.5 rounded-md hover:bg-orange/5"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {eligibleSubs.length === 0 ? (
              <div className="text-center py-12 animate-fade-in">
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
    "flex items-center justify-center gap-1.5 h-8 px-2.5 rounded-md bg-secondary/70 border border-border/30 text-xs text-muted-foreground hover:text-orange hover:border-orange/20 hover:bg-orange/5 transition-all";
  const iconBtn =
    "flex items-center justify-center w-8 h-8 rounded-md bg-secondary/70 border border-border/30 text-muted-foreground hover:text-orange hover:border-orange/20 hover:bg-orange/5 transition-all";

  return (
    <div className="rounded-lg bg-card border border-border/50 px-4 py-4 space-y-3 hover:border-orange/20 transition-colors">
      {/* Name + team + ranking */}
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">
            {sub.name}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Team {sub.team}
          </p>
          {sub.ownGame ? (
            <p className="text-xs text-orange/80 mt-1">
              Own game @ {formatTime(sub.ownGame.time)} vs {sub.ownGame.opponent}
            </p>
          ) : (
            <p className="text-xs text-emerald-400/80 mt-1">BYE this week</p>
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
