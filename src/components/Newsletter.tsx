import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto text-center glass-strong gold-border rounded-2xl p-12 md:p-16 shadow-deep">
        <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-4">The Letter</p>
        <h2 className="font-display text-3xl md:text-5xl text-gradient-gold mb-5">
          Receive Our Monthly Dispatch
        </h2>
        <p className="font-serif text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          Quiet essays, interview excerpts, and curated reflections — delivered once a month. No noise.
        </p>
        {done ? (
          <p className="font-serif text-xl text-primary">Thank you. Watch for our next letter.</p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setDone(true); }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-md bg-background/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-gradient-gold text-primary-foreground font-medium tracking-wide hover:brightness-110 transition shadow-gold"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
