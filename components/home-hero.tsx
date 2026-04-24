"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

const SCREENSHOT_URL =
  "https://storage.googleapis.com/cronacl-public-assets/sentinel/repo-workflow.webp";

export default function HomeHero() {
  return (
    <section className="mx-auto max-w-[980px] px-6 pt-20 pb-24">
      <h1 className="max-w-[540px] text-3xl font-medium sm:text-4xl">
        Built for structured software work, Sentinel is the AI desktop app for
        local projects.
      </h1>

      <div className="mt-6 flex items-center gap-3">
        <Link href="/download">
          <Button variant="primary" size="md">
            Download for macOS
          </Button>
        </Link>
        <Link href="/docs">
          <Button variant="ghost" size="md">
            Documentation
          </Button>
        </Link>
      </div>

      <img
        src={SCREENSHOT_URL}
        alt="Sentinel desktop app"
        className="mt-14 block w-full rounded-lg"
        loading="eager"
      />
    </section>
  );
}
