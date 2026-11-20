import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans } from "next/font/google";
import "./globals.css";
import { PlayoffIntro } from "@/components/playoff-intro";
import { INTRO_END, INTRO_SEEN_KEY, PLAYOFF_EDITION_START } from "@/lib/playoffs";

/**
 * Runs before first paint: hide the playoff intro if it already played on this
 * device, or it's outside the run-up to the first round. `?intro` forces a replay.
 */
const INTRO_GATE = `(function(){var d=document.documentElement;try{var n=Date.now();var force=/[?&]intro\\b/.test(location.search);if(!force&&(n<${PLAYOFF_EDITION_START}||n>${INTRO_END}||localStorage.getItem(${JSON.stringify(INTRO_SEEN_KEY)})))d.dataset.intro="off";}catch(e){}})();`;

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jcc-sub-finder.tenenbaum.ai"),
  title: "JCC Sub Finder",
  description: "Find eligible substitutes for JCC Basketball League - Fall 2026",
  openGraph: {
    title: "JCC Sub Finder",
    description: "Find eligible substitutes for JCC Basketball League - Fall 2026",
    url: "https://jcc-sub-finder.tenenbaum.ai",
    siteName: "JCC Sub Finder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JCC Sub Finder",
    description: "Find eligible substitutes for JCC Basketball League - Fall 2026",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_GATE }} />
      </head>
      <body
        className={`${anton.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <PlayoffIntro />
        {children}
      </body>
    </html>
  );
}
