import { CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've made an impact"
        />
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border sm:left-1/2" />
          <div className="space-y-10">
            {EXPERIENCE.map((e, i) => (
              <div
                key={e.role}
                className={`reveal relative sm:grid sm:grid-cols-2 sm:gap-10 ${i % 2 === 1 ? "sm:[&>div:first-child]:col-start-2" : ""}`}
              >
                <div className="pl-10 sm:pl-0">
                  <span
                    className="absolute left-2.5 top-2 grid h-3 w-3 place-items-center rounded-full ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                    <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {e.period}
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold">
                      {e.role}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {e.company}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {e.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: "var(--brand-purple)" }}
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
