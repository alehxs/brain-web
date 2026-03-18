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
  href?: string;      // external link override; falls back to /news/[slug]
};

export const newsItems: NewsItem[] = [
  {
    slug: "contreras-vidal-nai-senior-member",
    title: "Contreras-Vidal Elected to National Academy of Inventors",
    date: "2026-02-26",
    dateLabel: "Feb 26, 2026",
    summary:
      "Dr. José Luis Contreras-Vidal, director of the NSF IUCRC BRAIN Center, has been elected as a Senior Member of the National Academy of Inventors.",
    href: "https://www.uh.edu/news-events/stories/2026/february/02262026-nai-senior-members.php",
    imageSrc: "/news/contreras-vidal-nai-senior-member.jpg",
    imageAlt: "Dr. Contreras-Vidal elected as NAI Senior Member",
    content: `
Dr. José Luis Contreras-Vidal, Hugh Roy and Lillie Cranz Cullen University Professor of Electrical and Computer Engineering and director of the NSF IUCRC BRAIN Center, has been elected as a Senior Member of the National Academy of Inventors (NAI).

Read the full story on the UH website: https://www.uh.edu/news-events/stories/2026/february/02262026-nai-senior-members.php
    `,
  },
  {
    slug: "nsf-uh-fda-reu-site",
    title: "First NSF UH-FDA REU Site on Regulatory Science of Biomedical Devices",
    date: "2024-10-10",
    dateLabel: "Oct 10, 2024",
    summary:
      "The University of Houston has established the first NSF Research Experiences for Undergraduates site focused on regulatory science of biomedical devices, in partnership with the FDA.",
    href: "https://www.uh.edu/news-events/stories/2024/october/10102024-reu-site-brain-center-fda.php",
    imageSrc: "/news/nsf-uh-fda-reu-site.jpg",
    imageAlt: "NSF UH-FDA REU Site on Regulatory Science of Biomedical Devices",
    content: `
The University of Houston BRAIN Center has launched the first NSF-funded Research Experiences for Undergraduates (REU) site focused on the regulatory science of biomedical devices, in collaboration with the U.S. Food and Drug Administration.

Read the full story on the UH website: https://www.uh.edu/news-events/stories/2024/october/10102024-reu-site-brain-center-fda.php
    `,
  },
  {
    slug: "nsf-funds-two-more-universities",
    title: "NSF Funds Two More Universities to Join IUCRC BRAIN Center",
    date: "2023-10-09",
    dateLabel: "Oct 9, 2023",
    href: "https://www.uh.edu/news-events/stories/2023/august-2023/08232023-brain-center-expands-two-universities.php",
    summary:
      "The National Science Foundation has approved funding for West Virginia University and Georgia Institute of Technology to join the IUCRC BRAIN Center, expanding its national research network.",
    imageSrc: "/news/nsf-funds-two-more-universities.jpg",
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
    imageSrc: "/logos/brain.png",
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