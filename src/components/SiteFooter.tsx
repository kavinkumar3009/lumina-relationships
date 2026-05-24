import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl text-gradient-gold tracking-widest mb-4">NOIR &amp; OR</h3>
            <p className="font-serif text-lg text-muted-foreground max-w-md leading-relaxed">
              An editorial study of modern relationships — intimacy, psychology, communication, and the quiet
              architecture of human connection.
            </p>
            <div className="flex items-center gap-4 mt-8">
              {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-10 w-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/60 transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-5">Explore</h4>
            <ul className="space-y-3 font-serif text-base text-muted-foreground">
              <li><Link to="/blog" className="link-underline">Journal</Link></li>
              <li><Link to="/about" className="link-underline">About Us</Link></li>
              <li><Link to="/faq" className="link-underline">FAQ</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-5">Legal</h4>
            <ul className="space-y-3 font-serif text-base text-muted-foreground">
              <li><Link to="/privacy" className="link-underline">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="link-underline">Disclaimer</Link></li>
              <li><span className="text-muted-foreground/70">18+ Adults Only</span></li>
            </ul>
          </div>
        </div>

        <div className="divider-gold mt-16 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase text-muted-foreground/70">
          <p>© {new Date().getFullYear()} Noir &amp; Or Editorial</p>
          <p>Crafted with intention. For mature audiences.</p>
        </div>
      </div>
    </footer>
  );
}
