export type PersonGroup = "Leadership" | "Faculty" | "Staff" | "Student" | "Co-Investigators";

export type Person = {
  name: string;
  tags: string[];
  src: string;
  group: PersonGroup[]
  href?: string;
};

export const people: Person[] = [
  {
    name: "Jose Luis Contreras-Vidal",
    tags: ["Center Director", "UH"],
    src: "/faculty/pepe-headshot.png",
    group: ["Faculty", "Leadership"],
  },
  {
    name: "Marco Santello",
    tags: ["Co-Director", "ASU"],
    src: "",
    group: ["Faculty", "Leadership"],
  },
  {
    name: "Jose M. Azorin",
    tags: ["Site Director", "UMH"],
    src: "",
    group: ["Faculty", "Leadership"],
  },
  {
    name: "Peter Konrad",
    tags: ["Site Director", "WVU"],
    src: "",
    group: ["Faculty", "Leadership"],
  },
  {
    name: "Michelle LaPlaca",
    tags: ["Site Director", "GT"],
    src: "",
    group: ["Faculty", "Leadership"],
  },
  {
    name: "Dr. Ramana Vinjamuri",
    tags: ["Site Director", "UMBC"],
    src: "",
    group: ["Faculty", "Leadership"],
  },
  {
    name: "Dr. David Mayerich",
    tags: ["Associate Professor", "UH"],
    src: "",
    group: ["Faculty"],
  },
  {
    name: "Dr. Luca Pollonini",
    tags: ["Assistant Professor", "UH"],
    src: "",
    group: ["Faculty"],
  },
  {
    name: "Dr. Jeffrey Kleim",
    tags: ["Associate Professor", "ASU"],
    src: "",
    group: ["Faculty"],
  },
  {
    name: "Dr. Sergio Uribe",
    tags: ["Associate Professor", "TEC"],
    src: "",
    group: ["Faculty"],
  },
  {
    name: "Dr. Vicente Micol",
    tags: ["Associate Professor", "UMH"],
    src: "",
    group: ["Faculty"],
  },
  {
    name: "Dr. Radhey Sharma",
    tags: ["Professor", "WVU"],
    src: "",
    group: ["Faculty"],
  },
  {
    name: "Eduardo Iáñez",
    tags: ["Researcher", "BMI Lab"],
    src: "",
    group: ["Faculty"],
  },
  {
    name: "Maria Alvarado",
    tags: ["Project Manager"],
    src: "",
    group: ["Staff"],
  },
  {
    name: "Mauricio Ramírez",
    tags: ["Program Manager", "TEC"],
    src: "",
    group: ["Staff"],
  },
  {
    name: "Jenny L.",
    tags: ["Director", "Workforce"],
    src: "",
    group: ["Staff"],
  },
  {
    name: "Dalia Khaled",
    tags: ["REU Student"],
    src: "/people/students/dalia-khaled.jpg",
    group: ["Student"],
  },
  {
    name: "Catherine Nunez",
    tags: ["REU Student"],
    src: "/people/students/catherine-nunez.jpg",
    group: ["Student"],
  },
  {
    name: "Avinash Puppala",
    tags: ["REU Student"],
    src: "/people/students/avinash-puppala.jpg",
    group: ["Student"],
  },
  {
    name: "Alexander Sedlack",
    tags: ["REU Student"],
    src: "/people/students/alexander-sedlack.jpg",
    group: ["Student"],
  },

];