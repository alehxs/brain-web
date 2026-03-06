export type EventItem = {
  id: number | string;
  title: string;
  /** ISO date string "YYYY-MM-DD" — used for sorting and upcoming/past split */
  startDate: string;
  /** ISO date string "YYYY-MM-DD" — set for multi-day events */
  endDate?: string;
  /** Human-readable label shown on the card, e.g. "Nov 10, 2025, 7:00 PM" or "Feb 6–8, 2026" */
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
    startDate: "2025-11-10",
    dateLabel: "Nov 10, 2025, 7:00 PM",
    location: "Sandler Auditorium, UCSF • San Francisco, CA",
    imageSrc: "",
    imageAlt: "La Catrina Monarca performance blending art, science, AI, and ecology",
    href: "#",
    external: false,
  },
  {
    id: 2,
    title: "Your Brain on Beethoven",
    startDate: "2025-12-09",
    dateLabel: "Dec 9, 2025, 12:30 PM",
    location: "The EGG Brussel • Brussels, Belgium",
    imageSrc: "",
    imageAlt: "Real-time Brain-Computer Interface performance with Dr. Stella Chen and Dr. Mei Rui",
    href: "#",
    external: false,
  },
  {
    id: 3,
    title: "Window into the Creative Mind",
    startDate: "2026-02-06",
    endDate: "2026-02-08",
    dateLabel: "Feb 6–8, 2026",
    location: "Houston, Texas",
    imageSrc: "/images/events/brain-event.jpg",
    imageAlt: "An art-science performance and research study in collaboration with Anthony Brandt (creativity scholar and composer), Mumbai-born Steinway Young Artist Chelsea de Souza, and the amazing neuroengineering team at the IUCRC BRAIN CENTER (Lianne Sánchez Rodríguez Maxine Annel Pacheco Ramírez, Aime J. Aguilar-Herrera and Yoshua E. Lima-Carmona) to the 188th Anniversary Annual Meeting of the Philosophical Society of Texas 'Exploring the Mysteries of the Brain'",
    href: "#",
    external: false,
  },
];