export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const TITLES = [
  "Full Stack Web Developer",
  "Quality Assurance Engineer",
  "Test Automation Specialist",
  "API Testing Expert",
];

export const STATS = [
  { label: "Years Learning", value: 4, suffix: "+" },
  { label: "Projects Completed", value: 25, suffix: "+" },
  { label: "Technologies Used", value: 30, suffix: "+" },
  { label: "Certificates", value: 8, suffix: "" },
  { label: "GitHub Contributions", value: 600, suffix: "+" },
];

export const SKILLS: {
  group: string;
  iconName: string;
  items: { name: string; level: number }[];
}[] = [
  {
    group: "Frontend",
    iconName: "Globe",
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
    iconName: "TerminalSquare",
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
    iconName: "Layers",
    items: [
      { name: "MySQL", level: 88 },
      { name: "Firebase", level: 82 },
      { name: "H2 Database", level: 78 },
    ],
  },
  {
    group: "Testing & QA",
    iconName: "TestTube2",
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
    iconName: "Cpu",
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
    iconName: "Zap",
    items: [
      { name: "AWS (Learning)", level: 55 },
      { name: "Firebase", level: 82 },
    ],
  },
];

export const PROJECTS = [
  {
    title: "QAAS — QA as a Service",
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

export const SERVICES = [
  { title: "Full Stack Web Development", iconName: "Code2" },
  { title: "Quality Assurance", iconName: "CheckCircle2" },
  { title: "Test Automation", iconName: "Zap" },
  { title: "API Testing", iconName: "TerminalSquare" },
  { title: "Web Application Development", iconName: "Globe" },
  { title: "Bug Investigation", iconName: "TestTube2" },
  {
    title: "Software Testing Consulting",
    iconName: "Briefcase",
  },
];

export const CERTS = [
  { title: "Full Stack Web Development", issuer: "Coursera", year: "2024" },
  { title: "Software Testing Foundations", issuer: "ISTQB Prep", year: "2024" },
  { title: "Java Programming Masterclass", issuer: "Udemy", year: "2023" },
  { title: "Selenium WebDriver with Java", issuer: "Udemy", year: "2024" },
  { title: "REST API Testing with Postman", issuer: "Udemy", year: "2024" },
  { title: "Spring Boot & Microservices", issuer: "Coursera", year: "2024" },
];

export const TESTIMONIALS = [
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

export const TECH_STACK = [
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

export const GITHUB_STATS = [
  { label: "Repositories", value: "24+" },
  { label: "Followers", value: "48" },
  { label: "Stars", value: "120+" },
  { label: "Contributions", value: "600+" },
];
