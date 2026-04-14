import { PLAYERS, SCHEDULE, type Player } from "./data";

export interface EligibleSub extends Player {
  ownGame: { time: string; opponent: string } | null;
}

export function findEligibleSubs(
  team: string,
  playerName: string,
  gameDate: string
): EligibleSub[] {
  const missingPlayer = PLAYERS.find(
    (p) => p.name === playerName && p.team === team
  );
  if (!missingPlayer) return [];
  const targetRanking = missingPlayer.ranking;

  const game = SCHEDULE.find(
    (g) =>
      g.date === gameDate && (g.team1 === team || g.team2 === team)
  );
  if (!game) return [];
  const gameTime = game.time;

  const conflictingTeams = new Set<string>();
  SCHEDULE.filter((g) => g.date === gameDate && g.time === gameTime).forEach(
    (g) => {
      conflictingTeams.add(g.team1);
      conflictingTeams.add(g.team2);
    }
  );

  return PLAYERS.filter(
    (p) => p.ranking === targetRanking && !conflictingTeams.has(p.team)
  )
    .map((p) => {
      const ownGame = SCHEDULE.find(
        (g) => g.date === gameDate && (g.team1 === p.team || g.team2 === p.team)
      );
      return {
        ...p,
        ownGame: ownGame
          ? {
              time: ownGame.time,
              opponent: ownGame.team1 === p.team ? ownGame.team2 : ownGame.team1,
            }
          : null,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}
