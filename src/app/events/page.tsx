// app/events/page.tsx
import type { Metadata } from "next";
import EventsPageClient from "../components/EventsPageClient";
import { events } from "@/data/events";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Seminars, workshops, conferences, and upcoming activities from the BRAIN Center.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        eyebrow="Outreach"
        title="Events"
        description="Upcoming and past seminars, workshops, conferences, and BRAIN Center activities."
      />
      <section className="mx-auto max-w-6xl px-6 sm:px-8 py-12 lg:py-16">
        <EventsPageClient events={events} />
      </section>
    </div>
  );
}
