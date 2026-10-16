"use client";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { AppleLogo, TerminalLogo, WindowsLogo } from "@/components/brand-icons";
import Icon from "@/components/icon";
import { Canvas, Shot } from "@/components/landing/shot";

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
  const platform = useSyncExternalStore(subscribeToNothing, detectPlatform, () => null);

  const rise = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay },
  });
  const PlatformIcon = platform ? PLATFORM_ICONS[platform] : null;

  return (
    <section className="mx-auto max-w-[1120px] px-5 pt-14 sm:px-8 sm:pt-24">
      <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
        <motion.div {...rise(0)}>
          <Link
            href="/docs/engines-and-runtime/agents"
            className="group inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 py-1 pr-2.5 pl-1 text-[12px] text-fd-muted-foreground backdrop-blur transition-colors hover:text-fd-foreground"
          >
            <span className="rounded-full bg-fd-foreground px-2 py-0.5 text-[11px] font-medium text-fd-background">
              New
            </span>
            <span className="sm:hidden">New agents in Sentinel</span>
            <span className="hidden sm:inline">
              Grok Build, Antigravity, Pi and the ACP Registry
            </span>
            <Icon
              icon={ArrowRight01Icon}
              size={12}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        <motion.h1
          {...rise(0.06)}
          className="font-display-serif mt-7 text-[2.6rem] leading-[1.02] text-balance sm:text-[4.4rem]"
        >
          Every coding agent.<br className="hidden sm:block" /> One workspace.
        </motion.h1>

        <motion.p
          {...rise(0.12)}
          className="mt-5 max-w-[440px] text-[15px] leading-relaxed text-balance text-fd-muted-foreground sm:text-[17px]"
        >
          A free desktop app to run Claude, Codex, Cursor and more side by
          side, in your own projects.
        </motion.p>

        <motion.div
          {...rise(0.18)}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
        >
          <Link
            href="/download"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-fd-foreground px-5 text-[13px] font-medium text-fd-background transition-opacity hover:opacity-85"
          >
            {PlatformIcon ? <PlatformIcon size={13} /> : null}
            {platform ? `Download for ${platform}` : "Download Sentinel"}
          </Link>
          <Link
            href="/docs"
            className="inline-flex h-10 items-center rounded-full border border-fd-border px-5 text-[13px] font-medium transition-colors hover:bg-fd-accent"
          >
            Read the docs
          </Link>
        </motion.div>

        <motion.p
          {...rise(0.22)}
          className="mt-4 text-[12px] text-balance text-fd-muted-foreground/70"
        >
          Free · macOS 13+, Windows and Linux · Your own accounts and keys
        </motion.p>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.28 }}
        className="mt-14 sm:mt-20"
      >
        <Canvas className="p-3 sm:p-10 lg:p-14">
          <Shot
            name="terminal-browser"
            alt="Sentinel with an agent thread, the built-in terminal running tests and the built-in browser previewing the app"
            priority
          />
        </Canvas>
      </motion.div>
    </section>
  );
}
