"use client";

import { useMemo } from "react";
import EventsGrid from "./EventGrid";
import type { EventItem } from "@/data/events";

export default function EventsPageClient({ events }: { events: EventItem[] }) {
  const { upcoming, past } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming: EventItem[] = [];
    const past: EventItem[] = [];

    for (const event of events) {
      const endDate = new Date(event.endDate ?? event.startDate);
      endDate.setHours(23, 59, 59, 999);
      (endDate >= today ? upcoming : past).push(event);
    }

    upcoming.sort((a, b) => a.startDate.localeCompare(b.startDate));
    past.sort((a, b) => b.startDate.localeCompare(a.startDate));

    return { upcoming, past };
  }, [events]);

  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-xl font-semibold text-[var(--midnight-blue)] mb-6">
          Upcoming Events
        </h2>
        {upcoming.length > 0 ? (
          <EventsGrid events={upcoming} />
        ) : (
          <p className="text-sm text-slate-500">No upcoming events at this time. Check back soon.</p>
        )}
      </div>

      {past.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-[var(--midnight-blue)] mb-6">
            Past Events
          </h2>
          <EventsGrid events={past} />
        </div>
      )}
    </div>
  );
}
