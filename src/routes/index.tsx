import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Award,
  Briefcase,
  Calendar,
  CheckCircle2,
  Code2,
  Cpu,
  Download,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Moon,
  Phone,
  Send,
  Sparkles,
  Star,
  Sun,
  TerminalSquare,
  TestTube2,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ---------- data ---------- */

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const TITLES = [
  "Full Stack Web Developer",
  "Quality Assurance Engineer",
  "Test Automation Specialist",
  "API Testing Expert",
];

const STATS = [
  { label: "Years Learning", value: 4, suffix: "+" },
  { label: "Projects Completed", value: 25, suffix: "+" },
  { label: "Technologies Used", value: 30, suffix: "+" },
  { label: "Certificates", value: 8, suffix: "" },
  { label: "GitHub Contributions", value: 600, suffix: "+" },
];

const SKILLS: {
  group: string;
  icon: React.ReactNode;
  items: { name: string; level: number }[];
}[] = [
  {
    group: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    items: [
      { name: "React", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 93 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML", level: 98 },
      { name: "CSS", level: 94 },
    ],
  },
  {
    group: "Backend",
    icon: <TerminalSquare className="h-5 w-5" />,
    items: [
      { name: "Java", level: 88 },
      { name: "Spring Boot", level: 85 },
      { name: "Python", level: 82 },
      { name: "FastAPI", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    group: "Database",
    icon: <Layers className="h-5 w-5" />,
    items: [
      { name: "MySQL", level: 88 },
      { name: "Firebase", level: 82 },
      { name: "H2 Database", level: 78 },
    ],
  },
  {
    group: "Testing & QA",
    icon: <TestTube2 className="h-5 w-5" />,
    items: [
      { name: "Selenium", level: 92 },
      { name: "RestAssured", level: 88 },
      { name: "Postman", level: 94 },
      { name: "JUnit", level: 90 },
      { name: "Manual Testing", level: 95 },
      { name: "API Testing", level: 92 },
      { name: "Test Automation", level: 90 },
    ],
  },
  {
    group: "DevOps & Tools",
    icon: <Cpu className="h-5 w-5" />,
    items: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 94 },
      { name: "Docker", level: 78 },
      { name: "Jenkins", level: 72 },
      { name: "Maven", level: 80 },
      { name: "Linux", level: 78 },
    ],
  },
  {
    group: "Cloud",
    icon: <Sparkles className="h-5 w-5" />,
    items: [
      { name: "AWS (Learning)", level: 55 },
      { name: "Firebase", level: 82 },
    ],
  },
];

const PROJECTS = [
  {
    title: "Sign Language Translator",
    tag: "ML / Mobile",
    category: "AI",
    description:
      "ML-powered app translating sign language to text with text-to-sign and speech-to-text.",
    tech: ["FastAPI", "TensorFlow", "Firebase", "Android Studio", "Python"],
  },
  {
    title: "Task Management System",
    tag: "Full Stack",
    category: "Web",
    description:
      "Modern task platform to organize projects, assign tasks, and manage deadlines.",
    tech: ["Spring Boot", "Java", "MySQL", "React"],
  },
  {
    title: "QA Automation Framework",
    tag: "Automation",
    category: "QA",
    description:
      "Automation framework with Selenium, RestAssured, Postman, and JUnit for web and REST APIs.",
    tech: ["Selenium", "RestAssured", "Postman", "JUnit"],
  },
  {
    title: "Employee Performance Module",
    tag: "Enterprise",
    category: "QA",
    description:
      "Built and tested modules for feedback, staff management, CDC requests, and consolidated views.",
    tech: ["Java", "Spring", "Oracle", "JIRA"],
  },
];

const FILTERS = ["All", "Web", "AI", "QA"] as const;

const EXPERIENCE = [
  {
    role: "Quality Assurance Engineer",
    company: "Enterprise Software Team",
    period: "2023 - Present",
    points: [
      "Designed comprehensive manual test cases across web modules",
      "Automated regression suites using Selenium and JUnit",
      "Performed API testing with Postman and RestAssured",
      "Collaborated with developers in Agile ceremonies",
      "Reported, tracked, and verified defects to closure",
      "Improved overall product quality and release confidence",
    ],
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "Independent Projects",
    period: "2022 - Present",
    points: [
      "Built React + Spring Boot applications end-to-end",
      "Designed relational schemas and REST APIs",
      "Deployed containerized services with Docker",
    ],
  },
];

const SERVICES = [
  { title: "Full Stack Web Development", icon: <Code2 className="h-5 w-5" /> },
  { title: "Quality Assurance", icon: <CheckCircle2 className="h-5 w-5" /> },
  { title: "Test Automation", icon: <Zap className="h-5 w-5" /> },
  { title: "API Testing", icon: <TerminalSquare className="h-5 w-5" /> },
  { title: "Web Application Development", icon: <Globe className="h-5 w-5" /> },
  { title: "Bug Investigation", icon: <TestTube2 className="h-5 w-5" /> },
  {
    title: "Software Testing Consulting",
    icon: <Briefcase className="h-5 w-5" />,
  },
];

const CERTS = [
  { title: "Full Stack Web Development", issuer: "Coursera", year: "2024" },
  { title: "Software Testing Foundations", issuer: "ISTQB Prep", year: "2024" },
  { title: "Java Programming Masterclass", issuer: "Udemy", year: "2023" },
  { title: "Selenium WebDriver with Java", issuer: "Udemy", year: "2024" },
  { title: "REST API Testing with Postman", issuer: "Udemy", year: "2024" },
  { title: "Spring Boot & Microservices", issuer: "Coursera", year: "2024" },
];

const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "Product Manager",
    quote:
      "Roland's attention to quality is unmatched. He ships clean features and catches issues before they ever reach users.",
  },
  {
    name: "Daniel A.",
    role: "Senior Engineer",
    quote:
      "A rare mix of developer instinct and QA rigor. His automation framework saved us hours every release.",
  },
  {
    name: "Priya M.",
    role: "Engineering Lead",
    quote:
      "Reliable, thoughtful, and deeply technical. Roland raises the bar for the entire team.",
  },
];

const TECH_STACK = [
  "Java",
  "Spring Boot",
  "Python",
  "FastAPI",
  "React",
  "TypeScript",
  "Docker",
  "Git",
  "GitHub",
  "Firebase",
  "MySQL",
  "Selenium",
  "Postman",
  "Jenkins",
  "AWS",
  "Tailwind",
];

/* ---------- component ---------- */

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

  // dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
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
      () => setTestimonialIdx((v) => (v + 1) % TESTIMONIALS.length),
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
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
          >
            <span
              className="grid h-9 w-9 place-items-center rounded-xl text-white shadow-glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              RB
            </span>
            <span className="hidden sm:inline">Roland Bissah</span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 transition hover:bg-secondary"
            >
              {dark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 sm:inline-flex"
              style={{ background: "var(--gradient-primary)" }}
            >
              Hire Me
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            >
              {menuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="glass border-t border-border/50 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="rounded-lg px-3 py-3 text-left text-sm font-medium hover:bg-secondary"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative overflow-hidden pt-32 sm:pt-40">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{ background: "var(--gradient-hero)" }}
          />
          {/* particles / floating icons */}
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
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Hire Me{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={() => scrollTo("projects")}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-secondary"
                >
                  View Projects
                </button>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-80"
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
                  className="transition hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/roland-bissah-5b40b628b"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="transition hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:rolandbissah10@gmail.com"
                  aria-label="Email"
                  className="transition hover:text-foreground"
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

        {/* ABOUT */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"
        >
          <SectionHeader eyebrow="About" title="Engineer who ships and tests" />
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="reveal lg:col-span-3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a passionate{" "}
                <span className="text-foreground font-medium">
                  Full Stack Web Developer
                </span>{" "}
                and{" "}
                <span className="text-foreground font-medium">
                  Quality Assurance Engineer
                </span>{" "}
                dedicated to building secure, scalable, and user-friendly
                applications.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                I enjoy solving real-world problems through software engineering
                while ensuring software quality through manual and automated
                testing.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                I believe great software isn't just built - it is thoroughly
                tested, optimized, and continuously improved.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <Chip icon={<MapPin className="h-3.5 w-3.5" />}>
                  Remote / Worldwide
                </Chip>
                <Chip icon={<Briefcase className="h-3.5 w-3.5" />}>
                  Open to full-time & freelance
                </Chip>
                <Chip icon={<Award className="h-3.5 w-3.5" />}>
                  ISTQB-aligned QA
                </Chip>
              </div>
            </div>

            <div className="reveal grid grid-cols-2 gap-4 lg:col-span-2">
              {STATS.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="bg-secondary/40">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
            <SectionHeader
              eyebrow="Skills"
              title="A modern, well-rounded toolkit"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((s) => (
                <div
                  key={s.group}
                  className="reveal group rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl text-white"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      {s.icon}
                    </span>
                    <h3 className="font-display text-lg font-bold">
                      {s.group}
                    </h3>
                  </div>
                  <div className="mt-5 space-y-3">
                    {s.items.map((it) => (
                      <SkillBar key={it.name} name={it.name} level={it.level} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"
        >
          <SectionHeader eyebrow="Featured Projects" title="Selected work" />
          <div className="reveal mb-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  filter === f
                    ? "text-white shadow-glow"
                    : "border border-border bg-background hover:bg-secondary"
                }`}
                style={
                  filter === f
                    ? { background: "var(--gradient-primary)" }
                    : undefined
                }
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((p) => (
              <article
                key={p.title}
                className="reveal group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
                onClick={() => setActiveProject(p)}
              >
                <ProjectThumb title={p.title} tag={p.tag} />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold">
                      {p.title}
                    </h3>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      {p.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: "var(--brand-purple)" }}
                  >
                    View details{" "}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="bg-secondary/40">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
            <SectionHeader
              eyebrow="Experience"
              title="Where I've made an impact"
            />
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border sm:left-1/2" />
              <div className="space-y-10">
                {EXPERIENCE.map((e, i) => (
                  <div
                    key={e.role}
                    className={`reveal relative sm:grid sm:grid-cols-2 sm:gap-10 ${i % 2 === 1 ? "sm:[&>div:first-child]:col-start-2" : ""}`}
                  >
                    <div className="pl-10 sm:pl-0">
                      <span
                        className="absolute left-2.5 top-2 grid h-3 w-3 place-items-center rounded-full ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                        <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                          {e.period}
                        </div>
                        <h3 className="mt-1 font-display text-xl font-bold">
                          {e.role}
                        </h3>
                        <div className="text-sm text-muted-foreground">
                          {e.company}
                        </div>
                        <ul className="mt-4 space-y-2">
                          {e.points.map((pt) => (
                            <li
                              key={pt}
                              className="flex gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0"
                                style={{ color: "var(--brand-purple)" }}
                              />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"
        >
          <SectionHeader eyebrow="Services" title="How I can help" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="reveal group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl text-white transition group-hover:scale-110"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {s.icon}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Reliable, thoroughly tested delivery - from architecture to
                    production.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certs" className="bg-secondary/40">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
            <SectionHeader
              eyebrow="Certifications"
              title="Continuous learning"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CERTS.map((c) => (
                <div
                  key={c.title}
                  className="reveal relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <div
                    className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full"
                    style={{
                      background:
                        "color-mix(in oklab, var(--brand-gold) 25%, transparent)",
                      color: "var(--brand-gold)",
                    }}
                  >
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.year}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold">
                    {c.title}
                  </h3>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {c.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GITHUB */}
        <section
          id="github"
          className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"
        >
          <SectionHeader eyebrow="GitHub" title="Building in the open" />
          <div className="reveal grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5" />
                  <span className="font-display font-bold">
                    @RolandBissah10
                  </span>
                </div>
                <a
                  href="https://github.com/RolandBissah10/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold"
                  style={{ color: "var(--brand-purple)" }}
                >
                  Visit profile â†’
                </a>
              </div>
              <ContribGraph />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Repositories", value: "24+" },
                { label: "Followers", value: "48" },
                { label: "Stars", value: "120+" },
                { label: "Contributions", value: "600+" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <div className="font-display text-3xl font-extrabold gradient-text">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
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
                    className={`h-1.5 rounded-full transition-all ${i === testimonialIdx ? "w-8" : "w-3 bg-border"}`}
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

        {/* TECH STACK MARQUEE */}
        <section className="border-y border-border bg-background py-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 px-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:px-8">
              Tech I work with
            </div>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
              <div className="animate-marquee flex w-max gap-4">
                {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"
        >
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something great"
          />
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="reveal space-y-4 lg:col-span-2">
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
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const subject = encodeURIComponent(
                  `Portfolio inquiry from ${data.get("name")}`,
                );
                const body = encodeURIComponent(
                  `${data.get("message")}\n\n- ${data.get("name")} (${data.get("email")})`,
                );
                window.location.href = `mailto:rolandbissah10@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="reveal rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8 lg:col-span-3"
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
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={1000}
                  placeholder="Tell me about your projectâ€¦"
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
                >
                  <Calendar className="h-4 w-4" /> Schedule Meeting
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/roland-bissah-5b40b628b"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:rolandbissah10@gmail.com"
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            Â© {new Date().getFullYear()} Roland Bissah. Crafted with care.
          </div>
        </div>
      </footer>

      {/* floating contact + back to top */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card shadow-soft transition hover:-translate-y-0.5"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}
        <a
          href="mailto:rolandbissah10@gmail.com"
          aria-label="Contact"
          className="grid h-14 w-14 place-items-center rounded-full text-white shadow-glow transition hover:scale-105"
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

/* ---------- subcomponents ---------- */

function SectionHeader({
  eyebrow,
  title,
  centered,
}: {
  eyebrow: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div className={`reveal mb-10 ${centered ? "text-center" : ""}`}>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--brand-purple)" }}
        />
        {eyebrow}
      </div>
      <h2 className="mt-2.5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function Chip({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5">
      {icon}
      {children}
    </span>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const [displayLevel, setDisplayLevel] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (prefersReducedMotion) {
            setDisplayLevel(level);
            io.disconnect();
            return;
          }

          const start = performance.now();
          const duration = 1100;
          const step = (time: number) => {
            const progress = Math.min(1, (time - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayLevel(Math.round(level * eased));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
          io.disconnect();
        });
      },
      { threshold: 0.45 },
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-medium text-foreground">{name}</span>
        <span className="tabular-nums">{displayLevel}%</span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-secondary"
        role="progressbar"
        aria-label={`${name} skill level`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={displayLevel}
      >
        <div
          className="h-full rounded-full transition-[width] duration-200 ease-out"
          style={{
            background: "var(--gradient-primary)",
            width: `${displayLevel}%`,
          }}
        />
      </div>
    </div>
  );
}
function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1200;
            const step = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-5 shadow-soft"
    >
      <div className="font-display text-4xl font-extrabold tracking-tight">
        <span className="gradient-text">{n}</span>
        <span style={{ color: "var(--brand-gold)" }}>{suffix}</span>
      </div>
      <div className="mt-1 text-xs font-medium text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function FloatingIcons() {
  const icons = [
    Code2,
    TerminalSquare,
    TestTube2,
    Github,
    Cpu,
    Layers,
    Globe,
    Zap,
  ];
  const positions = [
    { top: "10%", left: "6%", delay: "0s" },
    { top: "18%", right: "8%", delay: "1.4s" },
    { top: "58%", left: "4%", delay: "0.8s" },
    { top: "70%", right: "12%", delay: "2.2s" },
    { top: "35%", left: "48%", delay: "1.9s" },
    { top: "82%", left: "42%", delay: "0.4s" },
    { top: "6%", left: "38%", delay: "2.8s" },
    { top: "48%", right: "4%", delay: "1.1s" },
  ];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {icons.map((Icon, i) => (
        <span
          key={i}
          className="animate-float-slow absolute grid h-11 w-11 place-items-center rounded-2xl border border-border bg-card/60 text-muted-foreground shadow-soft backdrop-blur"
          style={
            {
              ...positions[i],
              animationDelay: positions[i].delay,
            } as React.CSSProperties
          }
        >
          <Icon className="h-5 w-5" />
        </span>
      ))}
      {/* particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={`p${i}`}
          className="animate-float-slow absolute h-1 w-1 rounded-full"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            background:
              "color-mix(in oklab, var(--brand-purple) 60%, transparent)",
            animationDelay: `${(i % 6) * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="reveal relative mx-auto w-full max-w-md sm:aspect-square">
      <div
        className="absolute inset-4 rounded-[36px] blur-2xl opacity-70"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="glass relative flex h-full flex-col overflow-hidden rounded-[24px] p-3 shadow-glow sm:rounded-[32px] sm:p-5">
        {/* window chrome */}
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.18_25)] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.82_0.16_82)] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.18_150)] sm:h-3 sm:w-3" />
          <span className="ml-2 truncate text-[10px] font-mono text-muted-foreground sm:ml-3 sm:text-xs">
            ~/roland/portfolio
          </span>
        </div>
        <pre className="mt-3 flex-1 overflow-x-auto rounded-xl bg-[oklch(0.14_0.02_265)] p-3 text-[10px] leading-relaxed text-[oklch(0.9_0.02_260)] shadow-inner sm:mt-4 sm:rounded-2xl sm:p-4 sm:text-xs">
          {`const roland = {
  role: ["Full Stack Dev", "QA Engineer"],
  stack: ["React", "Spring", "FastAPI"],
  testing: ["Selenium", "RestAssured", "JUnit"],
  ships: (idea) => build(idea).then(test).then(deploy),
};

roland.ships("your next great product");`}
        </pre>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
          {[
            { l: "Tests", v: "1,240" },
            { l: "Coverage", v: "94%" },
            { l: "Builds", v: "âœ“ Passing" },
          ].map((m) => (
            <div
              key={m.l}
              className="rounded-xl border border-border bg-card/70 p-2.5 text-center"
            >
              <div className="font-display text-sm font-bold">{m.v}</div>
              <div className="text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
      {/* floating badge */}
      <div className="animate-float-slow absolute -right-3 -top-3 hidden rounded-2xl border border-border bg-card px-3 py-2 shadow-soft sm:block">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span
            className="grid h-6 w-6 place-items-center rounded-lg text-white"
            style={{ background: "var(--brand-gold)" }}
          >
            <Award className="h-3.5 w-3.5" />
          </span>
          Quality-first
        </div>
      </div>
    </div>
  );
}

function ProjectThumb({ title, tag }: { title: string; tag: string }) {
  return (
    <div
      className="relative flex h-44 items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 20%, color-mix(in oklab, var(--brand-purple) 40%, transparent), transparent 60%), radial-gradient(ellipse at 80% 80%, color-mix(in oklab, var(--brand-gold) 30%, transparent), transparent 60%), oklch(0.16 0.02 265)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, white 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, white 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative text-center text-white">
        <div className="text-xs uppercase tracking-[0.2em] opacity-70">
          {tag}
        </div>
        <div className="mt-1 font-display text-2xl font-bold">{title}</div>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof PROJECTS)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-t-3xl border border-border bg-card shadow-glow sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <ProjectThumb title={project.title} tag={project.tag} />
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {project.category}
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold">
                {project.title}
              </h3>
            </div>
            <button
              aria-label="Close"
              onClick={onClose}
              className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContribGraph() {
  const weeks = 26;
  const days = 7;
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const rnd = seed / 233280;
    const level =
      rnd < 0.35 ? 0 : rnd < 0.6 ? 1 : rnd < 0.8 ? 2 : rnd < 0.93 ? 3 : 4;
    return level;
  });
  const colors = [
    "oklch(0.94 0.005 260)",
    "color-mix(in oklab, var(--brand-purple) 25%, oklch(0.94 0.005 260))",
    "color-mix(in oklab, var(--brand-purple) 55%, oklch(0.94 0.005 260))",
    "color-mix(in oklab, var(--brand-purple) 80%, oklch(0.94 0.005 260))",
    "var(--brand-purple)",
  ];
  return (
    <div className="overflow-x-auto">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))`,
          gridAutoFlow: "column",
          gridTemplateRows: `repeat(${days}, 1fr)`,
        }}
      >
        {cells.map((lvl, i) => (
          <div
            key={i}
            className="aspect-square rounded-[3px]"
            style={{ background: colors[lvl] }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-muted-foreground">
        Less
        {colors.map((c, i) => (
          <span
            key={i}
            className="h-2.5 w-2.5 rounded-[2px]"
            style={{ background: c }}
          />
        ))}
        More
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
    >
      <span
        className="grid h-11 w-11 place-items-center rounded-xl text-white"
        style={{ background: "var(--gradient-primary)" }}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="truncate text-sm font-semibold">{value}</div>
      </div>
    </a>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
