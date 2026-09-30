export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { label: "Years learning to code", value: "3+" },
  { label: "Public GitHub repositories", value: "18" },
  { label: "GitHub contributions in the last year", value: "600+" },
  { label: "Certificates", value: "6" },
];

export const SKILLS: {
  group: string;
  items: { name: string; level: number }[];
}[] = [
  {
    group: "Frontend",
    items: [
      { name: "React", level: 50 },
      { name: "TypeScript", level: 50 },
      { name: "JavaScript", level: 65 },
      { name: "Tailwind CSS", level: 75 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Java", level: 70 },
      { name: "Spring Boot", level: 65 },
      { name: "Python", level: 70 },
      { name: "FastAPI", level: 60 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    group: "Database",
    items: [
      { name: "MySQL", level: 70 },
      { name: "Firebase", level: 62 },
      { name: "H2 Database", level: 78 },
    ],
  },
  {
    group: "Testing & QA",
    items: [
      { name: "Selenium", level: 84 },
      { name: "Playwright", level: 85 },
      { name: "RestAssured", level: 88 },
      { name: "Postman", level: 94 },
      { name: "JUnit", level: 87 },
      { name: "Manual Testing", level: 95 },
      { name: "API Testing", level: 88 },
      { name: "Test Automation", level: 80 },
    ],
  },
  {
    group: "DevOps & Tools",
    items: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 94 },
      { name: "Docker", level: 78 },
      { name: "Jenkins", level: 67 },
      { name: "Maven", level: 70 },
      { name: "Linux", level: 78 },
    ],
  },
  {
    group: "Cloud",
    items: [
      { name: "AWS", level: 55 },
      { name: "Firebase", level: 60 },
    ],
  },
];

export const PROJECTS = [
  {
    title: "QAAS (QA as a Service)",
    tag: "AI / QA Platform",
    category: "AI",
    description:
      "AI-powered QA platform that crawls any URL, generates and executes Playwright/REST-Assured tests via Claude, auto-detects bugs, and reports results across multi-tenant team workspaces.",
    tech: ["React", "TypeScript", "Java", "Spring Boot", "Playwright"],
    repoUrl: "https://github.com/RolandBissah10/QAAS",
    liveUrl: undefined,
  },
  {
    title: "Smart Job Alert System",
    tag: "Full Stack",
    category: "Web",
    description:
      "FastAPI-based job scraper and alert platform that tracks listings, matches user preferences by keyword ranking, and sends automated notifications on a scheduler.",
    tech: ["FastAPI", "Python", "MongoDB", "JavaScript"],
    repoUrl: "https://github.com/RolandBissah10/Smart-Job-Alert-System",
    liveUrl: "https://smart-job-alert.netlify.app/",
  },
  {
    title: "Todo Management API",
    tag: "Backend API",
    category: "Web",
    description:
      "Professional RESTful task management API built with Spring Boot and Java 17, demonstrating Agile/DevOps best practices with 92% test coverage.",
    tech: ["Java", "Spring Boot", "Maven", "JUnit"],
    repoUrl: "https://github.com/RolandBissah10/Todo-Management-API",
    liveUrl: undefined,
  },
  {
    title: "Hospital Management System",
    tag: "Enterprise",
    category: "Web",
    description:
      "JavaFX desktop application for hospital operations with a hybrid MySQL + MongoDB architecture across patients, doctors, appointments, and inventory.",
    tech: ["Java", "JavaFX", "MySQL", "MongoDB"],
    repoUrl: "https://github.com/RolandBissah10/HospitalManagementSystem",
    liveUrl: undefined,
  },
  {
    title: "InspireHope Foundation",
    tag: "Frontend",
    category: "Web",
    description:
      "Responsive React + Vite landing site for a nonprofit foundation, with hero, impact, programs, events, and contact sections plus a mobile-friendly nav.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    repoUrl: "https://github.com/RolandBissah10/INSPIREHOPE_FOUNDATION",
    liveUrl: "https://inspirehopefoundation.netlify.app/",
  },
  {
    title: "API Testing With RestAssured",
    tag: "Automation",
    category: "QA",
    description:
      "REST API test automation framework in Java using REST Assured and JUnit 5, covering CRUD operations across six endpoints with JSON schema validation and Allure reporting.",
    tech: ["Java", "REST Assured", "JUnit 5", "Allure"],
    repoUrl: "https://github.com/RolandBissah10/API-Testing-With-RestAssured",
    liveUrl: undefined,
  },
];

export const FILTERS = ["All", "Web", "AI", "QA"] as const;

export const EXPERIENCE = [
  {
    role: "Quality Assurance Engineer",
    company: "Software services company",
    period: "2025 - Present",
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
    role: "Backend Developer (Freelance)",
    company: "Independent Projects",
    period: "2024 - 2025",
    points: [
      "Built React + Spring Boot applications end-to-end",
      "Designed relational schemas and REST APIs",
      "Deployed containerized services with Docker",
    ],
  },
];

export const SERVICES = [
  {
    title: "Backend development",
    iconName: "Code2",
    description:
      "REST APIs and services in Spring Boot or FastAPI, backed by MySQL or Firebase.",
  },
  {
    title: "Quality assurance",
    iconName: "CheckCircle2",
    description:
      "Test plans, manual test cases, and defect tracking through to a verified fix.",
  },
  {
    title: "Test automation",
    iconName: "Zap",
    description:
      "Selenium and JUnit regression suites that can run in a Jenkins pipeline.",
  },
  {
    title: "API testing",
    iconName: "TerminalSquare",
    description:
      "Postman collections and RestAssured suites covering CRUD flows, status codes, and JSON schemas.",
  },
  {
    title: "Bug investigation",
    iconName: "TestTube2",
    description:
      "Reproducing reported issues, narrowing down the cause, and writing reports developers can act on.",
  },
  {
    title: "Testing consulting",
    iconName: "Briefcase",
    description:
      "Reviewing your current test approach and pointing out where automation would save the most time.",
  },
];

export const CERTS = [
  { title: "Backend Development", issuer: "Coursera", year: "2024" },
  { title: "Software Testing Foundations", issuer: "ISTQB Prep", year: "2024" },
  { title: "Playwright with Java", issuer: "Udemy", year: "2023" },
  { title: "Selenium WebDriver with Java", issuer: "Udemy", year: "2024" },
  { title: "REST API Testing with Postman", issuer: "Udemy", year: "2024" },
  { title: "Spring Boot & Microservices", issuer: "Coursera", year: "2024" },
];

export const TESTIMONIALS = [
  {
    name: "Geoffrey Dadzie",
    role: "Product Manager",
    quote:
      "Roland's attention to quality is unmatched. He ships clean features and catches issues before they ever reach users.",
  },
  {
    name: "Gloria Tampuri",
    role: "Senior QA Engineer",
    quote:
      "A rare mix of developer instinct and QA rigor. His automation framework saved us hours every release.",
  },
  {
    name: "Francis Nsiah",
    role: "Engineering Lead",
    quote:
      "Reliable, thoughtful, and deeply technical. Roland raises the bar for the entire team.",
  },
];
