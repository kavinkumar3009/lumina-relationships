import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Noir & Or" },
      { name: "description", content: "Reach the Noir & Or editorial desk. We welcome thoughtful correspondence, interview submissions, and reader letters." },
      { property: "og:title", content: "Contact — Noir & Or" },
      { property: "og:description", content: "Get in touch with our editorial desk." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("A valid email is required").max(255),
  subject: z.string().trim().min(1, "Add a subject").max(150),
  message: z.string().trim().min(10, "A few more words, please").max(2000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setDone(true);
  };

  return (
    <>
      <section className="py-24 px-6 text-center">
        <Reveal>
          <p className="font-display text-xs tracking-[0.5em] text-primary uppercase mb-5">Correspondence</p>
          <h1 className="font-display text-5xl md:text-7xl text-gradient-gold mb-6">Write to the Desk</h1>
          <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We read every letter — story tips, reader thoughts, or quiet questions.
          </p>
        </Reveal>
      </section>

      <section className="py-12 px-6 pb-32">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10">
          <Reveal>
            <div className="glass-strong gold-border rounded-2xl p-8 space-y-6 h-full">
              <div>
                <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-2">Email</p>
                <p className="flex items-center gap-2 font-serif text-lg"><Mail size={16} className="text-primary" /> hello@noiretor.example</p>
              </div>
              <div>
                <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-2">Editorial Desk</p>
                <p className="flex items-center gap-2 font-serif text-lg"><MapPin size={16} className="text-primary" /> A quiet room, anywhere.</p>
              </div>
              <div className="divider-gold" />
              <p className="font-serif italic text-muted-foreground leading-relaxed">
                "Letters are read in the order they arrive — slowly, and with attention."
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={submit} className="glass-strong rounded-2xl p-8 space-y-5">
              {done ? (
                <div className="text-center py-12">
                  <h3 className="font-display text-3xl text-gradient-gold mb-3">Thank you.</h3>
                  <p className="font-serif text-muted-foreground">Your letter has reached us.</p>
                </div>
              ) : (
                <>
                  {(["name", "email", "subject"] as const).map((f) => (
                    <div key={f}>
                      <label className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">
                        {f}
                      </label>
                      <input
                        type={f === "email" ? "email" : "text"}
                        value={form[f]}
                        onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-background/60 border border-border focus:border-primary/60 focus:outline-none text-foreground"
                        maxLength={255}
                      />
                      {errors[f] && <p className="text-destructive text-xs mt-1.5">{errors[f]}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">Message</label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      maxLength={2000}
                      className="w-full px-4 py-3 rounded-md bg-background/60 border border-border focus:border-primary/60 focus:outline-none text-foreground resize-none"
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1.5">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-gold text-primary-foreground tracking-[0.15em] uppercase text-sm shadow-gold hover:brightness-110 transition"
                  >
                    <Send size={14} /> Send Letter
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
