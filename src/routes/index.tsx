import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUp, MessageSquare } from "lucide-react";
import { PROJECTS, FILTERS, TITLES } from "@/data/constants";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Certifications } from "@/components/sections/Certifications";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ProjectModal } from "@/components/ui/ProjectModal";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function Portfolio() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [titleIdx, setTitleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [activeProject, setActiveProject] = useState<
    (typeof PROJECTS)[number] | null
  >(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const themeInitialized = useRef(false);

  // dark mode (persisted to localStorage; initial value already applied
  // pre-hydration by the blocking script in __root.tsx, so the first pass
  // here only syncs React state without touching the DOM/localStorage)
  useEffect(() => {
    if (!themeInitialized.current) {
      themeInitialized.current = true;
      setDark(localStorage.getItem("theme") === "dark");
      return;
    }
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // scroll progress + sticky header + back-to-top
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? (h.scrollTop / total) * 100 : 0;
      setProgress(p);
      setScrolled(h.scrollTop > 20);
      setShowTop(h.scrollTop > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // typewriter
  useEffect(() => {
    const current = TITLES[titleIdx];
    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (!deleting) {
        i++;
        setTyped(current.slice(0, i));
        if (i === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1400);
          return;
        }
      } else {
        i--;
        setTyped(current.slice(0, i));
        if (i === 0) {
          setTitleIdx((v) => (v + 1) % TITLES.length);
          return;
        }
      }
      timer = setTimeout(tick, deleting ? 40 : 70);
    };
    timer = setTimeout(tick, 200);
    return () => clearTimeout(timer);
  }, [titleIdx]);

  // testimonials autoplay
  useEffect(() => {
    const t = setInterval(
      () => setTestimonialIdx((v) => (v + 1) % 3),
      5500,
    );
    return () => clearInterval(t);
  }, []);

  // cursor glow (desktop only)
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const filteredProjects = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/25">
      {/* cursor glow */}
      <div
        ref={cursorRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full opacity-60 blur-3xl md:block"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-purple) 30%, transparent), transparent 60%)",
        }}
      />

      {/* scroll progress */}
      <div
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left"
        style={{
          transform: `scaleX(${progress / 100})`,
          background: "var(--gradient-primary)",
        }}
        aria-hidden
      />

      {/* header */}
      <Header
        dark={dark}
        setDark={setDark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
        scrollTo={scrollTo}
      />

      <main>
        {/* HERO */}
        <Hero typed={typed} scrollTo={scrollTo} />

        {/* ABOUT */}
        <About />

        {/* SKILLS */}
        <Skills />

        {/* PROJECTS */}
        <Projects
          filteredProjects={filteredProjects}
          filter={filter}
          setFilter={setFilter}
          setActiveProject={setActiveProject}
        />

        {/* EXPERIENCE */}
        <Experience />

        {/* SERVICES */}
        <Services />

        {/* CERTIFICATIONS */}
        <Certifications />

        {/* GITHUB */}
        <GitHubSection />

        {/* TESTIMONIALS */}
        <Testimonials
          testimonialIdx={testimonialIdx}
          setTestimonialIdx={setTestimonialIdx}
        />

        {/* TECH STACK MARQUEE */}
        <TechStackMarquee />

        {/* CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* floating contact + back to top */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="cursor-pointer grid h-11 w-11 place-items-center rounded-full border border-border bg-card shadow-soft transition hover:-translate-y-0.5"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}
        <a
          href="mailto:rolandbissah10@gmail.com"
          aria-label="Contact"
          className="cursor-pointer grid h-14 w-14 place-items-center rounded-full text-white shadow-glow transition hover:scale-105"
          style={{ background: "var(--gradient-primary)" }}
        >
          <MessageSquare className="h-5 w-5" />
        </a>
      </div>

      {/* project modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}
