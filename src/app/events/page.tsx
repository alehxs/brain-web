// app/events/page.tsx
import EventsGrid, {
  type EventItem,
} from "../components/EventGrid"; // adjust import if needed

const events: EventItem[] = [
  {
    id: 1,
    title: "Summer Vintage Bazaar",
    dateLabel: "Sun, Jul 23, 10:00 AM",
    location: "Grand Bazaar NYC • New York, NY",
    imageSrc: "/events/summer-vintage-bazaar.jpg",
    imageAlt: "Shoppers browsing racks of vintage clothing at an outdoor market",
    href: "#", // or external URL
    external: false,
  },
  {
    id: 2,
    title: "Summer Brunch & Shop – Women-Owned Businesses",
    dateLabel: "Sun, Jul 30, 10:00 AM",
    location: "Grand Bazaar NYC • New York, NY",
    imageSrc: "/events/women-owned-brunch.jpg",
    imageAlt: "Vendors and shoppers interacting at a brunch and market",
    href: "#",
    external: false,
  },
  {
    id: 3,
    title: "NYC Summer Bazaar",
    dateLabel: "Sun, Aug 6, 10:00 AM",
    location: "Grand Bazaar NYC • New York, NY",
    imageSrc: "/events/nyc-summer-bazaar.jpg",
    imageAlt: "Crowd walking through vendor stalls at an outdoor bazaar",
    href: "#",
    external: false,
  },
  {
    id: 4,
    title: "NYC Market Day",
    dateLabel: "Sun, Aug 13, 10:00 AM",
    location: "Grand Bazaar NYC • New York, NY",
    imageSrc: "/events/nyc-market-day.jpg",
    imageAlt: "People seated at tables in an outdoor food market",
    href: "#",
    external: false,
  },
];

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-black">Events</h1>
        <p className="mt-2 text-sm text-black/70">
          Upcoming seminars, workshops, conferences, and BRAIN Center activities.
        </p>
      </header>

      <EventsGrid events={events} />
    </main>
  );
}