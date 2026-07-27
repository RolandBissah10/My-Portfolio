import { MapPin, Briefcase, Award } from "lucide-react";
import { STATS } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { StatCard } from "@/components/ui/StatCard";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"
    >
      <SectionHeader eyebrow="About" title="Engineer who ships and tests" />
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="reveal lg:col-span-3">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I am a passionate{" "}
            <span className="text-foreground font-medium">
              Full Stack Web Developer
            </span>{" "}
            and{" "}
            <span className="text-foreground font-medium">
              Quality Assurance Engineer
            </span>{" "}
            dedicated to building secure, scalable, and user-friendly
            applications.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            I enjoy solving real-world problems through software engineering
            while ensuring software quality through manual and automated
            testing.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            I believe great software isn't just built - it is thoroughly
            tested, optimized, and continuously improved.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <Chip icon={<MapPin className="h-3.5 w-3.5" />}>
              Remote / Worldwide
            </Chip>
            <Chip icon={<Briefcase className="h-3.5 w-3.5" />}>
              Open to full-time & freelance
            </Chip>
            <Chip icon={<Award className="h-3.5 w-3.5" />}>
              ISTQB-aligned QA
            </Chip>
          </div>
        </div>

        <div className="reveal grid grid-cols-2 gap-4 lg:col-span-2">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
