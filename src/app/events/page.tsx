// app/events/page.tsx
import type { Metadata } from "next";
import EventsGrid from "../components/EventGrid";
import { events } from "@/data/events";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Seminars, workshops, conferences, and upcoming activities from the NSF BRAIN Center.",
};

export default function EventsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Events"
        description="Past, present, and upcoming seminars, workshops, conferences, and BRAIN Center activities."
      />
      <section className="mx-auto max-w-6xl px-6 sm:px-8 py-12 lg:py-16">
        <EventsGrid events={events} />
      </section>
    </div>
  );
}