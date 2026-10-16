"use client";

import { motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";
import { AppleLogo, TerminalLogo, WindowsLogo } from "@/components/brand-icons";
import { PrimaryButton, SecondaryButton } from "@/components/landing/buttons";
import { Shot } from "@/components/landing/shot";

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
    <section className="mx-auto max-w-[1200px] px-5 pt-16 sm:px-8 sm:pt-28">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
        <motion.h1
          {...appear(0)}
          className="text-[2.75rem] leading-[1.02] font-medium tracking-[-0.035em] sm:text-[4.25rem]"
        >
          Every coding agent.
          <br />
          One workspace.
        </motion.h1>

        <motion.div {...appear(0.08)} className="lg:pb-2">
          <p className="max-w-[420px] text-[16px] leading-relaxed text-fd-muted-foreground">
            A free desktop app to run Claude, Codex, Cursor and every other
            coding agent side by side, inside your own projects.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <PrimaryButton href="/download">
              {PlatformIcon ? <PlatformIcon size={13} /> : null}
              {platform ? `Download for ${platform}` : "Download"}
            </PrimaryButton>
            <SecondaryButton href="/docs">Documentation</SecondaryButton>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
        className="mt-14 sm:mt-20"
      >
        <Shot
          name="terminal-browser"
          alt="Sentinel with an agent thread, the built-in terminal running tests and the built-in browser previewing the app"
          priority
        />
      </motion.div>
    </section>
  );
}
