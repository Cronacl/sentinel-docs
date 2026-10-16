import Link from "next/link";
import { BrandMark, markLabel, type MarkName } from "@/components/brand-marks";

// Built-in drivers first, then agents installable from the ACP Registry.
const AGENTS: MarkName[] = [
  "claude",
  "codex",
  "copilot",
  "cursor",
  "opencode",
  "grok",
  "antigravity",
  "pi",
  "geminicli",
  "devin",
  "mistral",
  "goose",
  "qwen",
  "kimi",
  "junie",
  "amp",
  "cline",
];

export default function HomeAgents() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-24 sm:px-8 sm:pt-32">
      <h2 className="text-center text-[1.375rem] leading-[1.3] font-normal tracking-[-0.01em] text-balance">
        Works with the agents you already use
        <span className="block text-fd-muted-foreground">
          On your own accounts, with their own CLIs.
        </span>
      </h2>
      <ul className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-[6px] bg-fd-border lg:grid-cols-6">
        {AGENTS.map((name) => (
          <li
            key={name}
            className="flex h-[84px] flex-col items-center justify-center gap-2 bg-fd-background px-2 text-center text-[13px] sm:flex-row sm:gap-2.5 sm:text-[15px]"
          >
            <BrandMark name={name} size={18} className="shrink-0" />
            {markLabel(name)}
          </li>
        ))}
        <li className="bg-fd-background">
          <Link
            href="/docs/engines-and-runtime/agents/acp-registry"
            className="flex h-[84px] items-center justify-center gap-1 px-2 text-center text-[13px] text-fd-muted-foreground transition-colors hover:text-fd-foreground sm:text-[15px]"
          >
            40+ more via ACP
            <span aria-hidden>→</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
