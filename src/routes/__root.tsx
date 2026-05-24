import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AgeGate } from "@/components/AgeGate";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-4">404</p>
        <h1 className="font-display text-5xl text-gradient-gold mb-4">Page Not Found</h1>
        <p className="font-serif text-lg text-muted-foreground mb-8">The page you seek does not exist.</p>
        <a href="/" className="px-6 py-3 rounded-md bg-gradient-gold text-primary-foreground tracking-wide">Return Home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-display text-3xl text-gradient-gold mb-4">A moment of silence</h1>
        <p className="font-serif text-muted-foreground mb-6">Something didn't load. Please try again.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="px-6 py-3 rounded-md bg-gradient-gold text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Noir & Or — Mature Conversations on Modern Relationships" },
      { name: "description", content: "An editorial blog for adults: intimacy, psychology of attraction, communication, trust, and the architecture of modern relationships." },
      { name: "rating", content: "adult" },
      { property: "og:site_name", content: "Noir & Or" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Noir & Or — Mature Conversations on Modern Relationships" },
      { property: "og:description", content: "Educational, interview-led discussions on adult relationships, intimacy, and emotional wellbeing." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0f0c08" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Noir & Or",
          description: "Editorial blog on modern adult relationships, intimacy and psychology.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AgeGate />
      <SiteHeader />
      <main className="pt-20">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
