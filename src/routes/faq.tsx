import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Noir & Or" },
      { name: "description", content: "Answers to common questions about our editorial approach, anonymity policy, and the mature audience focus of Noir & Or." },
      { property: "og:title", content: "FAQ — Noir & Or" },
      { property: "og:description", content: "Frequently asked questions." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQ,
});

const FAQS = [
  { q: "Is this site only for adults?", a: "Yes. Our content is intended for readers aged 18 and over. We require age verification on first visit." },
  { q: "Is the content explicit?", a: "No. We focus on educational, psychological, and emotional dimensions of adult relationships — not graphic content." },
  { q: "How do you protect interview subjects?", a: "All subjects are anonymized by default. Names, locations, and identifying details are changed or withheld, and participants may withdraw at any time." },
  { q: "Is this a substitute for therapy?", a: "No. Our writing is educational and reflective. It is not medical, psychological, or legal advice." },
  { q: "Can I submit a story?", a: "Yes. Write to our editorial desk via the contact page. We respond to every thoughtful submission." },
  { q: "Who writes for Noir & Or?", a: "Our small editorial team of two, supported by contributing interviewers and reviewers with backgrounds in psychology and journalism." },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="py-24 px-6 text-center">
        <Reveal>
          <p className="font-display text-xs tracking-[0.5em] text-primary uppercase mb-5">Questions</p>
          <h1 className="font-display text-5xl md:text-7xl text-gradient-gold mb-4">Frequently Asked</h1>
          <p className="font-serif text-lg text-muted-foreground max-w-xl mx-auto">A few answers, offered openly.</p>
        </Reveal>
      </section>
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className={`glass gold-border rounded-xl overflow-hidden transition-all ${isOpen ? "bg-foreground/[0.02]" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display text-lg md:text-xl text-foreground">{f.q}</span>
                    <span className="text-primary shrink-0">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 -mt-2">
                      <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
