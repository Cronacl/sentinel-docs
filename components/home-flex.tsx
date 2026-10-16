import type { ReactNode } from "react";
import { AnthropicLogo, OpenAILogo, XAILogo } from "@/components/brand-icons";

function Card({ title, body, children }: { title: string; body: string; children: ReactNode }) {
  return (
    <div className="flex flex-col rounded-[6px] bg-fd-card p-5">
      <h3 className="text-[15px]">{title}</h3>
      <p className="mt-1 text-[14px] leading-snug text-fd-muted-foreground">{body}</p>
      <div className="mt-6 flex min-h-[170px] flex-1 flex-col justify-center rounded-[4px] bg-fd-background p-4">
        {children}
      </div>
    </div>
  );
}

function Row({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-fd-border py-2 text-[12.5px] last:border-b-0">
      {children}
    </div>
  );
}

export default function HomeFlex() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-24 sm:px-8 sm:pt-32">
      <h2 className="text-[1.375rem] leading-[1.3] font-normal tracking-[-0.01em]">
        Powerful, yet flexible
        <span className="block text-fd-muted-foreground">
          Set Sentinel up the way you already work.
        </span>
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Instances" body="Several accounts per agent, each with its own home.">
          <Row>
            <span>Claude · Work</span>
            <span className="font-mono text-[11px] text-fd-muted-foreground">claude-work</span>
          </Row>
          <Row>
            <span>Claude · Personal</span>
            <span className="font-mono text-[11px] text-fd-muted-foreground">claude-home</span>
          </Row>
          <Row>
            <span>Codex</span>
            <span className="font-mono text-[11px] text-fd-muted-foreground">codex</span>
          </Row>
        </Card>

        <Card title="Usage limits" body="Plan usage from each account, next to the agent picker.">
          {[
            { name: "Claude", used: 34, Icon: AnthropicLogo },
            { name: "Codex", used: 12, Icon: OpenAILogo },
            { name: "Grok", used: 9, Icon: XAILogo },
          ].map(({ name, used, Icon }) => (
            <div key={name} className="py-1.5">
              <div className="flex items-center justify-between text-[12.5px]">
                <span className="flex items-center gap-1.5">
                  <Icon size={11} />
                  {name}
                </span>
                <span className="text-fd-muted-foreground tabular-nums">{used}%</span>
              </div>
              <div className="mt-1.5 h-1 rounded-full bg-fd-muted">
                <div className="h-full rounded-full bg-fd-foreground" style={{ width: `${used}%` }} />
              </div>
            </div>
          ))}
        </Card>

        <Card title="MCP servers" body="Add a server once; every agent that speaks MCP gets it.">
          {["github", "linear", "postgres"].map((server) => (
            <Row key={server}>
              <span className="font-mono text-[12px]">{server}</span>
              <span className="text-fd-muted-foreground">All agents</span>
            </Row>
          ))}
        </Card>

        <Card title="Automations" body="Recurring work on any agent, hourly, daily or by cron.">
          <Row>
            <span>Triage new issues</span>
            <span className="text-fd-muted-foreground">Daily 9:00</span>
          </Row>
          <Row>
            <span>Update dependencies</span>
            <span className="text-fd-muted-foreground">Weekly</span>
          </Row>
          <Row>
            <span>Summarize PRs</span>
            <span className="font-mono text-[11px] text-fd-muted-foreground">0 17 * * 1-5</span>
          </Row>
        </Card>
      </div>
    </section>
  );
}
