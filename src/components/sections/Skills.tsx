import { SKILLS } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

// self-rated levels, grouped into words instead of shown as percentages
function tier(level: number) {
  if (level >= 80) return "Strong";
  if (level >= 60) return "Working";
  return "Learning";
}

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader eyebrow="Skills" title="Tools I work with" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div
              key={s.group}
              className="rounded-lg border border-border bg-card p-5"
            >
              <h3 className="text-base font-semibold">{s.group}</h3>
              <ul className="mt-3 divide-y divide-border">
                {s.items.map((it) => (
                  <li
                    key={it.name}
                    className="flex items-center justify-between py-2 text-sm"
                  >
                    <span>{it.name}</span>
                    <span
                      className={`font-mono text-xs ${
                        tier(it.level) === "Strong"
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {tier(it.level)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
