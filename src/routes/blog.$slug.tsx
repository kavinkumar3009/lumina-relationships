import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, ArrowLeft } from "lucide-react";
import { getPostBySlug, getRelated } from "@/data/blogs";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Essay — Noir & Or" }] };
    return {
      meta: [
        { title: `${post.title} — Noir & Or` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${post.slug}` },
        { property: "og:image", content: post.image },
        { name: "twitter:image", content: post.image },
        { name: "article:published_time", content: post.date },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: post.author },
            image: post.image,
            articleSection: post.category,
            keywords: post.tags.join(", "),
          }),
        },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <div className="py-32 text-center font-serif text-muted-foreground">Essay not found.</div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="py-32 text-center">
      <p className="font-serif text-muted-foreground mb-4">{(error as Error).message}</p>
      <button onClick={reset} className="px-5 py-2 rounded bg-gradient-gold text-primary-foreground">Retry</button>
    </div>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = getRelated(post.slug, post.category);

  return (
    <article className="pb-24">
      {/* Hero */}
      <header className="relative">
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        <div className="max-w-3xl mx-auto px-6 -mt-32 relative z-10 text-center">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary mb-6 link-underline">
              <ArrowLeft size={14} /> Back to Journal
            </Link>
            <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-4">{post.category}</p>
            <h1 className="font-display text-4xl md:text-6xl text-gradient-gold leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-5 text-xs tracking-widest uppercase text-muted-foreground">
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span className="flex items-center gap-1.5"><Clock size={12} />{post.readingTime} min read</span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-2xl mx-auto px-6 mt-16">
        <Reveal>
          <p className="font-serif text-2xl md:text-3xl text-foreground/95 leading-relaxed italic mb-10 first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-gradient-gold">
            {post.content[0]}
          </p>
        </Reveal>
        {post.content.slice(1).map((p, i) => (
          <Reveal key={i} delay={i * 80}>
            <p className="font-serif text-lg md:text-xl text-foreground/85 leading-[1.85] mb-7">{p}</p>
          </Reveal>
        ))}

        <div className="divider-gold my-12" />

        <div className="flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full glass text-xs tracking-widest uppercase text-muted-foreground">
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-28 px-6">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-3 text-center">Continue reading</p>
              <h2 className="font-display text-4xl md:text-5xl text-gradient-gold text-center mb-14">Related Essays</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((p) => <BlogCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
