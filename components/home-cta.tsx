"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="mx-auto max-w-[960px] px-6 pb-10">
      <div className="flex items-center justify-between rounded-lg border border-fd-border bg-fd-card px-4 py-3.5">
        <div>
          <h2 className="text-[13px] font-medium">Get started with Sentinel</h2>
          <p className="text-[11px] text-fd-muted-foreground">
            Free. macOS, Windows, Linux.
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <Link href="/download">
            <Button
              variant="primary"
              size="sm"
              className="rounded-full bg-fd-foreground text-fd-background font-medium text-[11px] px-3.5 h-[26px] min-w-0"
            >
              Download
            </Button>
          </Link>
          <Link href="/docs">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full font-medium text-[11px] px-3.5 h-[26px] min-w-0"
            >
              Docs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
