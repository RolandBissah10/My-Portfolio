import { useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { PROJECTS } from "@/data/constants";
import { buttonPrimary, buttonSecondary } from "./button";

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
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/50 sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="w-full max-w-xl rounded-t-lg border border-border bg-card p-6 sm:rounded-lg sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-muted-foreground">
              {project.tag}
            </div>
            <h3 id="project-modal-title" className="mt-1 text-xl font-semibold">
              {project.title}
            </h3>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="grid h-8 w-8 cursor-pointer place-items-center rounded-md border border-border hover:bg-secondary"
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
              className="rounded-sm bg-secondary px-2 py-0.5 font-mono text-xs"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonPrimary}
            >
              <ExternalLink className="h-4 w-4" /> Live site
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className={project.liveUrl ? buttonSecondary : buttonPrimary}
          >
            <Github className="h-4 w-4" /> Source code
          </a>
        </div>
      </div>
    </div>
  );
}
