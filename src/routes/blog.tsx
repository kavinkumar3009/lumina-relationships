import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { blogs, CATEGORIES } from "@/data/blogs";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The Journal — Essays & Interviews on Modern Relationships | Noir & Or" },
      { name: "description", content: "Browse our editorial journal of essays and anonymous interviews on intimacy, psychology of attraction, trust, communication, and emotional recovery." },
      { property: "og:title", content: "The Journal — Noir & Or" },
      { property: "og:description", content: "Essays and anonymous interviews on adult relationships." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const inCat = cat === "All" || b.category === cat;
      const term = q.trim().toLowerCase();
      const inTerm =
        !term ||
        b.title.toLowerCase().includes(term) ||
        b.excerpt.toLowerCase().includes(term) ||
        b.tags.some((t) => t.toLowerCase().includes(term));
      return inCat && inTerm;
    });
  }, [cat, q]);

  return (
    <>
      <section className="py-24 px-6 text-center">
        <Reveal>
          <p className="font-display text-xs tracking-[0.5em] text-primary uppercase mb-5">The Journal</p>
          <h1 className="font-display text-5xl md:text-7xl text-gradient-gold mb-6">Essays & Interviews</h1>
          <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A growing archive of writing on intimacy, attraction, trust, and the modern practice of love.
          </p>
        </Reveal>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <div className="relative max-w-xl mx-auto w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search essays, interviews, tags..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-background/60 border border-border focus:border-primary/60 focus:outline-none text-foreground placeholder:text-muted-foreground/60"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase transition border ${
                  cat === c
                    ? "bg-gradient-gold text-primary-foreground border-transparent shadow-gold"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center font-serif text-muted-foreground py-20">No essays match your search.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <BlogCard post={p} priority={i < 3} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
