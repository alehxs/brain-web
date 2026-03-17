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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The BRAIN Center",
  url: "https://www.nsfbrain.org",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.nsfbrain.org/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  hasPart: [
    {
      "@type": "SiteNavigationElement",
      name: "Research",
      url: "https://www.nsfbrain.org/research",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Organization",
      url: "https://www.nsfbrain.org/organization",
    },
    {
      "@type": "SiteNavigationElement",
      name: "BRAIN Sites",
      url: "https://www.nsfbrain.org/sites",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Impacts",
      url: "https://www.nsfbrain.org/impacts",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Membership",
      url: "https://www.nsfbrain.org/membership",
    },
    {
      "@type": "SiteNavigationElement",
      name: "News & Events",
      url: "https://www.nsfbrain.org/news",
    },
  ],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <MissionSummary />
      <NewsWidget />
      <JoinUs/>
      <CalendarEmbed />
      <Partners />
    </div>
  );
}