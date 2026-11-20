import { PLAYOFFS, getByeTeams, getGameDates, getGamesByDate, type Game } from "./data";
import { GAME_MS, gameStartMs } from "./game-time";

/**
 * Playoff seeds as posted in the league chat for the first round (Wed Dec 2).
 * Seeds 1-3 (the three teams on bye) weren't listed with their order, so they
 * are left out here and shown as "top-3 seed" until the order is known.
 */
export const PLAYOFF_SEEDS: Record<string, number> = {
  Levine: 4,
  Roth: 5,
  Kirkley: 6,
  Rosner: 7,
  Hawkins: 8,
  Khoury: 9,
  Jackson: 10,
  Weitz: 11,
  Schnipper: 12,
  Tohar: 13,
};

export const FIRST_ROUND = PLAYOFFS[0];

/**
 * localStorage key, per round: the intro plays once per device. (WhatsApp opens
 * every link tap in a fresh tab, so sessionStorage would replay it each time.)
 */
export const INTRO_SEEN_KEY = `jcc-playoffs-intro-f26-${FIRST_ROUND.date.replace(/\s+/g, "-").toLowerCase()}`;

/**
 * The playoff edition switches on once the last regular-season game night is
 * over (Wed Nov 18, 10 PM ET), so it's live for the whole build-up to Dec 2.
 */
export const PLAYOFF_EDITION_START: number = (() => {
  const regular = getGameDates().filter((d) => !PLAYOFFS.some((p) => p.date === d));
  const last = regular[regular.length - 1];
  const games = getGamesByDate(last);
  return Math.max(...games.map((g) => gameStartMs(g.date, g.time))) + GAME_MS;
})();

/**
 * The intro announces the first round, so it only plays in the run-up to it
 * and stops once that night's games are over.
 */
export const INTRO_END: number = (() => {
  const games = getGamesByDate(FIRST_ROUND.date);
  return Math.max(...games.map((g) => gameStartMs(g.date, g.time))) + GAME_MS;
})();

/** First-round night is still to come (or under way). */
export function isFirstRoundUpcoming(now: number): boolean {
  return now < INTRO_END;
}

export function isPlayoffEdition(now: number = Date.now()): boolean {
  return now >= PLAYOFF_EDITION_START;
}

export interface Matchup {
  game: Game;
  high: { team: string; seed: number | null };
  low: { team: string; seed: number | null };
}

/** First-round games with the higher seed listed first. */
export function getFirstRound(): Matchup[] {
  return getGamesByDate(FIRST_ROUND.date).map((game) => {
    const a = { team: game.team1, seed: PLAYOFF_SEEDS[game.team1] ?? null };
    const b = { team: game.team2, seed: PLAYOFF_SEEDS[game.team2] ?? null };
    const aFirst = (a.seed ?? 99) <= (b.seed ?? 99);
    return { game, high: aFirst ? a : b, low: aFirst ? b : a };
  });
}

/** Teams that skip the first round (the top three seeds). */
export function getFirstRoundByes(): string[] {
  return getByeTeams(FIRST_ROUND.date);
}

/** The next playoff round that isn't on the schedule yet (for the header fallback). */
export function nextUnscheduledRound() {
  const scheduled = new Set(getGameDates());
  return PLAYOFFS.find((p) => !scheduled.has(p.date)) ?? PLAYOFFS[PLAYOFFS.length - 1];
}
