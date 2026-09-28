"use client";

import { useSyncExternalStore } from "react";

/**
 * Shared wall clock that ticks every 15s. Returns null during SSR and
 * hydration so time-dependent UI never mismatches the server render.
 */

const TICK_MS = 15_000;
let current = Date.now();
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | undefined;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  current = Date.now();
  if (!timer) {
    timer = setInterval(() => {
      current = Date.now();
      listeners.forEach((l) => l());
    }, TICK_MS);
  }
  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = undefined;
    }
  };
}

export function useNow(): number | null {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => null
  );
}
