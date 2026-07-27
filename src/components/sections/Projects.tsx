import { ArrowRight } from "lucide-react";
import { PROJECTS, FILTERS } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectThumb } from "@/components/ui/ProjectThumb";

interface ProjectsProps {
  filteredProjects: typeof PROJECTS;
  filter: (typeof FILTERS)[number];
  setFilter: (filter: (typeof FILTERS)[number]) => void;
  setActiveProject: (project: (typeof PROJECTS)[number] | null) => void;
}

export function Projects({
  filteredProjects,
  filter,
  setFilter,
  setActiveProject,
}: ProjectsProps) {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"
    >
      <SectionHeader eyebrow="Featured Projects" title="Selected work" />
      <div className="reveal mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === f
                ? "text-white shadow-glow"
                : "border border-border bg-background hover:bg-secondary"
            }`}
            style={
              filter === f
                ? { background: "var(--gradient-primary)" }
                : undefined
            }
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((p) => (
          <article
            key={p.title}
            className="reveal group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
            onClick={() => setActiveProject(p)}
          >
            <ProjectThumb title={p.title} tag={p.tag} />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold">
                  {p.title}
                </h3>
                <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                  {p.category}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold"
                style={{ color: "var(--brand-purple)" }}
              >
                View details{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
