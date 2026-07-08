import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Canonical host. Requests to the old *.vercel.app production alias are
// permanently redirected here (path + query preserved). Preview/deployment
// URLs (jcc-sub-finder-<hash>.vercel.app) and the canonical domain itself are
// left alone.
const CANONICAL_HOST = "jcc-sub-finder.tenenbaum.ai";
const LEGACY_HOST = "jcc-sub-finder.vercel.app";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  if (host === LEGACY_HOST) {
    const { pathname, search } = request.nextUrl;
    return NextResponse.redirect(`https://${CANONICAL_HOST}${pathname}${search}`, 308);
  }
  return NextResponse.next();
}

export const config = {
  // Run on everything except Next internals (assets don't need the host check).
  matcher: ["/((?!_next/).*)"],
};
