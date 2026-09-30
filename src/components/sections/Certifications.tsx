import { CERTS } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Certifications() {
  return (
    <section id="certs" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow="Certifications"
          title="Courses and certificates"
        />
        <ul className="divide-y divide-border rounded-lg border border-border bg-card">
          {CERTS.map((c) => (
            <li
              key={c.title}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-5 py-4"
            >
              <div>
                <div className="font-medium">{c.title}</div>
                <div className="text-sm text-muted-foreground">{c.issuer}</div>
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                {c.year}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
