import type { Metadata } from "next";
import ProjectCard from "../../components/projects/ProjectCard";
import { currentProjects } from "@/data/projects";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Current Projects",
  description:
    "Current The BRAIN Center research projects and project leaders.",
  alternates: { canonical: "/research/current-projects" },
};

export default function CurrentProjectsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Research"
        title="Current Projects"
        description={
          <>
            This page lists active The BRAIN Center projects. When new projects are funded, they will appear here.{" "}
            Looking for completed work?{" "}
            <a
              href="/research/past-projects"
              className="font-medium text-[var(--deep-teal)] underline underline-offset-2"
            >
              View past projects
            </a>.
          </>
        }
      />
      <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
        {/* Content */}
        {currentProjects.length === 0 ? (
          <p className="text-sm text-slate-600">
            There are currently no active projects listed. Please check back
            soon as new projects are added.
          </p>
        ) : (
          <div className="space-y-6">
            {currentProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}