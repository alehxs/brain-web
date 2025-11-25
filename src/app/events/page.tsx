// app/events/page.tsx
import EventsGrid from "../components/EventGrid"; 
import { events } from "@/data/events"

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-black">Events</h1>
        <p className="mt-2 text-sm text-black/70">
          Past, present, and upcoming seminars, workshops, conferences, and BRAIN Center activities.
        </p>
      </header>

      <EventsGrid events={events} />
    </main>
  );
}