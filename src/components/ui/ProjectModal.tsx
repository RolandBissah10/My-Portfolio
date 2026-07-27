import { useEffect } from "react";
import { X } from "lucide-react";
import { PROJECTS } from "@/data/constants";
import { ProjectThumb } from "./ProjectThumb";

export function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof PROJECTS)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-t-3xl border border-border bg-card shadow-glow sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <ProjectThumb title={project.title} tag={project.tag} />
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {project.category}
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold">
                {project.title}
              </h3>
            </div>
            <button
              aria-label="Close"
              onClick={onClose}
              className="cursor-pointer grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
