import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import PortraitCard from "@/app/components/cards/PortraitCard";

export const metadata: Metadata = {
  title: "BRAIN Student Network",
  description:
    "The BRAIN Student Network fosters collaboration, leadership, and professional development across the BRAIN Center sites.",
  alternates: { canonical: "/workforce/brain-student-network" },
};

const OFFICERS = [
  {
    name: "Yoshua E. Lima–Carmona",
    role: "President",
    affiliation: "University of Houston",
    href: "/people/yoshua-lima-carmona",
    src: "/images/people/yoshua-e-lima-carmona.jpg",
  },
  {
    name: "Aime J. Aguilar–Herrera",
    role: "Vice-President",
    affiliation: "University of Houston",
    href: "/people/aime-aguilar-herrera",
    src: "/images/people/aime-j-aguilar-herrera.png",
  },
  {
    name: "Maxine Annel Pacheco–Ramirez",
    role: "Treasurer",
    affiliation: "University of Houston",
    href: "/people/maxine-pacheco-ramirez",
    src: "/images/people/maxine-annel-pacheco-ramirez.jpg",
  },
  {
    name: "Lianne Sánchez–Rodríguez",
    role: "Secretary",
    affiliation: "University of Houston",
    href: "/people/lianne-sanchez-rodriguez",
    src: "/images/people/lianne-sanchez-rodriguez.png",
  },
];

export default function StudentNetworkPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Workforce"
        title="BRAIN Student Network"
        description="The BRAIN Student Network connects students across Center sites, supports student-led initiatives, and creates pathways to faculty, industry, and peer engagement for professional development."
      />

      {/* INTRO */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="max-w-4xl">
            <ul className="list-disc list-inside space-y-2 marker:text-[var(--deep-teal)] text-sm sm:text-base text-slate-900">
              <li>Foster collaboration and membership engagement across sites.</li>
              <li>Improve communication between colleges, labs, and BRAIN Center sites.</li>
              <li>Support student-led initiatives and research involvement.</li>
              <li>Promote advances in neurotechnology and share best practices.</li>
              <li>Connect students with faculty, industry leaders, and events for growth.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OFFICERS (tall portrait cards) */}
      <section className="py-4">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <h2 className="text-2xl font-semibold text-[var(--midnight-blue)]">
            UH BRAIN Student Officers
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICERS.map((o) => (
              <PortraitCard
                key={o.name}
                name={o.name}
                role={o.role}
                affiliation={o.affiliation}
                href={o.href}
                src={o.src}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
