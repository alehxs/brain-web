import type { Metadata } from "next";
import Hero from "./components/Hero";
import MissionSummary from "./components/MissionSummary"
import Partners from "./components/Partners"
import CalendarEmbed from "./components/Calendar";
import JoinUs from "./components/JoinUs";
import NewsWidget from "./components/news/NewsWidget";
import React from "react";

export const metadata: Metadata = {
  title: "The BRAIN Center | NSF IUCRC Neurotechnology Research",
  description: "The BRAIN Center develops safe, effective, and affordable personalized neurotechnologies to diagnose, restore, enhance, and rehabilitate sensory, motor, and cognitive function.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <MissionSummary />
      <NewsWidget />
      <JoinUs/>
      <CalendarEmbed />
      <Partners />
    </div>
  );
}