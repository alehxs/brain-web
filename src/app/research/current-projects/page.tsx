import type { Metadata } from "next";
import ProjectCard from "../../components/projects/ProjectCard";
import { currentProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Current Projects | The BRAIN Center",
  description:
    "Current NSF BRAIN Center research projects and project leaders.",
};

export default function CurrentProjectsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Research
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Current Projects
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
            This page lists active NSF BRAIN Center projects. When new projects
            are funded, they will appear here.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Looking for completed work?{" "}
            <a
              href="/research/past-projects"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              View past projects
            </a>
            .
          </p>
        </header>

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
    </main>
  );
}