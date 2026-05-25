import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { blogs } from "@/data/blogs";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";
import { Newsletter } from "@/components/Newsletter";
import { FAQ } from "./faq";
import { IDS } from "@/data/common";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tamilcallboy — Understanding Human Relationships Through Real Stories" },
      {
        name: "description",
        content:
          "Cinematic editorial blog for adults exploring emotional intimacy, psychology of attraction, communication, and modern relationships through interviews and essays.",
      },
      {
        property: "og:title",
        content: "Tamilcallboy — Understanding Human Relationships Through Real Stories",
      },
      {
        property: "og:description",
        content:
          "Interviews, essays and discussions on intimacy, communication, and trust between adults.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const TOPICS = [
  {
    title: "Emotional Intimacy",
    text: "The quieter, deeper language between partners — and how to learn it.",
  },
  {
    title: "Psychology of Attraction",
    text: "What science and story teach us about why we want who we want.",
  },
  {
    title: "Trust & Consent",
    text: "Building, repairing, and honoring the architecture of trust.",
  },
  { title: "Communication", text: "The discipline of speaking — and listening — with intention." },
  {
    title: "Couple Wellness",
    text: "Habits, rituals and reflections for a sustained partnership.",
  },
  { title: "Emotional Recovery", text: "Gentle frameworks for healing after difficult chapters." },
];

const TESTIMONIALS = [
  {
    quote:
      "The most thoughtful writing I've read on adult relationships in years. Cinematic and honest.",
    name: "Ana M.",
    role: "Reader, Lisbon",
  },
  {
    quote: "Finally a space that takes intimacy seriously — without being clinical or sensational.",
    name: "Devon R.",
    role: "Therapist, Brooklyn",
  },
  {
    quote: "Their interviews feel like overhearing a real, important conversation.",
    name: "Priya S.",
    role: "Reader, Mumbai",
  },
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
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 30%, var(--background) 90%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-32">
          <Reveal>
            <p className="font-display text-xs md:text-sm tracking-[0.5em] text-primary uppercase mb-8">
              — Male Escort or Callboy or Gigolo or Bull —
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-8">
              <span className="text-foreground">No payment is required.</span>
              <span className="block shimmer-gold italic"> Get your Sexual Pleasure</span>
              <span className="text-foreground/90 font-serif italic text-2xl md:text-4xl">
                I'm 26, a safe and trustworthy person. Telegram ID: {IDS.telegramId}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="font-serif text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              I will do all your dark fantasy dreams to come true how dark its fine i will do. I'm
              26 male Looking for girl's must 18+ and womens less then 40 age can connect with me
              and I support cuck couple also.
            </p>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/60 text-xs tracking-[0.4em] uppercase float-slow">
          Scroll
        </div>
      </section>

      <section className="py-28 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-3">
                About Us
              </p>

              <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We are two best friends who have known each other since childhood. Both of us are
                well-educated, physically active, and passionate about understanding human sexual
                relationships, emotional connection, and modern lifestyle experiences.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10">
            <Reveal delay={100}>
              <div className="glass-panel rounded-3xl p-8 border border-border/40">
                <h3 className="font-display text-2xl text-primary mb-5">Who We Are</h3>

                <p className="text-muted-foreground leading-relaxed mb-5">
                  We believe many adults are interested in exploring new perspectives, deeper
                  communication, and meaningful sexual connections in life. Through this platform,
                  we aim to create open and respectful conversations around sexual relationships,
                  trust, emotional wellbeing, and personal experiences.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Health, safety, and honesty are very important to us. We maintain a healthy
                  lifestyle and regularly prioritize personal wellbeing and responsibility.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="glass-panel rounded-3xl p-8 border border-border/40">
                <h3 className="font-display text-2xl text-primary mb-5">About Us</h3>

                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Zayn (name changed for privacy)
                    </h4>
                    <ul className="space-y-1">
                      <li>• Height: 175 cm</li>
                      <li>• Weight: 74 kg</li>
                      <li>• Body Type: Athlet</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Arjun (name changed for privacy)
                    </h4>
                    <ul className="space-y-1">
                      <li>• Height: 180 cm</li>
                      <li>• Weight: 70 kg</li>
                      <li>• Physically fit and active lifestyle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-10">
            <Reveal delay={300}>
              <div className="glass-panel rounded-3xl p-8 border border-border/40">
                <h3 className="font-display text-2xl text-primary mb-5">What We Expect</h3>

                <p className="text-muted-foreground leading-relaxed">
                  We value genuine, respectful, and trustworthy people who are interested in mutual
                  sex partner and meaningful connections to full fill all your dark fantasy. Mutual
                  respect, privacy, comfort, and honesty are always our priorities.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="glass-panel rounded-3xl p-8 border border-border/40">
                <h3 className="font-display text-2xl text-primary mb-5">Travel & Meeting Policy</h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  If we ever plan a real-life meeting for sex, we only expect basic travel expense
                  support.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We prefer simple and practical travel arrangements and do not seek luxury or
                  financial gain.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={500}>
            <div className="mt-12 text-center max-w-4xl mx-auto">
              <p className="text-muted-foreground leading-relaxed text-lg">
                This platform is built for personal life exploring,It's 100 percentage safe and
                secure this is personal website.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-3">
                About Our Platform
              </p>

              <h2 className="font-display text-4xl md:text-6xl text-gradient-gold">
                Trust, Respect & Genuine Connections
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal delay={80}>
              <div className="glass gold-border rounded-xl p-8 h-full hover-lift">
                <div className="h-px w-10 bg-gradient-gold mb-5" />

                <h3 className="font-display text-2xl text-foreground mb-3">Who We Are</h3>

                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  We are two genuine and trustworthy individuals, both aged 26, who believe in
                  honest communication, mutual respect, and meaningful human connections.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="glass gold-border rounded-xl p-8 h-full hover-lift">
                <div className="h-px w-10 bg-gradient-gold mb-5" />

                <h3 className="font-display text-2xl text-foreground mb-3">Our Perspective</h3>

                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  We understand that many adults today are looking for trustworthy, respectful, and
                  genuine people to connect with and share personal experiences, conversations, and
                  emotional understanding.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="glass gold-border rounded-xl p-8 h-full hover-lift">
                <div className="h-px w-10 bg-gradient-gold mb-5" />

                <h3 className="font-display text-2xl text-foreground mb-3">Individual Choice</h3>

                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  We currently live in separate locations, and people are free to connect with the
                  person they feel most comfortable talking to or interacting with.
                </p>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="glass gold-border rounded-xl p-8 h-full hover-lift">
                <div className="h-px w-10 bg-gradient-gold mb-5" />

                <h3 className="font-display text-2xl text-foreground mb-3">
                  Respect & Transparency
                </h3>

                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  We are not paid service providers. This platform is based on mutual respect,
                  openness, trust, and shared interests in understanding modern relationships and
                  personal experiences.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="glass gold-border rounded-xl p-8 h-full hover-lift">
                <div className="h-px w-10 bg-gradient-gold mb-5" />

                <h3 className="font-display text-2xl text-foreground mb-3">
                  Personal Life Balance
                </h3>

                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  Apart from this platform, we both focus on our personal goals, careers, and
                  everyday lives while maintaining a healthy and balanced lifestyle.
                </p>
              </div>
            </Reveal>

            <Reveal delay={480}>
              <div className="glass gold-border rounded-xl p-8 h-full hover-lift">
                <div className="h-px w-10 bg-gradient-gold mb-5" />

                <h3 className="font-display text-2xl text-foreground mb-3">Safe Environment</h3>

                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  Our platform is built around privacy, comfort, respectful conversations, and
                  creating a safe environment for mature and meaningful discussions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
