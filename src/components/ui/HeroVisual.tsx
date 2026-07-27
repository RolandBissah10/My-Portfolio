import { Award } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="reveal relative mx-auto w-full max-w-md sm:aspect-square">
      <div
        className="absolute inset-4 rounded-[36px] blur-2xl opacity-70"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="glass relative flex h-full flex-col overflow-hidden rounded-[24px] p-3 shadow-glow sm:rounded-[32px] sm:p-5">
        {/* window chrome */}
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.18_25)] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.82_0.16_82)] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.18_150)] sm:h-3 sm:w-3" />
          <span className="ml-2 truncate text-[10px] font-mono text-muted-foreground sm:ml-3 sm:text-xs">
            ~/roland/portfolio
          </span>
        </div>
        <pre className="mt-3 flex-1 overflow-x-auto rounded-xl bg-[oklch(0.14_0.02_265)] p-3 text-[10px] leading-relaxed text-[oklch(0.9_0.02_260)] shadow-inner sm:mt-4 sm:rounded-2xl sm:p-4 sm:text-xs">
          {`const roland = {
  role: ["Full Stack Dev", "QA Engineer"],
  stack: ["React", "Spring", "FastAPI"],
  testing: ["Selenium", "RestAssured", "JUnit"],
  ships: (idea) => build(idea).then(test).then(deploy),
};

roland.ships("your next great product");`}
        </pre>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
          {[
            { l: "Tests", v: "1,240" },
            { l: "Coverage", v: "94%" },
            { l: "Builds", v: "✓ Passing" },
          ].map((m) => (
            <div
              key={m.l}
              className="rounded-xl border border-border bg-card/70 p-2.5 text-center"
            >
              <div className="font-display text-sm font-bold">{m.v}</div>
              <div className="text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
      {/* floating badge */}
      <div className="animate-float-slow absolute -right-3 -top-3 hidden rounded-2xl border border-border bg-card px-3 py-2 shadow-soft sm:block">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span
            className="grid h-6 w-6 place-items-center rounded-lg text-white"
            style={{ background: "var(--brand-gold)" }}
          >
            <Award className="h-3.5 w-3.5" />
          </span>
          Quality-first
        </div>
      </div>
    </div>
  );
}
