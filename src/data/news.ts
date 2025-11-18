// src/data/news.ts

export type NewsItem = {
  slug: string;
  title: string;
  date: string;       // ISO string for sorting: "2025-11-10"
  dateLabel: string;  // Pretty: "Nov 10, 2025"
  summary: string;
  imageSrc: string;
  imageAlt: string;
  content: string;    // full article text
};

export const newsItems: NewsItem[] = [
  {
    slug: "myostep-innovation-award-finalist",
    title: "MyoStep Named 2025 Houston Innovation Awards Startup of the Year Finalist",
    date: "2025-11-07",
    dateLabel: "Nov 7, 2025",
    summary:
      "MyoStep, a pediatric soft exoskeleton developed at the UH BRAIN Center, has been selected as a finalist for the 2025 Houston Innovation Startup of the Year Award.",
    imageSrc: "/media/finalist.jpg",
    imageAlt:
      "Houston Innovation Awards 2025 Startup of the Year Finalist graphic featuring MyoStep soft exoskeleton",
    content: `
MyoStep, a pediatric soft exoskeleton for rehabilitation of gait, has been named a finalist for the 2025 Houston Innovation Startup of the Year Award.

Developed at the University of Houston BRAIN Center in collaboration with TIRR Memorial Hermann, MyoStep is designed to support children with motor impairments during physical activity, academics, and daily living.

[Add more detail, quotes, and links here...]
    `,
  },
  {
    slug: "nsf-funds-two-more-universities",
    title: "NSF Funds Two More Universities to Join IUCRC BRAIN Center",
    date: "2025-10-20",
    dateLabel: "Oct 20, 2025",
    summary:
      "The National Science Foundation has approved funding for West Virginia University and Georgia Institute of Technology to join the IUCRC BRAIN Center, expanding its national research network.",
    imageSrc: "/media/nsf-funds-two-more-unis.jpg",
    imageAlt:
      "Announcement graphic highlighting West Virginia University and Georgia Tech joining the BRAIN Center",
    content: `
The National Science Foundation has funded the addition of West Virginia University and the Georgia Institute of Technology to the IUCRC BRAIN Center.

This expansion broadens the Center's national footprint and brings new expertise in neurotechnology, clinical translation, and data-driven methods.

[Add more detail, institutional quotes, research focus, etc.]
    `,
  },
  {
    slug: "brain-center-annual-meeting-2025",
    title: "BRAIN Center Hosts 2025 Annual Industry–University Meeting",
    date: "2025-09-15",
    dateLabel: "Sep 15, 2025",
    summary:
      "Faculty, students, and industry partners gathered for the 2025 BRAIN Center Annual Meeting to review project progress, select new research, and plan workforce initiatives.",
    imageSrc: "/images/iab-test.jpg",
    imageAlt: "Attendees networking and presenting posters at the BRAIN Center annual meeting",
    content: `
The 2025 BRAIN Center Annual Meeting brought together investigators, students, and industry members for two days of talks, posters, and project reviews.

Sessions highlighted new device prototypes, clinical studies, and big data tools emerging from the Center's four research thrusts.

[Add agenda, keynotes, outcomes, etc.]
    `,
  },
];

// Helper: newest first
export const sortedNewsItems: NewsItem[] = [...newsItems].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);