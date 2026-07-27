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
