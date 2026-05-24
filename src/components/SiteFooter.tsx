import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl text-gradient-gold tracking-widest mb-4">Tamilcallboy</h3>
            <p className="font-serif text-lg text-muted-foreground max-w-md leading-relaxed">
              We support all modern relationships — Like Women looking for men, Fullfill womens Pleasure, Dominating Bull for cuck / cuckold couple.
            </p>

          </div>
        </div>
        <div className="divider-gold mt-16 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase text-muted-foreground/70">
          <p>© {new Date().getFullYear()} Tamilcallboy</p>
          <p>Crafted with intention. For mature audiences.</p>
        </div>
      </div>
    </footer>
  );
}
