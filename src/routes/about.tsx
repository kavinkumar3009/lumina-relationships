import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Heart, Shield, BookOpen, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Noir & Or" },
      { name: "description", content: "Two educated individuals creating a respectful editorial platform for mature, educational discussion of human relationships, intimacy, and connection." },
      { property: "og:title", content: "About — Noir & Or" },
      { property: "og:description", content: "Our mission, values and editorial approach to mature relationship journalism." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { icon: Heart, title: "Empathy", text: "Every story is held with care. We write about people, not topics." },
  { icon: Shield, title: "Privacy", text: "Anonymity is sacred. Interview subjects are protected without exception." },
  { icon: BookOpen, title: "Education", text: "Our purpose is understanding — not entertainment, not titillation." },
  { icon: Users, title: "Respect", text: "Mature discussions require mature posture. We hold a high editorial bar." },
];

function About() {
  return (
    <>
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="font-display text-xs tracking-[0.5em] text-primary uppercase mb-6">About</p>
            <h1 className="font-display text-5xl md:text-7xl text-gradient-gold mb-8 leading-tight">
              A Quiet Study<br/>of Human Connection
            </h1>
            <div className="mx-auto h-px w-20 bg-gradient-gold mb-10" />
            <p className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed">
              We are two educated individuals passionate about understanding human emotions,
              relationships, communication, and emotional wellbeing.
            </p>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mt-6">
              Through conversations, interviews, and educational articles, we aim to create a respectful
              platform for mature discussions and a better understanding of human connection.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-4">Our Mission</p>
            <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-6">To listen, and to understand.</h2>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed">
              We believe adult relationships deserve thoughtful, honest writing — the kind that treats
              readers as intelligent adults, and treats subjects as full human beings. Our work sits at the
              intersection of journalism, psychology, and editorial craft.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="glass-strong gold-border rounded-2xl p-10">
              <p className="font-serif italic text-2xl text-foreground/95 leading-relaxed">
                "What we publish, we would be proud to read aloud to someone we love."
              </p>
              <p className="mt-6 text-xs tracking-[0.3em] uppercase text-primary">— Editorial principle</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-3">Values</p>
              <h2 className="font-display text-4xl md:text-5xl text-gradient-gold">What Guides Us</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="glass rounded-xl p-8 h-full text-center hover-lift">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground mb-5">
                    <v.icon size={22} />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">{v.title}</h3>
                  <p className="font-serif text-base text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass-strong rounded-xl p-10 h-full">
              <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Privacy & Anonymity</p>
              <h3 className="font-display text-2xl text-foreground mb-4">A protected conversation</h3>
              <p className="font-serif text-base text-muted-foreground leading-relaxed">
                Interview participants are anonymized by default. Names, places, and identifying details are
                changed or withheld. Consent is ongoing — anyone may withdraw their story at any time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-strong rounded-xl p-10 h-full">
              <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Educational Purpose</p>
              <h3 className="font-display text-2xl text-foreground mb-4">Discussion, not display</h3>
              <p className="font-serif text-base text-muted-foreground leading-relaxed">
                Our content is intended for adult readers as a resource for reflection and education. It is
                not a substitute for therapy, medical, or legal advice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl text-gradient-gold mb-6">Begin with a story.</h2>
          <Link to="/blog" className="inline-flex px-8 py-4 rounded-md bg-gradient-gold text-primary-foreground tracking-[0.15em] uppercase text-sm shadow-gold">
            Read the Journal
          </Link>
        </Reveal>
      </section>
    </>
  );
}
