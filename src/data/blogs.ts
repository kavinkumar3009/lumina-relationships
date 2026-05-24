import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";
import { IDS } from "./common";

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
    slug: "cuckold-wife-with-bull",
    title: "CUCKOLD WIFE WITH BULL",
    excerpt:
      "Not fullfilled wife, fullfilled by a bull.",
    category: "Cuckold and Bull",
    tags: ["cuckold", "bull", "callboy", "relationships", "darkfantasy", "maleescort", "dating"],
    readingTime: 7,
    date: "-",
    author: "Zyan",
    image: blog1,
    content: [
      "Sex la pleasure rompa rompa mukiyam athu ilama neraya girls rompa depressed aa feel panuranga.",
      "Etha enode first meet enaku rompa bayam irundhuchu. Aana avanga rompa soft type. Avangala before meet na pathathu kuda ila ana enaku epiyathu oru time paneranum aasila varan solitan before direct meet pic venam solitanga avangaluku enmela bayam na avanga pic aa missuse paneruvanu.so rednu perum sela bayathoda enga first meet panurom",
      "Actually en keta avnag matrum tha pesunaga avanga hubby therium sonaga apa enaku enatha cuckold life pathe theriyathu. epdi husband okay soluranga namala etho pana poranga bayama iruchu iruthalum maybe unmaya irutha ena pana oru thought,apa the vena enaku nega travel ku pay panunga na varan sona avangalum bus book pane kuduthanga enaky konjam trust vanthuchu before meet any travel.",
      "Naga konjam close agetom so i'm aslo feeling comfortable before travel so suddly asked me na rompa alagala iruga matan unaku okay aa ketanga.Unmaya solanumnaa apa tha enaku full hope vanthu okay she is only expecting sexual pleasure.enaku rompa bayam en kidney eduthuta ena pana ena blackmail pana ena pana neraya thoughts mind la iruchu so im confident and started travel.",
      "Travel start panetan nanu destination reach panetu rapido potu avanga location poitan oru spot la wait pana sonaga na more then 20min wait panuran yerumae varala serioly im upset aprm tha avanga husband vanthanga scooty eri avanga appartment pogum pothu tha avaru enketa keguraru nega panurathu na pagavanu i don't know what i cuckold husand at the time enaku sema shock iruthum seri konja na panetu soluran nega vanga sona.",
      "Nanu refresh panetu morning breakfast kuduthanga sapetu start pana eduthaum lick pana sonaga nala g-spot lick pana before meet im a fresher right neraya articles padechan then nala lick panerupa around oru 15-20min unmaya solanum na enaku vai valichu finally avanga antha peak varum pothu flower nala suck pane urichan last one min she get pleasure enketa life la etha na get panura first pleasure sonaga again i'm shocked unga husband ketan avanga lick panathu ila sonaga i thought just she kidding but seriouly avanga husband lick panathu ilayama after getting pleasure she hug me tightly and kiss around my face i'm feeling shy",
      "Konjam break eduthutom aprm avangaliku fingring pana actuly enaku fingring pana therila avanga soli kuduthanga athae mathirir pana but intha round infront of her husband ethu naga panunom after fingring avanga cuckold husband ena fuck pana sonaga enaku konjam shy iruchu aprm na pana avanga husband atha pathu nala rasichanga she also enjoy it ethu oru 4 time differnt posses la panunom .",
      "Nit dinner senthu cook pane sapetom after dinner we stared again without light 69 panunom aprm avanga fantasy la sola sola panuna, nala erugama hug pane thugonom aprm ena story end.",
      `Ungaluku enkuda pananum wish irutha telegram id ku message panunga im safe and trusted guy (ID: ${IDS.telegramId})`,
    ],
  }
];

export const getPostBySlug = (slug: string) => blogs.find((b) => b.slug === slug);
export const getRelated = (slug: string, category: string, n = 3) =>
  blogs.filter((b) => b.slug !== slug && b.category === category).slice(0, n);
