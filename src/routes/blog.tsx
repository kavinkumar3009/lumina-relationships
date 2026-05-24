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
          <h1 className="font-display text-5xl md:text-7xl text-gradient-gold mb-6">Stories by Anonymous People or Ourselves</h1>
          <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Notes: Enga nega padekura stories elame <span className="font-bold">Tanglish</span> tha irukum, Ethula iruga stories elame 100 % true ila athukunu fasle ila based on true stories we make it.
          </p>
        </Reveal>
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
