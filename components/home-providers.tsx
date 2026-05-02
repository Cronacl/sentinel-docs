export default function HomeProviders() {
  return (
    <section className="mx-auto max-w-[980px] px-6 py-16">
      <div className="rounded-xl border px-6 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-sm font-medium">14+ AI providers</h2>
            <p className="mt-1 max-w-[360px] text-sm text-fd-muted-foreground">
              OpenAI, Anthropic, Google, xAI, Azure, Bedrock, Groq, Ollama, and
              more. Bring your own keys.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-medium">Integrations</h2>
            <p className="mt-1 max-w-[360px] text-sm text-fd-muted-foreground">
              Gmail, Slack, Notion, GitHub, Linear, databases, and more. Connect
              the tools you already use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
