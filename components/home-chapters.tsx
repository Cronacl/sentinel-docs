import { ArtShot, type Wallpaper } from "@/components/landing/art-shot";
import { ArrowLink } from "@/components/landing/buttons";
import type { ShotName } from "@/components/landing/shot";

type Chapter = {
  title: string;
  body: string;
  link: { label: string; href: string };
  shot: ShotName;
  alt: string;
  wallpaper: Wallpaper;
};

const CHAPTERS: Chapter[] = [
  {
    title: "Any agent, per thread",
    body: "Pick Claude, Codex, Cursor, Grok or any ACP agent for each thread.",
    link: { label: "Learn about agents", href: "/docs/engines-and-runtime/agents" },
    shot: "composer-engines",
    alt: "The composer's agent picker listing every supported coding agent",
    wallpaper: "lagoon",
  },
  {
    title: "Agents, managed for you",
    body: "Install, sign in and watch usage limits for every agent in one place.",
    link: { label: "Learn about engines", href: "/docs/engines-and-runtime/engines-overview" },
    shot: "engines-usage",
    alt: "Settings → Engines with usage limits for Codex, Claude, Copilot, Cursor, OpenCode and Grok",
    wallpaper: "dune",
  },
  {
    title: "Nothing runs without you",
    body: "Plans and commands wait for your approval, right in the thread.",
    link: { label: "Learn about approvals", href: "/docs/workflows/approvals-and-subagents" },
    shot: "approvals",
    alt: "A plan with tasks and a pending approval for an agent's command",
    wallpaper: "iris",
  },
];

export default function HomeChapters() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-24 px-5 pt-24 sm:gap-32 sm:px-8 sm:pt-32">
      {CHAPTERS.map((chapter) => (
        <section key={chapter.title}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <h2 className="max-w-[560px] text-[1.375rem] leading-[1.3] font-normal tracking-[-0.01em] text-balance">
              {chapter.title}
              <span className="block text-fd-muted-foreground">{chapter.body}</span>
            </h2>
            <ArrowLink href={chapter.link.href} className="shrink-0">
              {chapter.link.label}
            </ArrowLink>
          </div>
          <ArtShot
            name={chapter.shot}
            alt={chapter.alt}
            wallpaper={chapter.wallpaper}
            className="mt-8"
          />
        </section>
      ))}
    </div>
  );
}
