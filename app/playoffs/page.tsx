import type { Metadata } from "next";
import { PlayoffBracket } from "@/components/playoff-bracket";

export const metadata: Metadata = {
  title: "Playoffs · JCC Sub Finder",
  description: "JCC Basketball League Fall 2026 playoff bracket",
};

export default function PlayoffsPage() {
  return <PlayoffBracket />;
}
