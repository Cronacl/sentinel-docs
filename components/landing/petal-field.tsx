// An original backdrop for product shots: Sentinel's four-petal mark,
// scattered like a botanical print in a few ink tones. Seeded, so the
// server and the client draw the same picture.

const PETAL =
  "M91.9711 91.6947C236.385 236.108 -35.8253 236.108 108.582 91.6947C-35.832 236.108 -35.832 -36.1018 108.582 108.305C-35.832 -36.1084 236.378 -36.1084 91.9711 108.305C236.385 -36.1084 236.385 236.102 91.9711 91.6947Z";

function random(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type PetalFieldProps = {
  seed: number;
  /** Petals per layer; three layers from faint and large to dark and small. */
  density?: number;
  className?: string;
};

export function PetalField({ seed, density = 22, className }: PetalFieldProps) {
  const next = random(seed);
  const layers = [
    { opacity: 0.05, min: 220, max: 420 },
    { opacity: 0.09, min: 110, max: 240 },
    { opacity: 0.14, min: 50, max: 120 },
  ];
  const petals = layers.flatMap((layer, depth) =>
    Array.from({ length: density }, (_, index) => {
      const size = layer.min + next() * (layer.max - layer.min);
      return {
        key: `${depth}-${index}`,
        opacity: layer.opacity * (0.7 + next() * 0.6),
        rotate: next() * 90,
        size,
        x: next() * 1600 - size / 2,
        y: next() * 1000 - size / 2,
      };
    }),
  );

  return (
    <svg
      aria-hidden
      className={className}
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1600 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      {petals.map((petal) => (
        <path
          key={petal.key}
          d={PETAL}
          fill="var(--color-art-ink)"
          fillOpacity={petal.opacity}
          transform={`translate(${petal.x.toFixed(1)} ${petal.y.toFixed(1)}) rotate(${petal.rotate.toFixed(1)} ${(petal.size / 2).toFixed(1)} ${(petal.size / 2).toFixed(1)}) scale(${(petal.size / 200).toFixed(3)})`}
        />
      ))}
    </svg>
  );
}
