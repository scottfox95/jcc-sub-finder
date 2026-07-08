import type { Metadata } from "next";
import { Schedule } from "@/components/schedule";

export const metadata: Metadata = {
  title: "Schedule · JCC Sub Finder",
  description: "Full JCC Basketball League schedule - Summer 2026",
};

export default function SchedulePage() {
  return <Schedule />;
}
