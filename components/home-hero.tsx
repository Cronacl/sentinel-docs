"use client";

import { motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";
import { AppleLogo, TerminalLogo, WindowsLogo } from "@/components/brand-icons";
import { PrimaryButton, SecondaryButton } from "@/components/landing/buttons";
import { ArtShot } from "@/components/landing/art-shot";

const EASE = [0.22, 1, 0.36, 1] as const;

type Platform = "macOS" | "Windows" | "Linux" | null;

function detectPlatform(): Platform {
  const agent = navigator.userAgent;
  if (/Mac/i.test(agent) && !/iPhone|iPad/i.test(agent)) return "macOS";
  if (/Windows/i.test(agent)) return "Windows";
  if (/Linux/i.test(agent) && !/Android/i.test(agent)) return "Linux";
  return null;
}

const subscribeToNothing = () => () => {};

const PLATFORM_ICONS = {
  Linux: TerminalLogo,
  Windows: WindowsLogo,
  macOS: AppleLogo,
} as const;

export default function HomeHero() {
  const reduceMotion = useReducedMotion();
  // null while server-rendering; the visitor's OS once hydrated.
  const platform = useSyncExternalStore(
    subscribeToNothing,
    detectPlatform,
    () => null,
  );
  const PlatformIcon = platform ? PLATFORM_ICONS[platform] : null;
  const appear = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: EASE, delay },
  });

  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-16 sm:px-8 sm:pt-24">
      <motion.div {...appear(0)} className="max-w-[640px]">
        <h1 className="text-[1.75rem] leading-[1.25] font-normal tracking-[-0.01em] sm:text-[2rem]">
          Every coding agent, one workspace.
          <span className="block text-fd-muted-foreground">
            Run Claude, Codex, Cursor and more side by side, in your own
            projects.
          </span>
        </h1>
        <div className="mt-7 flex flex-wrap items-center gap-2">
          <PrimaryButton href="/download">
            {PlatformIcon ? <PlatformIcon size={13} /> : null}
            {platform ? `Download for ${platform}` : "Download"}
          </PrimaryButton>
          <SecondaryButton href="/docs">Documentation</SecondaryButton>
        </div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
        className="mt-12 sm:mt-16"
      >
        <ArtShot
          name="terminal-browser"
          alt="Sentinel with an agent thread, the built-in terminal running tests and the built-in browser previewing the app"
          seed={7}
          priority
        />
      </motion.div>
    </section>
  );
}
