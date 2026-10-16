"use client";

import { Download04Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { OsMark, useOs, type Os } from "@/components/landing/platform";
import Icon from "@/components/icon";



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





export default function DownloadContent({
  groups,
  releaseUrl,
  version,
  publishedAt,
}: DownloadContentProps) {
  const os = useOs();
  const published = publishedAt
    ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
        new Date(publishedAt),
      )
    : null;
  const recommended = os
    ? groups.find((group) => group.os === os)?.rows[0]?.files[0]
    : undefined;

  return (
    <div className="mx-auto max-w-[1200px] px-5 pt-14 pb-24 sm:px-8 sm:pt-20 sm:pb-32">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icon.png"
          alt=""
          width={88}
          height={88}
          className="size-[88px] shrink-0 drop-shadow-[0_6px_14px_rgb(0_0_0/0.18)]"
        />
        <div>
          <h1 className="text-[1.375rem] leading-[1.3] font-normal tracking-[-0.01em]">
            Download Sentinel
            <span className="block text-fd-muted-foreground">
              Available for macOS, Windows and Linux.
            </span>
          </h1>
          {recommended && os ? (
            <a
              href={recommended.url}
              className="mt-4 inline-flex h-9 items-center gap-1.5 rounded-full bg-fd-primary px-4 text-[14px] text-fd-primary-foreground transition-colors hover:bg-fd-primary/85"
            >
              Download for {os}
              <Icon icon={Download04Icon} size={14} />
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-14 border-t border-fd-border pt-5">
        <div className="flex items-center gap-2.5 text-[15px]">
          {version ?? "Latest"}
          <span className="rounded-full border border-fd-border px-2 py-0.5 text-[11.5px] text-fd-muted-foreground">
            Latest
          </span>
          {published ? (
            <span className="text-[13.5px] text-fd-muted-foreground">{published}</span>
          ) : null}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {groups.map((group) => {
            return (
              <div key={group.os} className="rounded-[6px] bg-fd-card px-4 pt-4 pb-2">
                <p className="flex items-center gap-2 text-[14px]">
                  <OsMark os={group.os} size={14} />
                  {group.os}
                </p>
                <ul className="mt-3">
                  {group.rows.flatMap((row) =>
                    (row.files.length > 0 ? row.files : [null]).map((item) => (
                      <li key={`${row.arch}-${item?.label ?? "none"}`} className="border-t border-fd-border first:border-t-0">
                        <a
                          href={item?.url ?? releaseUrl}
                          className="group flex items-center justify-between gap-3 py-2.5 text-[13.5px]"
                        >
                          <span>
                            {group.os === "macOS" ? "Mac" : group.os} {item ? `${item.label} ` : ""}({row.arch})
                          </span>
                          <Icon
                            icon={Download04Icon}
                            size={14}
                            className="shrink-0 text-fd-muted-foreground transition-colors group-hover:text-fd-foreground"
                          />
                        </a>
                      </li>
                    )),
                  )}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[13.5px]">
          <a
            href={releaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-(--color-link) transition-opacity hover:opacity-80"
          >
            View release notes <span aria-hidden>→</span>
          </a>
          <span className="text-fd-muted-foreground">
            macOS 13+ · Windows 10+ · Linux with glibc 2.34+ ·{" "}
            <Link
              href="/docs/getting-started/install"
              className="text-fd-foreground underline-offset-4 hover:underline"
            >
              Install guide
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
