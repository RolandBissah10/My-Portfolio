import type { Dispatch, SetStateAction } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV } from "@/data/constants";
import { buttonPrimary } from "@/components/ui/button";

interface HeaderProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
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
      className={`fixed inset-x-0 top-0 z-50 border-b bg-background transition-colors ${
        scrolled || menuOpen ? "border-border" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <button
          onClick={() => scrollTo("home")}
          className="cursor-pointer text-base font-semibold"
        >
          Roland Bissah
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            onClick={() => setDark((v) => !v)}
            className="grid h-9 w-9 cursor-pointer place-items-center rounded-md border border-border transition-colors hover:bg-secondary"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <div className="hidden sm:block">
            <button
              onClick={() => scrollTo("contact")}
              className={buttonPrimary}
            >
              Contact me
            </button>
          </div>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-9 w-9 cursor-pointer place-items-center rounded-md border border-border lg:hidden"
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
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="cursor-pointer rounded-md px-2 py-3 text-left text-sm hover:bg-secondary"
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
