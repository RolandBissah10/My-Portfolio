export function ProjectThumb({ title, tag }: { title: string; tag: string }) {
  return (
    <div
      className="relative flex h-44 items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 20%, color-mix(in oklab, var(--brand-purple) 40%, transparent), transparent 60%), radial-gradient(ellipse at 80% 80%, color-mix(in oklab, var(--brand-gold) 30%, transparent), transparent 60%), oklch(0.16 0.02 265)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, white 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, white 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative text-center text-white">
        <div className="text-xs uppercase tracking-[0.2em] opacity-70">
          {tag}
        </div>
        <div className="mt-1 font-display text-2xl font-bold">{title}</div>
      </div>
    </div>
  );
}
