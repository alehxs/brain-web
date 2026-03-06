// src/app/research/facilities/page.tsx
import type { Metadata } from "next";
import {
  ResearchThrustMatrix,
  type ThrustColumn,
  type LabRow,
} from "../../components/thrusts/ResearchThrustMatrix";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Facilities, Equipment & Software",
  description:
    "Center facilities, laboratories, and research thrusts that support the BRAIN Center mission.",
};

/**
 * Shared research thrust columns.
 * You can tweak labels or colors here and all matrices will update.
 */
const thrustColumns: ThrustColumn[] = [
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
  {
    id: "clinical-trials",
    label: "Clinical Trials",
    colorClass: "bg-red-600",
  },
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

// NOTE: These lab lists are partial examples — extend them as you transcribe from the old site.

const uhLabs: LabRow[] = [
  {
    name: "Biomedical Imaging",
    thrustIds: ["big-data", "neural-activity"],
  },
  {
    name: "Center for Neuromotor and Biomechanics Research (CNBR)",
    thrustIds: ["big-data", "neuromodulation", "neurorehab", "neural-activity"],
  },
  {
    name: "Computational Medicine Laboratory",
    thrustIds: ["neural-activity", "clinical-trials", "device-development"],
  },
  {
    name: "Noninvasive BMI Systems",
    thrustIds: ["big-data", "neurorehab", "neural-activity", "clinical-trials"],
  },
  {
    name: "Neuroaesthetics Laboratory",
    thrustIds: ["art", "ethical-ai"],
  },
  {
    name: "Neurorobotics Laboratory",
    thrustIds: ["neurorehab", "smart-factories"],
  },
];

const asuLabs: LabRow[] = [
  {
    name: "BioElectrical Systems & Technology (BEST)",
    thrustIds: [],
  },
  {
    name: "Center for Adaptive Neural Systems",
    thrustIds: ["neurorehab", "neural-activity"],
  },
  {
    name: "Motor Rehabilitation and Learning Laboratory",
    thrustIds: ["neuromodulation", "neurorehab", "neural-activity"],
  },
  {
    name: "Neural Microsystem",
    thrustIds: ["neural-activity", "device-development"],
  },
  {
    name: "Neural Plasticity and Neurorehabilitation",
    thrustIds: ["neurorehab", "clinical-trials"],
  },
  {
    name: "Visuomotor Learning",
    thrustIds: ["neural-activity"],
  },
];

const umhLabs: LabRow[] = [
  {
    name: "Behavior Analysis",
    thrustIds: [],
  },
  {
    name: "Brain-Machine Interface Systems",
    thrustIds: ["big-data", "neurorehab", "neural-activity"],
  },
  {
    name: "Group of Design and Development of Bioactive Molecules",
    thrustIds: ["device-development"],
  },
  {
    name: "Motor Control and Learning",
    thrustIds: ["neuromodulation", "neurorehab", "neural-activity"],
  },
  {
    name: "Ocular Neurobiology Group",
    thrustIds: ["clinical-trials"],
  },
];

export default function FacilitiesPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Research"
        title="Facilities, Equipment & Software"
        description="Laboratories and shared facilities across BRAIN Center partner institutions support neurotechnology research, clinical translation, and broader impacts activities."
      />
      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
        {/* Research thrust matrices */}
        <div className="space-y-10">
          <ResearchThrustMatrix
            universityName="University of Houston"
            logoSrc="/partners/uh.png"
            logoAlt="University of Houston"
            columns={thrustColumns}
            labs={uhLabs}
          />

          <ResearchThrustMatrix
            universityName="Arizona State University"
            logoSrc="/partners/asu.png"
            logoAlt="Arizona State University"
            columns={thrustColumns}
            labs={asuLabs}
          />

          <ResearchThrustMatrix
            universityName="Universitas Miguel Hernández"
            logoSrc="/images/logos/umh-vertical.png"
            logoAlt="Universitas Miguel Hernández"
            columns={thrustColumns}
            labs={umhLabs}
          />
        </div>

        {/* Placeholder for Laboratory Tours section (YouTube grid etc.) */}
        <section className="mt-16 border-t border-slate-200 pt-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Laboratory Tours
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
            Short video tours of selected laboratories are coming soon. These
            will highlight key equipment, experimental setups, and opportunities
            for collaboration and training.
          </p>
        </section>
      </section>
    </div>
  );
}