import {
  AppleIcon,
  ArrowUpRight01Icon,
  CommandLineIcon,
  Download04Icon,
  WindowsOldIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import Icon from "@/components/icon";

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

export default function DownloadContent({
  platforms,
  releaseUrl,
  version,
  publishedAt,
}: DownloadContentProps) {
  const publishedLabel = publishedAt
    ? new Intl.DateTimeFormat("en", {
        dateStyle: "medium",
      }).format(new Date(publishedAt))
    : null;

  return (
    <div className="mx-auto max-w-[980px] min-h-[calc(100vh-10rem)] px-6 pt-20 pb-24">
      <h1 className="text-3xl font-medium">Download</h1>
      <p className="mt-2 text-sm text-fd-muted-foreground">
        Direct installers from the latest GitHub release.
      </p>

      {version || publishedLabel ? (
        <p className="mt-1 text-xs text-fd-muted-foreground">
          {version ? `Latest release: ${version}` : "Latest release"}
          {publishedLabel ? ` • Published ${publishedLabel}` : null}
        </p>
      ) : null}

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 rounded-3xl border border-separate bg-background px-6 py-8 hover:bg-surface dark:bg-background/20 dark:hover:bg-background/80"
          >
            <Icon icon={platform.icon} size={24} strokeWidth={1.4} />
            <div className="text-center">
              <p className="text-sm font-medium">{platform.name}</p>
              <p className="mt-1 text-xs text-fd-muted-foreground">
                {platform.detail}
              </p>
              {platform.fileName ? (
                <p className="mt-2 text-[11px] text-fd-muted-foreground/80">
                  {platform.fileName}
                </p>
              ) : null}
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-fd-muted-foreground">
              <Icon icon={Download04Icon} size={13} strokeWidth={1.7} />
              Download
            </span>
          </a>
        ))}
      </div>

      <div className="mt-8">
        <a
          href={releaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-fd-muted-foreground hover:text-fd-foreground"
        >
          View all releases on GitHub
          <Icon icon={ArrowUpRight01Icon} size={12} strokeWidth={1.8} />
        </a>
      </div>
    </div>
  );
}
