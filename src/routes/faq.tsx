import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { IDS } from "@/data/common";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Noir & Or" },
      {
        name: "description",
        content:
          "Answers to common questions about our editorial approach, anonymity policy, and the mature audience focus of Noir & Or.",
      },
      { property: "og:title", content: "FAQ — Noir & Or" },
      { property: "og:description", content: "Frequently asked questions." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
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
      },
    ],
  }),
  component: FAQ,
});

export const FAQS = [
  {
    q: "Is this platform safe and private?",
    a: "Yes. Privacy, safety, and mutual respect are very important to us. We do not share personal conversations or information with anyone.",
  },

  {
    q: "Is this a paid service?",
    a: "No. We are not paid service providers, call boys, or gigolos.",
  },
  {
    q: "What is the purpose of this website?",
    a: "To get mutual sexual pleasure.",
  },
  {
    q: "Do you share personal details publicly?",
    a: "No. For privacy and safety reasons, we avoid sharing sensitive personal information publicly.",
  },
  {
    q: "How can I contact you?",
    a: `You can contact us through Telegram with a respectful and formal message (ID: ${IDS.telegramId}).`,
  },
  {
    q: "Do you expect payment?",
    a: "No payment is required. In some situations involving real-meet, only basic travel expense support may be discussed.",
  },
  {
    q: "What kind of people are you looking to connect with?",
    a: "We value genuine, respectful, open-minded, and trustworthy adults who are interested in mature conversations and dark fantasy sexual needs.",
  },
  {
    q: "Are you available full-time?",
    a: "No. We both have our own personal lives, careers, and responsibilities. This platform is something we manage alongside our normal lives.",
  },
  {
    q: "Will conversations remain confidential?",
    a: "Yes. We respect privacy and confidentiality. Personal conversations are not shared publicly.",
  },
  {
    q: "Can I ask questions that are not listed in the FAQ?",
    a: "Of course. If you have additional questions, feel free to contact us respectfully through Telegram.",
  },
  {
    q: "Where do you prefer to meet for the first time?",
    a: "For safety and comfort, we usually prefer public locations chosen mutually by both sides.",
  },
  {
    q: "Are all stories on the website real?",
    a: "Some stories are inspired by real-life experiences, while others may be adapted or creatively written for storytelling purposes.",
  },
  {
    q: "What languages are the blogs written in?",
    a: "Most of the stories and blogs are written in Tanglish for a more natural and relatable reading experience.",
  },
  {
    q: "Is this website only for adults?",
    a: "Yes. This platform is strictly intended for adults aged 18 and above.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="py-24 px-6 text-center">
        <Reveal>
          <p className="font-display text-xs tracking-[0.5em] text-primary uppercase mb-5">
            Questions
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-gradient-gold mb-4">
            Frequently Asked
          </h1>
          <p className="font-serif text-lg text-muted-foreground max-w-xl mx-auto">
            A few answers, offered openly.
          </p>
        </Reveal>
      </section>
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={`glass gold-border rounded-xl overflow-hidden transition-all ${isOpen ? "bg-foreground/[0.02]" : ""}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display text-lg md:text-xl text-foreground">{f.q}</span>
                    <span className="text-primary shrink-0">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 -mt-2">
                      <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
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
