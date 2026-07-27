import { SKILLS } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBar } from "@/components/ui/SkillBar";
import {
  Code2,
  Cpu,
  Globe,
  Layers,
  TerminalSquare,
  TestTube2,
  Zap,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-5 w-5" />,
  TerminalSquare: <TerminalSquare className="h-5 w-5" />,
  Layers: <Layers className="h-5 w-5" />,
  TestTube2: <TestTube2 className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  Zap: <Zap className="h-5 w-5" />,
  Code2: <Code2 className="h-5 w-5" />,
};

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow="Skills"
          title="A modern, well-rounded toolkit"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div
              key={s.group}
              className="reveal group rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-10 w-10 place-items-center rounded-xl text-white"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {ICON_MAP[s.iconName]}
                </span>
                <h3 className="font-display text-lg font-bold">
                  {s.group}
                </h3>
              </div>
              <div className="mt-5 space-y-3">
                {s.items.map((it) => (
                  <SkillBar key={it.name} name={it.name} level={it.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
