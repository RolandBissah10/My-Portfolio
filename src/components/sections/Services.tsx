import { SERVICES } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Briefcase,
  CheckCircle2,
  Code2,
  Globe,
  TerminalSquare,
  TestTube2,
  Zap,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="h-5 w-5" />,
  CheckCircle2: <CheckCircle2 className="h-5 w-5" />,
  Zap: <Zap className="h-5 w-5" />,
  TerminalSquare: <TerminalSquare className="h-5 w-5" />,
  Globe: <Globe className="h-5 w-5" />,
  TestTube2: <TestTube2 className="h-5 w-5" />,
  Briefcase: <Briefcase className="h-5 w-5" />,
};

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"
    >
      <SectionHeader eyebrow="Services" title="How I can help" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="reveal group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
          >
            <span
              className="grid h-11 w-11 place-items-center rounded-xl text-white transition group-hover:scale-110"
              style={{ background: "var(--gradient-primary)" }}
            >
              {ICON_MAP[s.iconName]}
            </span>
            <div>
              <h3 className="font-display text-base font-bold">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Reliable, thoroughly tested delivery - from architecture to
                production.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
