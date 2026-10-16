import Link from "next/link";
import { SentinelLogoMark } from "@/components/sentinel-logo";

const LINKS = [
  { href: "/docs/engines-and-runtime/agents", label: "Agents" },
  { href: "/docs", label: "Docs" },
  { href: "https://github.com/Cronacl/Sentinel/releases", label: "Changelog", external: true },
];

export default function HomeNav() {
  return (
    <header className="sticky top-0 z-50 bg-fd-background/90 backdrop-blur-md">
      <nav className="mx-auto grid h-14 max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Sentinel home">
          <SentinelLogoMark className="h-4 w-4" />
          <span className="text-[15px] font-medium tracking-[-0.01em]">Sentinel</span>
        </Link>
        <div className="hidden items-center gap-7 text-[14px] text-fd-muted-foreground md:flex">
          {LINKS.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fd-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-fd-foreground">
                {link.label}
              </Link>
            ),
          )}
        </div>
        <div className="col-start-3 flex items-center justify-end gap-2">
          <Link
            href="/docs"
            className="px-2 text-[14px] text-fd-muted-foreground transition-colors hover:text-fd-foreground md:hidden"
          >
            Docs
          </Link>
          <a
            href="https://github.com/Cronacl/sentinel"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-8 items-center rounded-full border border-fd-border px-3.5 text-[13.5px] transition-colors hover:bg-fd-accent sm:inline-flex"
          >
            GitHub
          </a>
          <Link
            href="/download"
            className="inline-flex h-8 items-center rounded-full bg-fd-primary px-3.5 text-[13.5px] text-fd-primary-foreground transition-colors hover:bg-fd-primary/85"
          >
            Download
          </Link>
        </div>
      </nav>
    </header>
  );
}
