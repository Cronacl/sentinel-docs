"use client";

import { Button } from "@heroui/react";
import {
  AppleIcon,
  CommandLineIcon,
  WindowsOldIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import Icon from "@/components/icon";

const PLATFORMS = [
  { name: "macOS", icon: AppleIcon },
  { name: "Windows", icon: WindowsOldIcon },
  { name: "Linux", icon: CommandLineIcon },
];

export default function HomeCTA() {
  return (
    <section className="mx-auto max-w-[980px] px-6 py-20">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
          Get started with Sentinel
        </h2>
        <p className="mt-3 max-w-[400px] text-sm text-fd-muted-foreground">
          Free to download. Available on macOS, Windows, and Linux.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <Link href="/download">
            <Button variant="primary" size="md">
              Download for free
            </Button>
          </Link>
          <Link href="/docs">
            <Button variant="ghost" size="md">
              Read the docs
            </Button>
          </Link>
        </div>

        <div className="mt-4 flex items-center gap-4">
          {PLATFORMS.map((platform) => (
            <span
              key={platform.name}
              className="inline-flex items-center gap-1.5 text-xs text-fd-muted-foreground"
            >
              <Icon icon={platform.icon} size={13} strokeWidth={1.5} />
              {platform.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
