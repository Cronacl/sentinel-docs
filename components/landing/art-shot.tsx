import { PetalField } from "@/components/landing/petal-field";
import { Shot, type ShotName } from "@/components/landing/shot";

type ArtShotProps = {
  name: ShotName;
  alt: string;
  seed: number;
  className?: string;
  priority?: boolean;
  /** Max width of the window on the artwork (crops sit smaller than the full app). */
  maxWidth?: number;
};

/** The app window resting on an artwork panel. */
export function ArtShot({ name, alt, seed, className, priority, maxWidth }: ArtShotProps) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-[6px] bg-fd-card ${className ?? ""}`}
    >
      <PetalField seed={seed} className="absolute inset-0 -z-10 h-full w-full" />
      <div className="flex h-full items-center justify-center px-[6%] py-[7%]">
        <div className="w-full" style={maxWidth ? { maxWidth } : undefined}>
          <Shot name={name} alt={alt} priority={priority} />
        </div>
      </div>
    </div>
  );
}
