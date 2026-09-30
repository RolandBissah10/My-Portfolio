export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="reveal mb-10">
      <div className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
    </div>
  );
}
