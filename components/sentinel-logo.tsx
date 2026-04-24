import Link from "next/link";

type LogoProps = {
  className?: string;
  href?: string;
  label?: string;
  linked?: boolean;
  showText?: boolean;
  textClassName?: string;
};

type SentinelLogoMarkProps = {
  className?: string;
};

export function SentinelLogoMark({ className }: SentinelLogoMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={`fill-current ${className ?? ""}`}
      fill="none"
      viewBox="0 0 201 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#sentinel-logo-clip)">
        <path d="M91.9711 91.6947C236.385 236.108 -35.8253 236.108 108.582 91.6947C-35.832 236.108 -35.832 -36.1018 108.582 108.305C-35.832 -36.1084 236.378 -36.1084 91.9711 108.305C236.385 -36.1084 236.385 236.102 91.9711 91.6947Z" />
      </g>
      <defs>
        <clipPath id="sentinel-logo-clip">
          <rect height="200" transform="translate(0.276367)" width="200" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Logo({
  className,
  href = "/",
  label = "Sentinel",
  linked = true,
  showText = false,
  textClassName,
}: LogoProps) {
  const content = (
    <>
      <div>
        <SentinelLogoMark className="h-4 w-4" />
      </div>
      {showText ? (
        <span className={textClassName ?? "text-lg font-semibold"}>{label}</span>
      ) : null}
    </>
  );

  return (
    <div className="w-full flex justify-start">
      {linked ? (
        <Link href={href} className="w-fit flex items-center gap-1">
          {content}
        </Link>
      ) : (
        <div className="w-fit flex items-center gap-1">{content}</div>
      )}
    </div>
  );
}
