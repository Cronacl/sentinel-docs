"use client";

import { ArrowUpRight01Icon, Download04Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { useSyncExternalStore } from "react";
import { AppleLogo, TerminalLogo, WindowsLogo } from "@/components/brand-icons";
import Icon from "@/components/icon";

type Os = "macOS" | "Windows" | "Linux";

export type DownloadFile = { label: string; url: string };

export type DownloadGroup = {
  os: Os;
  rows: { arch: string; requirement: string; files: DownloadFile[] }[];
};

type DownloadContentProps = {
  groups: DownloadGroup[];
  releaseUrl: string;
  version?: string;
  publishedAt?: string;
};

const OS_ICONS: Record<Os, ComponentType<SVGProps<SVGSVGElement> & { size?: number }>> = {
  Linux: TerminalLogo,
  Windows: WindowsLogo,
  macOS: AppleLogo,
};

function detectOs(): Os | null {
  const agent = navigator.userAgent;
  if (/Mac/i.test(agent) && !/iPhone|iPad/i.test(agent)) return "macOS";
  if (/Windows/i.test(agent)) return "Windows";
  if (/Linux/i.test(agent) && !/Android/i.test(agent)) return "Linux";
  return null;
}

const subscribeToNothing = () => () => {};

const PILL =
  "inline-flex h-9 items-center justify-center gap-2 rounded-full px-4 text-[13px] font-medium transition-colors";

export default function DownloadContent({
  groups,
  releaseUrl,
  version,
  publishedAt,
}: DownloadContentProps) {
  const os = useSyncExternalStore(subscribeToNothing, detectOs, () => null);
  const published = publishedAt
    ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
        new Date(publishedAt),
      )
    : null;
  const recommended = os
    ? groups.find((group) => group.os === os)?.rows[0]?.files[0]
    : undefined;
  const RecommendedIcon = os ? OS_ICONS[os] : null;

  return (
    <div className="mx-auto max-w-[1200px] px-5 pt-16 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
        <h1 className="text-[2.75rem] leading-[1.02] font-medium tracking-[-0.035em] sm:text-[4.25rem]">
          Download
          <br />
          Sentinel.
        </h1>
        <div className="lg:pb-2">
          <p className="text-[16px] leading-relaxed text-fd-muted-foreground">
            Free for macOS, Windows and Linux.
            {version ? (
              <>
                <br />
                <span className="text-fd-foreground">{version}</span>
                {published ? ` · ${published}` : null}
              </>
            ) : null}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {recommended && os ? (
              <a
                href={recommended.url}
                className={`${PILL} bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/85`}
              >
                {RecommendedIcon ? <RecommendedIcon size={13} /> : null}
                Download for {os}
              </a>
            ) : null}
            <a
              href={releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${PILL} bg-fd-accent text-fd-foreground hover:bg-fd-muted`}
            >
              Release notes
              <Icon icon={ArrowUpRight01Icon} size={13} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 overflow-hidden rounded-xl border border-fd-border bg-fd-card sm:mt-20">
        {groups.map((group) => {
          const OsIcon = OS_ICONS[group.os];
          return group.rows.map((row, index) => (
            <div
              key={`${group.os}-${row.arch}`}
              className="flex flex-col gap-3 border-b border-fd-border px-5 py-4 last:border-b-0 sm:grid sm:grid-cols-[180px_minmax(0,1fr)_auto] sm:items-center sm:gap-x-4 sm:px-6"
            >
              <div
                className={`items-center gap-2.5 text-[14px] font-medium ${index === 0 ? "flex" : "hidden sm:flex"}`}
              >
                {index === 0 ? (
                  <>
                    <OsIcon size={15} className="shrink-0" />
                    {group.os}
                  </>
                ) : (
                  <span className="sr-only">{group.os}</span>
                )}
              </div>
              <div className="text-[13.5px]">
                <span className="text-fd-foreground">{row.arch}</span>
                <span className="text-fd-muted-foreground"> · {row.requirement}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:justify-end">
                {row.files.length > 0 ? (
                  row.files.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      className="inline-flex h-8 items-center gap-1.5 rounded-full bg-fd-accent px-3.5 text-[12.5px] font-medium transition-colors hover:bg-fd-muted"
                    >
                      <Icon icon={Download04Icon} size={13} />
                      {item.label}
                    </a>
                  ))
                ) : (
                  <a
                    href={releaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12.5px] text-fd-muted-foreground hover:text-fd-foreground"
                  >
                    See the release
                  </a>
                )}
              </div>
            </div>
          ));
        })}
      </div>

      <p className="mt-6 text-[13px] text-fd-muted-foreground">
        Sentinel updates itself in the background. Agents run on your own
        accounts; see{" "}
        <Link
          href="/docs/getting-started/install"
          className="text-fd-foreground underline-offset-4 hover:underline"
        >
          installation
        </Link>{" "}
        for setup.
      </p>
    </div>
  );
}
