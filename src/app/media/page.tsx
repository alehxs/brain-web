// app/media/page.tsx (or wherever)
import MediaGrid from "../components/MediaGrid";

const mediaItems = [
  {
    id: 1,
    title: "MyoStep Named 2025 Houston Innovation Awards Startup of the Year Finalist",
    label: "Houston Innovation Awards finalist graphic for MyoStep",
    imageSrc: "/media/finalist.jpg",
    imageAlt: "Houston Innovation Awards 2025 Startup of the Year Finalist graphic featuring MyoStep soft exoskeleton",
    href: "https://stories.uh.edu/2025-child-exoskeleton/index.html",
  },
  {
    id: 2,
    title: "NSF Funds Two More Universities To Join IUCRC BRAIN Center",
    label: "NSF funds WVU and Georgia Tech to join the BRAIN Center announcement graphic",
    imageSrc: "/media/nsf-funds-two-more-unis.jpg",
    imageAlt: "Students at outreach event",
    href: "https://www.uh.edu/news-events/stories/2023/august-2023/08232023-brain-center-expands-two-universities.php",
  },
];

export default function MediaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-black">BRAIN Media</h1>
      <p className="mt-2 text-black/70">
        Explore photos, videos, and outreach materials from the BRAIN Center.
      </p>

      <section className="mt-8">
        <MediaGrid items={mediaItems} />
      </section>
    </main>
  );
}