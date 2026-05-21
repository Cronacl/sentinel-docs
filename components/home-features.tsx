import {
  BrowserIcon,
  CodeFolderIcon,
  Comment01Icon,
  Layers01Icon,
  SecurityCheckIcon,
  TerminalIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import Icon from "@/components/icon";

type Feature = {
  icon: IconSvgElement;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Layers01Icon,
    title: "Multi-engine",
    description: "Sentinel, Codex, Claude, or Copilot in one app.",
  },
  {
    icon: TerminalIcon,
    title: "Built-in terminal",
    description: "Multiple sessions inline. No window switching.",
  },
  {
    icon: BrowserIcon,
    title: "Built-in browser",
    description: "Tabs and navigation. Preview inside the app.",
  },
  {
    icon: CodeFolderIcon,
    title: "Workspace-aware",
    description: "Threads tied to local folders with repo state.",
  },
  {
    icon: Comment01Icon,
    title: "Persistent threads",
    description: "State across sessions. Pick up where you left off.",
  },
  {
    icon: SecurityCheckIcon,
    title: "Approvals & control",
    description: "Explicit approval groups before any tool runs.",
  },
];

export default function HomeFeatures() {
  return (
    <section className="mx-auto max-w-[960px] px-6 pt-12 pb-10">
      <h2 className="text-[13px] font-medium">Built for real work</h2>
      <p className="mt-0.5 text-[12px] text-fd-muted-foreground">
        A structured workspace, not a chat wrapper.
      </p>

      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="flex items-start gap-2.5 rounded-lg border border-fd-border bg-fd-card px-3 py-2.5"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-fd-border bg-fd-background">
              <Icon icon={f.icon} size={13} strokeWidth={1.5} className="text-fd-muted-foreground" />
            </div>
            <div className="min-w-0 pt-px">
              <h3 className="text-[12px] font-medium">{f.title}</h3>
              <p className="mt-px text-[11px] text-fd-muted-foreground">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
