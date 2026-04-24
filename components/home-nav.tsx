import Link from "next/link";
import { SentinelLogoMark } from "@/components/sentinel-logo";

export default function HomeNav() {
  return (
    <header className="sticky top-0 z-50 bg-fd-background">
      <nav className="mx-auto flex h-14 max-w-[980px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <SentinelLogoMark className="h-4 w-4" />
          <span className="text-sm font-semibold">Sentinel</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-fd-muted-foreground">
          <Link href="/docs" className="hover:text-fd-foreground">
            Docs
          </Link>
          <Link href="/download" className="hover:text-fd-foreground">
            Download
          </Link>
          <a
            href="https://github.com/Cronacl/sentinel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fd-foreground"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
