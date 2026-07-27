export function ContribGraph() {
  const weeks = 26;
  const days = 7;
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const rnd = seed / 233280;
    const level =
      rnd < 0.35 ? 0 : rnd < 0.6 ? 1 : rnd < 0.8 ? 2 : rnd < 0.93 ? 3 : 4;
    return level;
  });
  const colors = [
    "oklch(0.94 0.005 260)",
    "color-mix(in oklab, var(--brand-purple) 25%, oklch(0.94 0.005 260))",
    "color-mix(in oklab, var(--brand-purple) 55%, oklch(0.94 0.005 260))",
    "color-mix(in oklab, var(--brand-purple) 80%, oklch(0.94 0.005 260))",
    "var(--brand-purple)",
  ];

  return (
    <div className="overflow-x-auto">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))`,
          gridAutoFlow: "column",
          gridTemplateRows: `repeat(${days}, 1fr)`,
        }}
      >
        {cells.map((lvl, i) => (
          <div
            key={i}
            className="aspect-square rounded-[3px]"
            style={{ background: colors[lvl] }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-muted-foreground">
        Less
        {colors.map((c, i) => (
          <span
            key={i}
            className="h-2.5 w-2.5 rounded-[2px]"
            style={{ background: c }}
          />
        ))}
        More
      </div>
    </div>
  );
}
