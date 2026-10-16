import { ArtShot } from "@/components/landing/art-shot";
import { ArrowLink } from "@/components/landing/buttons";
import type { ShotName } from "@/components/landing/shot";

type Chapter = {
  title: string;
  body: string;
  link: { label: string; href: string };
  shot: ShotName;
  alt: string;
  seed: number;
};

const CHAPTERS: Chapter[] = [
  {
    title: "Any agent, per thread",
    body: "Pick Claude, Codex, Cursor, Grok or any ACP agent for each thread.",
    link: { label: "Learn about agents", href: "/docs/engines-and-runtime/agents" },
    shot: "composer-engines-crop",
    alt: "The composer's agent picker listing every supported coding agent",
    seed: 21,
  },
  {
    title: "Agents, managed for you",
    body: "Install, sign in and watch usage limits for every agent in one place.",
    link: { label: "Learn about engines", href: "/docs/engines-and-runtime/engines-overview" },
    shot: "engines-usage-crop",
    alt: "Settings → Engines with usage limits for Codex, Claude, Copilot, Cursor, OpenCode and Grok",
    seed: 34,
  },
  {
    title: "Nothing runs without you",
    body: "Plans and commands wait for your approval, right in the thread.",
    link: { label: "Learn about approvals", href: "/docs/workflows/approvals-and-subagents" },
    shot: "approvals-crop",
    alt: "A plan with tasks and a pending approval for an agent's command",
    seed: 55,
  },
];

export default function HomeChapters() {
  return (
    <div className="mx-auto mt-20 flex max-w-[1200px] flex-col gap-4 px-5 sm:mt-28 sm:px-8">
      {CHAPTERS.map((chapter) => (
        <section
          key={chapter.title}
          className="grid overflow-hidden rounded-[6px] bg-fd-card lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)]"
        >
          <div className="flex flex-col justify-center gap-5 px-6 py-10 sm:px-10">
            <h2 className="text-[1.375rem] leading-[1.3] font-normal tracking-[-0.01em] text-balance">
              {chapter.title}
              <span className="block text-fd-muted-foreground">{chapter.body}</span>
            </h2>
            <ArrowLink href={chapter.link.href}>{chapter.link.label}</ArrowLink>
          </div>
          <ArtShot
            name={chapter.shot}
            alt={chapter.alt}
            seed={chapter.seed}
            className="rounded-none bg-fd-muted"
            maxWidth={520}
          />
        </section>
      ))}
    </div>
  );
}
