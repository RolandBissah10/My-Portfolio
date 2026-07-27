import { TECH_STACK } from "@/data/constants";

export function TechStackMarquee() {
  return (
    <section className="border-y border-border bg-background py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 px-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:px-8">
          Tech I work with
        </div>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="animate-marquee flex w-max gap-4">
            {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
              <span
                key={i}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
