import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readingTime: number;
  date: string;
  author: string;
  image: string;
  content: string[];
}

export const CATEGORIES = [
  "All",
  "Communication",
  "Intimacy",
  "Psychology",
  "Trust",
  "Interviews",
  "Wellness",
  "Recovery",
] as const;

export const blogs: BlogPost[] = [
  {
    slug: "the-quiet-language-of-emotional-intimacy",
    title: "The Quiet Language of Emotional Intimacy",
    excerpt:
      "Beyond words and touch lies a deeper conversation. We explore the subtle vocabulary couples use to feel truly seen.",
    category: "Intimacy",
    tags: ["intimacy", "connection", "emotion"],
    readingTime: 7,
    date: "2025-04-12",
    author: "The Editorial Desk",
    image: blog1,
    content: [
      "Intimacy is often mistaken for proximity. Yet two people can share a bed and remain strangers, while others can sit in silence across a candlelit table and feel entirely known.",
      "Emotional intimacy is built in micro-moments: the pause before answering, the question that follows an answer, the way a partner remembers a small detail you mentioned weeks ago. These are the threads of a quieter language.",
      "Psychologists describe this as attunement — a sustained capacity to notice and respond. It is not grand. It is granular. And it is, perhaps, the most underrated skill in modern love.",
      "In our interviews with long-married couples, the word that returned again and again was not passion. It was presence.",
    ],
  },
  {
    slug: "interview-twenty-years-one-conversation",
    title: "Twenty Years, One Conversation",
    excerpt:
      "An anonymous interview with a couple who never stopped asking each other questions — and what it taught us about lasting connection.",
    category: "Interviews",
    tags: ["interview", "longevity", "communication"],
    readingTime: 9,
    date: "2025-03-28",
    author: "Field Notes",
    image: blog2,
    content: [
      "We met them in a quiet living room, the kind of place where time slows. They asked to remain anonymous; we will call them M. and R.",
      "Their rule, formed early, was simple: never assume you already know the answer. Twenty years in, they still ask each other the small things — how was your morning, what did you think of that song.",
      "Curiosity, they told us, is the antidote to contempt. When you keep asking, you keep finding the person you fell for.",
    ],
  },
  {
    slug: "the-architecture-of-trust",
    title: "The Architecture of Trust",
    excerpt:
      "Trust isn't a feeling — it's a structure. A look at the small commitments that hold relationships together.",
    category: "Trust",
    tags: ["trust", "honesty", "boundaries"],
    readingTime: 6,
    date: "2025-03-10",
    author: "The Editorial Desk",
    image: blog3,
    content: [
      "We tend to talk about trust as if it were weather — something that arrives or disappears without explanation. In truth, trust is architecture.",
      "Each kept promise, each honest disclosure, each repaired rupture is a brick. The structure holds because of the bricks, not despite them.",
      "Consent, too, lives here. To honor consent is to acknowledge that the other person is, always, a separate sovereign world.",
    ],
  },
  {
    slug: "what-attraction-actually-is",
    title: "What Attraction Actually Is",
    excerpt:
      "The psychology of desire is older and stranger than we admit. A measured look at why we want who we want.",
    category: "Psychology",
    tags: ["psychology", "attraction", "desire"],
    readingTime: 8,
    date: "2025-02-22",
    author: "The Editorial Desk",
    image: blog4,
    content: [
      "Attraction is not a single thing. It is a chord — biology, biography, and timing playing at once.",
      "Research suggests that novelty and safety, often imagined as opposites, are in fact partners. Desire needs both the unknown and the held.",
      "Understanding this can soften self-judgment. We are not broken when desire shifts. We are responding to a living equation.",
    ],
  },
  {
    slug: "after-the-storm-emotional-recovery",
    title: "After the Storm: Notes on Emotional Recovery",
    excerpt:
      "Healing after a difficult chapter is not linear. A gentle guide to rebuilding the self, with care.",
    category: "Recovery",
    tags: ["recovery", "healing", "self"],
    readingTime: 7,
    date: "2025-02-05",
    author: "The Editorial Desk",
    image: blog5,
    content: [
      "Recovery, like grief, refuses to follow a timetable. The work is to make room for the days that ache and the days that breathe.",
      "Small rituals matter. A walk at the same hour. A page written before sleep. A friend you call without apology.",
      "And patience — not the passive kind, but the active patience of someone who is, slowly, choosing to come back to themselves.",
    ],
  },
  {
    slug: "modern-couples-and-the-discipline-of-talking",
    title: "Modern Couples and the Discipline of Talking",
    excerpt:
      "In a world of half-finished sentences and quick replies, real conversation has become a quiet act of devotion.",
    category: "Communication",
    tags: ["communication", "modern", "habits"],
    readingTime: 6,
    date: "2025-01-18",
    author: "Field Notes",
    image: blog6,
    content: [
      "Couples today communicate constantly and connect rarely. The phone has made distance feel like presence.",
      "The remedy is unglamorous: a regular hour, a closed door, no screens. A discipline of listening without preparing a reply.",
      "It is in this small, deliberate room that modern intimacy is most often rebuilt.",
    ],
  },
];

export const getPostBySlug = (slug: string) => blogs.find((b) => b.slug === slug);
export const getRelated = (slug: string, category: string, n = 3) =>
  blogs.filter((b) => b.slug !== slug && b.category === category).slice(0, n);
