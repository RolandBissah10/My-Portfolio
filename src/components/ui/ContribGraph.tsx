import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { contributionsQuery, GITHUB_USERNAME } from "@/lib/github";

const colors = [
  "var(--contrib-0)",
  "var(--contrib-1)",
  "var(--contrib-2)",
  "var(--contrib-3)",
  "var(--contrib-4)",
];

const PLACEHOLDER_WEEKS = 53;

export function ContribGraph() {
  const { data, isPending, isError } = useQuery(contributionsQuery);
  const scrollRef = useRef<HTMLDivElement>(null);

  // on narrow screens, start scrolled to the most recent weeks
  useEffect(() => {
    const el = scrollRef.current;
    if (data && el) el.scrollLeft = el.scrollWidth;
  }, [data]);

  if (isError) {
    return (
      <p className="py-10 text-center text-sm text-muted-foreground">
        The contribution calendar couldn't be loaded right now.{" "}
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          See it on GitHub
        </a>
        .
      </p>
    );
  }

  const weeks =
    data?.weeks ??
    Array.from({ length: PLACEHOLDER_WEEKS }, () => Array(7).fill(null));

  return (
    <div>
      <div ref={scrollRef} className="overflow-x-auto">
        <div
          className={`grid min-w-[640px] gap-1 ${isPending ? "animate-pulse" : ""}`}
          style={{
            gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
            gridAutoFlow: "column",
            gridTemplateRows: "repeat(7, 1fr)",
          }}
          aria-busy={isPending}
        >
          {weeks.flatMap((week, w) =>
            week.map((day, d) => (
              <div
                key={`${w}-${d}`}
                className="aspect-square rounded-[3px]"
                style={{
                  background: day ? colors[day.level] : "transparent",
                  ...(isPending ? { background: colors[0] } : {}),
                }}
                title={
                  day
                    ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                    : undefined
                }
              />
            )),
          )}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted-foreground">
        <span>
          {data
            ? `${data.total.toLocaleString("en-US")} contributions in the last year`
            : "Loading contributions"}
        </span>
        <span className="flex items-center gap-1.5">
          Less
          {colors.map((c, i) => (
            <span
              key={i}
              className="h-2.5 w-2.5 rounded-[2px]"
              style={{ background: c }}
            />
          ))}
          More
        </span>
      </div>
    </div>
  );
}
