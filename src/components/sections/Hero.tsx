import { Download, Github, Linkedin, Mail } from "lucide-react";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { buttonPrimary, buttonSecondary } from "@/components/ui/button";

interface HeroProps {
  scrollTo: (id: string) => void;
}

export function Hero({ scrollTo }: HeroProps) {
  return (
    <section id="home" className="border-b border-border pt-28 sm:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-12 lg:pb-28">
        <div className="min-w-0 lg:col-span-7">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
            QA engineer and backend developer
          </p>

          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Roland Bissah
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm a QA engineer. I write manual and automated tests for web
            applications: Selenium and JUnit for the UI, Postman and RestAssured
            for APIs. I also build backend services and REST APIs with Spring
            Boot and FastAPI.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Open to full-time and freelance work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className={buttonPrimary}
            >
              See my projects
            </button>
            <a
              href="/Francis_Roland_Bissah.pdf"
              download
              className={buttonSecondary}
            >
              <Download className="h-4 w-4" /> Resume (PDF)
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted-foreground">
            <a
              href="https://github.com/RolandBissah10/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/roland-bissah-5b40b628b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:rolandbissah10@gmail.com"
              aria-label="Email"
              className="transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
