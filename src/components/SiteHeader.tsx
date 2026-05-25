import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Journal" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to={"/" as string} className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="TamilCallBoy"
            width={40}
            height={40}
            className="h-9 w-9 md:h-10 md:w-10 object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)] transition-transform duration-500 group-hover:scale-105"
          />
          <span className="font-display text-xl md:text-2xl text-gradient-gold tracking-widest">
            TamilCallBoy
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to as string}
              className="link-underline font-sans text-sm tracking-[0.18em] uppercase text-foreground/80 hover:text-foreground transition"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong border-t border-border/40 mt-3">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to as string}
                onClick={() => setOpen(false)}
                className="font-sans text-sm tracking-[0.2em] uppercase text-foreground/85"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
