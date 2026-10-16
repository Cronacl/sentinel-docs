import type { Metadata } from "next";
import DownloadContent, {
  type DownloadFile,
  type DownloadGroup,
} from "@/components/download-content";

export const metadata: Metadata = {
  title: { absolute: "Download Sentinel" },
  description: "Download Sentinel for macOS, Windows, or Linux.",
};

const GITHUB_RELEASES_URL = "https://github.com/Cronacl/Sentinel/releases";
const GITHUB_LATEST_RELEASE_API =
  "https://api.github.com/repos/Cronacl/Sentinel/releases/latest";
const GITHUB_RELEASES_API =
  "https://api.github.com/repos/Cronacl/Sentinel/releases?per_page=10";

type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type GitHubRelease = {
  html_url: string;
  name: string;
  tag_name: string;
  draft?: boolean;
  published_at?: string;
  assets: GitHubReleaseAsset[];
};

function pickAsset(
  assets: GitHubReleaseAsset[],
  predicate: (asset: GitHubReleaseAsset) => boolean,
) {
  return assets.find(predicate);
}


function matchesArch(assetName: string, arch: "arm64" | "x64") {
  const lowerName = assetName.toLowerCase();

  if (arch === "arm64") {
    return lowerName.includes("arm64") || lowerName.includes("aarch64");
  }

  return (
    lowerName.includes("x64") ||
    lowerName.includes("x86_64") ||
    lowerName.includes("amd64") ||
    (!lowerName.includes("arm64") && !lowerName.includes("aarch64"))
  );
}

function pickReleaseAsset(
  release: GitHubRelease | null,
  extension: string,
  arch?: "arm64" | "x64",
) {
  if (!release) return null;

  return pickAsset(
    release.assets,
    (asset) =>
      asset.name.toLowerCase().endsWith(extension.toLowerCase()) &&
      !asset.name.toLowerCase().endsWith(".blockmap") &&
      (!arch || matchesArch(asset.name, arch)),
  );
}

function getRequiredAssets(release: GitHubRelease) {
  const linuxX64AppImage =
    pickReleaseAsset(release, ".appimage", "x64") ??
    pickReleaseAsset(release, ".appimage");

  return {
    linuxArm64AppImage: pickReleaseAsset(release, ".appimage", "arm64"),
    linuxX64AppImage,
    mac: pickReleaseAsset(release, ".dmg", "arm64") ??
      pickReleaseAsset(release, ".dmg"),
    windows: pickReleaseAsset(release, ".exe", "x64") ??
      pickReleaseAsset(release, ".exe"),
  };
}

function hasDownloadUrl(asset: GitHubReleaseAsset | null | undefined) {
  return Boolean(asset?.browser_download_url);
}

function hasRequiredInstallerAssets(release: GitHubRelease) {
  const requiredAssets = getRequiredAssets(release);

  return (
    hasDownloadUrl(requiredAssets.linuxArm64AppImage) &&
    hasDownloadUrl(requiredAssets.linuxX64AppImage) &&
    hasDownloadUrl(requiredAssets.mac) &&
    hasDownloadUrl(requiredAssets.windows)
  );
}


async function fetchGitHubRelease(url: string) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "sentinel-docs",
    },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`GitHub release fetch failed with ${response.status}`);
  }

  return response;
}

async function getLatestRelease() {
  try {
    const latestRelease = (await (
      await fetchGitHubRelease(GITHUB_LATEST_RELEASE_API)
    ).json()) as GitHubRelease;

    if (hasRequiredInstallerAssets(latestRelease)) {
      return latestRelease;
    }

    const releases = (await (
      await fetchGitHubRelease(GITHUB_RELEASES_API)
    ).json()) as GitHubRelease[];

    return (
      releases.find(
        (release) => !release.draft && hasRequiredInstallerAssets(release),
      ) ??
      latestRelease
    );
  } catch {
    return null;
  }
}

function file(
  release: GitHubRelease | null,
  label: string,
  extension: string,
  arch?: "arm64" | "x64",
): DownloadFile | null {
  const asset = pickReleaseAsset(release, extension, arch);
  return asset ? { label, url: asset.browser_download_url } : null;
}

function present<T>(items: (T | null)[]): T[] {
  return items.filter((item): item is T => item !== null);
}

function getGroups(release: GitHubRelease | null): DownloadGroup[] {
  const linuxX64AppImage =
    file(release, "AppImage", ".appimage", "x64") ??
    file(release, "AppImage", ".appimage");

  return [
    {
      os: "macOS",
      rows: [
        {
          arch: "Apple silicon",
          files: present([
            file(release, "DMG", ".dmg", "arm64") ?? file(release, "DMG", ".dmg"),
          ]),
          requirement: "macOS 13 or later",
        },
      ],
    },
    {
      os: "Windows",
      rows: [
        {
          arch: "x64",
          files: present([
            file(release, "Installer", ".exe", "x64") ??
              file(release, "Installer", ".exe"),
          ]),
          requirement: "Windows 10 or later",
        },
      ],
    },
    {
      os: "Linux",
      rows: [
        {
          arch: "x64",
          files: present([
            linuxX64AppImage,
            file(release, "DEB", ".deb", "x64"),
            file(release, "RPM", ".rpm", "x64"),
          ]),
          requirement: "glibc 2.34 or later",
        },
        {
          arch: "arm64",
          files: present([
            file(release, "AppImage", ".appimage", "arm64"),
            file(release, "DEB", ".deb", "arm64"),
            file(release, "RPM", ".rpm", "arm64"),
          ]),
          requirement: "glibc 2.34 or later",
        },
      ],
    },
  ];
}

export default async function DownloadPage() {
  const release = await getLatestRelease();

  return (
    <DownloadContent
      groups={getGroups(release)}
      releaseUrl={release?.html_url ?? GITHUB_RELEASES_URL}
      version={release?.tag_name ?? release?.name}
      publishedAt={release?.published_at}
    />
  );
}
