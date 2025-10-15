import Hero from "./components/Hero";
import MissionSummary from "./components/MissionSummary"
import Partners from "./components/Partners"
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <MissionSummary />
      <Partners />
    </main>
  );
}