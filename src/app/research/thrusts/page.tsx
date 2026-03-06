import type { Metadata } from "next";
import Image from "next/image";
import Card from "../../components/cards/primitives/Card";
import { researchThrusts } from "@/data/thrusts";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Research Thrusts",
  description:
    "Explore the The BRAIN Center research thrust areas and their associated faculty.",
};

export default function ResearchThrustsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Research"
        title="Research Thrusts"
        description="BRAIN Center research is organized into thrusts — each targeting a distinct technical challenge in developing reliable, clinically translatable neurotechnology."
      />
      <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
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
    </div>
  );
}