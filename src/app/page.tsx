import Hero from "./components/Hero";
import MissionSummary from "./components/MissionSummary"
import Partners from "./components/Partners"
import CalendarEmbed from "./components/Calendar";
import JoinUs from "./components/JoinUs";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <MissionSummary />
      <JoinUs/>
      <CalendarEmbed />
      <Partners />
    </main>
  );
}