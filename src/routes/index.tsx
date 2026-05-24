import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { blogs } from "@/data/blogs";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";
import { Newsletter } from "@/components/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Noir & Or — Understanding Human Relationships Through Real Stories" },
      { name: "description", content: "Cinematic editorial blog for adults exploring emotional intimacy, psychology of attraction, communication, and modern relationships through interviews and essays." },
      { property: "og:title", content: "Noir & Or — Understanding Human Relationships Through Real Stories" },
      { property: "og:description", content: "Interviews, essays and discussions on intimacy, communication, and trust between adults." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const TOPICS = [
  { title: "Emotional Intimacy", text: "The quieter, deeper language between partners — and how to learn it." },
  { title: "Psychology of Attraction", text: "What science and story teach us about why we want who we want." },
  { title: "Trust & Consent", text: "Building, repairing, and honoring the architecture of trust." },
  { title: "Communication", text: "The discipline of speaking — and listening — with intention." },
  { title: "Couple Wellness", text: "Habits, rituals and reflections for a sustained partnership." },
  { title: "Emotional Recovery", text: "Gentle frameworks for healing after difficult chapters." },
];

const TESTIMONIALS = [
  { quote: "The most thoughtful writing I've read on adult relationships in years. Cinematic and honest.", name: "Ana M.", role: "Reader, Lisbon" },
  { quote: "Finally a space that takes intimacy seriously — without being clinical or sensational.", name: "Devon R.", role: "Therapist, Brooklyn" },
  { quote: "Their interviews feel like overhearing a real, important conversation.", name: "Priya S.", role: "Reader, Mumbai" },
];

function Home() {
  const featured = blogs.slice(0, 3);
  const interviews = blogs.filter((b) => b.category === "Interviews");

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Cinematic silhouette of a couple in golden light"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, var(--background) 90%)" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-32">
          <Reveal>
            <p className="font-display text-xs md:text-sm tracking-[0.5em] text-primary uppercase mb-8">
              — An Editorial Study —
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-8">
              <span className="text-foreground">Understanding</span>
              <span className="block shimmer-gold italic">Human Relationships</span>
              <span className="text-foreground/90 font-serif italic text-3xl md:text-5xl">through real stories</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="font-serif text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              We explore emotional connection, intimacy, psychology, communication, and modern
              relationships — through interviews, discussions, and educational essays.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-gradient-gold text-primary-foreground font-medium tracking-[0.15em] uppercase text-sm shadow-gold hover:brightness-110 transition"
              >
                Explore Blogs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md glass gold-border text-foreground font-medium tracking-[0.15em] uppercase text-sm hover:bg-foreground/5 transition"
              >
                About Us
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/60 text-xs tracking-[0.4em] uppercase float-slow">
          Scroll
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-3">Featured Essays</p>
                <h2 className="font-display text-4xl md:text-6xl text-gradient-gold">The Latest Reflections</h2>
              </div>
              <Link to="/blog" className="link-underline text-sm tracking-[0.25em] uppercase text-foreground/80 self-start md:self-auto">
                View the Journal →
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <BlogCard post={p} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERVIEWS HIGHLIGHT */}
      <section className="py-28 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-3">Anonymous Interviews</p>
              <h2 className="font-display text-4xl md:text-6xl text-gradient-gold mb-5">Real Voices, Carefully Held</h2>
              <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Stories shared in confidence — about love, longing, repair, and the slow practice of staying.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {interviews.slice(0, 2).map((p, i) => (
              <Reveal key={p.slug} delay={i * 150}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-3">Relationship Wellness</p>
              <h2 className="font-display text-4xl md:text-6xl text-gradient-gold">Topics We Explore</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOPICS.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="glass gold-border rounded-xl p-8 h-full hover-lift">
                  <div className="h-px w-10 bg-gradient-gold mb-5" />
                  <h3 className="font-display text-2xl text-foreground mb-3">{t.title}</h3>
                  <p className="font-serif text-base text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-3">Readers</p>
              <h2 className="font-display text-4xl md:text-6xl text-gradient-gold">In Their Words</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="glass-strong rounded-xl p-8 h-full flex flex-col">
                  <Quote className="text-primary mb-5" size={28} />
                  <blockquote className="font-serif text-lg text-foreground/90 leading-relaxed italic mb-6 flex-1">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
                    <span className="text-primary">{t.name}</span> — {t.role}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
