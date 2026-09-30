import { SERVICES } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Briefcase,
  CheckCircle2,
  Code2,
  TerminalSquare,
  TestTube2,
  Zap,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="h-5 w-5" />,
  CheckCircle2: <CheckCircle2 className="h-5 w-5" />,
  Zap: <Zap className="h-5 w-5" />,
  TerminalSquare: <TerminalSquare className="h-5 w-5" />,
  TestTube2: <TestTube2 className="h-5 w-5" />,
  Briefcase: <Briefcase className="h-5 w-5" />,
};

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeader eyebrow="Services" title="What I can help with" />
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.title} className="bg-card p-6">
            <span className="text-primary">{ICON_MAP[s.iconName]}</span>
            <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
