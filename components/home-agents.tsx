import type { ComponentType, SVGProps } from "react";
import {
  AcpLogo,
  AnthropicLogo,
  AntigravityLogo,
  CursorAgentLogo,
  DevinLogo,
  GeminiCliLogo,
  GitHubLogo,
  MistralVibeLogo,
  OpenAILogo,
  OpenCodeLogo,
  PiLogo,
  XAILogo,
} from "@/components/brand-icons";

type Agent = {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
};

const AGENTS: Agent[] = [
  { name: "Claude", Icon: AnthropicLogo },
  { name: "Codex", Icon: OpenAILogo },
  { name: "Copilot", Icon: GitHubLogo },
  { name: "Cursor", Icon: CursorAgentLogo },
  { name: "OpenCode", Icon: OpenCodeLogo },
  { name: "Grok Build", Icon: XAILogo },
  { name: "Antigravity", Icon: AntigravityLogo },
  { name: "Pi", Icon: PiLogo },
  { name: "Gemini CLI", Icon: GeminiCliLogo },
  { name: "Devin", Icon: DevinLogo },
  { name: "Mistral Vibe", Icon: MistralVibeLogo },
  { name: "ACP Registry", Icon: AcpLogo },
];

export default function HomeAgents() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-24 sm:px-8 sm:pt-32">
      <p className="text-[13px] text-fd-muted-foreground">
        Works with the agents you already use, on your own accounts.
      </p>
      <ul className="mt-6 grid grid-cols-2 border-t border-l border-fd-border sm:grid-cols-4 lg:grid-cols-6">
        {AGENTS.map(({ name, Icon }) => (
          <li
            key={name}
            className="flex h-16 items-center gap-2.5 border-r border-b border-fd-border px-5 text-[13.5px] text-fd-muted-foreground"
          >
            <Icon size={15} className="shrink-0 text-fd-foreground" />
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
