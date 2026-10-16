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

function AgentRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={hidden}>
      {AGENTS.map(({ name, Icon }) => (
        <li
          key={name}
          className="flex items-center gap-2.5 text-[15px] font-medium whitespace-nowrap text-fd-muted-foreground"
        >
          <Icon size={18} className="shrink-0" />
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function HomeAgents() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 pt-20 sm:px-8 sm:pt-28">
      <p className="text-center text-[13px] text-fd-muted-foreground">
        Works with the agents you already use, on your own accounts
      </p>
      <div className="landing-marquee-mask mt-8 overflow-hidden">
        <div className="landing-marquee flex w-max">
          <AgentRow />
          <AgentRow hidden />
        </div>
      </div>
    </section>
  );
}
