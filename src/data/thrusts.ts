import type { ThrustColumn, LabRow } from "@/app/components/thrusts/ResearchThrustMatrix";

export const baseThrustColumns: ThrustColumn[] = [
  { id: "big-data", label: "Big Data", colorClass: "bg-blue-500" },
  {
    id: "neuromodulation",
    label: "Neuromodulation",
    colorClass: "bg-orange-500",
  },
  {
    id: "neurorehab",
    label: "Neurorehabilitation & Assistive Devices",
    colorClass: "bg-green-500",
  },
  {
    id: "neural-activity",
    label: "Neural Activity Measurement",
    colorClass: "bg-purple-600",
  },
  { id: "clinical-trials", label: "Clinical Trials", colorClass: "bg-red-600" },
  {
    id: "device-development",
    label: "Device Development",
    colorClass: "bg-slate-300",
  },
  {
    id: "interop",
    label: "Device Interoperability",
    colorClass: "bg-slate-500",
  },
  {
    id: "reg-science",
    label: "Regulatory Science",
    colorClass: "bg-yellow-400",
  },
  {
    id: "sports",
    label: "Neurotechnologies for Sports",
    colorClass: "bg-cyan-400",
  },
  {
    id: "smart-factories",
    label: "Neurotechnologies for Smart Factories",
    colorClass: "bg-pink-400",
  },
  {
    id: "art",
    label: "Neurotechnologies for Art",
    colorClass: "bg-fuchsia-500",
  },
  {
    id: "ethical-ai",
    label: "Ethical & Trustworthy Artificial Intelligence",
    colorClass: "bg-amber-800",
  },
];

export const uhLabs: LabRow[] = [
  {
    name: "Biomedical Imaging",
    thrustIds: ["big-data", "neural-activity"],
  },
  {
    name: "Center for Neuromotor and Biomechanics Research (CNBR)",
    thrustIds: ["big-data", "neuromodulation", "neurorehab", "neural-activity"],
  },
  {
    name: "Noninvasive BMI Systems",
    thrustIds: ["big-data", "neurorehab", "neural-activity", "clinical-trials"],
  },
  // …add the rest of the UH labs here following the same pattern
];

export const asuLabs: LabRow[] = [
  {
    name: "BioElectrical Systems & Technology (BEST)",
    thrustIds: [],
  },
  {
    name: "Neural Microsystem",
    thrustIds: ["neural-activity", "device-development"],
  },
  // …fill in from the ASU matrix
];

export const umhLabs: LabRow[] = [
  {
    name: "Brain-Machine Interface Systems",
    thrustIds: ["big-data", "neurorehab", "neural-activity"],
  },
  // …fill in from the UMH matrix
];