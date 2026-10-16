import { PrimaryButton, SecondaryButton } from "@/components/landing/buttons";

export default function HomeCTA() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-24 pb-24 sm:px-8 sm:pt-36 sm:pb-32">
      <div className="grid gap-6 border-t border-fd-border pt-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
        <h2 className="text-[2rem] leading-[1.08] font-medium tracking-[-0.03em] text-balance sm:text-[2.6rem]">
          Bring the agents you already have.
        </h2>
        <div className="lg:self-end">
          <p className="max-w-[420px] text-[16px] leading-relaxed text-fd-muted-foreground">
            Free for macOS, Windows and Linux. Sign in with your own accounts
            and keys.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <PrimaryButton href="/download">Download Sentinel</PrimaryButton>
            <SecondaryButton href="/docs/getting-started/quickstart">
              Quickstart
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
