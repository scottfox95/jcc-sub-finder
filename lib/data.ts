export type Ranking = 100 | 96 | 93 | 90 | 86 | 83 | 80;

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
  "Tenenbaum",
  "Eisinger",
  "Khoury",
  "Kirkley",
  "Picow",
  "New",
  "Roth",
  "Schnipper",
  "Spizman",
  "Munsell",
  "Powell",
  "Weitz",
  "Hawkins",
] as const;

export const PLAYERS: Player[] = [
  // Team Tenenbaum
  { name: "Gavi Abraham", ranking: 100, email: "gavrielabraham@gmail.com", phone: "404-790-4233", team: "Tenenbaum" },
  { name: "Ben Zachariah", ranking: 90, email: "bzachari117@gmail.com", phone: "404-668-8484", team: "Tenenbaum" },
  { name: "Scott Tenenbaum", ranking: 90, email: "scott.f.tenenbaum@gmail.com", phone: "404-895-3578", team: "Tenenbaum" },
  { name: "Joe Rabus", ranking: 86, email: "jrabus@hotmail.com", phone: "914-582-1088", team: "Tenenbaum" },
  { name: "David Grocer", ranking: 80, email: "davidngrocer@gmail.com", phone: "404-664-4764", team: "Tenenbaum" },

  // Team Eisinger
  { name: "Jeremy Spielman", ranking: 96, email: "jwspielman@gmail.com", phone: "678-332-7077", team: "Eisinger" },
  { name: "Matthew Weinstein", ranking: 93, email: "matthew.b.weinstein@gmail.com", phone: "724-413-6775", team: "Eisinger" },
  { name: "Andrew Eisinger", ranking: 90, email: "andrewe709@gmail.com", phone: "954-243-7475", team: "Eisinger" },
  { name: "Mike Weiss", ranking: 83, email: "michael.weiss1120@gmail.com", phone: "954-695-5295", team: "Eisinger" },
  { name: "Max Farkas", ranking: 83, email: "maxbfarkas@gmail.com", phone: "248-804-0056", team: "Eisinger" },

  // Team Khoury
  { name: "Ben Khoury", ranking: 96, email: "bkhoury@fortitudesys.com", phone: "404-593-1527", team: "Khoury" },
  { name: "Miki Covitz", ranking: 96, email: "mikicovitz9@yahoo.com", phone: "404-405-9147", team: "Khoury" },
  { name: "Omer Naman", ranking: 90, email: "omernaman@gmail.com", phone: "470-447-3073", team: "Khoury" },
  { name: "Adam Blick", ranking: 86, email: "adamblick@gmail.com", phone: "703-350-3097", team: "Khoury" },
  { name: "Alex Khoury", ranking: 80, email: "acooppack@yahoo.com", phone: "513-470-5366", team: "Khoury" },

  // Team Kirkley
  { name: "Josh Solomon", ranking: 93, email: "joshsolomon1@gmail.com", phone: "404-358-6862", team: "Kirkley" },
  { name: "Terry Kirkley", ranking: 93, email: "terrykirkley@gmail.com", phone: "434-825-5924", team: "Kirkley" },
  { name: "David Meiselman", ranking: 90, email: "davidmmeiselman@gmail.com", phone: "678-644-7860", team: "Kirkley" },
  { name: "Stevie Schraudner", ranking: 86, email: "stevietodd@hotmail.com", phone: "317-679-8674", team: "Kirkley" },
  { name: "Adam Weinberg", ranking: 83, email: "adamjweinberg@gmail.com", phone: "401-255-2026", team: "Kirkley" },

  // Team Picow
  { name: "Sam Grosoff", ranking: 93, email: "grosoffsam@gmail.com", phone: "404-388-8234", team: "Picow" },
  { name: "Brandon Picow", ranking: 93, email: "brandonpicow@gmail.com", phone: "803-730-0244", team: "Picow" },
  { name: "Ryan Firestone", ranking: 90, email: "ryan.firestone@yahoo.com", phone: "954-591-2247", team: "Picow" },
  { name: "Yoav Sneh", ranking: 86, email: "sneh.yoav@gmail.com", phone: "404-323-3674", team: "Picow" },
  { name: "Jason Margolies", ranking: 83, email: "jmargolies93@gmail.com", phone: "407-453-1390", team: "Picow" },

  // Team New
  { name: "Moysh Ciment", ranking: 93, email: "mo.ciment@gmail.com", phone: "917-216-8097", team: "New" },
  { name: "Meir New", ranking: 93, email: "meirnew89@gmail.com", phone: "404-593-4860", team: "New" },
  { name: "Brian Shulman", ranking: 86, email: "brishul@gmail.com", phone: "248-225-7485", team: "New" },
  { name: "Kenny Pepper", ranking: 86, email: "kenny.m.pepper@gmail.com", phone: "678-770-5115", team: "New" },
  { name: "Sam Miller", ranking: 83, email: "sammiller0013@gmail.com", phone: "516-287-2008", team: "New" },

  // Team Roth
  { name: "Andrew Cohn", ranking: 100, email: "andrew.cohn@anheuser-busch.com", phone: "404-840-5008", team: "Roth" },
  { name: "David Cohen", ranking: 93, email: "david@peachstatepizza.com", phone: "404-944-8028", team: "Roth" },
  { name: "Michael Roth", ranking: 90, email: "jmr30342@comcast.net", phone: "404-250-0835", team: "Roth" },
  { name: "Robert Tinter", ranking: 83, email: "robertstinter@gmail.com", phone: "404-281-7858", team: "Roth" },
  { name: "Jay Roth", ranking: 80, email: "jmr30342@comcast.net", phone: "404-663-8852", team: "Roth" },

  // Team Schnipper
  { name: "Peter Rivner", ranking: 100, email: "peter.rivner@gmail.com", phone: "706-296-8806", team: "Schnipper" },
  { name: "Ben Levine", ranking: 90, email: "ben_levine1@hotmail.com", phone: "704-277-3467", team: "Schnipper" },
  { name: "David Schnipper", ranking: 90, email: "dmschnipper@gmail.com", phone: "404-697-2442", team: "Schnipper" },
  { name: "Roey Shoshan", ranking: 83, email: "roey.shoshan@atlantajcc.org", phone: "678-600-9800", team: "Schnipper" },
  { name: "Jon Sadow", ranking: 83, email: "jdsadow@gmail.com", phone: "404-218-6575", team: "Schnipper" },

  // Team Spizman
  { name: "Eyal Cohen", ranking: 100, email: "eyal.cohen99@gmail.com", phone: "404-422-2568", team: "Spizman" },
  { name: "Brian Singer", ranking: 93, email: "briansinger79@gmail.com", phone: "847-772-5856", team: "Spizman" },
  { name: "Justin Spizman", ranking: 90, email: "jspizman@gmail.com", phone: "678-522-9540", team: "Spizman" },
  { name: "Charles Myerson", ranking: 86, email: "cmyerson5@gmail.com", phone: "646-895-3965", team: "Spizman" },
  { name: "Roger Panitch", ranking: 80, email: "roger.panitch@chhj.com", phone: "404-849-2016", team: "Spizman" },

  // Team Munsell
  { name: "Micah Engler", ranking: 96, email: "micah.engler@gmail.com", phone: "404-304-0342", team: "Munsell" },
  { name: "Adam Rosner", ranking: 96, email: "adamdavidrosner@gmail.com", phone: "904-716-8104", team: "Munsell" },
  { name: "Josh Videlefsky", ranking: 90, email: "jvidelefsky@gmail.com", phone: "404-906-0807", team: "Munsell" },
  { name: "Jason Munsell", ranking: 86, email: "jmunsell1@gmail.com", phone: "404-449-5324", team: "Munsell" },
  { name: "Avi Tohar", ranking: 80, email: "avi_tohar@yahoo.com", phone: "404-789-7977", team: "Munsell" },

  // Team Powell
  { name: "Cole Heaberlin", ranking: 96, email: "heaberlincole@gmail.com", phone: "470-550-8882", team: "Powell" },
  { name: "Darell Vaughn", ranking: 93, email: "darellvaughn10@gmail.com", phone: "404-216-3470", team: "Powell" },
  { name: "Izzy Jackson", ranking: 90, email: "isadoremj@gmail.com", phone: "404-989-8903", team: "Powell" },
  { name: "Misha Powell", ranking: 86, email: "misha.powell@atlantajcc.org", phone: "515-943-6789", team: "Powell" },
  { name: "Jordan Ross", ranking: 80, email: "jordaneross1@gmail.com", phone: "251-422-4189", team: "Powell" },

  // Team Weitz
  { name: "Josh Spielman", ranking: 96, email: "joshuaspielman@gmail.com", phone: "201-776-8743", team: "Weitz" },
  { name: "Ari Weitz", ranking: 93, email: "ari.weitz@gmail.com", phone: "404-451-2663", team: "Weitz" },
  { name: "Steve Sommer", ranking: 90, email: "stevenmsommer@gmail.com", phone: "518-225-3844", team: "Weitz" },
  { name: "Aharon Shimshon", ranking: 86, email: "aharon.shimshon@gmail.com", phone: "770-500-9281", team: "Weitz" },
  { name: "Jeff Sureck", ranking: 83, email: "jeff@ppvrealestate.com", phone: "404-547-0501", team: "Weitz" },

  // Team Hawkins
  { name: "Ber Cohen", ranking: 100, email: "bercohen1@gmail.com", phone: "412-478-0852", team: "Hawkins" },
  { name: "Michael Kuniansky", ranking: 90, email: "kuniansky@gmail.com", phone: "404-219-2232", team: "Hawkins" },
  { name: "Talan Bens", ranking: 90, email: "talanbens24@gmail.com", phone: "678-756-5680", team: "Hawkins" },
  { name: "Brian Teitell", ranking: 86, email: "teitell10@gmail.com", phone: "214-636-8874", team: "Hawkins" },
  { name: "Charlie Hawkins", ranking: 83, email: "cehawkinsiii@hotmail.com", phone: "404-210-9104", team: "Hawkins" },
];

export const SCHEDULE: Game[] = [
  // Wed Jan 7
  { date: "Wed Jan 7", time: "19:00", team1: "Tenenbaum", team2: "Powell" },
  { date: "Wed Jan 7", time: "20:00", team1: "Spizman", team2: "Khoury" },
  { date: "Wed Jan 7", time: "20:00", team1: "Munsell", team2: "Eisinger" },
  { date: "Wed Jan 7", time: "21:00", team1: "Picow", team2: "New" },
  { date: "Wed Jan 7", time: "21:00", team1: "Weitz", team2: "Hawkins" },

  // Wed Jan 14
  { date: "Wed Jan 14", time: "19:00", team1: "Schnipper", team2: "Powell" },
  { date: "Wed Jan 14", time: "19:00", team1: "Spizman", team2: "New" },
  { date: "Wed Jan 14", time: "20:00", team1: "Munsell", team2: "Hawkins" },
  { date: "Wed Jan 14", time: "20:00", team1: "Weitz", team2: "Roth" },
  { date: "Wed Jan 14", time: "21:00", team1: "Kirkley", team2: "Picow" },
  { date: "Wed Jan 14", time: "21:00", team1: "Tenenbaum", team2: "Khoury" },

  // Wed Jan 21
  { date: "Wed Jan 21", time: "19:00", team1: "Powell", team2: "Picow" },
  { date: "Wed Jan 21", time: "19:00", team1: "Spizman", team2: "Roth" },
  { date: "Wed Jan 21", time: "20:00", team1: "Schnipper", team2: "Tenenbaum" },
  { date: "Wed Jan 21", time: "20:00", team1: "Khoury", team2: "Eisinger" },
  { date: "Wed Jan 21", time: "21:00", team1: "Hawkins", team2: "Kirkley" },
  { date: "Wed Jan 21", time: "21:00", team1: "Weitz", team2: "Munsell" },

  // Wed Jan 28
  { date: "Wed Jan 28", time: "19:00", team1: "Schnipper", team2: "Hawkins" },
  { date: "Wed Jan 28", time: "19:00", team1: "Spizman", team2: "Weitz" },
  { date: "Wed Jan 28", time: "20:00", team1: "Munsell", team2: "Powell" },
  { date: "Wed Jan 28", time: "20:00", team1: "Kirkley", team2: "Eisinger" },
  { date: "Wed Jan 28", time: "21:00", team1: "Picow", team2: "Roth" },
  { date: "Wed Jan 28", time: "21:00", team1: "Tenenbaum", team2: "New" },

  // Wed Feb 4
  { date: "Wed Feb 4", time: "19:00", team1: "New", team2: "Hawkins" },
  { date: "Wed Feb 4", time: "19:00", team1: "Eisinger", team2: "Spizman" },
  { date: "Wed Feb 4", time: "20:00", team1: "Picow", team2: "Schnipper" },
  { date: "Wed Feb 4", time: "20:00", team1: "Tenenbaum", team2: "Munsell" },
  { date: "Wed Feb 4", time: "21:00", team1: "Roth", team2: "Kirkley" },
  { date: "Wed Feb 4", time: "21:00", team1: "Weitz", team2: "Khoury" },

  // Wed Feb 11
  { date: "Wed Feb 11", time: "19:00", team1: "Eisinger", team2: "Schnipper" },
  { date: "Wed Feb 11", time: "19:00", team1: "Munsell", team2: "Roth" },
  { date: "Wed Feb 11", time: "20:00", team1: "Picow", team2: "Spizman" },
  { date: "Wed Feb 11", time: "20:00", team1: "Khoury", team2: "Powell" },
  { date: "Wed Feb 11", time: "21:00", team1: "Weitz", team2: "Tenenbaum" },
  { date: "Wed Feb 11", time: "21:00", team1: "Kirkley", team2: "New" },

  // Wed Feb 18
  { date: "Wed Feb 18", time: "19:00", team1: "Powell", team2: "Hawkins" },
  { date: "Wed Feb 18", time: "19:00", team1: "Roth", team2: "Schnipper" },
  { date: "Wed Feb 18", time: "20:00", team1: "New", team2: "Eisinger" },
  { date: "Wed Feb 18", time: "20:00", team1: "Tenenbaum", team2: "Spizman" },
  { date: "Wed Feb 18", time: "21:00", team1: "Weitz", team2: "Picow" },
  { date: "Wed Feb 18", time: "21:00", team1: "Khoury", team2: "Kirkley" },

  // Sun Feb 22
  { date: "Sun Feb 22", time: "08:30", team1: "Tenenbaum", team2: "Eisinger" },
  { date: "Sun Feb 22", time: "08:30", team1: "Munsell", team2: "Spizman" },
  { date: "Sun Feb 22", time: "09:30", team1: "Khoury", team2: "Schnipper" },
  { date: "Sun Feb 22", time: "09:30", team1: "Powell", team2: "Kirkley" },
  { date: "Sun Feb 22", time: "10:30", team1: "Hawkins", team2: "Picow" },
  { date: "Sun Feb 22", time: "10:30", team1: "New", team2: "Roth" },

  // Wed Feb 25
  { date: "Wed Feb 25", time: "19:00", team1: "Spizman", team2: "Powell" },
  { date: "Wed Feb 25", time: "19:00", team1: "Eisinger", team2: "Weitz" },
  { date: "Wed Feb 25", time: "20:00", team1: "Schnipper", team2: "Kirkley" },
  { date: "Wed Feb 25", time: "20:00", team1: "Tenenbaum", team2: "Hawkins" },
  { date: "Wed Feb 25", time: "21:00", team1: "Khoury", team2: "Roth" },
  { date: "Wed Feb 25", time: "21:00", team1: "New", team2: "Munsell" },

  // Sun Mar 1
  { date: "Sun Mar 1", time: "08:30", team1: "Roth", team2: "Eisinger" },
  { date: "Sun Mar 1", time: "08:30", team1: "Munsell", team2: "Picow" },
  { date: "Sun Mar 1", time: "09:30", team1: "Schnipper", team2: "New" },
  { date: "Sun Mar 1", time: "09:30", team1: "Tenenbaum", team2: "Kirkley" },
  { date: "Sun Mar 1", time: "10:30", team1: "Powell", team2: "Weitz" },
  { date: "Sun Mar 1", time: "10:30", team1: "Hawkins", team2: "Khoury" },

  // Wed Mar 4
  { date: "Wed Mar 4", time: "19:00", team1: "Powell", team2: "New" },
  { date: "Wed Mar 4", time: "19:00", team1: "Schnipper", team2: "Spizman" },
  { date: "Wed Mar 4", time: "20:00", team1: "Hawkins", team2: "Roth" },
  { date: "Wed Mar 4", time: "20:00", team1: "Eisinger", team2: "Picow" },
  { date: "Wed Mar 4", time: "21:00", team1: "Kirkley", team2: "Weitz" },
  { date: "Wed Mar 4", time: "21:00", team1: "Munsell", team2: "Khoury" },
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
