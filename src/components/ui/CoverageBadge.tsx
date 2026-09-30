import { useEffect, useState } from "react";

// Reports which section the visitor is on, like a coverage summary:
// scrolling back up lowers the count again.
export function CoverageBadge({ ids }: { ids: string[] }) {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = document.documentElement;
      // at the very bottom the last section is current, even if it is short
      if (h.scrollTop + h.clientHeight >= h.scrollHeight - 4) {
        setCurrent(ids.length);
        return;
      }
      // otherwise: the last section whose top has passed the middle of the viewport
      const middle = h.clientHeight / 2;
      let index = 0;
      ids.forEach((id, i) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= middle) index = i;
      });
      setCurrent(index + 1);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  if (current < 2) return null;
  const pct = Math.round((current / ids.length) * 100);
  const complete = current === ids.length;

  return (
    <div
      className="fixed bottom-5 left-5 z-40 hidden w-52 rounded-md border border-border bg-card px-3 py-2 font-mono text-[11px] sm:block"
      aria-hidden
    >
      <div className="flex justify-between">
        <span className="text-muted-foreground">coverage</span>
        <span className="tabular-nums">
          {current}/{ids.length} sections
        </span>
      </div>
      <div className="mt-1.5 h-1 overflow-hidden rounded-sm bg-secondary">
        <div
          className="h-full bg-primary transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      {complete && (
        <div className="mt-1.5 text-primary">All sections viewed</div>
      )}
    </div>
  );
}
