import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Noir & Or" },
      { name: "description", content: "Our privacy policy explains what data we collect, how we use it, and how we protect interview subjects and readers." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-24">
      <p className="font-display text-xs tracking-[0.5em] text-primary uppercase mb-5">Legal</p>
      <h1 className="font-display text-5xl text-gradient-gold mb-8">Privacy Policy</h1>
      <div className="divider-gold mb-10" />
      <div className="prose-content font-serif text-lg text-muted-foreground leading-[1.85] space-y-6">
        <p>We respect your privacy. This document outlines what data we collect, how we use it, and the choices available to you.</p>
        <h2 className="font-display text-2xl text-foreground mt-10">Information we collect</h2>
        <p>We collect minimal information: email addresses for newsletter subscribers (with consent), and standard server logs for analytics and security.</p>
        <h2 className="font-display text-2xl text-foreground mt-10">How we use information</h2>
        <p>Newsletter emails are used solely to deliver our monthly dispatch. Server logs help us understand readership and protect the site.</p>
        <h2 className="font-display text-2xl text-foreground mt-10">Interview subjects</h2>
        <p>All interview participants are anonymized by default. Identifying details are changed or withheld and stories are shared only with continuing consent.</p>
        <h2 className="font-display text-2xl text-foreground mt-10">Cookies</h2>
        <p>We use essential cookies (such as the age-verification flag stored locally) and may use anonymous analytics.</p>
        <h2 className="font-display text-2xl text-foreground mt-10">Your rights</h2>
        <p>You may unsubscribe at any time and request deletion of any data we hold by writing to the editorial desk.</p>
        <p className="text-sm">Last updated: 2025.</p>
      </div>
    </article>
  );
}
