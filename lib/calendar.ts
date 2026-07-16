import { getTeamGames } from "./data";

/**
 * Generates an iCalendar (.ics) file for a single team's regular-season games.
 *
 * The schedule in `data.ts` stores dates as weekday-less-of-year strings
 * ("Wed Jul 8") with no year, and times as local wall-clock ("19:00"). The
 * league runs Summer 2026 in Atlanta (Eastern Time), so every game is anchored
 * to 2026 in the America/New_York zone. A VTIMEZONE block ships with the file
 * so the events display at the correct local time in any calendar app,
 * regardless of the viewer's own timezone.
 */

/** The league season year. All games are anchored to this year. */
const SEASON_YEAR = 2026;

/** IANA timezone for the league (Atlanta). */
const TZID = "America/New_York";

/**
 * Venue for every game. This is not in the schedule data, so it's set here as
 * an easily-editable default; the name geocodes correctly in Apple/Google Maps.
 */
const EVENT_LOCATION = "Marcus JCC of Atlanta";

/** Each game is scheduled one hour apart, so events run for one hour. */
const GAME_DURATION_HOURS = 1;

const MONTHS: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
};

interface Wall {
  year: number;
  month: number; // 1-12
  day: number;
  hour: number;
  minute: number;
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

/** Parse "Wed Jul 8" + "19:00" into wall-clock components anchored to the season year. */
function parseGameStart(dateStr: string, timeStr: string): Wall {
  const parts = dateStr.trim().split(/\s+/); // ["Wed", "Jul", "8"]
  const month = MONTHS[parts[1]];
  const day = parseInt(parts[2], 10);
  const [hour, minute] = timeStr.split(":").map(Number);
  return { year: SEASON_YEAR, month, day, hour, minute };
}

/**
 * Add whole hours to a wall-clock time, rolling day/month/year over as needed.
 * Uses UTC arithmetic purely as a calendar calculator (no DST is applied),
 * then reads the fields back as wall-clock values.
 */
function addHours(w: Wall, hours: number): Wall {
  const d = new Date(Date.UTC(w.year, w.month - 1, w.day, w.hour, w.minute));
  d.setUTCHours(d.getUTCHours() + hours);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
  };
}

/** Format a wall-clock value as an iCalendar local date-time: YYYYMMDDTHHMMSS. */
function localStamp(w: Wall): string {
  return `${w.year}${pad(w.month)}${pad(w.day)}T${pad(w.hour)}${pad(w.minute)}00`;
}

/** Format a Date as an iCalendar UTC date-time: YYYYMMDDTHHMMSSZ. */
function utcStamp(d: Date): string {
  return (
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}` +
    `T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
  );
}

/** Escape a value per RFC 5545 (backslash, semicolon, comma, newline). */
function escapeText(text: string): string {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

/**
 * Fold a content line to <=75 octets per RFC 5545. All emitted content is ASCII,
 * so string length equals octet length here. Continuation lines start with a space.
 */
function foldLine(line: string): string {
  if (line.length <= 74) return line;
  const parts: string[] = [line.slice(0, 74)];
  for (let i = 74; i < line.length; i += 73) {
    parts.push(" " + line.slice(i, i + 73));
  }
  return parts.join("\r\n");
}

/** Standard America/New_York VTIMEZONE (US Eastern DST rules). */
const VTIMEZONE = [
  "BEGIN:VTIMEZONE",
  `TZID:${TZID}`,
  "BEGIN:DAYLIGHT",
  "TZOFFSETFROM:-0500",
  "TZOFFSETTO:-0400",
  "TZNAME:EDT",
  "DTSTART:19700308T020000",
  "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU",
  "END:DAYLIGHT",
  "BEGIN:STANDARD",
  "TZOFFSETFROM:-0400",
  "TZOFFSETTO:-0500",
  "TZNAME:EST",
  "DTSTART:19701101T020000",
  "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU",
  "END:STANDARD",
  "END:VTIMEZONE",
];

/** Filename for a team's downloaded calendar, e.g. "Jackson-JCC-Summer-2026.ics". */
export function teamCalendarFilename(team: string): string {
  return `${team}-JCC-Summer-${SEASON_YEAR}.ics`;
}

/**
 * Build the full iCalendar text for a team's regular-season games. Pure string
 * generation (no DOM), safe to call anywhere. Line endings are CRLF as required
 * by RFC 5545.
 */
export function buildTeamCalendar(team: string): string {
  const games = getTeamGames(team);
  const dtstamp = utcStamp(new Date());

  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//JCC Sub Finder//Team Schedule//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:JCC ${team} - Summer ${SEASON_YEAR}`,
    `X-WR-TIMEZONE:${TZID}`,
    ...VTIMEZONE,
  ];

  for (const g of games) {
    const start = parseGameStart(g.date, g.time);
    const end = addHours(start, GAME_DURATION_HOURS);
    const opponent = g.team1 === team ? g.team2 : g.team1;
    const uid =
      `jcc-${team}-${localStamp(start)}@jcc-sub-finder.tenenbaum.ai`.toLowerCase();

    lines.push(
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${dtstamp}`,
      `DTSTART;TZID=${TZID}:${localStamp(start)}`,
      `DTEND;TZID=${TZID}:${localStamp(end)}`,
      `SUMMARY:${escapeText(`JCC: ${team} vs ${opponent}`)}`,
      `LOCATION:${escapeText(EVENT_LOCATION)}`,
      `DESCRIPTION:${escapeText(`JCC Basketball League - Summer ${SEASON_YEAR}`)}`,
      "STATUS:CONFIRMED",
      "END:VEVENT"
    );
  }

  lines.push("END:VCALENDAR");

  return lines.map(foldLine).join("\r\n") + "\r\n";
}
