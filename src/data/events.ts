export type EventItem = {
  id: number | string;
  title: string;
  dateLabel: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  external?: boolean;
};

export const events: EventItem[] = [
  {
    id: 1,
    title: "La Catrina Monarca Art-Science Performance",
    dateLabel: "Mon, Nov 10, 7:00 PM",
    location: "Sandler Auditorium, UCSF • San Francisco, CA",
    imageSrc: "",
    imageAlt: "La Catrina Monarca performance blending art, science, AI, and ecology",
    href: "#",
    external: false,
  },
  {
    id: 2,
    title: "Your Brain on Beethoven",
    dateLabel: "Tue, Dec 9, 12:30 PM",
    location: "The EGG Brussel • Brussels, Belgium",
    imageSrc: "",
    imageAlt: "Real-time Brain-Computer Interface performance with Dr. Stella Chen and Dr. Mei Rui",
    href: "#",
    external: false,
  },
];