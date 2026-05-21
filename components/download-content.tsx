import { ArrowUpRight01Icon, Download04Icon } from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import type { ComponentType, SVGProps } from "react";
import Icon from "@/components/icon";
import {
  AppleLogo,
  WindowsLogo,
  TerminalLogo,
} from "@/components/brand-icons";
import {
  AppleIcon,
  CommandLineIcon,
  WindowsOldIcon,
} from "@hugeicons/core-free-icons";

export type DownloadPlatform = {
  name: string;
  icon: IconSvgElement;
  detail: string;
  url: string;
  fileName?: string;
};

type DownloadContentProps = {
  platforms: DownloadPlatform[];
  releaseUrl: string;
  version?: string;
  publishedAt?: string;
};

export const PLATFORM_ICONS = {
  linux: CommandLineIcon,
  macos: AppleIcon,
  windows: WindowsOldIcon,
} satisfies Record<string, IconSvgElement>;

const BRAND_ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement> & { size?: number }>> = {
  macOS: AppleLogo,
  Windows: WindowsLogo,
};

function getBrandIcon(name: string) {
  if (name.toLowerCase().includes("macos")) return AppleLogo;
  if (name.toLowerCase().includes("windows")) return WindowsLogo;
  if (name.toLowerCase().includes("linux")) return TerminalLogo;
  return TerminalLogo;
}

export default function DownloadContent({
  platforms,
  releaseUrl,
  version,
  publishedAt,
}: DownloadContentProps) {
  const publishedLabel = publishedAt
    ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
        new Date(publishedAt),
      )
    : null;

  return (
    <div className="mx-auto max-w-[960px] min-h-[calc(100vh-7rem)] px-6 pt-16 pb-10 sm:pt-20">
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <h1 className="text-lg font-medium sm:text-xl">
            Download Sentinel
          </h1>
          <p className="mt-0.5 text-[12px] text-fd-muted-foreground">
            Installers from the latest GitHub release.
          </p>
        </div>
        {version || publishedLabel ? (
          <p className="text-[10px] text-fd-muted-foreground/35">
            {version ?? "Latest"}
            {publishedLabel ? ` · ${publishedLabel}` : null}
          </p>
        ) : null}
      </div>

      <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
        {platforms.map((platform) => {
          const BrandIcon = getBrandIcon(platform.name);
          return (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-lg border border-fd-border bg-fd-card px-3 py-2.5 transition-colors hover:bg-fd-accent"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-fd-border bg-fd-background">
                <BrandIcon size={13} className="text-fd-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-medium">
                  {platform.name}
                </p>
                <p className="text-[10px] text-fd-muted-foreground">
                  {platform.detail}
                </p>
              </div>
              <Icon
                icon={Download04Icon}
                size={13}
                strokeWidth={1.5}
                className="shrink-0 text-fd-muted-foreground/25 transition-colors group-hover:text-fd-foreground"
              />
            </a>
          );
        })}
      </div>

      <div className="mt-4">
        <a
          href={releaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] text-fd-muted-foreground/35 transition-colors hover:text-fd-muted-foreground"
        >
          All releases on GitHub
          <Icon icon={ArrowUpRight01Icon} size={10} strokeWidth={1.8} />
        </a>
      </div>
    </div>
  );
}
