import { MediaItem } from "./types";

// TODO: reverse order 
export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "brochure-2024",
    title: "BRAIN Brochure",
    type: "pdf",
    src: "/media/brochure-2024.pdf",
    thumbnail: "/media/thumbs/brochure-2024.jpg",
    alt: "BRAIN brochure cover",
    description: "Center overview and highlights",
    year: 2024,
    tags: ["overview"],
    featured: true,
  },
  {
    id: "outreach-recap",
    title: "Outreach Program Recap",
    type: "video",
    src: "https://youtu.be/xxxx",
    thumbnail: "/media/thumbs/outreach.jpg",
    alt: "Students at outreach event",
    year: 2025,
    tags: ["education", "outreach"],
    featured: true,
  },
  {
    id: "uh-national-commercial-2025",
    title: "BRAIN Center Featured in 2025 UH National Commercial",
    type: "video",
    src: "https://youtu.be/xxxx",
    thumbnail: "/media/thumbs/outreach.jpg",
    alt: "Students at outreach event",
    year: 2025,
    tags: ["education", "outreach"],
    featured: true,
  },
];
