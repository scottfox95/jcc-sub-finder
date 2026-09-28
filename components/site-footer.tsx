"use client";

import { ThinkingOrb } from "thinking-orbs";

const BOOKING_URL = "https://work.tenenbaum.ai/book?utm_source=jcc-sub-finder";

/** Deliberately quiet sign-off: a tiny breathing orb + booking link. */
export function SiteFooter() {
  return (
    <footer className="relative z-10 flex justify-center px-4 pt-2 pb-8">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener"
        className="group inline-flex items-center gap-1.5 text-[0.66rem] tracking-[0.04em] text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-[var(--dur-base)]"
      >
        <ThinkingOrb
          state="breathing"
          size={20}
          theme="dark"
          aria-hidden="true"
          className="opacity-50 group-hover:opacity-100 transition-opacity duration-[var(--dur-base)]"
        />
        Book time with <span className="font-medium">tenenbaum.ai</span>
      </a>
    </footer>
  );
}
