import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import PortraitCard from "@/app/components/cards/PortraitCard";
import { people } from "@/data/people";

export const metadata: Metadata = {
  title: "REU Supplement | BRAIN Center",
  description: "Providing Research Experiences for Undergraduates through the NSF REU Supplement program.",
};

export default function ReuSupplementPage() {
  const students = people.filter((person) => person.group.includes("Student"))

  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        eyebrow="Next Generation"
        title="REU Students"
        description="Providing Research Experiences for Undergraduates to foster the next generation of neurotechnology leaders."
      />

      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-12 lg:py-16">
        
        <section className="mb-16 max-w-4xl">
          <p className="text-lg text-slate-800 font-medium mb-6 leading-relaxed">
            Marco Santello is the Director of the BRAIN Center, the School of Biological and Health Systems Engineering, 
            and the Neural Control of Movement Laboratory.
          </p>
          <div className="prose prose-slate text-slate-600 leading-relaxed">
            <p>
              Dr. Santello is currently mentoring four undergraduate students funded through the 
              <strong className="text-[var(--midnight-blue)]"> NSF Research Experiences for Undergraduates (REU) Supplement</strong>. 
              The students are working on non-invasive neuromodulation, robotic rehabilitation of sensorimotor function 
              of the upper limb, and movement analysis combined with high-density electromyography and electroencephalography.
            </p>
          </div>
        </section>

        <section>          
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {students.map((student) => (
              <PortraitCard
                key={student.name}
                name={student.name}
                // Only pass src if it exists
                src={student.src || undefined} 
                alt={`Portrait of ${student.name}`}
                // Join tags with a bullet for the subtitle
                subtitle={student.tags.join(" • ")}
                disableHover={true}
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}