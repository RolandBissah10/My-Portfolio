import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV } from "@/data/constants";

interface HeaderProps {
  dark: boolean;
  setDark: (value: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  scrolled: boolean;
  scrollTo: (id: string) => void;
}

export function Header({
  dark,
  setDark,
  menuOpen,
  setMenuOpen,
  scrolled,
  scrollTo,
}: HeaderProps) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <button
          onClick={() => scrollTo("home")}
          className="cursor-pointer flex items-center gap-2 font-display text-lg font-bold tracking-tight"
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
              className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((v: boolean) => !v)}
            className="cursor-pointer grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 transition hover:bg-secondary"
          >
            {dark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="cursor-pointer hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 sm:inline-flex"
            style={{ background: "var(--gradient-primary)" }}
          >
            Hire Me
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v: boolean) => !v)}
            className="cursor-pointer grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
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
                className="cursor-pointer rounded-lg px-3 py-3 text-left text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
