/* eslint-disable @next/next/no-img-element */

export type ShotName =
  | "terminal-browser"
  | "composer-engines"
  | "engines-usage"
  | "approvals";

// Captured at 2x from a 1440x900 window (see public/screenshots).
const SHOT_WIDTH = 2880;
const SHOT_HEIGHT = 1800;

type ShotProps = {
  name: ShotName;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** A product screenshot in the visitor's theme. */
export function Shot({ name, alt, className, priority }: ShotProps) {
  const shared = {
    decoding: "async" as const,
    height: SHOT_HEIGHT,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    width: SHOT_WIDTH,
  };

  return (
    <div
      className={`landing-shot overflow-hidden rounded-[10px] bg-fd-background ${className ?? ""}`}
    >
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

/** The grainy grayscale panel product shots sit on. */
export function Canvas({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`landing-canvas rounded-2xl ${className ?? ""}`}>
      {children}
    </div>
  );
}
