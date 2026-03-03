import { PLAYERS, SCHEDULE, type Player } from "./data";

export function findEligibleSubs(
  team: string,
  playerName: string,
  gameDate: string
): Player[] {
  // 1. Find the missing player's ranking
  const missingPlayer = PLAYERS.find(
    (p) => p.name === playerName && p.team === team
  );
  if (!missingPlayer) return [];
  const targetRanking = missingPlayer.ranking;

  // 2. Find the game for this team on this date
  const game = SCHEDULE.find(
    (g) =>
      g.date === gameDate && (g.team1 === team || g.team2 === team)
  );
  if (!game) return [];
  const gameTime = game.time;

  // 3. Find all teams playing at the same time on the same date
  const conflictingTeams = new Set<string>();
  SCHEDULE.filter((g) => g.date === gameDate && g.time === gameTime).forEach(
    (g) => {
      conflictingTeams.add(g.team1);
      conflictingTeams.add(g.team2);
    }
  );

  // 4. Find eligible subs: same ranking, not on any conflicting team
  return PLAYERS.filter(
    (p) => p.ranking === targetRanking && !conflictingTeams.has(p.team)
  ).sort((a, b) => a.name.localeCompare(b.name));
}
