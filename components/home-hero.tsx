"use client";

import { Button } from "@heroui/react";
import { motion } from "motion/react";
import Link from "next/link";
import { AppleLogo, WindowsLogo, TerminalLogo } from "@/components/brand-icons";

const SCREENSHOT_DARK =
  "https://storage.googleapis.com/cronacl-public-assets/sentinel/sentinel-dark.webp";
const SCREENSHOT_LIGHT =
  "https://storage.googleapis.com/cronacl-public-assets/sentinel/sentinel-light.webp";

const PLATFORMS = [
  { name: "macOS", Icon: AppleLogo },
  { name: "Windows", Icon: WindowsLogo },
  { name: "Linux", Icon: TerminalLogo  },
];

export default function HomeHero() {
  return (
    <section className="mx-auto max-w-[960px] px-6 pt-16 sm:pt-20">
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {PLATFORMS.map((p) => (
          <span
            key={p.name}
            className="inline-flex items-center gap-1.5 text-[11px] text-fd-muted-foreground/40"
          >
            <p.Icon size={10} />
            {p.name}
          </span>
        ))}
      </motion.div>

      <motion.h1
        className="max-w-[500px] text-[1.65rem] font-medium sm:text-[2.5rem]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        AI-powered software work, locally.
      </motion.h1>

      <motion.p
        className="mt-2.5 max-w-[400px] text-[13px] text-fd-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.04,
        }}
      >
        Built-in terminal, browser, and multi-engine support. Tie AI threads to
        real project folders.
      </motion.p>

      <motion.div
        className="mt-4 flex items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.08,
        }}
      >
        <Link href="/download">
          <Button
            variant="primary"
            size="sm"
            className="rounded-full bg-fd-foreground text-fd-background font-medium text-[12px] px-4 h-[30px]"
          >
            Download for free
          </Button>
        </Link>
        <Link href="/docs">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full font-medium text-[12px] px-4 h-[30px]"
          >
            Documentation
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.14,
        }}
        className="mt-8"
      >
        <div className="overflow-hidden rounded-xl border border-fd-border">
          <img
            src={SCREENSHOT_LIGHT}
            alt="Sentinel desktop app"
            className="block w-full dark:hidden"
            loading="eager"
          />
          <img
            src={SCREENSHOT_DARK}
            alt="Sentinel desktop app"
            className="hidden w-full dark:block"
            loading="eager"
          />
        </div>
      </motion.div>
    </section>
  );
}
