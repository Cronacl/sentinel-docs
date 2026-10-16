"use client";

import { ArtShot } from "@/components/landing/art-shot";
import { PrimaryButton, SecondaryButton } from "@/components/landing/buttons";
import { OsMark, useOs } from "@/components/landing/platform";

export default function HomeHero() {
  const os = useOs();

  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-16 sm:px-8 sm:pt-24">
      <h1 className="max-w-[640px] text-[1.75rem] leading-[1.25] font-normal tracking-[-0.01em] text-balance sm:text-[2rem]">
        Every coding agent, one workspace.
        <span className="block text-fd-muted-foreground">
          Run Claude, Codex, Cursor and more side by side, in your own
          projects.
        </span>
      </h1>
      <div className="mt-7 flex flex-wrap items-center gap-2">
        <PrimaryButton href="/download">
          {os ? <OsMark os={os} size={14} /> : null}
          {os ? `Download for ${os}` : "Download"}
        </PrimaryButton>
        <SecondaryButton href="/docs">Documentation</SecondaryButton>
      </div>

      <ArtShot
        name="terminal-browser"
        alt="Sentinel with an agent thread, the built-in terminal running tests and the built-in browser previewing the app"
        wallpaper="dawn"
        priority
        className="mt-12 sm:mt-16"
      />
    </section>
  );
}
