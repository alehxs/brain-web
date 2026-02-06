import type { Metadata } from "next";
import ProjectCard from "../../components/projects/ProjectCard";
import { pastProjectsByYear } from "@/data/projects";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Past Projects | The BRAIN Center",
  description:
    "Archive of previously funded research projects at the NSF BRAIN Center.",
};

export default function PastProjectsPage() {
  return (
    <main className="bg-white">
      <PageHeader
        eyebrow="Research"
        title="Past Projects"
        description={
          <>
            Completed projects that have contributed to the development of neurotechnologies and regulatory science through the BRAIN Center. To see ongoing work,{" "}
            <a
              href="/research/current-projects"
              className="font-medium text-[var(--deep-teal)] underline underline-offset-2"
            >
              view current projects
            </a>.
          </>
        }
      />
      <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
        <div className="space-y-10">
          {pastProjectsByYear.map(({ year, projects }) => (
            <section key={year} className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                {year} Projects
              </h2>

              {projects.length === 0 ? (
                <p className="text-sm text-slate-600">
                  No projects have been added for this year yet.
                </p>
              ) : (
                <div className="space-y-6">
                  {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}