import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { PROJECTS, FILTERS } from "@/data/constants";
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
  const [showTop, setShowTop] = useState(false);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [activeProject, setActiveProject] = useState<
    (typeof PROJECTS)[number] | null
  >(null);
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

  // header border + back-to-top
  useEffect(() => {
    const onScroll = () => {
      const top = document.documentElement.scrollTop;
      setScrolled(top > 20);
      setShowTop(top > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    document.getElementById(id)?.scrollIntoView({ block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Header
        dark={dark}
        setDark={setDark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
        scrollTo={scrollTo}
      />

      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Skills />
        <Projects
          filteredProjects={filteredProjects}
          filter={filter}
          setFilter={setFilter}
          setActiveProject={setActiveProject}
        />
        <Experience />
        <Services />
        <Certifications />
        <GitHubSection />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0 })}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-40 grid h-10 w-10 cursor-pointer place-items-center rounded-md border border-border bg-card transition-colors hover:bg-secondary"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}
