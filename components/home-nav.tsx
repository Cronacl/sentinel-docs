import Link from "next/link";
import { SentinelLogoMark } from "@/components/sentinel-logo";

export default function HomeNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-fd-border/40 bg-fd-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-11 max-w-[960px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <SentinelLogoMark className="h-3.5 w-3.5" />
          <span className="text-[12px] font-medium">
            Sentinel
          </span>
        </Link>
        <div className="flex items-center gap-4 text-[12px] text-fd-muted-foreground">
          <Link href="/docs" className="hover:text-fd-foreground transition-colors">Docs</Link>
          <Link href="/download" className="hover:text-fd-foreground transition-colors">Download</Link>
          <a href="https://github.com/Cronacl/sentinel" target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground transition-colors">GitHub</a>
        </div>
      </nav>
    </header>
  );
}
