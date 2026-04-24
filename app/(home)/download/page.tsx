import type { Metadata } from "next";
import DownloadContent, {
  PLATFORM_ICONS,
  type DownloadPlatform,
} from "@/components/download-content";

export const metadata: Metadata = {
  title: "Download Sentinel",
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

function getAssetLabel(assetName: string, fallback: string) {
  const lowerName = assetName.toLowerCase();

  if (lowerName.includes("arm64")) {
    return `ARM64 ${fallback}`;
  }

  if (
    lowerName.includes("x64") ||
    lowerName.includes("x86_64") ||
    lowerName.includes("amd64") ||
    (lowerName.endsWith(".appimage") &&
      !lowerName.includes("arm64") &&
      !lowerName.includes("aarch64"))
  ) {
    return `x64 ${fallback}`;
  }

  return fallback;
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

function getPlatformAssetLabel(
  asset: GitHubReleaseAsset | null | undefined,
  fallback: string,
) {
  return asset ? getAssetLabel(asset.name, fallback) : "Latest release";
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

function getPlatforms(release: GitHubRelease | null): DownloadPlatform[] {
  const macAsset =
    pickReleaseAsset(release, ".dmg", "arm64") ??
    pickReleaseAsset(release, ".dmg");
  const windowsAsset =
    pickReleaseAsset(release, ".exe", "x64") ??
    pickReleaseAsset(release, ".exe");
  const linuxX64AppImage = pickReleaseAsset(release, ".appimage", "x64");
  const linuxAppImage = pickReleaseAsset(release, ".appimage");
  const linuxX64AppImageAsset = linuxX64AppImage ?? linuxAppImage;
  const linuxX64Deb = pickReleaseAsset(release, ".deb", "x64");
  const linuxX64Rpm = pickReleaseAsset(release, ".rpm", "x64");
  const linuxArm64AppImage = pickReleaseAsset(release, ".appimage", "arm64");
  const linuxArm64Deb = pickReleaseAsset(release, ".deb", "arm64");
  const linuxArm64Rpm = pickReleaseAsset(release, ".rpm", "arm64");

  return [
    {
      name: "macOS",
      icon: PLATFORM_ICONS.macos,
      detail: getPlatformAssetLabel(macAsset, "DMG installer"),
      fileName: macAsset?.name,
      url: macAsset?.browser_download_url ?? GITHUB_RELEASES_URL,
    },
    {
      name: "Windows",
      icon: PLATFORM_ICONS.windows,
      detail: getPlatformAssetLabel(windowsAsset, "EXE installer"),
      fileName: windowsAsset?.name,
      url: windowsAsset?.browser_download_url ?? GITHUB_RELEASES_URL,
    },
    {
      name: "Linux x64 AppImage",
      icon: PLATFORM_ICONS.linux,
      detail: getPlatformAssetLabel(linuxX64AppImageAsset, "AppImage"),
      fileName: linuxX64AppImageAsset?.name,
      url: linuxX64AppImageAsset?.browser_download_url ?? GITHUB_RELEASES_URL,
    },
    {
      name: "Linux x64 DEB",
      icon: PLATFORM_ICONS.linux,
      detail: getPlatformAssetLabel(linuxX64Deb, "DEB package"),
      fileName: linuxX64Deb?.name,
      url: linuxX64Deb?.browser_download_url ?? GITHUB_RELEASES_URL,
    },
    {
      name: "Linux x64 RPM",
      icon: PLATFORM_ICONS.linux,
      detail: getPlatformAssetLabel(linuxX64Rpm, "RPM package"),
      fileName: linuxX64Rpm?.name,
      url: linuxX64Rpm?.browser_download_url ?? GITHUB_RELEASES_URL,
    },
    {
      name: "Linux arm64 AppImage",
      icon: PLATFORM_ICONS.linux,
      detail: getPlatformAssetLabel(linuxArm64AppImage, "AppImage"),
      fileName: linuxArm64AppImage?.name,
      url: linuxArm64AppImage?.browser_download_url ?? GITHUB_RELEASES_URL,
    },
    {
      name: "Linux arm64 DEB",
      icon: PLATFORM_ICONS.linux,
      detail: getPlatformAssetLabel(linuxArm64Deb, "DEB package"),
      fileName: linuxArm64Deb?.name,
      url: linuxArm64Deb?.browser_download_url ?? GITHUB_RELEASES_URL,
    },
    {
      name: "Linux arm64 RPM",
      icon: PLATFORM_ICONS.linux,
      detail: getPlatformAssetLabel(linuxArm64Rpm, "RPM package"),
      fileName: linuxArm64Rpm?.name,
      url: linuxArm64Rpm?.browser_download_url ?? GITHUB_RELEASES_URL,
    },
  ];
}

export default async function DownloadPage() {
  const release = await getLatestRelease();

  return (
    <DownloadContent
      platforms={getPlatforms(release)}
      releaseUrl={release?.html_url ?? GITHUB_RELEASES_URL}
      version={release?.name ?? release?.tag_name}
      publishedAt={release?.published_at}
    />
  );
}
