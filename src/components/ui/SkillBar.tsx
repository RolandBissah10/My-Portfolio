import { useEffect, useRef, useState } from "react";

export function SkillBar({ name, level }: { name: string; level: number }) {
  const [displayLevel, setDisplayLevel] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (prefersReducedMotion) {
            setDisplayLevel(level);
            io.disconnect();
            return;
          }

          const start = performance.now();
          const duration = 1100;
          const step = (time: number) => {
            const progress = Math.min(1, (time - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayLevel(Math.round(level * eased));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
          io.disconnect();
        });
      },
      { threshold: 0.45 },
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-medium text-foreground">{name}</span>
        <span className="tabular-nums">{displayLevel}%</span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-secondary"
        role="progressbar"
        aria-label={`${name} skill level`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={displayLevel}
      >
        <div
          className="h-full rounded-full transition-[width] duration-200 ease-out"
          style={{
            background: "var(--gradient-primary)",
            width: `${displayLevel}%`,
          }}
        />
      </div>
    </div>
  );
}
