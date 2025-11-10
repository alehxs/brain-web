// src/data/projects.ts

export type Project = {
  title: string;
  leaders: string;
  year?: number;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

export type ProjectsByYear = {
  year: number;
  projects: Project[];
};

// Currently no active projects; all listed projects are considered past/archived.
export const currentProjects: Project[] = [];

export const pastProjectsByYear: ProjectsByYear[] = [
  {
    year: 2024,
    projects: [
      {
        title:
          "Towards Decoding Deception: Exploring Neural Correlates of Concealed Information with Noninvasive EEG",
        leaders:
          "Ramana Vinjamuri (UMBC), Jose Contreras-Vidal (UH), Santosh Kottamasu (UH), Krishna Ika (BrainWave Science)",
        year: 2024,
      },
      {
        title:
          "Mindspring: A Personalized Health Wearable Device for Stress Management in Teens",
        leaders:
          "Lianne Sánchez-Rodríguez, Maxine A. Pacheco-Ramírez, Jose Contreras-Vidal (UH), Roscoe Ferguson (Ferguson Control Systems)",
        year: 2024,
      },
      {
        title:
          "Longitudinal Electrophysiological Studies of DBS in Patients with Chronic Pain",
        leaders:
          "Bradley Greger (ASU), Zaman Mirzadeh (Barrow Neurological Institute)",
        year: 2024,
      },
      {
        title: "Neural Surface Interface Technology and Applications",
        leaders:
          "Peter Konrad, Radhey Sharma, B. Rappaport (WVU), J. Contreras-Vidal (UH), Craig Mermel (Precision Neuroscience)",
        year: 2024,
      },
      {
        title:
          "ProgNEUSTIM: Programmable Instrument for NEUral STImulation and Imaging",
        leaders:
          "L. Pollonini, B. Tamber-Rosenau (UH), S. Madala (Indus Instruments), M. Jaschke (Brain Products GmbH)",
        year: 2024,
      },
      {
        title:
          "Noninvasive Brain Compliance in Traumatic Brain Injury Patients with Disorders of Consciousness",
        leaders:
          "Michelle LaPlaca, May Wang (Georgia Tech / Emory), Andrew Dennison, Michael Yochelson (Shepherd Center), Carlos Bremer (Brain4Care)",
        year: 2024,
      },
      {
        title:
          "Using Interpretable AI to Decode Brain Activity During Creative Expression",
        leaders:
          "J. Contreras-Vidal, Annel Pacheco-Ramirez, Aime Aguilar Herrera, Yoshua Lima (UH), Roscoe Ferguson (Ferguson Control Systems)",
        year: 2024,
      },
    ],
  },
  {
    year: 2023,
    projects: [
      // TODO: populate with 2023 projects from the legacy site
    ],
  },
  {
    year: 2022,
    projects: [
      // TODO: populate with 2022 projects from the legacy site
    ],
  },
  {
    year: 2021,
    projects: [
      // TODO: populate with 2021 projects from the legacy site
    ],
  },
  {
    year: 2020,
    projects: [
      // TODO: populate with 2020 projects from the legacy site
    ],
  },
  {
    year: 2019,
    projects: [
      // TODO: populate with 2019 projects from the legacy site
    ],
  },
  {
    year: 2018,
    projects: [
      // TODO: populate with 2018 projects from the legacy site
    ],
  },
  {
    year: 2017,
    projects: [
      // TODO: populate with 2017 projects from the legacy site
    ],
  },
];