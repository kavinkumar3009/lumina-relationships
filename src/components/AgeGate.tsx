import { useEffect, useState } from "react";

const KEY = "age-verified-18";

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      if (localStorage.getItem(KEY) !== "true") setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  if (!open) return null;

  const confirm = () => {
    try { localStorage.setItem(KEY, "true"); } catch {}
    setOpen(false);
  };

  const decline = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      style={{ background: "radial-gradient(ellipse at center, rgba(20,15,8,0.85), rgba(0,0,0,0.96))", backdropFilter: "blur(16px)" }}
    >
      <div className="glass-strong gold-border max-w-lg w-full rounded-xl p-10 md:p-12 text-center shadow-deep animate-in fade-in zoom-in-95 duration-700">
        <div className="mx-auto mb-6 h-px w-16 bg-gradient-gold" />
        <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-4">18 +</p>
        <h2 id="age-title" className="font-display text-3xl md:text-4xl text-gradient-gold mb-5">
          Adults Only — Age Verification
        </h2>
        <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
          This website contains mature educational discussions intended for adults aged 18 and above.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={confirm}
            className="px-8 py-3 rounded-md bg-gradient-gold text-primary-foreground font-medium tracking-wide hover:brightness-110 transition shadow-gold"
          >
            Yes, I am 18+
          </button>
          <button
            onClick={decline}
            className="px-8 py-3 rounded-md border border-border text-foreground/80 hover:text-foreground hover:border-primary/60 transition"
          >
            No, exit
          </button>
        </div>
        <p className="mt-6 text-xs text-muted-foreground/70">
          By entering, you confirm you are of legal age in your jurisdiction.
        </p>
      </div>
    </div>
  );
}
