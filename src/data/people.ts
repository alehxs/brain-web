export type Person = {
  name: string;
  tags: string[];
  src: string;
  group: "Leadership" | "Faculty" | "Staff";
  href?: string;
};

export const people: Person[] = [
  {
    name: "Dr. Jose Luis Contreras-Vidal",
    tags: ["Center Director", "UH"],
    src: "/faculty/pepe-headshot.png",
    group: "Leadership",
  },
  {
    name: "Dr. Marco Santello",
    tags: ["Co-Director", "ASU"],
    src: "",
    group: "Leadership",
  },
  {
    name: "Dr. Peter Konrad",
    tags: ["Site Director", "WVU"],
    src: "",
    group: "Leadership",
  },
  {
    name: "Dr. Jose M. Azorin",
    tags: ["Site Director", "UMH"],
    src: "",
    group: "Leadership",
  },
  {
    name: "Dr. Jorge Lozoya Santos",
    tags: ["Site Director", "TEC"],
    src: "",
    group: "Leadership",
  },
  {
    name: "Dr. Michelle LaPlaca",
    tags: ["Site Director", "GT"],
    src: "",
    group: "Leadership",
  },
  {
    name: "Dr. Ramana Vinjamuri",
    tags: ["Site Director", "UMBC"],
    src: "",
    group: "Leadership",
  },
  {
    name: "Dr. David Mayerich",
    tags: ["Associate Professor", "UH"],
    src: "",
    group: "Faculty",
  },
  {
    name: "Dr. Luca Pollonini",
    tags: ["Assistant Professor", "UH"],
    src: "",
    group: "Faculty",
  },
  {
    name: "Dr. Jeffrey Kleim",
    tags: ["Associate Professor", "ASU"],
    src: "",
    group: "Faculty",
  },
  {
    name: "Dr. Sergio Uribe",
    tags: ["Associate Professor", "TEC"],
    src: "",
    group: "Faculty",
  },
  {
    name: "Dr. Vicente Micol",
    tags: ["Associate Professor", "UMH"],
    src: "",
    group: "Faculty",
  },
  {
    name: "Dr. Radhey Sharma",
    tags: ["Professor", "WVU"],
    src: "",
    group: "Faculty",
  },
  {
    name: "Eduardo Iáñez",
    tags: ["Researcher", "BMI Lab"],
    src: "",
    group: "Faculty",
  },
  {
    name: "Maria Alvarado",
    tags: ["Project Manager"],
    src: "",
    group: "Staff",
  },
  {
    name: "Mauricio Ramírez",
    tags: ["Program Manager", "TEC"],
    src: "",
    group: "Staff",
  },
  {
    name: "Jenny L.",
    tags: ["Director", "Workforce"],
    src: "",
    group: "Staff",
  },
];