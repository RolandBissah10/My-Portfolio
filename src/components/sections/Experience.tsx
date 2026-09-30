import { EXPERIENCE } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader eyebrow="Experience" title="Work history" />
        <ol className="divide-y divide-border rounded-lg border border-border bg-card">
          {EXPERIENCE.map((e) => (
            <li key={e.role} className="grid gap-4 p-6 sm:grid-cols-4 sm:gap-8">
              <div className="font-mono text-xs text-muted-foreground sm:pt-1">
                {e.period}
              </div>
              <div className="sm:col-span-3">
                <h3 className="text-lg font-semibold">{e.role}</h3>
                <div className="text-sm text-muted-foreground">{e.company}</div>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-primary">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
