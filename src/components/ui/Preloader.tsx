import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Loader2, X } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { contributionsQuery } from "@/lib/github";

type Section = { id: string; label: string };

// timeline (ms after the page becomes interactive); the whole run is 3s
const FIRST_LINE_AT = 200;
const LINE_EVERY = 180;
const LINE_RUNS_FOR = 140;
const LEAVE_AT = 2700;
const LEAVE_MS = 300;

// A test run printed while the page loads. Each line really checks that the
// section is on the page, so a PASS here means the section rendered.
export function Preloader({ sections }: { sections: Section[] }) {
  const queryClient = useQueryClient();
  const [active, setActive] = useState(false);
  const [shown, setShown] = useState(0);
  const [results, setResults] = useState<(boolean | null)[]>(() =>
    sections.map(() => null),
  );
  const [elapsed, setElapsed] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const leave = useCallback(() => {
    setLeaving(true);
    timers.current.push(setTimeout(() => setDone(true), LEAVE_MS));
  }, []);

  useEffect(() => {
    setActive(true);
    // warm the GitHub data for the graph further down the page
    void queryClient.prefetchQuery(contributionsQuery);

    const at = (ms: number, fn: () => void) =>
      timers.current.push(setTimeout(fn, ms));
    const start = performance.now();

    sections.forEach((s, i) => {
      const t = FIRST_LINE_AT + i * LINE_EVERY;
      at(t, () => setShown(i + 1));
      at(t + LINE_RUNS_FOR, () => {
        const ok = document.getElementById(s.id) !== null;
        setResults((r) => r.map((v, j) => (j === i ? ok : v)));
      });
    });
    at(LEAVE_AT, leave);

    const clock = setInterval(() => setElapsed(performance.now() - start), 50);
    const list = timers.current;
    return () => {
      list.forEach(clearTimeout);
      clearInterval(clock);
    };
  }, [queryClient, sections, leave]);

  useEffect(() => {
    if (leaving) return;
    window.addEventListener("keydown", leave);
    return () => window.removeEventListener("keydown", leave);
  }, [leaving, leave]);

  const resolved = results.filter((r) => r !== null).length;
  const passed = results.filter((r) => r === true).length;
  const failed = results.filter((r) => r === false).length;
  const finished = resolved === sections.length;
  const coverage = Math.round((passed / sections.length) * 100);

  return (
    <div
      className={`preloader fixed inset-0 z-[200] grid place-items-center bg-background px-5 ${
        active ? "active" : ""
      } ${leaving ? "leaving" : ""} ${done ? "done" : ""}`}
      onClick={leave}
      aria-hidden={leaving}
      role="status"
      aria-label="Loading"
    >
      <div className="w-full max-w-md font-mono text-xs sm:text-[13px]">
        <div className="flex items-baseline justify-between text-muted-foreground">
          <span>
            <span className="text-primary">$</span> test portfolio.spec.ts
          </span>
          <span className="tabular-nums">
            {(Math.min(elapsed, 3000) / 1000).toFixed(1)} s
          </span>
        </div>

        <ul className="mt-4 space-y-1">
          {sections.map((s, i) => {
            const r = results[i];
            // every line is laid out from the start so the block never shifts
            if (i >= shown) {
              return (
                <li key={s.id} className="invisible" aria-hidden>
                  &nbsp;
                </li>
              );
            }
            return (
              <li
                key={s.id}
                className="preloader-line flex items-center gap-2.5"
              >
                <span className="grid h-4 w-4 shrink-0 place-items-center">
                  {r === null ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground" />
                  ) : r ? (
                    <Check className="check-pop h-3.5 w-3.5 text-primary" />
                  ) : (
                    <X className="h-3.5 w-3.5 text-destructive" />
                  )}
                </span>
                <span
                  className={`flex-1 truncate ${r === null ? "text-muted-foreground" : ""}`}
                >
                  renders {s.label} section
                </span>
                {r !== null && (
                  <span
                    className={`check-pop rounded-sm px-1.5 text-[10px] font-medium ${
                      r
                        ? "bg-primary/15 text-primary"
                        : "bg-destructive/15 text-destructive"
                    }`}
                  >
                    {r ? "PASS" : "FAIL"}
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-5 h-1 overflow-hidden rounded-sm bg-secondary">
          <div
            className="h-full bg-primary transition-[width] duration-150 ease-out"
            style={{ width: `${(resolved / sections.length) * 100}%` }}
          />
        </div>

        <div
          className={`mt-3 grid grid-cols-[5.5rem_1fr] gap-y-0.5 text-muted-foreground transition-opacity duration-200 ${
            finished ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>Tests</span>
          <span>
            <span className="text-primary">{passed} passed</span>
            {failed > 0 && (
              <span className="text-destructive">, {failed} failed</span>
            )}
            , {sections.length} total
          </span>
          <span>Coverage</span>
          <span>
            <span className="text-foreground">{coverage}%</span> of sections (
            {passed}/{sections.length})
          </span>
        </div>

        <div className="mt-6 text-[11px] text-muted-foreground">
          Press any key or click to skip
        </div>
      </div>
    </div>
  );
}
