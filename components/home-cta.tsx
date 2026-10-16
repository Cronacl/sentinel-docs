import Link from "next/link";
import { Canvas } from "@/components/landing/shot";
import { SentinelLogoMark } from "@/components/sentinel-logo";

export default function HomeCTA() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 pt-28 pb-24 sm:px-8 sm:pt-40 sm:pb-32">
      <Canvas className="px-6 py-20 text-center sm:py-28">
        <SentinelLogoMark
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 text-fd-foreground opacity-[0.04]"
        />
        <h2 className="font-display-serif mx-auto max-w-[620px] text-[2.4rem] leading-[1.02] text-balance sm:text-[3.6rem]">
          Put your agents to work.
        </h2>
        <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-relaxed text-balance text-fd-muted-foreground">
          Free to download. Bring the agents and accounts you already have.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          <Link
            href="/download"
            className="inline-flex h-10 items-center rounded-full bg-fd-foreground px-5 text-[13px] font-medium text-fd-background transition-opacity hover:opacity-85"
          >
            Download Sentinel
          </Link>
          <Link
            href="/docs/getting-started/quickstart"
            className="inline-flex h-10 items-center rounded-full border border-fd-border bg-fd-background/60 px-5 text-[13px] font-medium backdrop-blur transition-colors hover:bg-fd-accent"
          >
            Quickstart
          </Link>
        </div>
      </Canvas>
    </section>
  );
}
