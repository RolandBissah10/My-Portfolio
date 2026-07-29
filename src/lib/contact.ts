import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

export type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data: ContactPayload) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        "Email sending isn't configured yet (missing RESEND_API_KEY).",
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "rolandbissah10@gmail.com",
      replyTo: data.email,
      subject: data.subject
        ? `Portfolio inquiry: ${data.subject}`
        : `Portfolio inquiry from ${data.name}`,
      text: `${data.message}\n\n— ${data.name} (${data.email})`,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true as const };
  });
