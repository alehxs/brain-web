import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nsfbrain.org";

  return [
    // Homepage
    { url: base, changeFrequency: "weekly", priority: 1.0 },

    // About
    { url: `${base}/about/intellectual-property`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/about/iucrc`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/about/uniqueness`, changeFrequency: "yearly", priority: 0.6 },

    // Donate
    { url: `${base}/donate`, changeFrequency: "yearly", priority: 0.6 },

    // Events
    { url: `${base}/events`, changeFrequency: "weekly", priority: 0.8 },

    // Faculty
    { url: `${base}/faculty`, changeFrequency: "monthly", priority: 0.8 },

    // FAQ
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.6 },

    // Impacts
    { url: `${base}/impacts/academic-assessments`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/impacts/broader-impacts`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/impacts/economic-impact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/impacts/making-an-impact`, changeFrequency: "yearly", priority: 0.6 },

    // Join
    { url: `${base}/join`, changeFrequency: "yearly", priority: 0.8 },

    // Media
    { url: `${base}/media`, changeFrequency: "monthly", priority: 0.6 },

    // Membership
    { url: `${base}/membership/benefits`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/membership/catalysts`, changeFrequency: "yearly", priority: 0.6 },

    // News
    { url: `${base}/news`, changeFrequency: "weekly", priority: 0.8 },

    // Organization
    { url: `${base}/organization/careers`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/organization/iab`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/organization/industry-members`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/organization/leadership`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/organization/sites`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/organization/students`, changeFrequency: "monthly", priority: 0.6 },

    // Publications
    { url: `${base}/publications`, changeFrequency: "monthly", priority: 0.8 },

    // Research
    { url: `${base}/research/current-projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/research/facilities`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/research/past-projects`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/research/thrusts`, changeFrequency: "yearly", priority: 0.8 },

    // Workforce
    { url: `${base}/workforce/brain-student-network`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/workforce/information`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/workforce/reu-supplement`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/workforce/training`, changeFrequency: "yearly", priority: 0.6 },
  ];
}
