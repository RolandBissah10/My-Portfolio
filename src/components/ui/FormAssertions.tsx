import { Check, Circle, X } from "lucide-react";
import type { FormSnapshot } from "@/lib/form-snapshot";

// Live, jest-style assertions for the contact form, updated as you type.
export function FormAssertions({ form }: { form: FormSnapshot }) {
  const rows = [
    {
      field: "name",
      code: "expect(name).not.toBeEmpty()",
      ok: form.name.trim() !== "",
    },
    {
      field: "email",
      code: "expect(email).toBeValidEmail()",
      ok: form.emailValid,
    },
    {
      field: "subject",
      code: "expect(subject).not.toBeEmpty()",
      ok: form.subject.trim() !== "",
    },
    {
      field: "message",
      code: "expect(message).not.toBeEmpty()",
      ok: form.message.trim() !== "",
    },
    {
      field: "message",
      code: `expect(message.length).toBeLessThanOrEqual(1000)  // ${form.message.length}`,
      ok: form.message.length > 0 && form.message.length <= 1000,
    },
  ];
  const passing = rows.filter((r) => r.ok).length;

  return (
    <div className="mt-5 rounded-md border border-border bg-secondary/50 px-3 py-2.5 font-mono text-[11px] sm:text-xs">
      <div className="mb-1.5 flex justify-between text-muted-foreground">
        <span>contact-form.spec</span>
        <span className="tabular-nums">
          {passing}/{rows.length} passing
        </span>
      </div>
      <ul className="space-y-1">
        {rows.map((r) => {
          const failed = !r.ok && form.touched.has(r.field);
          return (
            <li
              key={r.code}
              className={`flex items-start gap-2 transition-colors ${
                r.ok
                  ? "text-foreground"
                  : failed
                    ? "text-destructive"
                    : "text-muted-foreground"
              }`}
            >
              {r.ok ? (
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
              ) : failed ? (
                <X className="mt-0.5 h-3 w-3 shrink-0" />
              ) : (
                <Circle className="mt-0.5 h-3 w-3 shrink-0" />
              )}
              <span className="break-all">{r.code}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
