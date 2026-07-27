import { Github, Star } from "lucide-react";
import { GITHUB_STATS } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContribGraph } from "@/components/ui/ContribGraph";

export function GitHubSection() {
  return (
    <section
      id="github"
      className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"
    >
      <SectionHeader eyebrow="GitHub" title="Building in the open" />
      <div className="reveal grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5" />
              <span className="font-display font-bold">
                @RolandBissah10
              </span>
            </div>
            <a
              href="https://github.com/RolandBissah10/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-sm font-semibold"
              style={{ color: "var(--brand-purple)" }}
            >
              Visit profile →
            </a>
          </div>
          <ContribGraph />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {GITHUB_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="font-display text-3xl font-extrabold gradient-text">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
