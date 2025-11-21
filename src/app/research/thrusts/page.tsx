import type { Metadata } from "next";
import Image from "next/image";
import Card from "../../components/cards/primitives/Card";
import { researchThrusts } from "@/data/thrusts";

export const metadata: Metadata = {
  title: "Research Thrusts | The BRAIN Center",
  description:
    "Explore the NSF BRAIN Center research thrust areas and their associated faculty.",
};

export default function ResearchThrustsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Research
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Research Thrusts
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
            The BRAIN Center is a multi-university Industry/University Cooperative
            Research Center. Each research thrust focuses on a key aspect of
            reliable, impactful neurotechnology.
          </p>
        </header>

        {/* Thrust cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchThrusts.map((thrust) => (
            <Card key={thrust.slug} href={thrust.href}>
              <Card.Media ratio="1/1">
                <Image
                  src={thrust.imageSrc}
                  alt={thrust.imageAlt}
                  className="h-full w-full object-cover"
                  fill
                />
              </Card.Media>
              <Card.Body>
                <Card.Title>{thrust.title}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}