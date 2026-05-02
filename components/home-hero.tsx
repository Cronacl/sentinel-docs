"use client";

import { Button } from "@heroui/react";
import {
  AppleIcon,
  CommandLineIcon,
  WindowsOldIcon,
} from "@hugeicons/core-free-icons";
import { motion } from "motion/react";
import Link from "next/link";
import Icon from "@/components/icon";

const SCREENSHOT_URL =
  "https://storage.googleapis.com/cronacl-public-assets/sentinel/repo-workflow.webp";

const PLATFORMS = [
  { name: "macOS", icon: AppleIcon },
  { name: "Windows", icon: WindowsOldIcon },
  { name: "Linux", icon: CommandLineIcon },
];

export default function HomeHero() {
  return (
    <section className="mx-auto max-w-[980px] px-6 pt-24 pb-20">
      <motion.h1
        className="max-w-[600px] text-4xl font-medium tracking-tight sm:text-5xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        The AI desktop app for local software work.
      </motion.h1>

      <motion.p
        className="mt-4 max-w-[480px] text-base text-fd-muted-foreground"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
      >
        Workspace-aware, multi-engine, with a built-in terminal and browser. Tie
        AI threads to real project folders.
      </motion.p>

      <motion.div
        className="mt-7 flex items-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
      >
        <Link href="/download">
          <Button variant="primary" size="md">
            Download for free
          </Button>
        </Link>
        <Link href="/docs">
          <Button variant="ghost" size="md">
            Documentation
          </Button>
        </Link>
      </motion.div>

      <motion.div
        className="mt-4 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.24 }}
      >
        {PLATFORMS.map((platform) => (
          <span
            key={platform.name}
            className="inline-flex items-center gap-1.5 text-xs text-fd-muted-foreground"
          >
            <Icon icon={platform.icon} size={13} strokeWidth={1.5} />
            {platform.name}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <img
          src={SCREENSHOT_URL}
          alt="Sentinel desktop app showing a project workflow"
          className="mt-14 block w-full rounded-lg border shadow-sm"
          loading="eager"
        />
      </motion.div>
    </section>
  );
}
