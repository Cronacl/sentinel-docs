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
    <section className="mx-auto max-w-[1200px] px-5 pt-20 sm:px-8 sm:pt-28">
      <p className="text-center text-[14px] text-fd-muted-foreground">
        Works with the agents you already use, on your own accounts
      </p>
      <ul className="mx-auto mt-8 flex max-w-[960px] flex-wrap justify-center gap-x-10 gap-y-5">
        {AGENTS.map(({ name, Icon }) => (
          <li
            key={name}
            className="flex items-center gap-2 text-[15px] text-fd-muted-foreground"
          >
            <Icon size={16} className="shrink-0" />
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
