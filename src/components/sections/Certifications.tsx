import { Award } from "lucide-react";
import { CERTS } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Certifications() {
  return (
    <section id="certs" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow="Certifications"
          title="Continuous learning"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c) => (
            <div
              key={c.title}
              className="reveal relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full"
                style={{
                  background:
                    "color-mix(in oklab, var(--brand-gold) 25%, transparent)",
                  color: "var(--brand-gold)",
                }}
              >
                <Award className="h-5 w-5" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {c.year}
              </div>
              <h3 className="mt-1 font-display text-lg font-bold">
                {c.title}
              </h3>
              <div className="mt-1 text-sm text-muted-foreground">
                {c.issuer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
