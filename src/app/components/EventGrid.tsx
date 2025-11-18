// components/events/EventsGrid.tsx
import { EventCard, type EventCardProps } from "./cards/EventCard";

export type EventItem = Omit<EventCardProps, "as" | "aspectRatio"> & {
  id: string | number;
};

type EventsGridProps = {
  events: EventItem[];
};

export function EventsGrid({ events }: EventsGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </section>
  );
}

export default EventsGrid;