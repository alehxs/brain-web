// src/data/media.ts

export type MediaItem = {
  id: number;
  title: string;
  date: string;      // ISO for sorting: "2025-06-13"
  dateLabel: string; // Pretty: "Jun 13, 2025"
  imageSrc: string;
  imageAlt: string;
  href?: string;
  external?: boolean;
};

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "Houston Team Develops Innovative Soft Skeleton for Kids with Cerebral Palsy",
    date: "2025-06-13",
    dateLabel: "Jun 13, 2025",
    imageSrc: "/media/innovationmap-soft-skeleton.jpg",
    imageAlt: "Child wearing the MyoStep soft exoskeleton developed by the UH BRAIN Center team",
    href: "https://houston.innovationmap.com/uh-soft-skeleton-myostep-2672365268.html",
    external: true,
  },
  {
    id: 2,
    title: "Brain-Computer Interfaces Face a Critical Test",
    date: "2025-04-01",
    dateLabel: "Apr 1, 2025",
    imageSrc: "/media/tech-review-bci.webp",
    imageAlt: "MIT Technology Review coverage of brain-computer interfaces",
    href: "https://www.technologyreview.com/2025/04/01/1114009/brain-computer-interfaces-10-breakthrough-technologies-2025/",
    external: true,
  },
  {
    id: 3,
    title: "MyoStep Named 2025 Houston Innovation Awards Finalist",
    date: "2025-10-07",
    dateLabel: "Oct 7, 2025",
    imageSrc: "/news/myostep-finalist.jpg",
    imageAlt: "Trophy graphic for the 2025 Houston Innovation Awards finalist announcement",
    href: "https://houston.innovationmap.com/2025-houston-innovation-awards-finalists-2674149025.html",
    external: true,
  },
];

// Helper: newest first
export const sortedMediaItems: MediaItem[] = [...mediaItems].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
