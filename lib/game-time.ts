import { SEASON_YEAR, getGameDates, getGamesByDate } from "./data";

/**
 * Real-world timing for the schedule. Games are stored as wall-clock strings
 * ("Wed Sep 30" + "19:00") with no year or zone; the league plays in Atlanta,
 * so every game resolves to SEASON_YEAR in America/New_York (DST-aware).
 */

const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

/** Each game slot is one hour. */
export const GAME_MS = 60 * 60 * 1000;

/** UTC offset of America/New_York (in minutes, e.g. -240 for EDT) at an instant. */
function nyOffsetMinutes(at: Date): number {
  const name =
    new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", timeZoneName: "shortOffset" })
      .formatToParts(at)
      .find((p) => p.type === "timeZoneName")?.value ?? "GMT-5";
  const m = name.match(/GMT([+-]\d+)(?::(\d+))?/);
  if (!m) return -300;
  const hours = Number(m[1]);
  return hours * 60 + Math.sign(hours) * Number(m[2] ?? 0);
}

/** Epoch ms when a game starts. */
export function gameStartMs(date: string, time: string): number {
  const [, mon, day] = date.split(" ");
  const [h, min] = time.split(":").map(Number);
  const wall = Date.UTC(SEASON_YEAR, MONTHS[mon], Number(day), h, min);
  return wall - nyOffsetMinutes(new Date(wall)) * 60_000;
}

/** True once a game has finished. */
export function isGameOver(date: string, time: string, now: number): boolean {
  return gameStartMs(date, time) + GAME_MS <= now;
}

export interface GameNight {
  date: string;
  /** First tip-off (epoch ms). */
  start: number;
  /** End of the last game (epoch ms). */
  end: number;
  /** Wall-clock time of the first game, e.g. "19:00". */
  firstTime: string;
}

export const GAME_NIGHTS: GameNight[] = getGameDates().map((date) => {
  const games = getGamesByDate(date);
  const starts = games.map((g) => gameStartMs(g.date, g.time));
  return {
    date,
    start: Math.min(...starts),
    end: Math.max(...starts) + GAME_MS,
    firstTime: games[0].time,
  };
});

/** The current or next game night, or null once the regular season is over. */
export function nextGameNight(now: number): (GameNight & { live: boolean }) | null {
  const night = GAME_NIGHTS.find((n) => n.end > now);
  return night ? { ...night, live: night.start <= now } : null;
}

/** Compact countdown: "2d 3h", "3h 12m", "12m". */
export function formatCountdown(ms: number): string {
  const mins = Math.max(1, Math.ceil(ms / 60_000));
  const d = Math.floor(mins / 1440);
  const h = Math.floor((mins % 1440) / 60);
  const m = mins % 60;
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}
