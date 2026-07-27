import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface TestimonialsProps {
  testimonialIdx: number;
  setTestimonialIdx: (idx: number) => void;
}

export function Testimonials({
  testimonialIdx,
  setTestimonialIdx,
}: TestimonialsProps) {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <SectionHeader eyebrow="Testimonials" title="Kind words" centered />
        <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
          <div
            className="flex items-center gap-1"
            style={{ color: "var(--brand-gold)" }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <blockquote className="mt-5 font-display text-xl leading-relaxed sm:text-2xl">
            "{TESTIMONIALS[testimonialIdx].quote}"
          </blockquote>
          <div className="mt-6">
            <div className="font-semibold">
              {TESTIMONIALS[testimonialIdx].name}
            </div>
            <div className="text-sm text-muted-foreground">
              {TESTIMONIALS[testimonialIdx].role}
            </div>
          </div>
          <div className="mt-6 flex gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setTestimonialIdx(i)}
                className={`cursor-pointer h-1.5 rounded-full transition-all ${i === testimonialIdx ? "w-8" : "w-3 bg-border"}`}
                style={
                  i === testimonialIdx
                    ? { background: "var(--gradient-primary)" }
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
