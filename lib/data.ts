export type Ranking = 100 | 97 | 94 | 91 | 88 | 86 | 84 | 82 | 80;

export interface Player {
  name: string;
  ranking: Ranking;
  email: string;
  phone: string;
  team: string;
}

export interface Game {
  date: string;
  time: string;
  team1: string;
  team2: string;
}

export const TEAM_NAMES = [
  "Bens",
  "Hawkins",
  "Jackson",
  "Khoury",
  "Kirkley",
  "Rosner",
  "Roth",
  "Schnipper",
  "Shulman",
  "Spielman",
  "Spizman",
  "Tohar",
  "Weitz",
] as const;

export const PLAYERS: Player[] = [
  // Team Rosner
  { name: "Adam Rosner", ranking: 97, email: "adamdavidrosner@gmail.com", phone: "904-716-8104", team: "Rosner" },
  { name: "Brian Gee", ranking: 88, email: "bcgee@bellsouth.net", phone: "678-764-6946", team: "Rosner" },
  { name: "Michael Kuniansky", ranking: 86, email: "kuniansky@gmail.com", phone: "404-219-2232", team: "Rosner" },
  { name: "Mike Meisel", ranking: 86, email: "meisel87@gmail.com", phone: "904-472-0882", team: "Rosner" },
  { name: "Adam Weinberg", ranking: 82, email: "adamjweinberg@gmail.com", phone: "401-255-2026", team: "Rosner" },

  // Team Khoury
  { name: "Micah Engler", ranking: 94, email: "micah.engler@gmail.com", phone: "404-304-0342", team: "Khoury" },
  { name: "Ben Khoury", ranking: 94, email: "bkhoury@fortitudesys.com", phone: "404-593-1527", team: "Khoury" },
  { name: "Ryan Beetham", ranking: 88, email: "ryanmbeetham@gmail.com", phone: "919-525-4877", team: "Khoury" },
  { name: "Mikey Kobrinsky", ranking: 84, email: "michael.kobrinsky@gmail.com", phone: "770-827-0827", team: "Khoury" },
  { name: "Alex Khoury", ranking: 80, email: "acooppack@yahoo.com", phone: "513-470-5366", team: "Khoury" },

  // Team Kirkley
  { name: "Josh Solomon", ranking: 94, email: "joshsolomon1@gmail.com", phone: "404-358-6862", team: "Kirkley" },
  { name: "Terry Kirkley", ranking: 94, email: "terrykirkley@gmail.com", phone: "434-825-5924", team: "Kirkley" },
  { name: "David Meiselman", ranking: 88, email: "davidmmeiselman@gmail.com", phone: "678-644-7860", team: "Kirkley" },
  { name: "Reed Schlesinger", ranking: 86, email: "reed.schlesinger99@gmail.com", phone: "561-715-3976", team: "Kirkley" },
  { name: "David Grocer", ranking: 80, email: "davidngrocer@gmail.com", phone: "404-664-4764", team: "Kirkley" },

  // Team Spielman
  { name: "Ricky Kersey", ranking: 94, email: "ricky.kersey@gmail.com", phone: "443-538-6200", team: "Spielman" },
  { name: "Jeremy Spielman", ranking: 94, email: "jwspielman@gmail.com", phone: "678-332-7077", team: "Spielman" },
  { name: "Ben Shapiro", ranking: 88, email: "benshapiro27@gmail.com", phone: "678-315-1451", team: "Spielman" },
  { name: "Aharon Shimshon", ranking: 84, email: "aharon.shimshon@gmail.com", phone: "770-500-9281", team: "Spielman" },
  { name: "Jason Margolies", ranking: 80, email: "jmargolies93@gmail.com", phone: "407-453-1390", team: "Spielman" },

  // Team Roth
  { name: "Ilan Stern", ranking: 97, email: "ilanstern3@hotmail.com", phone: "614-595-3613", team: "Roth" },
  { name: "Brian Singer", ranking: 91, email: "briansinger79@gmail.com", phone: "847-772-5856", team: "Roth" },
  { name: "Michael Roth", ranking: 88, email: "roth.michael6@gmail.com", phone: "404-697-2442", team: "Roth" },
  { name: "Brian Teitell", ranking: 84, email: "teitell10@gmail.com", phone: "214-636-8874", team: "Roth" },
  { name: "Jay Roth", ranking: 80, email: "jmr30342@comcast.net", phone: "404-663-8852", team: "Roth" },

  // Team Jackson
  { name: "Gavi Abraham", ranking: 100, email: "gavrielabraham@gmail.com", phone: "404-790-4233", team: "Jackson" },
  { name: "Scott Tenenbaum", ranking: 88, email: "scott.f.tenenbaum@gmail.com", phone: "404-895-3578", team: "Jackson" },
  { name: "Izzy Jackson", ranking: 86, email: "isadoremj@gmail.com", phone: "404-989-8903", team: "Jackson" },
  { name: "Elliot Dane", ranking: 84, email: "bigdaddydane@comcast.net", phone: "404-432-4852", team: "Jackson" },
  { name: "Robert Tinter", ranking: 82, email: "robertstinter@gmail.com", phone: "404-281-7858", team: "Jackson" },

  // Team Shulman
  { name: "Matt Weinstein", ranking: 97, email: "matthew.b.weinstein@gmail.com", phone: "724-413-6775", team: "Shulman" },
  { name: "Darell Vaughn", ranking: 91, email: "darellvaughn10@gmail.com", phone: "404-216-3470", team: "Shulman" },
  { name: "Brian Shulman", ranking: 86, email: "brishul@gmail.com", phone: "248-225-7485", team: "Shulman" },
  { name: "Demitri Knowles", ranking: 86, email: "demitri.knowles@atlantajcc.org", phone: "434-221-9287", team: "Shulman" },
  { name: "Sam Miller", ranking: 82, email: "sammiller0013@gmail.com", phone: "516-287-2008", team: "Shulman" },

  // Team Schnipper
  { name: "Eyal Cohen", ranking: 100, email: "eyal.cohen99@gmail.com", phone: "404-422-2568", team: "Schnipper" },
  { name: "Ben Levine", ranking: 88, email: "ben_levine1@hotmail.com", phone: "704-277-3467", team: "Schnipper" },
  { name: "David Schnipper", ranking: 86, email: "dmschnipper@gmail.com", phone: "404-983-6051", team: "Schnipper" },
  { name: "Kenny Pepper", ranking: 84, email: "kenny.m.pepper@gmail.com", phone: "678-770-5115", team: "Schnipper" },
  { name: "Roger Panitch", ranking: 80, email: "roger.panitch@chhj.com", phone: "404-849-2016", team: "Schnipper" },

  // Team Spizman
  { name: "Peter Rivner", ranking: 100, email: "peter.rivner@gmail.com", phone: "706-296-8806", team: "Spizman" },
  { name: "Lens Moise", ranking: 88, email: "lensmoise3@gmail.com", phone: "561-767-5726", team: "Spizman" },
  { name: "Justin Spizman", ranking: 86, email: "jspizman@gmail.com", phone: "678-522-9540", team: "Spizman" },
  { name: "Howie Lips", ranking: 84, email: "hlips99@gmail.com", phone: "404-645-6078", team: "Spizman" },
  { name: "Roey Shoshan", ranking: 84, email: "roey.shoshan@atlantajcc.org", phone: "678-600-9800", team: "Spizman" },

  // Team Bens
  { name: "Derek Harris", ranking: 100, email: "derekharris12@me.com", phone: "205-243-9006", team: "Bens" },
  { name: "Talan Bens", ranking: 91, email: "gatordmd2000@yahoo.com", phone: "678-756-5680", team: "Bens" },
  { name: "Jeremiah Davison", ranking: 86, email: "jeremiah@multibandstudios.com", phone: "770-773-5694", team: "Bens" },
  { name: "Mike Bens", ranking: 84, email: "gatordmd2000@yahoo.com", phone: "678-516-8173", team: "Bens" },
  { name: "David Rubin", ranking: 82, email: "davidhenryrubin@gmail.com", phone: "843-991-4995", team: "Bens" },

  // Team Hawkins
  { name: "Cole Heaberlin", ranking: 97, email: "heaberlincole@gmail.com", phone: "678-315-3519", team: "Hawkins" },
  { name: "David Cohen", ranking: 91, email: "david@peachstatepizza.com", phone: "404-944-8028", team: "Hawkins" },
  { name: "Stevie Schraudner", ranking: 84, email: "stevietodd@hotmail.com", phone: "317-679-8674", team: "Hawkins" },
  { name: "Charlie Hawkins", ranking: 84, email: "cehawkinsiii@hotmail.com", phone: "404-210-9104", team: "Hawkins" },
  { name: "Adam Blick", ranking: 82, email: "adamblick@gmail.com", phone: "703-350-3097", team: "Hawkins" },

  // Team Tohar
  { name: "Miki Covitz", ranking: 94, email: "covitzmiki@gmail.com", phone: "404-405-9147", team: "Tohar" },
  { name: "Brandon Picow", ranking: 94, email: "brandonpicow@gmail.com", phone: "803-730-0244", team: "Tohar" },
  { name: "Matt Weintraub", ranking: 91, email: "matthewsweintraub@gmail.com", phone: "404-583-4449", team: "Tohar" },
  { name: "Jon Sadow", ranking: 82, email: "jdsadow@gmail.com", phone: "404-218-6575", team: "Tohar" },
  { name: "Avi Tohar", ranking: 80, email: "avi_tohar@yahoo.com", phone: "404-789-7977", team: "Tohar" },

  // Team Weitz
  { name: "Eric Smith", ranking: 100, email: "efsmith34@gmail.com", phone: "404-218-4329", team: "Weitz" },
  { name: "Ari Weitz", ranking: 91, email: "ari.weitz@gmail.com", phone: "404-451-2663", team: "Weitz" },
  { name: "Omer Naman", ranking: 88, email: "omernaman@gmail.com", phone: "470-447-3073", team: "Weitz" },
  { name: "George Medina", ranking: 84, email: "george.medina@yahoo.com", phone: "786-280-2477", team: "Weitz" },
  { name: "Dave Blum", ranking: 80, email: "daveblum@hotmail.com", phone: "404-953-9377", team: "Weitz" },
];

export const SCHEDULE: Game[] = [
  // Wed Jul 8
  { date: "Wed Jul 8", time: "19:00", team1: "Spielman", team2: "Jackson" },
  { date: "Wed Jul 8", time: "19:00", team1: "Spizman", team2: "Hawkins" },
  { date: "Wed Jul 8", time: "20:00", team1: "Bens", team2: "Roth" },
  { date: "Wed Jul 8", time: "20:00", team1: "Kirkley", team2: "Tohar" },
  { date: "Wed Jul 8", time: "21:00", team1: "Rosner", team2: "Khoury" },
  { date: "Wed Jul 8", time: "21:00", team1: "Shulman", team2: "Weitz" },

  // Wed Jul 15
  { date: "Wed Jul 15", time: "19:00", team1: "Schnipper", team2: "Jackson" },
  { date: "Wed Jul 15", time: "19:00", team1: "Spizman", team2: "Rosner" },
  { date: "Wed Jul 15", time: "20:00", team1: "Bens", team2: "Kirkley" },
  { date: "Wed Jul 15", time: "20:00", team1: "Spielman", team2: "Khoury" },
  { date: "Wed Jul 15", time: "21:00", team1: "Roth", team2: "Shulman" },
  { date: "Wed Jul 15", time: "21:00", team1: "Tohar", team2: "Weitz" },

  // Wed Jul 22
  { date: "Wed Jul 22", time: "19:00", team1: "Hawkins", team2: "Bens" },
  { date: "Wed Jul 22", time: "19:00", team1: "Spielman", team2: "Rosner" },
  { date: "Wed Jul 22", time: "20:00", team1: "Kirkley", team2: "Schnipper" },
  { date: "Wed Jul 22", time: "20:00", team1: "Tohar", team2: "Shulman" },
  { date: "Wed Jul 22", time: "21:00", team1: "Jackson", team2: "Weitz" },
  { date: "Wed Jul 22", time: "21:00", team1: "Khoury", team2: "Roth" },

  // Wed Jul 29
  { date: "Wed Jul 29", time: "19:00", team1: "Hawkins", team2: "Weitz" },
  { date: "Wed Jul 29", time: "19:00", team1: "Schnipper", team2: "Spielman" },
  { date: "Wed Jul 29", time: "20:00", team1: "Jackson", team2: "Rosner" },
  { date: "Wed Jul 29", time: "20:00", team1: "Kirkley", team2: "Spizman" },
  { date: "Wed Jul 29", time: "21:00", team1: "Tohar", team2: "Roth" },

  // Wed Aug 5
  { date: "Wed Aug 5", time: "19:00", team1: "Schnipper", team2: "Hawkins" },
  { date: "Wed Aug 5", time: "19:00", team1: "Spizman", team2: "Jackson" },
  { date: "Wed Aug 5", time: "20:00", team1: "Bens", team2: "Rosner" },
  { date: "Wed Aug 5", time: "20:00", team1: "Spielman", team2: "Shulman" },
  { date: "Wed Aug 5", time: "21:00", team1: "Khoury", team2: "Weitz" },
  { date: "Wed Aug 5", time: "21:00", team1: "Kirkley", team2: "Roth" },

  // Sun Aug 9
  { date: "Sun Aug 9", time: "08:30", team1: "Bens", team2: "Spizman" },
  { date: "Sun Aug 9", time: "08:30", team1: "Weitz", team2: "Schnipper" },
  { date: "Sun Aug 9", time: "09:30", team1: "Hawkins", team2: "Spielman" },
  { date: "Sun Aug 9", time: "09:30", team1: "Rosner", team2: "Tohar" },
  { date: "Sun Aug 9", time: "10:30", team1: "Roth", team2: "Jackson" },
  { date: "Sun Aug 9", time: "10:30", team1: "Shulman", team2: "Khoury" },

  // Wed Aug 12
  { date: "Wed Aug 12", time: "19:00", team1: "Schnipper", team2: "Bens" },
  { date: "Wed Aug 12", time: "19:00", team1: "Spizman", team2: "Tohar" },
  { date: "Wed Aug 12", time: "20:00", team1: "Roth", team2: "Rosner" },
  { date: "Wed Aug 12", time: "20:00", team1: "Spielman", team2: "Weitz" },
  { date: "Wed Aug 12", time: "21:00", team1: "Khoury", team2: "Hawkins" },
  { date: "Wed Aug 12", time: "21:00", team1: "Kirkley", team2: "Shulman" },

  // Sun Aug 16
  { date: "Sun Aug 16", time: "08:30", team1: "Jackson", team2: "Bens" },
  { date: "Sun Aug 16", time: "08:30", team1: "Schnipper", team2: "Rosner" },
  { date: "Sun Aug 16", time: "09:30", team1: "Spielman", team2: "Kirkley" },
  { date: "Sun Aug 16", time: "09:30", team1: "Spizman", team2: "Roth" },
  { date: "Sun Aug 16", time: "10:30", team1: "Shulman", team2: "Hawkins" },
  { date: "Sun Aug 16", time: "10:30", team1: "Tohar", team2: "Khoury" },

  // Wed Aug 19
  { date: "Wed Aug 19", time: "19:00", team1: "Schnipper", team2: "Roth" },
  { date: "Wed Aug 19", time: "19:00", team1: "Weitz", team2: "Spizman" },
  { date: "Wed Aug 19", time: "20:00", team1: "Shulman", team2: "Bens" },
  { date: "Wed Aug 19", time: "20:00", team1: "Tohar", team2: "Spielman" },
  { date: "Wed Aug 19", time: "21:00", team1: "Khoury", team2: "Jackson" },
  { date: "Wed Aug 19", time: "21:00", team1: "Kirkley", team2: "Hawkins" },

  // Sun Aug 23
  { date: "Sun Aug 23", time: "08:30", team1: "Spielman", team2: "Spizman" },
  { date: "Sun Aug 23", time: "08:30", team1: "Tohar", team2: "Schnipper" },
  { date: "Sun Aug 23", time: "09:30", team1: "Rosner", team2: "Shulman" },
  { date: "Sun Aug 23", time: "09:30", team1: "Weitz", team2: "Bens" },
  { date: "Sun Aug 23", time: "10:30", team1: "Jackson", team2: "Hawkins" },
  { date: "Sun Aug 23", time: "10:30", team1: "Khoury", team2: "Kirkley" },

  // Wed Aug 26
  { date: "Wed Aug 26", time: "19:00", team1: "Schnipper", team2: "Spizman" },
  { date: "Wed Aug 26", time: "19:00", team1: "Tohar", team2: "Hawkins" },
  { date: "Wed Aug 26", time: "20:00", team1: "Khoury", team2: "Bens" },
  { date: "Wed Aug 26", time: "20:00", team1: "Rosner", team2: "Kirkley" },
  { date: "Wed Aug 26", time: "21:00", team1: "Shulman", team2: "Jackson" },
  { date: "Wed Aug 26", time: "21:00", team1: "Weitz", team2: "Roth" },
];

export function getTeamPlayers(team: string): Player[] {
  return PLAYERS.filter((p) => p.team === team);
}

export function getTeamGames(team: string): Game[] {
  return SCHEDULE.filter((g) => g.team1 === team || g.team2 === team);
}

export function getOpponent(game: Game, team: string): string {
  return game.team1 === team ? game.team2 : game.team1;
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours > 12 ? hours - 12 : hours;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

export interface PlayoffRound {
  round: string;
  date: string;
}

export const PLAYOFFS: PlayoffRound[] = [
  { round: "First Round", date: "Wed Sep 2" },
  { round: "Quarterfinals", date: "Wed Sep 9" },
  { round: "Semifinals", date: "Wed Sep 16" },
  { round: "Championship", date: "TBA" },
];

/** Game nights in chronological order (unique dates from the schedule). */
export function getGameDates(): string[] {
  const seen = new Set<string>();
  const dates: string[] = [];
  for (const g of SCHEDULE) {
    if (!seen.has(g.date)) {
      seen.add(g.date);
      dates.push(g.date);
    }
  }
  return dates;
}

/** All games on a given date, sorted by time then home team. */
export function getGamesByDate(date: string): Game[] {
  return SCHEDULE.filter((g) => g.date === date).sort(
    (a, b) => a.time.localeCompare(b.time) || a.team1.localeCompare(b.team1)
  );
}

/** Teams NOT playing on a given date (i.e., on bye that week). */
export function getByeTeams(date: string): string[] {
  const playing = new Set<string>();
  for (const g of SCHEDULE) {
    if (g.date === date) {
      playing.add(g.team1);
      playing.add(g.team2);
    }
  }
  return TEAM_NAMES.filter((t) => !playing.has(t));
}
