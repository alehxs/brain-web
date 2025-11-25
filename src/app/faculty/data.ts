// src/app/faculty/data.ts
export type Faculty = {
  name: string;
  src: string;
  href?: string;
  alt?: string;
  subtitle?: string; // e.g., university, role, site
};

export const facultyList: Faculty[] = [
  {
    name: "Jose Luis Contreras-Vidal, Ph.D.",
    src: "/faculty/pepe-headshot.png",
    href: "/faculty/jose-luis-contreras-vidal",
    alt: "Portrait of Jose Luis Contreras-Vidal",
    subtitle: "University of Houston",
  },
  {
    name: "Alexander Sangurima",
    src: "/faculty/marcus-lee.jpg",
    href: "/faculty/alexander-sangurima",
    alt: "Portrait of Alexander Sangurima",
    subtitle: "BRAIN Center",
  },
];