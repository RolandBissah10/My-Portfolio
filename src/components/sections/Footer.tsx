import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="font-display text-lg font-bold">
              Roland Bissah
            </div>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              Building software with quality, reliability, and innovation.
            </p>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href="https://github.com/RolandBissah10/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="cursor-pointer grid h-10 w-10 place-items-center rounded-full border border-border transition hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/roland-bissah-5b40b628b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="cursor-pointer grid h-10 w-10 place-items-center rounded-full border border-border transition hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:rolandbissah10@gmail.com"
              aria-label="Email"
              className="cursor-pointer grid h-10 w-10 place-items-center rounded-full border border-border transition hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Roland Bissah. Crafted with care.
        </div>
      </div>
    </footer>
  );
}
