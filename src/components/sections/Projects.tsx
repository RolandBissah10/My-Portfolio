import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PROJECTS, FILTERS } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
  // devtools-style inspect label on hover (mouse only)
  const [inspect, setInspect] = useState<{
    title: string;
    w: number;
    h: number;
  } | null>(null);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeader eyebrow="Projects" title="Things I've built" />
      <div
        role="group"
        aria-label="Filter projects"
        className="mb-8 inline-flex overflow-hidden rounded-md border border-border"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`cursor-pointer border-r border-border px-4 py-2 text-sm transition-colors last:border-r-0 ${
              filter === f
                ? "bg-foreground text-background"
                : "bg-card hover:bg-secondary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((p) => (
          <article
            key={p.title}
            className={`group relative flex cursor-pointer flex-col rounded-lg border bg-card p-6 transition-colors ${
              inspect?.title === p.title
                ? "border-dashed border-primary"
                : "border-border"
            }`}
            onClick={() => setActiveProject(p)}
            onMouseEnter={(e) => {
              if (!window.matchMedia("(pointer: fine)").matches) return;
              const r = e.currentTarget.getBoundingClientRect();
              setInspect({
                title: p.title,
                w: Math.round(r.width),
                h: Math.round(r.height),
              });
            }}
            onMouseLeave={() => setInspect(null)}
          >
            {inspect?.title === p.title && (
              <span
                aria-hidden
                className="inspect-label pointer-events-none absolute -top-3 left-4 rounded-sm bg-primary px-1.5 py-0.5 font-mono text-[10px] text-primary-foreground"
              >
                article.project {inspect.w} &times; {inspect.h}
              </span>
            )}
            <div className="font-mono text-xs text-muted-foreground">
              {p.tag}
            </div>
            <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-sm bg-secondary px-2 py-0.5 font-mono text-[11px]"
                >
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveProject(p);
              }}
              className="mt-5 inline-flex cursor-pointer items-center gap-1 self-start text-sm font-medium text-primary"
            >
              Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
