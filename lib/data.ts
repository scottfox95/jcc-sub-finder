/** Current season. Update both when rolling the app forward. */
export const SEASON_NAME = "Fall";
export const SEASON_YEAR = 2026;

export type Ranking = 100 | 96 | 94 | 90 | 88 | 86 | 84 | 82 | 80;

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
  "Hawkins",
  "Jackson",
  "Khoury",
  "Kirkley",
  "Levine",
  "Rosner",
  "Roth",
  "Schnipper",
  "Singer",
  "Spielman",
  "Spizman",
  "Tohar",
  "Weitz",
] as const;

export const PLAYERS: Player[] = [
  // Team Rosner
  { name: "Adam Rosner", ranking: 94, email: "adamdavidrosner@gmail.com", phone: "904-716-8104", team: "Rosner" },
  { name: "David Cohen", ranking: 88, email: "david@peachstatepizza.com", phone: "404-944-8028", team: "Rosner" },
  { name: "David Weiner", ranking: 84, email: "davideweiner@gmail.com", phone: "404-754-2486", team: "Rosner" },
  { name: "Mikey Kobrinsky", ranking: 82, email: "michael.kobrinsky@gmail.com", phone: "770-827-0827", team: "Rosner" },
  { name: "Robert Tinter", ranking: 80, email: "robertstinter@gmail.com", phone: "404-281-7858", team: "Rosner" },

  // Team Khoury
  { name: "Micah Engler", ranking: 90, email: "micah.engler@gmail.com", phone: "404-304-0342", team: "Khoury" },
  { name: "Ben Khoury", ranking: 90, email: "bkhoury@fortitudesys.com", phone: "404-593-1527", team: "Khoury" },
  { name: "Mike Meisel", ranking: 84, email: "meisel87@gmail.com", phone: "904-472-0882", team: "Khoury" },
  { name: "Zach Gorowitz", ranking: 82, email: "zachgorowitz@gmail.com", phone: "678-315-0363", team: "Khoury" },
  { name: "Alex Khoury", ranking: 80, email: "acooppack@yahoo.com", phone: "513-470-5366", team: "Khoury" },

  // Team Kirkley
  { name: "Josh Solomon", ranking: 90, email: "joshsolomon1@gmail.com", phone: "404-358-6862", team: "Kirkley" },
  { name: "Terry Kirkley", ranking: 90, email: "terrykirkley@gmail.com", phone: "434-825-5924", team: "Kirkley" },
  { name: "Matt Weintraub", ranking: 88, email: "matthewsweintraub@gmail.com", phone: "404-583-4449", team: "Kirkley" },
  { name: "Stevie Schraudner", ranking: 82, email: "stevietodd@hotmail.com", phone: "317-679-8674", team: "Kirkley" },
  { name: "Jason Margolies", ranking: 80, email: "jmargolies93@gmail.com", phone: "407-453-1390", team: "Kirkley" },

  // Team Spielman
  { name: "Jeremy Spielman", ranking: 90, email: "jwspielman@gmail.com", phone: "678-332-7077", team: "Spielman" },
  { name: "Sam Grosoff", ranking: 88, email: "grosoffsam@gmail.com", phone: "404-388-8234", team: "Spielman" },
  { name: "Josh Blum", ranking: 86, email: "joshbblum@gmail.com", phone: "770-356-4511", team: "Spielman" },
  { name: "Brian Teitell", ranking: 82, email: "teitell10@gmail.com", phone: "214-636-8874", team: "Spielman" },
  { name: "Zack Cohen", ranking: 80, email: "zachari1799@gmail.com", phone: "646-265-4915", team: "Spielman" },

  // Team Levine
  { name: "Jordan Eisner", ranking: 100, email: "jordaneisner89@gmail.com", phone: "478-390-5332", team: "Levine" },
  { name: "Ben Levine", ranking: 86, email: "ben_levine1@hotmail.com", phone: "704-277-3467", team: "Levine" },
  { name: "Michael Kuniansky", ranking: 84, email: "kuniansky@gmail.com", phone: "404-219-2232", team: "Levine" },
  { name: "Jon Sadow", ranking: 82, email: "jdsadow@gmail.com", phone: "404-218-6575", team: "Levine" },
  { name: "David Grocer", ranking: 80, email: "davidngrocer@gmail.com", phone: "404-664-4764", team: "Levine" },

  // Team Jackson
  { name: "Peter Rivner", ranking: 96, email: "peter.rivner@gmail.com", phone: "706-296-8806", team: "Jackson" },
  { name: "Scott Tenenbaum", ranking: 88, email: "scott.f.tenenbaum@gmail.com", phone: "404-895-3578", team: "Jackson" },
  { name: "Izzy Jackson", ranking: 86, email: "isadoremj@gmail.com", phone: "404-989-8903", team: "Jackson" },
  { name: "Yisrael New", ranking: 82, email: "rabbiyisrael@gmail.com", phone: "678-612-7313", team: "Jackson" },
  { name: "Jordan Ross", ranking: 80, email: "jordaneross1@gmail.com", phone: "251-422-4189", team: "Jackson" },

  // Team Weitz
  { name: "Alex Matthysse", ranking: 100, email: "ajmatthysse@gmail.com", phone: "786-423-2206", team: "Weitz" },
  { name: "Ari Weitz", ranking: 88, email: "ari.weitz@gmail.com", phone: "404-451-2663", team: "Weitz" },
  { name: "Howie Lips", ranking: 82, email: "hlips99@gmail.com", phone: "404-645-6078", team: "Weitz" },
  { name: "Mike Weiss", ranking: 82, email: "michael.weiss1120@gmail.com", phone: "954-695-5295", team: "Weitz" },
  { name: "David Forbes", ranking: 80, email: "forbdav@4securemail.com", phone: "646-599-2179", team: "Weitz" },

  // Team Singer
  { name: "Yuval Galron", ranking: 90, email: "ygalron6@gmail.com", phone: "770-544-8376", team: "Singer" },
  { name: "Brian Singer", ranking: 88, email: "briansinger79@gmail.com", phone: "847-772-5856", team: "Singer" },
  { name: "Steph Noh", ranking: 84, email: "stephen.noh@gmail.com", phone: "224-612-1483", team: "Singer" },
  { name: "Reed Schlesinger", ranking: 84, email: "reed.schlesinger99@gmail.com", phone: "561-715-3976", team: "Singer" },
  { name: "Michael Usdan", ranking: 80, email: "miusdan@gmail.com", phone: "404-805-3536", team: "Singer" },

  // Team Spizman
  { name: "Ricky Kersey", ranking: 90, email: "ricky.kersey@gmail.com", phone: "443-538-6200", team: "Spizman" },
  { name: "Jake Tenorio", ranking: 90, email: "jaketenorio@gmail.com", phone: "505-270-9613", team: "Spizman" },
  { name: "Sam Blechman", ranking: 84, email: "sblechman89@gmail.com", phone: "678-576-9822", team: "Spizman" },
  { name: "Justin Spizman", ranking: 84, email: "jspizman@gmail.com", phone: "678-522-9540", team: "Spizman" },
  { name: "Sam Miller", ranking: 82, email: "sammiller0013@gmail.com", phone: "516-287-2008", team: "Spizman" },

  // Team Roth
  { name: "Eyal Cohen", ranking: 100, email: "eyal.cohen99@gmail.com", phone: "404-422-2568", team: "Roth" },
  { name: "Ryan Firestone", ranking: 86, email: "ryan.firestone@yahoo.com", phone: "954-591-2247", team: "Roth" },
  { name: "Michael Roth", ranking: 86, email: "roth.michael6@gmail.com", phone: "404-697-2442", team: "Roth" },
  { name: "Roey Shoshan", ranking: 82, email: "roey.shoshan@atlantajcc.org", phone: "678-600-9800", team: "Roth" },
  { name: "Jay Roth", ranking: 80, email: "jmr30342@comcast.net", phone: "404-663-8852", team: "Roth" },

  // Team Hawkins
  { name: "Matthew Weinstein", ranking: 96, email: "matthew.b.weinstein@gmail.com", phone: "724-413-6775", team: "Hawkins" },
  { name: "Omer Naman", ranking: 86, email: "omernaman@gmail.com", phone: "470-447-3073", team: "Hawkins" },
  { name: "David Meiselman", ranking: 86, email: "davidmmeiselman@gmail.com", phone: "678-644-7860", team: "Hawkins" },
  { name: "Charlie Hawkins", ranking: 82, email: "cehawkinsiii@hotmail.com", phone: "404-210-9104", team: "Hawkins" },
  { name: "Dave Blum", ranking: 80, email: "daveblum@hotmail.com", phone: "404-953-9377", team: "Hawkins" },

  // Team Tohar
  { name: "Gavi Abraham", ranking: 96, email: "gavrielabraham@gmail.com", phone: "404-790-4233", team: "Tohar" },
  { name: "Ben Zachariah", ranking: 86, email: "bzachari117@gmail.com", phone: "404-668-8484", team: "Tohar" },
  { name: "Jared Kopman", ranking: 84, email: "jared.kopman@gmail.com", phone: "404-432-4660", team: "Tohar" },
  { name: "George Medina", ranking: 82, email: "george.medina@yahoo.com", phone: "786-280-2477", team: "Tohar" },
  { name: "Avi Tohar", ranking: 80, email: "avi_tohar@yahoo.com", phone: "404-789-7977", team: "Tohar" },

  // Team Schnipper
  { name: "Brandon Picow", ranking: 94, email: "brandonpicow@gmail.com", phone: "803-730-0244", team: "Schnipper" },
  { name: "Talan Bens", ranking: 90, email: "talanbens24@gmail.com", phone: "678-756-5680", team: "Schnipper" },
  { name: "David Schnipper", ranking: 86, email: "dmschnipper@gmail.com", phone: "404-983-6051", team: "Schnipper" },
  { name: "Daniel Kobrinsky", ranking: 82, email: "kobrinsky1@comcast.net", phone: "770-827-8888", team: "Schnipper" },
  { name: "Roger Panitch", ranking: 80, email: "roger.panitch@chhj.com", phone: "404-849-2016", team: "Schnipper" },
];

export const SCHEDULE: Game[] = [
  // Wed Sep 30
  { date: "Wed Sep 30", time: "19:00", team1: "Jackson", team2: "Spizman" },
  { date: "Wed Sep 30", time: "19:00", team1: "Tohar", team2: "Weitz" },
  { date: "Wed Sep 30", time: "20:00", team1: "Hawkins", team2: "Spielman" },
  { date: "Wed Sep 30", time: "20:00", team1: "Roth", team2: "Schnipper" },
  { date: "Wed Sep 30", time: "21:00", team1: "Kirkley", team2: "Levine" },
  { date: "Wed Sep 30", time: "21:00", team1: "Rosner", team2: "Singer" },

  // Wed Oct 7
  { date: "Wed Oct 7", time: "19:00", team1: "Schnipper", team2: "Hawkins" },
  { date: "Wed Oct 7", time: "19:00", team1: "Spizman", team2: "Tohar" },
  { date: "Wed Oct 7", time: "20:00", team1: "Jackson", team2: "Kirkley" },
  { date: "Wed Oct 7", time: "20:00", team1: "Levine", team2: "Spielman" },
  { date: "Wed Oct 7", time: "21:00", team1: "Khoury", team2: "Roth" },
  { date: "Wed Oct 7", time: "21:00", team1: "Singer", team2: "Weitz" },

  // Wed Oct 14
  { date: "Wed Oct 14", time: "19:00", team1: "Hawkins", team2: "Spizman" },
  { date: "Wed Oct 14", time: "19:00", team1: "Weitz", team2: "Levine" },
  { date: "Wed Oct 14", time: "20:00", team1: "Rosner", team2: "Jackson" },
  { date: "Wed Oct 14", time: "20:00", team1: "Roth", team2: "Tohar" },
  { date: "Wed Oct 14", time: "21:00", team1: "Kirkley", team2: "Singer" },
  { date: "Wed Oct 14", time: "21:00", team1: "Spielman", team2: "Khoury" },

  // Wed Oct 21
  { date: "Wed Oct 21", time: "19:00", team1: "Levine", team2: "Hawkins" },
  { date: "Wed Oct 21", time: "19:00", team1: "Schnipper", team2: "Weitz" },
  { date: "Wed Oct 21", time: "20:00", team1: "Spielman", team2: "Roth" },
  { date: "Wed Oct 21", time: "20:00", team1: "Tohar", team2: "Jackson" },
  { date: "Wed Oct 21", time: "21:00", team1: "Khoury", team2: "Singer" },
  { date: "Wed Oct 21", time: "21:00", team1: "Kirkley", team2: "Rosner" },

  // Sun Oct 25
  { date: "Sun Oct 25", time: "08:30", team1: "Jackson", team2: "Levine" },
  { date: "Sun Oct 25", time: "08:30", team1: "Spielman", team2: "Tohar" },
  { date: "Sun Oct 25", time: "09:30", team1: "Rosner", team2: "Roth" },
  { date: "Sun Oct 25", time: "09:30", team1: "Spizman", team2: "Khoury" },
  { date: "Sun Oct 25", time: "10:30", team1: "Singer", team2: "Schnipper" },
  { date: "Sun Oct 25", time: "10:30", team1: "Weitz", team2: "Hawkins" },

  // Wed Oct 28
  { date: "Wed Oct 28", time: "19:00", team1: "Levine", team2: "Tohar" },
  { date: "Wed Oct 28", time: "19:00", team1: "Singer", team2: "Spizman" },
  { date: "Wed Oct 28", time: "20:00", team1: "Roth", team2: "Kirkley" },
  { date: "Wed Oct 28", time: "20:00", team1: "Schnipper", team2: "Spielman" },
  { date: "Wed Oct 28", time: "21:00", team1: "Hawkins", team2: "Rosner" },
  { date: "Wed Oct 28", time: "21:00", team1: "Khoury", team2: "Weitz" },

  // Sun Nov 1
  { date: "Sun Nov 1", time: "08:30", team1: "Spizman", team2: "Kirkley" },
  { date: "Sun Nov 1", time: "08:30", team1: "Tohar", team2: "Khoury" },
  { date: "Sun Nov 1", time: "09:30", team1: "Levine", team2: "Roth" },
  { date: "Sun Nov 1", time: "09:30", team1: "Weitz", team2: "Jackson" },
  { date: "Sun Nov 1", time: "10:30", team1: "Rosner", team2: "Schnipper" },
  { date: "Sun Nov 1", time: "10:30", team1: "Singer", team2: "Spielman" },

  // Wed Nov 4
  { date: "Wed Nov 4", time: "19:00", team1: "Hawkins", team2: "Tohar" },
  { date: "Wed Nov 4", time: "19:00", team1: "Schnipper", team2: "Spizman" },
  { date: "Wed Nov 4", time: "20:00", team1: "Jackson", team2: "Spielman" },
  { date: "Wed Nov 4", time: "20:00", team1: "Kirkley", team2: "Weitz" },
  { date: "Wed Nov 4", time: "21:00", team1: "Khoury", team2: "Rosner" },
  { date: "Wed Nov 4", time: "21:00", team1: "Roth", team2: "Singer" },

  // Sun Nov 8
  { date: "Sun Nov 8", time: "08:30", team1: "Hawkins", team2: "Roth" },
  { date: "Sun Nov 8", time: "09:30", team1: "Jackson", team2: "Schnipper" },
  { date: "Sun Nov 8", time: "09:30", team1: "Tohar", team2: "Kirkley" },
  { date: "Sun Nov 8", time: "10:30", team1: "Khoury", team2: "Levine" },
  { date: "Sun Nov 8", time: "10:30", team1: "Spizman", team2: "Rosner" },

  // Wed Nov 11
  { date: "Wed Nov 11", time: "19:00", team1: "Levine", team2: "Spizman" },
  { date: "Wed Nov 11", time: "19:00", team1: "Schnipper", team2: "Tohar" },
  { date: "Wed Nov 11", time: "20:00", team1: "Singer", team2: "Jackson" },
  { date: "Wed Nov 11", time: "20:00", team1: "Spielman", team2: "Kirkley" },
  { date: "Wed Nov 11", time: "21:00", team1: "Hawkins", team2: "Khoury" },
  { date: "Wed Nov 11", time: "21:00", team1: "Weitz", team2: "Rosner" },

  // Wed Nov 18
  { date: "Wed Nov 18", time: "19:00", team1: "Levine", team2: "Schnipper" },
  { date: "Wed Nov 18", time: "19:00", team1: "Spizman", team2: "Weitz" },
  { date: "Wed Nov 18", time: "20:00", team1: "Rosner", team2: "Spielman" },
  { date: "Wed Nov 18", time: "20:00", team1: "Roth", team2: "Jackson" },
  { date: "Wed Nov 18", time: "21:00", team1: "Kirkley", team2: "Khoury" },
  { date: "Wed Nov 18", time: "21:00", team1: "Singer", team2: "Hawkins" },
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
  { round: "First Round", date: "Wed Dec 2" },
  { round: "Quarterfinals", date: "Wed Dec 9" },
  { round: "Semifinals", date: "Wed Dec 16" },
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
