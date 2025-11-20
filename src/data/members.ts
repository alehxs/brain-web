export type MembershipTier = "full" | "associate" | "in-kind" | "affiliate";

export type MemberOrg = {
  id: string;
  name: string;
  logoSrc: string;
  website?: string;
  tier: MembershipTier;
  alt?: string;
};

export const members: MemberOrg[] = [
  {
    id: "barrow",
    name: "Barrow Neurological Institute",
    logoSrc: "/logos/members/barrow-neurological-institute.png",
    website: "https://www.barrowneuro.org/",
    tier: "full",
    alt: "Barrow Neurological Institute logo",
  },
  {
    id: "hopco",
    name: "HOPCo",
    logoSrc: "/logos/members/hopco.png",
    website: "https://hopco.com/",
    tier: "full",
    alt: "HOPCo logo",
  },
  {
    id: "indus",
    name: "Indus Instruments",
    logoSrc: "/logos/members/indus.png",
    website: "https://indusinstruments.com/",
    tier: "full",
    alt: "Indus Instruments logo",
  },
  {
    id: "ferguson",
    name: "Ferguson Control Systems",
    logoSrc: "/logos/members/ferguson-control-systems.png",
    website: "https://fcs-embedded.com/",
    tier: "full",
    alt: "Ferguson Control Systems logo",
  },
  {
    id: "brainwave-science",
    name: "Brainwave Science",
    logoSrc: "/logos/members/brainwave-science.png",
    website: "https://www.brainwavescience.com/",
    tier: "full",
    alt: "Brainwave Science logo",
  },
  {
    id: "precision",
    name: "Precision Neuroscience",
    logoSrc: "/logos/members/precision.png",
    website: "https://www.precisionneuro.io/",
    tier: "full",
    alt: "Precision Neuroscience logo",
  },
  {
    id: "scialiva",
    name: "Scialiva",
    logoSrc: "/logos/members/scialiva.png",
    website: "https://www.scialiva.com/",
    tier: "full",
    alt: "Scialiva logo",
  },

  {
    id: "brain-products",
    name: "Brain Products",
    logoSrc: "/logos/members/brain-products.png",
    website: "https://www.brainproducts.com/",
    tier: "associate",
    alt: "Brain Products logo",
  },
  {
    id: "md-anderson",
    name: "MD Anderson Cancer Center",
    logoSrc: "/logos/members/md-anderson.svg",
    website: "https://www.mdanderson.org/",
    tier: "associate",
    alt: "MD Anderson Cancer Center logo",
  },
  {
    id: "cognixion",
    name: "Cognixion",
    logoSrc: "/logos/members/cognixion.png",
    website: "https://www.cognixion.com/",
    tier: "associate",
    alt: "Cognixion logo",
  },
  {
    id: "seniors-rising",
    name: "Seniors Rising",
    logoSrc: "/logos/members/seniors-rising.png",
    website: "https://seniorsrising.us/",
    tier: "associate",
    alt: "Seniors Rising logo",
  },
  {
    id: "headsafe",
    name: "Headsafe",
    logoSrc: "/logos/members/headsafe.png",
    website: "https://headsafe.com/",
    tier: "associate",
    alt: "Headsafe logo",
  },
  {
    id: "positive-impact",
    name: "Positive Impact Alliance",
    logoSrc: "/logos/members/positive-impact-alliance.png",
    website: "https://rechargeroom.io/",
    tier: "associate",
    alt: "Positive Impact Alliance logo",
  },

  {
    id: "ferguson-in-kind",
    name: "Ferguson Control Systems",
    logoSrc: "/logos/members/ferguson-control-systems.png",
    website: "https://fcs-embedded.com/",
    tier: "in-kind",
    alt: "Ferguson Control Systems logo",
  },
  {
    id: "cognixion",
    name: "Cognixion",
    logoSrc: "/logos/members/cognixion.png",
    website: "https://www.cognixion.com/",
    tier: "in-kind",
    alt: "Cognixion logo",
  },
  {
    id: "galen-data",
    name: "Galen Data",
    logoSrc: "/logos/members/matrix-one.svg",
    website: "https://www.galendata.com/",
    tier: "in-kind",
    alt: "Galen Data logo",
  },
  {
    id: "myactome",
    name: "MyActome",
    logoSrc: "/logos/members/myactome.png",
    website: "https://myactome.com/",
    tier: "in-kind",
    alt: "MyActome logo",
  },

  {
    id: "fda",
    name: "U.S. Food & Drug Administration",
    logoSrc: "/logos/members/fda.png",
    website: "https://www.fda.gov/",
    tier: "affiliate",
    alt: "FDA logo",
  },
];

export const tierMetadata: Record<
  MembershipTier,
  { label: string; description?: string }
> = {
  full: {
    label: "Full Members",
    description:
      "Organizations providing full membership support and actively collaborating on center research projects.",
  },
  associate: {
    label: "Associate Members",
    description:
      "Partners with a focused engagement in specific projects or activities.",
  },
  "in-kind": {
    label: "In-Kind Contributors",
    description:
      "Organizations contributing technology, data, or services in support of research activities.",
  },
  affiliate: {
    label: "Affiliate Partners",
    description:
      "Governmental and regulatory bodies that collaborate with the center on policy and translational impact.",
  },
};