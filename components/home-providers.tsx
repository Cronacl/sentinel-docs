import {
  OpenAILogo,
  AnthropicLogo,
  GoogleLogo,
  AzureLogo,
  OllamaLogo,
  XAILogo,
  CursorAgentLogo,
  OpenCodeLogo,
  AntigravityLogo,
  PiLogo,
  AcpLogo,
  GeminiCliLogo,
  DevinLogo,
  MistralVibeLogo,
  GitHubLogo,
  GmailLogo,
  SlackLogo,
  NotionLogo,
  LinearLogo,
  DatabaseIcon,
} from "@/components/brand-icons";
import type { ComponentType, SVGProps } from "react";

type ProviderItem = {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
};

const AGENTS: ProviderItem[] = [
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

const AI_PROVIDERS: ProviderItem[] = [
  { name: "OpenAI", Icon: OpenAILogo },
  { name: "Anthropic", Icon: AnthropicLogo },
  { name: "Google", Icon: GoogleLogo },
  { name: "Azure", Icon: AzureLogo },
  { name: "Ollama", Icon: OllamaLogo },
];

const INTEGRATIONS: ProviderItem[] = [
  { name: "GitHub", Icon: GitHubLogo },
  { name: "Gmail", Icon: GmailLogo },
  { name: "Slack", Icon: SlackLogo },
  { name: "Notion", Icon: NotionLogo },
  { name: "Linear", Icon: LinearLogo },
  { name: "DBs", Icon: DatabaseIcon },
];

function Pill({ item }: { item: ProviderItem }) {
  return (
    <div className="flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-background px-2 py-1">
      <item.Icon size={12} className="shrink-0 text-fd-muted-foreground" />
      <span className="text-[11px] font-medium">{item.name}</span>
    </div>
  );
}

export default function HomeProviders() {
  return (
    <section className="mx-auto max-w-[960px] px-6 pb-10">
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="rounded-lg border border-fd-border bg-fd-card px-3.5 py-3 sm:col-span-2">
          <div className="flex items-baseline justify-between mb-2.5">
            <h3 className="text-[12px] font-medium">Coding agents</h3>
            <span className="text-[10px] text-fd-muted-foreground/40">
              Your own accounts
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {AGENTS.map((a) => (
              <Pill key={a.name} item={a} />
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-fd-border bg-fd-card px-3.5 py-3">
          <div className="flex items-baseline justify-between mb-2.5">
            <h3 className="text-[12px] font-medium">15+ AI providers</h3>
            <span className="text-[10px] text-fd-muted-foreground/40">BYOK</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {AI_PROVIDERS.map((p) => (
              <Pill key={p.name} item={p} />
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-fd-border bg-fd-card px-3.5 py-3">
          <div className="flex items-baseline justify-between mb-2.5">
            <h3 className="text-[12px] font-medium">Integrations</h3>
            <span className="text-[10px] text-fd-muted-foreground/40">
              + more
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {INTEGRATIONS.map((i) => (
              <Pill key={i.name} item={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
