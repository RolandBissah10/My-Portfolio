import { useRef, useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import { getContributions } from "@/lib/github";

const LINES = [
  "@Test",
  "void githubActivity_loads() {",
  "    given()",
  "        .accept(ContentType.JSON)",
  "    .when()",
  '        .get("/github/contributions")',
  "    .then()",
  "        .statusCode(200)",
  '        .body("total", greaterThan(0));',
  "}",
];

// which code lines are "executing" at each step of the run
const STEP_LINES = {
  given: [2, 3],
  when: [4, 5],
  status: [6, 7],
  body: [8],
};

type Step = keyof typeof STEP_LINES;
type Outcome =
  | { status: "PASS"; ms: number; total: number }
  | { status: "FAIL"; ms: number; reason: string };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// The test shown is what the Run button actually does: it calls this
// site's GitHub endpoint and checks the response, stepping through the code.
export function HeroVisual() {
  const [step, setStep] = useState<Step | null>(null);
  const [failedLine, setFailedLine] = useState<number | null>(null);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const running = useRef(false);

  const run = async () => {
    if (running.current) return;
    running.current = true;
    setOutcome(null);
    setFailedLine(null);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const pause = (ms: number) =>
      reduceMotion ? Promise.resolve() : sleep(ms);

    setStep("given");
    await pause(250);

    setStep("when");
    const t0 = performance.now();
    let total: number | null = null;
    let reason = "";
    try {
      const data = await getContributions();
      total = data.total;
    } catch (err) {
      reason = err instanceof Error ? err.message : "request failed";
    }
    const ms = Math.round(performance.now() - t0);
    await pause(200);

    setStep("status");
    await pause(250);
    if (total === null) {
      setFailedLine(7);
      setOutcome({ status: "FAIL", ms, reason });
    } else {
      setStep("body");
      await pause(250);
      if (total > 0) {
        setOutcome({ status: "PASS", ms, total });
      } else {
        setFailedLine(8);
        setOutcome({ status: "FAIL", ms, reason: `total was ${total}` });
      }
    }
    setStep(null);
    running.current = false;
  };

  const active: number[] = step ? STEP_LINES[step] : [];

  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-[oklch(0.2_0.008_250)] text-[oklch(0.9_0.005_85)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 font-mono text-xs text-white/60">
        <span>GitHubActivityTest.java</span>
        <button
          onClick={run}
          disabled={step !== null}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-sm border border-white/15 px-2 py-1 text-white/80 transition-colors hover:bg-white/10 disabled:cursor-wait disabled:opacity-60"
        >
          {outcome ? (
            <RotateCcw className="h-3 w-3" />
          ) : (
            <Play className="h-3 w-3" />
          )}
          {step ? "Running" : outcome ? "Run again" : "Run test"}
        </button>
      </div>
      <pre className="overflow-x-auto py-3 font-mono text-xs leading-relaxed sm:text-[13px]">
        {LINES.map((line, i) => (
          <div
            key={i}
            className={`px-4 transition-colors duration-150 ${
              failedLine === i
                ? "bg-[oklch(0.55_0.2_27/0.3)]"
                : active.includes(i)
                  ? "bg-white/10"
                  : ""
            }`}
          >
            {line}
          </div>
        ))}
      </pre>
      <figcaption
        className="min-h-[2.25rem] border-t border-white/10 px-4 py-2 font-mono text-xs"
        aria-live="polite"
      >
        {outcome?.status === "PASS" && (
          <>
            <span className="font-medium text-[oklch(0.78_0.12_162)]">
              PASS
            </span>{" "}
            <span className="text-white/70">
              responded in {outcome.ms} ms, total ={" "}
              {outcome.total.toLocaleString("en-US")}
            </span>
          </>
        )}
        {outcome?.status === "FAIL" && (
          <>
            <span className="font-medium text-[oklch(0.7_0.18_27)]">FAIL</span>{" "}
            <span className="text-white/70">{outcome.reason}</span>
          </>
        )}
        {!outcome && (
          <span className="text-white/60">
            {step
              ? "Calling the GitHub endpoint this site uses..."
              : "Press Run to execute this check against the live endpoint."}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
