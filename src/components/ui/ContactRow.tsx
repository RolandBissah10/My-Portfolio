export function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group cursor-pointer flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
    >
      <span
        className="grid h-11 w-11 place-items-center rounded-xl text-white"
        style={{ background: "var(--gradient-primary)" }}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="truncate text-sm font-semibold">{value}</div>
      </div>
    </a>
  );
}
