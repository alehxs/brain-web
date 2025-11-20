export type SiteCategory = 
  | "BRAIN Site" 
  | "External Collaborating Site" 
  | "International Affiliate Site";

export interface Site {
  id: string;
  name: string;
  abbreviation: string;
  category: SiteCategory;
  link: string;
  logos: {
    full: string;
    small: string;
  };
  description?: string;
  // ADD THIS FIELD
  coordinates: [number, number]; 
}

export const sites: Site[] = [
  // --- BRAIN Sites ---
  {
    id: "uh",
    name: "University of Houston",
    abbreviation: "UH",
    category: "BRAIN Site",
    link: "https://www.uh.edu",
    logos: { full: "/partners/uh.png", small: "/logos/uh-logo-white.png" },
    description: "Lead site driving neurotechnology research and innovation.",
    coordinates: [-95.3584, 29.7199]
  },
  {
    id: "asu",
    name: "Arizona State University",
    abbreviation: "ASU",
    category: "BRAIN Site",
    link: "https://www.asu.edu",
    logos: { full: "/partners/asu.png", small: "/logos/asu-logo-white.png" },
    description: "Collaborating on advancing neural engineering solutions.",
    coordinates: [-111.9281, 33.4242]
  },
  {
    id: "gt",
    name: "Georgia Institute of Technology",
    abbreviation: "GT",
    category: "BRAIN Site",
    link: "https://www.gatech.edu",
    logos: { full: "/partners/git.png", small: "/logos/gt-logo-white.png" },
    description: "Prospective partner expanding our technical expertise.",
    coordinates: [-84.3963, 33.7756]
  },
  {
    id: "wvu",
    name: "West Virginia University",
    abbreviation: "WVU",
    category: "BRAIN Site",
    link: "https://www.wvu.edu",
    logos: { full: "/partners/wvu.png", small: "/logos/wvu-logo-white.png" },
    description: "Focusing on clinical applications and neural disorders.",
    coordinates: [-79.9559, 39.6358]
  },
  {
    id: "umbc",
    name: "University of Maryland, Baltimore County",
    abbreviation: "UMBC",
    category: "BRAIN Site",
    link: "https://www.umbc.edu",
    logos: { full: "/partners/umbc.png", small: "/logos/umbc-logo-white.png" },
    description: "Contributing to data-driven neurotech research.",
    coordinates: [-76.7135, 39.2537]
  },

  // --- External Collaborating Sites ---
  {
    id: "neu",
    name: "Northeastern University",
    abbreviation: "NEU",
    category: "External Collaborating Site",
    link: "https://www.northeastern.edu",
    logos: { full: "/partners/neu.png", small: "/logos/neu-logo-white.png" },
    description: "External collaborator on key research initiatives.",
    coordinates: [-87.6753, 42.0565]
  },
  {
    id: "uab",
    name: "University of Alabama at Birmingham",
    abbreviation: "UAB",
    category: "External Collaborating Site",
    link: "https://www.uab.edu",
    logos: { full: "/partners/uab.svg", small: "/logos/uab-logo-white.png" },
    description: "Providing clinical insight.",
    coordinates: [-86.8025, 33.5054]
  },

  // --- International Affiliate Sites ---
  {
    id: "umh",
    name: "Miguel Hernández University of Elche",
    abbreviation: "UMH",
    category: "International Affiliate Site",
    link: "https://www.umh.es",
    logos: { full: "/partners/umh.png", small: "/logos/umh-logo-white.png" },
    description: "International affiliate expanding our global reach in Spain.",
    coordinates: [-0.6983, 38.2699]
  },
  {
    id: "tec",
    name: "Tecnológico de Monterrey",
    abbreviation: "TEC",
    category: "International Affiliate Site",
    link: "https://tec.mx",
    logos: { full: "/partners/tec.png", small: "/logos/tec-logo-white.png" },
    description: "Key Latin American partner for innovation and talent.",
    coordinates: [-100.3167, 25.6667]
  },
];