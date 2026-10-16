import Link from "next/link";
import { SentinelLogoMark } from "@/components/sentinel-logo";

const LINKS = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/engines-and-runtime/agents", label: "Agents" },
  { href: "https://github.com/Cronacl/sentinel", label: "GitHub", external: true },
];

export default function HomeNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-fd-border/50 bg-fd-background">
      <nav className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Sentinel home">
          <SentinelLogoMark className="h-4 w-4" />
          <span className="text-[14px] font-medium">Sentinel</span>
        </Link>
        <div className="flex items-center gap-5 text-[13px] text-fd-muted-foreground">
          {LINKS.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden transition-colors hover:text-fd-foreground sm:inline"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-fd-foreground"
              >
                {link.label}
              </Link>
            ),
          )}
          <Link
            href="/download"
            className="inline-flex h-8 items-center rounded-full bg-fd-primary px-3.5 text-[12.5px] font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/85"
          >
            Download
          </Link>
        </div>
      </nav>
    </header>
  );
}
