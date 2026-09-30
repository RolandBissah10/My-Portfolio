import { Github } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContribGraph } from "@/components/ui/ContribGraph";
import { GITHUB_USERNAME } from "@/lib/github";

export function GitHubSection() {
  return (
    <section
      id="github"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeader eyebrow="GitHub" title="Recent activity" />
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-medium">
            <Github className="h-5 w-5" />@{GITHUB_USERNAME}
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View profile on GitHub
          </a>
        </div>
        <ContribGraph />
      </div>
    </section>
  );
}
