import { MapPin } from "lucide-react";
import { STATS } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeader eyebrow="About" title="I build software and I test it" />
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-3">
          <p>
            In my QA work I design test cases, automate regression suites with
            Selenium and JUnit, and test APIs with Postman and RestAssured. I
            work with developers in Agile ceremonies and follow defects through
            to a verified fix.
          </p>
          <p>
            I also build backend projects, mostly Java and Spring Boot or Python
            and FastAPI. A few of them are below.
          </p>
          <p>
            I care as much about how software is tested and maintained as about
            how it's built.
          </p>
          <p className="flex items-center gap-2 pt-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            Based in Ghana, open to remote work
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-lg border border-border bg-border lg:col-span-2">
          {STATS.map((s) => (
            <div key={s.label} className="bg-card p-5">
              <dt className="text-xs text-muted-foreground">{s.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
