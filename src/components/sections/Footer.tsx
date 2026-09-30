import { Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  {
    href: "https://github.com/RolandBissah10/",
    label: "GitHub",
    icon: <Github className="h-4 w-4" />,
  },
  {
    href: "https://www.linkedin.com/in/roland-bissah-5b40b628b",
    label: "LinkedIn",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    href: "mailto:rolandbissah10@gmail.com",
    label: "Email",
    icon: <Mail className="h-4 w-4" />,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:pb-24 sm:items-center sm:justify-between sm:px-8">
        <div>© {new Date().getFullYear()} Roland Bissah</div>
        <div className="flex items-center gap-5">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={l.label}
              className="transition-colors hover:text-foreground"
            >
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
