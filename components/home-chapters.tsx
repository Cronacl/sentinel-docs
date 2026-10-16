import { Shot, type ShotName } from "@/components/landing/shot";

type Chapter = {
  label: string;
  title: string;
  body: string;
  shot: ShotName;
  alt: string;
};

const CHAPTERS: Chapter[] = [
  {
    label: "Agents",
    title: "Any agent, per thread.",
    body: "Claude, Codex, Copilot, Cursor, OpenCode, Grok Build, Antigravity, Pi or anything in the ACP Registry. Your accounts, your CLIs.",
    shot: "composer-engines",
    alt: "The composer's agent picker listing every supported coding agent",
  },
  {
    label: "Engines",
    title: "Managed for you.",
    body: "Install, update and sign in from one place. See usage limits, and run separate instances for work and personal accounts.",
    shot: "engines-usage",
    alt: "Settings → Engines with usage limits for Codex, Claude, Copilot, Cursor, OpenCode and Grok",
  },
  {
    label: "Control",
    title: "Nothing runs without you.",
    body: "Approve edits and commands once or always. A terminal and a browser sit right beside the thread.",
    shot: "approvals",
    alt: "A pending approval for an agent's command inside a thread",
  },
];

export default function HomeChapters() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
      {CHAPTERS.map((chapter, index) => (
        <section key={chapter.label} className="pt-24 sm:pt-36">
          <div className="grid gap-4 border-t border-fd-border pt-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="text-[13px] text-fd-muted-foreground tabular-nums">
                {String(index + 1).padStart(2, "0")} {chapter.label}
              </p>
              <h2 className="mt-3 text-[2rem] leading-[1.08] font-medium tracking-[-0.03em] text-balance sm:text-[2.6rem]">
                {chapter.title}
              </h2>
            </div>
            <p className="max-w-[420px] text-[16px] leading-relaxed text-pretty text-fd-muted-foreground lg:self-end">
              {chapter.body}
            </p>
          </div>
          <Shot name={chapter.shot} alt={chapter.alt} className="mt-10 sm:mt-14" />
        </section>
      ))}
    </div>
  );
}
