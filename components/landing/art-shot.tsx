import { PetalField } from "@/components/landing/petal-field";
import { Shot, type ShotName } from "@/components/landing/shot";

type ArtShotProps = {
  name: ShotName;
  alt: string;
  seed: number;
  className?: string;
  priority?: boolean;
};

/** The app window resting on an artwork panel. */
export function ArtShot({ name, alt, seed, className, priority }: ArtShotProps) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-[6px] bg-fd-card ${className ?? ""}`}
    >
      <PetalField seed={seed} className="absolute inset-0 -z-10 h-full w-full" />
      <div className="px-[5%] py-[6%]">
        <Shot name={name} alt={alt} priority={priority} />
      </div>
    </div>
  );
}
