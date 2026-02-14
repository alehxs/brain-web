// app/media/page.tsx
import type { Metadata } from "next";
import MediaGrid from "../components/MediaGrid";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Photos, videos, and outreach materials from the The BRAIN Center.",
};

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
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="BRAIN Media"
        description="Explore photos, videos, and outreach materials from the BRAIN Center."
      />
      <section className="mx-auto max-w-6xl px-6 sm:px-8 py-12 lg:py-16">
        <MediaGrid items={mediaItems} />
      </section>
    </div>
  );
}