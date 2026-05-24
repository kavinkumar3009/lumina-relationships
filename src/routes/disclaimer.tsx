import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Noir & Or" },
      { name: "description", content: "Our disclaimer regarding the educational, non-clinical nature of content and our adults-only audience." },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-24">
      <p className="font-display text-xs tracking-[0.5em] text-primary uppercase mb-5">Legal</p>
      <h1 className="font-display text-5xl text-gradient-gold mb-8">Disclaimer</h1>
      <div className="divider-gold mb-10" />
      <div className="font-serif text-lg text-muted-foreground leading-[1.85] space-y-6">
        <p><strong className="text-foreground">Adults only.</strong> This website is intended for readers aged 18 and above. By using this site, you confirm you are of legal age in your jurisdiction.</p>
        <p><strong className="text-foreground">Educational purpose.</strong> All content is editorial and educational. It is not a substitute for professional therapy, medical advice, or legal counsel. If you are in distress, please contact a qualified professional.</p>
        <p><strong className="text-foreground">Personal stories.</strong> Interviews and personal accounts are shared with consent and anonymized. They reflect individual experiences and are not prescriptive guidance.</p>
        <p><strong className="text-foreground">External links.</strong> We are not responsible for the content or practices of third-party websites linked from this site.</p>
        <p><strong className="text-foreground">No warranty.</strong> Content is provided "as is" without any guarantee of completeness or fitness for a particular purpose.</p>
      </div>
    </article>
  );
}
