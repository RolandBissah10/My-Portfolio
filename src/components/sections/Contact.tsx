import { useState } from "react";
import {
  Calendar,
  Loader2,
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buttonPrimary, buttonSecondary } from "@/components/ui/button";
import { ContactRow } from "@/components/ui/ContactRow";
import { Field } from "@/components/ui/Field";
import { useToast } from "@/components/ui/Toast";
import { sendContactMessage } from "@/lib/contact";

export function Contact() {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeader eyebrow="Contact" title="Get in touch" />
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="divide-y divide-border self-start overflow-hidden rounded-lg border border-border bg-card lg:col-span-2">
          <ContactRow
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value="rolandbissah10@gmail.com"
            href="mailto:rolandbissah10@gmail.com"
          />
          <ContactRow
            icon={<Phone className="h-4 w-4" />}
            label="Phone"
            value="0256728245"
            href="tel:0256728245"
          />
          <ContactRow
            icon={<Github className="h-4 w-4" />}
            label="GitHub"
            value="RolandBissah10"
            href="https://github.com/RolandBissah10/"
          />
          <ContactRow
            icon={<Linkedin className="h-4 w-4" />}
            label="LinkedIn"
            value="roland-bissah"
            href="https://www.linkedin.com/in/roland-bissah-5b40b628b"
          />
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (isSubmitting) return;
            const form = e.currentTarget;
            const data = new FormData(form);

            setIsSubmitting(true);
            try {
              await sendContactMessage({
                data: {
                  name: String(data.get("name") ?? ""),
                  email: String(data.get("email") ?? ""),
                  subject: String(data.get("subject") ?? ""),
                  message: String(data.get("message") ?? ""),
                },
              });
              showToast("success", "Message sent! I'll get back to you soon.");
              form.reset();
            } catch (err) {
              showToast(
                "error",
                err instanceof Error
                  ? err.message
                  : "Couldn't send your message. Please try again.",
              );
            } finally {
              setIsSubmitting(false);
            }
          }}
          className="rounded-lg border border-border bg-card p-6 sm:p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              name="name"
              label="Your name"
              placeholder="Jane Doe"
              required
            />
            <Field
              name="email"
              type="email"
              label="Email"
              placeholder="jane@company.com"
              required
            />
          </div>
          <div className="mt-4">
            <Field
              name="subject"
              label="Subject"
              placeholder="Project inquiry"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="message"
              className="mb-1.5 block text-xs font-medium text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={1000}
              placeholder="Tell me about your project…"
              className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className={buttonPrimary}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className={buttonSecondary}
            >
              <Calendar className="h-4 w-4" /> Schedule a call
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
