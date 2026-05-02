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
    description:
      "Run Sentinel, Codex, Claude, or Copilot. Four engines, one app.",
  },
  {
    icon: TerminalIcon,
    title: "Built-in terminal",
    description:
      "Integrated terminal panel with multiple sessions. No window switching.",
  },
  {
    icon: BrowserIcon,
    title: "Built-in browser",
    description:
      "Browser sidebar with tabs and navigation. Preview without leaving the app.",
  },
  {
    icon: CodeFolderIcon,
    title: "Workspace-aware",
    description:
      "Threads tie to real local project folders with full repo state awareness.",
  },
  {
    icon: Comment01Icon,
    title: "Persistent threads",
    description:
      "Threads maintain state across sessions. Pick up where you left off.",
  },
  {
    icon: SecurityCheckIcon,
    title: "Approvals & control",
    description:
      "Pause before tools run. Explicit approval groups for every action.",
  },
];

export default function HomeFeatures() {
  return (
    <section className="mx-auto max-w-[980px] px-6 py-20">
      <h2 className="text-lg font-medium">Built for real software work</h2>
      <p className="mt-2 max-w-[440px] text-sm text-fd-muted-foreground">
        Not another chat wrapper. Sentinel is a structured workspace for
        AI-assisted development.
      </p>

      <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div key={feature.title}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border bg-fd-secondary/50">
              <Icon icon={feature.icon} size={16} strokeWidth={1.5} />
            </div>
            <h3 className="mt-3 text-sm font-medium">{feature.title}</h3>
            <p className="mt-1 text-sm text-fd-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
