/* eslint-disable @next/next/no-img-element */
import { Shot, type ShotName } from "@/components/landing/shot";

export type Wallpaper = "dawn" | "lagoon" | "dune" | "iris";

type ArtShotProps = {
  name: ShotName;
  alt: string;
  wallpaper: Wallpaper;
  className?: string;
  priority?: boolean;
};

/**
 * The full app window on a desktop wallpaper, like a macOS screenshot.
 * Wallpapers are original (public/wallpapers) with light and dark variants.
 */
export function ArtShot({ name, alt, wallpaper, className, priority }: ArtShotProps) {
  const loading = priority ? "eager" : "lazy";
  return (
    <div className={`relative isolate overflow-hidden rounded-[10px] ${className ?? ""}`}>
      <img
        src={`/wallpapers/${wallpaper}-light.webp`}
        alt=""
        loading={loading}
        className="absolute inset-0 -z-10 size-full object-cover dark:hidden"
      />
      <img
        src={`/wallpapers/${wallpaper}-dark.webp`}
        alt=""
        loading={loading}
        className="absolute inset-0 -z-10 hidden size-full object-cover dark:block"
      />
      <div className="px-[4%] pt-[4.5%] pb-[4.5%] sm:px-[7%] sm:pt-[6%] sm:pb-[6%]">
        <Shot name={name} alt={alt} priority={priority} />
      </div>
    </div>
  );
}
