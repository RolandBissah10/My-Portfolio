import { Code2, Cpu, Github, Globe, Layers, TerminalSquare, TestTube2, Zap } from "lucide-react";

export function FloatingIcons() {
  const icons = [
    Code2,
    TerminalSquare,
    TestTube2,
    Github,
    Cpu,
    Layers,
    Globe,
    Zap,
  ];
  const positions = [
    { top: "10%", left: "6%", delay: "0s" },
    { top: "18%", right: "8%", delay: "1.4s" },
    { top: "58%", left: "4%", delay: "0.8s" },
    { top: "70%", right: "12%", delay: "2.2s" },
    { top: "35%", left: "48%", delay: "1.9s" },
    { top: "82%", left: "42%", delay: "0.4s" },
    { top: "6%", left: "38%", delay: "2.8s" },
    { top: "48%", right: "4%", delay: "1.1s" },
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {icons.map((Icon, i) => (
        <span
          key={i}
          className="animate-float-slow absolute grid h-11 w-11 place-items-center rounded-2xl border border-border bg-card/60 text-muted-foreground shadow-soft backdrop-blur"
          style={
            {
              ...positions[i],
              animationDelay: positions[i].delay,
            } as React.CSSProperties
          }
        >
          <Icon className="h-5 w-5" />
        </span>
      ))}
      {/* particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={`p${i}`}
          className="animate-float-slow absolute h-1 w-1 rounded-full"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            background:
              "color-mix(in oklab, var(--brand-purple) 60%, transparent)",
            animationDelay: `${(i % 6) * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}
