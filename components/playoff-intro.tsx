"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PLAYOFFS, SEASON_NAME, SEASON_YEAR, TEAM_NAMES, formatTime } from "@/lib/data";
import { FIRST_ROUND, INTRO_SEEN_KEY, getFirstRound, getFirstRoundByes } from "@/lib/playoffs";

/**
 * Playoff-edition cold open: gym lights strike over the Atlanta skyline, the
 * court draws in, PLAYOFFS rises and hits, and the first-round matchups flip
 * past like a broadcast graphic before the page zooms through to the app.
 *
 * Rendered on the server so it covers the page from the first paint; an inline
 * script in the layout sets <html data-intro="off"> before paint when it has
 * already played on this device, or it isn't the run-up to the first round,
 * which hides it via CSS. Pure CSS/SVG: nothing extra to download.
 *
 * Timeline (ms from first paint): lights 0–1060 · skyline 150–1150 ·
 * court 250–1300 · eyebrow 300 · letters 450–1385 · hit 1350 · reel 1500–4140 ·
 * land 4140 · tagline 4300 · exit 5100 (+460 leave). Keep in sync with globals.css.
 */

const AUTO_EXIT_MS = 5100;
const REDUCED_EXIT_MS = 2400;
const LEAVE_MS = 460;

const WORD = "PLAYOFFS".split("");
const LETTER_START = 450;
const LETTER_STEP = 45;
const MATCHUPS = getFirstRound();
const BYES = getFirstRoundByes();
const REEL_START = 1500;
const REEL_STEP = 440;
const LAND_AT = REEL_START + REEL_STEP * (MATCHUPS.length + (BYES.length ? 1 : 0));

export function PlayoffIntro() {
  const [phase, setPhase] = useState<"play" | "leave" | "done">("play");
  const timers = useRef<number[]>([]);

  const finish = useCallback(() => {
    setPhase((p) => (p === "play" ? "leave" : p));
    timers.current.push(
      window.setTimeout(() => {
        setPhase("done");
        document.documentElement.dataset.intro = "off";
        document.documentElement.style.overflow = "";
      }, LEAVE_MS)
    );
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.intro === "off") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- decided by the pre-paint script
      setPhase("done");
      return;
    }
    try {
      localStorage.setItem(INTRO_SEEN_KEY, "1");
    } catch {}
    // A replay link (?intro) shouldn't replay again on refresh.
    if (/[?&]intro\b/.test(location.search)) {
      history.replaceState(null, "", location.pathname + location.hash);
    }
    root.style.overflow = "hidden";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // CSS started at first paint; hydration may land later, so count from there.
    const remaining = (reduced ? REDUCED_EXIT_MS : AUTO_EXIT_MS) - performance.now();
    const list = timers.current;
    list.push(window.setTimeout(finish, Math.max(0, remaining)));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      list.forEach(clearTimeout);
      root.style.overflow = "";
    };
  }, [finish]);

  if (phase === "done") return null;

  return (
    <div
      className={"pi" + (phase === "leave" ? " pi-leave" : "")}
      role="dialog"
      aria-label={`${SEASON_NAME} ${SEASON_YEAR} Playoffs`}
      onClick={finish}
    >
      {/* Gym lights */}
      <div className="pi-lights" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="pi-light" style={{ ["--i" as string]: i }} />
        ))}
      </div>

      {/* Skyline + court */}
      <div className="pi-stage" aria-hidden="true">
        <svg className="pi-skyline" viewBox="0 0 400 120" preserveAspectRatio="none">
          <path className="pi-sky-fill" d={SKYLINE} />
          <path className="pi-sky-line" d={SKYLINE} pathLength={1} />
        </svg>
        <svg className="pi-court" viewBox="0 0 400 200" preserveAspectRatio="xMidYMin slice">
          <g>
            <path pathLength={1} d="M40 200 L150 0" />
            <path pathLength={1} d="M360 200 L250 0" />
            <path pathLength={1} d="M128 40 H272" />
            <ellipse pathLength={1} cx="200" cy="40" rx="38" ry="9" />
            <path pathLength={1} d="M158 200 L172 128 H228 L242 200" />
            <ellipse pathLength={1} cx="200" cy="128" rx="28" ry="7" />
          </g>
        </svg>
      </div>

      {/* Title */}
      <div className="pi-title">
        <p className="pi-eyebrow">
          JCC Basketball &middot; Atlanta &middot; {SEASON_NAME} {SEASON_YEAR}
        </p>
        <h2 className="pi-word font-display" aria-label="Playoffs">
          {WORD.map((ch, i) => (
            <span key={i} className="pi-letter-mask" aria-hidden="true">
              <span
                className="pi-letter"
                style={{ animationDelay: `${LETTER_START + i * LETTER_STEP}ms` }}
              >
                {ch}
              </span>
            </span>
          ))}
        </h2>
        <span className="pi-rule" aria-hidden="true" />

        {/* Broadcast reel */}
        <div className="pi-reel" aria-hidden="true">
          {MATCHUPS.map((m, i) => (
            <p
              key={m.high.team}
              className="pi-reel-line"
              style={{ animationDelay: `${REEL_START + i * REEL_STEP}ms` }}
            >
              <Seed n={m.high.seed} />
              {m.high.team}
              <span className="pi-vs">vs</span>
              {m.low.team}
              <Seed n={m.low.seed} />
              <span className="pi-time">{formatTime(m.game.time)}</span>
            </p>
          ))}
          {BYES.length > 0 && (
            <p
              className="pi-reel-line"
              style={{ animationDelay: `${REEL_START + MATCHUPS.length * REEL_STEP}ms` }}
            >
              <span className="pi-bye">Bye</span>
              {BYES.join(" · ")}
            </p>
          )}
          <p className="pi-reel-line pi-reel-land" style={{ animationDelay: `${LAND_AT}ms` }}>
            {FIRST_ROUND.round} &middot; {FIRST_ROUND.date}
          </p>
        </div>
        <p className="pi-tag" style={{ animationDelay: `${LAND_AT + 160}ms` }}>
          {TEAM_NAMES.length} teams &middot; {PLAYOFFS.length} rounds &middot; 1 banner
        </p>
      </div>

      <button
        type="button"
        className="pi-skip"
        onClick={(e) => {
          e.stopPropagation();
          finish();
        }}
      >
        Skip
      </button>
    </div>
  );
}

function Seed({ n }: { n: number | null }) {
  if (n == null) return null;
  return <span className="pi-seed">{n}</span>;
}

/**
 * Hand-drawn Atlanta skyline, left to right: Westin Peachtree Plaza's drum,
 * 191 Peachtree's twin crowns, Truist Plaza's stepped crown, Bank of America
 * Plaza's spire, One Atlantic Center's gable, Georgia-Pacific's steps, and the
 * Benz stadium roof.
 */
const SKYLINE =
  "M0 120 V100 H16 V90 H28 V98 H38 V82 H50 V94 H58 V56 H60 V52 H74 V56 H76 V90 H86 V74 H96 V86 H104 " +
  "V48 H108 V40 H112 V48 H118 V40 H122 V48 H126 V86 H134 V70 H144 V92 H152 V44 H156 V36 H160 V30 " +
  "H168 V36 H172 V44 H176 V94 H184 V80 H194 V96 H202 V30 H210 L216 14 H218 V2 H220 V14 H222 L228 30 " +
  "H236 V92 H244 V66 H256 V88 H264 V44 H270 L274 30 L278 44 H284 V90 H292 V76 H304 V96 H312 V58 " +
  "H320 V50 H330 V98 H338 V92 Q360 76 382 92 V104 H392 V98 H400 V120 Z";
