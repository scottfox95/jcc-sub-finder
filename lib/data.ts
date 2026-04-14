export type Ranking = 100 | 96 | 94 | 91 | 88 | 86 | 84 | 82 | 80;

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
  "Avi",
  "Bens",
  "Eisinger",
  "Farkas",
  "Hawkins",
  "Khoury",
  "Picow",
  "Roth",
  "Schnipper",
  "Shulman",
  "Singer",
  "Spizman",
] as const;

export const PLAYERS: Player[] = [
  // Team Tenenbaum
  { name: "Jake Tenorio", ranking: 96, email: "jaketenorio@gmail.com", phone: "505-270-9613", team: "Tenenbaum" },
  { name: "Scott Tenenbaum", ranking: 91, email: "scott.f.tenenbaum@gmail.com", phone: "404-895-3578", team: "Tenenbaum" },
  { name: "Ben Levine", ranking: 91, email: "ben_levine1@hotmail.com", phone: "704-277-3467", team: "Tenenbaum" },
  { name: "Jon Sadow", ranking: 84, email: "jdsadow@gmail.com", phone: "404-218-6575", team: "Tenenbaum" },
  { name: "Robert Tinter", ranking: 82, email: "robertstinter@gmail.com", phone: "404-281-7858", team: "Tenenbaum" },

  // Team Avi (Tohar)
  { name: "Ber Cohen", ranking: 96, email: "bercohen1@gmail.com", phone: "412-478-0852", team: "Avi" },
  { name: "Miki Covitz", ranking: 94, email: "covitzmiki@gmail.com", phone: "404-405-9147", team: "Avi" },
  { name: "Omer Naman", ranking: 88, email: "omernaman@gmail.com", phone: "470-447-3073", team: "Avi" },
  { name: "Yoav Sneh", ranking: 82, email: "sneh.yoav@gmail.com", phone: "404-323-3674", team: "Avi" },
  { name: "Avi Tohar", ranking: 80, email: "avi_tohar@yahoo.com", phone: "404-789-7977", team: "Avi" },

  // Team Bens
  { name: "Gavi Abraham", ranking: 100, email: "gavriel.abraham@gmail.com", phone: "404-790-4233", team: "Bens" },
  { name: "Talan Bens", ranking: 91, email: "talanbens24@gmail.com", phone: "678-756-5680", team: "Bens" },
  { name: "Mike Meisel", ranking: 88, email: "meisel87@gmail.com", phone: "904-472-0882", team: "Bens" },
  { name: "Mike Bens", ranking: 86, email: "gatordmd2000@yahoo.com", phone: "678-516-8173", team: "Bens" },
  { name: "David Grocer", ranking: 80, email: "davidngrocer@gmail.com", phone: "404-664-4764", team: "Bens" },

  // Team Eisinger
  { name: "Adam Rosner", ranking: 96, email: "adamdavidrosner@gmail.com", phone: "904-716-8104", team: "Eisinger" },
  { name: "Andrew Eisinger", ranking: 91, email: "andrew.eisinger@crowe.com", phone: "954-243-7475", team: "Eisinger" },
  { name: "Jeremiah Davison", ranking: 91, email: "jeremiah@multibandstudios.com", phone: "770-773-5694", team: "Eisinger" },
  { name: "Kenny Pepper", ranking: 84, email: "kenny.m.pepper@gmail.com", phone: "678-770-5115", team: "Eisinger" },
  { name: "Ilan Weismark", ranking: 82, email: "iweismark@gmail.com", phone: "615-406-8640", team: "Eisinger" },

  // Team Farkas
  { name: "Andrew Cohn", ranking: 100, email: "andrew.cohn@anheuser-busch.com", phone: "404-840-5008", team: "Farkas" },
  { name: "Ryan Beetham", ranking: 91, email: "ryanmbeetham@gmail.com", phone: "919-525-4877", team: "Farkas" },
  { name: "Howie Lips", ranking: 84, email: "hlips99@gmail.com", phone: "404-645-6078", team: "Farkas" },
  { name: "Mikey Kobrinsky", ranking: 84, email: "michael.kobrinsky@gmail.com", phone: "770-827-0827", team: "Farkas" },
  { name: "Max Farkas", ranking: 82, email: "maxbfarkas@gmail.com", phone: "248-804-0056", team: "Farkas" },

  // Team Hawkins
  { name: "Cole Heaberlin", ranking: 96, email: "heaberlincole@gmail.com", phone: "678-315-3519", team: "Hawkins" },
  { name: "Jeremy Spielman", ranking: 96, email: "jwspielman@gmail.com", phone: "678-332-7077", team: "Hawkins" },
  { name: "Brian Teitell", ranking: 84, email: "teitell10@gmail.com", phone: "214-636-8874", team: "Hawkins" },
  { name: "Charlie Hawkins", ranking: 82, email: "cehawkinsiii@hotmail.com", phone: "404-210-9104", team: "Hawkins" },
  { name: "Jason Margolies", ranking: 82, email: "jmargolies93@gmail.com", phone: "407-453-1390", team: "Hawkins" },

  // Team Khoury
  { name: "Micah Engler", ranking: 94, email: "micah.engler@gmail.com", phone: "404-304-0342", team: "Khoury" },
  { name: "Ben Khoury", ranking: 94, email: "bkhoury@fortitudesys.com", phone: "404-593-1527", team: "Khoury" },
  { name: "Darell Vaughn", ranking: 91, email: "darellvaughn10@gmail.com", phone: "404-216-3470", team: "Khoury" },
  { name: "Aharon Shimshon", ranking: 84, email: "aharon.shimshon@gmail.com", phone: "770-500-9281", team: "Khoury" },
  { name: "Alex Khoury", ranking: 80, email: "acooppack@yahoo.com", phone: "513-470-5366", team: "Khoury" },

  // Team Picow
  { name: "Matthew Weinstein", ranking: 96, email: "matthew.b.weinstein@gmail.com", phone: "724-413-6775", team: "Picow" },
  { name: "Brandon Picow", ranking: 94, email: "brandonpicow@gmail.com", phone: "803-730-0244", team: "Picow" },
  { name: "Jameson Foskey", ranking: 88, email: "jfoskey332@gmail.com", phone: "706-818-0633", team: "Picow" },
  { name: "Demitri Knowles", ranking: 86, email: "demitri.knowles@atlantajcc.org", phone: "434-221-9287", team: "Picow" },
  { name: "Jordan Ross", ranking: 80, email: "jordaneross1@gmail.com", phone: "251-422-4189", team: "Picow" },

  // Team Roth
  { name: "Alex Matthysse", ranking: 100, email: "ajmatthysse@gmail.com", phone: "786-423-2206", team: "Roth" },
  { name: "Josh Solomon", ranking: 94, email: "joshsolomon1@gmail.com", phone: "404-358-6862", team: "Roth" },
  { name: "Michael Roth", ranking: 88, email: "roth.michael6@gmail.com", phone: "404-697-2442", team: "Roth" },
  { name: "George Medina", ranking: 84, email: "george.medina@yahoo.com", phone: "786-280-2477", team: "Roth" },
  { name: "Jay Roth", ranking: 80, email: "jmr30342@comcast.net", phone: "404-663-8852", team: "Roth" },

  // Team Schnipper
  { name: "Peter Rivner", ranking: 100, email: "peter.rivner@gmail.com", phone: "706-296-8806", team: "Schnipper" },
  { name: "Ari Weitz", ranking: 91, email: "ari.weitz@gmail.com", phone: "404-451-2663", team: "Schnipper" },
  { name: "David Schnipper", ranking: 88, email: "dmschnipper@gmail.com", phone: "404-983-6051", team: "Schnipper" },
  { name: "Adam Blick", ranking: 84, email: "adamblick@gmail.com", phone: "703-350-3097", team: "Schnipper" },
  { name: "Mike Weiss", ranking: 82, email: "michael.weiss1120@gmail.com", phone: "954-695-5295", team: "Schnipper" },

  // Team Shulman
  { name: "Eyal Cohen", ranking: 100, email: "eyal.cohen99@gmail.com", phone: "404-422-2568", team: "Shulman" },
  { name: "Josh Spielman", ranking: 96, email: "joshuaspielman@gmail.com", phone: "201-776-8743", team: "Shulman" },
  { name: "Reed Schlesinger", ranking: 86, email: "reed.schlesinger99@gmail.com", phone: "561-715-3976", team: "Shulman" },
  { name: "Brian Shulman", ranking: 86, email: "brishul@gmail.com", phone: "248-225-7485", team: "Shulman" },
  { name: "David Blum", ranking: 80, email: "daveblum@hotmail.com", phone: "404-953-9377", team: "Shulman" },

  // Team Singer
  { name: "Terry Kirkley", ranking: 94, email: "terrykirkley@gmail.com", phone: "434-825-5924", team: "Singer" },
  { name: "Brian Singer", ranking: 91, email: "briansinger79@gmail.com", phone: "847-772-5856", team: "Singer" },
  { name: "David Meiselman", ranking: 88, email: "davidmmeiselman@gmail.com", phone: "678-644-7860", team: "Singer" },
  { name: "Stevie Schraudner", ranking: 84, email: "stevietodd@hotmail.com", phone: "317-679-8674", team: "Singer" },
  { name: "Roey Shoshan", ranking: 84, email: "roey.shoshan@atlantajcc.org", phone: "678-600-9800", team: "Singer" },

  // Team Spizman
  { name: "Derek Harris", ranking: 100, email: "derekharris12@me.com", phone: "205-243-9006", team: "Spizman" },
  { name: "David Cohen", ranking: 91, email: "david@peachstatepizza.com", phone: "404-944-8028", team: "Spizman" },
  { name: "Justin Spizman", ranking: 86, email: "jspizman@gmail.com", phone: "678-522-9540", team: "Spizman" },
  { name: "Joe Rabus", ranking: 86, email: "jrabus@hotmail.com", phone: "914-582-1088", team: "Spizman" },
  { name: "Roger Panitch", ranking: 80, email: "roger.panitch@chhj.com", phone: "404-849-2016", team: "Spizman" },
];

export const SCHEDULE: Game[] = [
  // Wed Apr 15
  { date: "Wed Apr 15", time: "19:00", team1: "Bens", team2: "Tenenbaum" },
  { date: "Wed Apr 15", time: "19:00", team1: "Spizman", team2: "Singer" },
  { date: "Wed Apr 15", time: "20:00", team1: "Schnipper", team2: "Farkas" },
  { date: "Wed Apr 15", time: "20:00", team1: "Picow", team2: "Khoury" },
  { date: "Wed Apr 15", time: "21:00", team1: "Avi", team2: "Hawkins" },
  { date: "Wed Apr 15", time: "21:00", team1: "Roth", team2: "Shulman" },

  // Wed Apr 22
  { date: "Wed Apr 22", time: "19:00", team1: "Spizman", team2: "Bens" },
  { date: "Wed Apr 22", time: "19:00", team1: "Shulman", team2: "Schnipper" },
  { date: "Wed Apr 22", time: "20:00", team1: "Hawkins", team2: "Farkas" },
  { date: "Wed Apr 22", time: "20:00", team1: "Eisinger", team2: "Picow" },
  { date: "Wed Apr 22", time: "21:00", team1: "Roth", team2: "Avi" },
  { date: "Wed Apr 22", time: "21:00", team1: "Singer", team2: "Tenenbaum" },

  // Wed Apr 29
  { date: "Wed Apr 29", time: "19:00", team1: "Schnipper", team2: "Eisinger" },
  { date: "Wed Apr 29", time: "19:00", team1: "Shulman", team2: "Avi" },
  { date: "Wed Apr 29", time: "20:00", team1: "Singer", team2: "Bens" },
  { date: "Wed Apr 29", time: "20:00", team1: "Picow", team2: "Spizman" },
  { date: "Wed Apr 29", time: "21:00", team1: "Khoury", team2: "Farkas" },
  { date: "Wed Apr 29", time: "21:00", team1: "Roth", team2: "Tenenbaum" },

  // Sun May 3
  { date: "Sun May 3", time: "08:30", team1: "Schnipper", team2: "Bens" },
  { date: "Sun May 3", time: "08:30", team1: "Picow", team2: "Farkas" },
  { date: "Sun May 3", time: "09:30", team1: "Singer", team2: "Khoury" },
  { date: "Sun May 3", time: "09:30", team1: "Avi", team2: "Spizman" },
  { date: "Sun May 3", time: "10:30", team1: "Hawkins", team2: "Shulman" },
  { date: "Sun May 3", time: "10:30", team1: "Eisinger", team2: "Tenenbaum" },

  // Wed May 6
  { date: "Wed May 6", time: "19:00", team1: "Hawkins", team2: "Eisinger" },
  { date: "Wed May 6", time: "19:00", team1: "Bens", team2: "Avi" },
  { date: "Wed May 6", time: "20:00", team1: "Schnipper", team2: "Roth" },
  { date: "Wed May 6", time: "20:00", team1: "Spizman", team2: "Khoury" },
  { date: "Wed May 6", time: "21:00", team1: "Shulman", team2: "Picow" },
  { date: "Wed May 6", time: "21:00", team1: "Farkas", team2: "Singer" },

  // Wed May 13
  { date: "Wed May 13", time: "19:00", team1: "Spizman", team2: "Schnipper" },
  { date: "Wed May 13", time: "19:00", team1: "Avi", team2: "Eisinger" },
  { date: "Wed May 13", time: "20:00", team1: "Singer", team2: "Hawkins" },
  { date: "Wed May 13", time: "20:00", team1: "Picow", team2: "Bens" },
  { date: "Wed May 13", time: "21:00", team1: "Khoury", team2: "Roth" },
  { date: "Wed May 13", time: "21:00", team1: "Tenenbaum", team2: "Shulman" },

  // Wed May 20
  { date: "Wed May 20", time: "19:00", team1: "Spizman", team2: "Eisinger" },
  { date: "Wed May 20", time: "19:00", team1: "Shulman", team2: "Bens" },
  { date: "Wed May 20", time: "20:00", team1: "Singer", team2: "Roth" },
  { date: "Wed May 20", time: "20:00", team1: "Avi", team2: "Farkas" },
  { date: "Wed May 20", time: "21:00", team1: "Picow", team2: "Tenenbaum" },
  { date: "Wed May 20", time: "21:00", team1: "Hawkins", team2: "Khoury" },

  // Wed May 27
  { date: "Wed May 27", time: "19:00", team1: "Spizman", team2: "Roth" },
  { date: "Wed May 27", time: "20:00", team1: "Eisinger", team2: "Singer" },
  { date: "Wed May 27", time: "20:00", team1: "Bens", team2: "Farkas" },
  { date: "Wed May 27", time: "21:00", team1: "Schnipper", team2: "Khoury" },
  { date: "Wed May 27", time: "21:00", team1: "Tenenbaum", team2: "Hawkins" },

  // Sun May 31
  { date: "Sun May 31", time: "08:30", team1: "Avi", team2: "Tenenbaum" },
  { date: "Sun May 31", time: "08:30", team1: "Schnipper", team2: "Picow" },
  { date: "Sun May 31", time: "09:30", team1: "Spizman", team2: "Hawkins" },
  { date: "Sun May 31", time: "09:30", team1: "Bens", team2: "Eisinger" },
  { date: "Sun May 31", time: "10:30", team1: "Khoury", team2: "Shulman" },
  { date: "Sun May 31", time: "10:30", team1: "Farkas", team2: "Roth" },

  // Wed Jun 3
  { date: "Wed Jun 3", time: "19:00", team1: "Hawkins", team2: "Schnipper" },
  { date: "Wed Jun 3", time: "19:00", team1: "Singer", team2: "Avi" },
  { date: "Wed Jun 3", time: "20:00", team1: "Spizman", team2: "Farkas" },
  { date: "Wed Jun 3", time: "20:00", team1: "Eisinger", team2: "Shulman" },
  { date: "Wed Jun 3", time: "21:00", team1: "Tenenbaum", team2: "Khoury" },
  { date: "Wed Jun 3", time: "21:00", team1: "Roth", team2: "Picow" },

  // Sun Jun 7
  { date: "Sun Jun 7", time: "08:30", team1: "Shulman", team2: "Singer" },
  { date: "Sun Jun 7", time: "08:30", team1: "Tenenbaum", team2: "Schnipper" },
  { date: "Sun Jun 7", time: "09:30", team1: "Farkas", team2: "Eisinger" },
  { date: "Sun Jun 7", time: "09:30", team1: "Picow", team2: "Avi" },
  { date: "Sun Jun 7", time: "10:30", team1: "Khoury", team2: "Bens" },
  { date: "Sun Jun 7", time: "10:30", team1: "Hawkins", team2: "Roth" },
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
