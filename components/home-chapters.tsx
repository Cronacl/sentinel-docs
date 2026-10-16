import { Canvas, Shot, type ShotName } from "@/components/landing/shot";

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
    <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
      {CHAPTERS.map((chapter, index) => (
        <section key={chapter.label} className="pt-28 sm:pt-40">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-10">
            <div>
              <p className="font-mono text-[11px] tracking-[0.08em] text-fd-muted-foreground uppercase">
                {String(index + 1).padStart(2, "0")} · {chapter.label}
              </p>
              <h2 className="font-display-serif mt-4 text-[2.1rem] leading-[1.05] text-balance sm:text-[3rem]">
                {chapter.title}
              </h2>
            </div>
            <p className="max-w-[420px] self-end text-[15px] leading-relaxed text-pretty text-fd-muted-foreground sm:justify-self-end">
              {chapter.body}
            </p>
          </div>
          <Canvas className="mt-10 p-3 sm:mt-14 sm:p-10 lg:p-14">
            <Shot name={chapter.shot} alt={chapter.alt} />
          </Canvas>
        </section>
      ))}
    </div>
  );
}
