import { Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import type { BlogPost } from "@/data/blogs";

export function BlogCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group block hover-lift rounded-xl overflow-hidden glass gold-border"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          width={1024}
          height={768}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.3em] uppercase glass-strong text-primary rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-foreground group-hover:text-gradient-gold transition mb-3 leading-tight">
          {post.title}
        </h3>
        <p className="font-serif text-base text-muted-foreground leading-relaxed line-clamp-2 mb-5">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs tracking-widest uppercase text-muted-foreground/80">
          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          <span className="flex items-center gap-1.5"><Clock size={12} />{post.readingTime} min</span>
        </div>
      </div>
    </Link>
  );
}
