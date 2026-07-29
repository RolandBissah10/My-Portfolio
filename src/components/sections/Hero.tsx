import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { TITLES } from "@/data/constants";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import { HeroVisual } from "@/components/ui/HeroVisual";

interface HeroProps {
  typed: string;
  scrollTo: (id: string) => void;
}

export function Hero({ typed, scrollTo }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <FloatingIcons />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-12 lg:pb-32">
        <div className="lg:col-span-7">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[oklch(0.72_0.18_150)]" />
            Available for opportunities
          </div>

          <h1 className="animate-fade-up mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">Roland Bissah</span>
          </h1>

          <p className="animate-fade-up mt-6 text-lg font-medium text-muted-foreground sm:text-xl">
            <span className="animate-caret">{typed}</span>
          </p>

          <p className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build scalable web applications, automate testing, and deliver
            high-quality software experiences through modern development and
            quality assurance practices.
          </p>

          <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="group cursor-pointer inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              style={{ background: "var(--gradient-primary)" }}
            >
              Hire Me{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-secondary"
            >
              View Projects
            </button>
            <a
              href="/Francis_Roland_Bissah.pdf"
              download
              className="cursor-pointer inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-80"
              style={{ color: "var(--brand-gold)" }}
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>

          <div className="animate-fade-up mt-10 flex items-center gap-5 text-muted-foreground">
            <a
              href="https://github.com/RolandBissah10/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="cursor-pointer transition hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/roland-bissah-5b40b628b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="cursor-pointer transition hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:rolandbissah10@gmail.com"
              aria-label="Email"
              className="cursor-pointer transition hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
