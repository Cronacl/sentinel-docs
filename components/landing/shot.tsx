/* eslint-disable @next/next/no-img-element */

// Pixel sizes of the 2x captures in public/screenshots (light and dark match).
const SHOTS = {
  "terminal-browser": [2880, 1800],
  "composer-engines-crop": [1440, 1240],
  "engines-usage-crop": [1430, 1215],
  "approvals-crop": [1360, 1060],
} as const;

export type ShotName = keyof typeof SHOTS;

type ShotProps = {
  name: ShotName;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** A product screenshot in the visitor's theme, framed like the app window. */
export function Shot({ name, alt, className, priority }: ShotProps) {
  const [width, height] = SHOTS[name];
  const shared = {
    decoding: "async" as const,
    height,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    width,
  };

  return (
    <div className={`product-frame ${className ?? ""}`}>
      <img
        {...shared}
        alt={alt}
        src={`/screenshots/${name}-light.webp`}
        className="block h-auto w-full dark:hidden"
      />
      <img
        {...shared}
        alt={alt}
        src={`/screenshots/${name}-dark.webp`}
        className="hidden h-auto w-full dark:block"
      />
    </div>
  );
}
