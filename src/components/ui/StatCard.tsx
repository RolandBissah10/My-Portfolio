import { useEffect, useRef, useState } from "react";

export function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1200;
            const step = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-5 shadow-soft"
    >
      <div className="font-display text-4xl font-extrabold tracking-tight">
        <span className="gradient-text">{n}</span>
        <span style={{ color: "var(--brand-gold)" }}>{suffix}</span>
      </div>
      <div className="mt-1 text-xs font-medium text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
