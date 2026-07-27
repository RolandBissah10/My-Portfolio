export function SectionHeader({
  eyebrow,
  title,
  centered,
}: {
  eyebrow: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div className={`reveal mb-10 ${centered ? "text-center" : ""}`}>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--brand-purple)" }}
        />
        {eyebrow}
      </div>
      <h2 className="mt-2.5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
