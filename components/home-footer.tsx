import Link from "next/link";
import { SentinelLogoMark } from "@/components/sentinel-logo";

export default function HomeFooter() {
  return (
    <footer className="border-t border-fd-border/50">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-8 text-[12.5px] text-fd-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span className="flex items-center gap-2">
          <SentinelLogoMark className="h-3.5 w-3.5" />
          &copy; {new Date().getFullYear()} Cronacl
        </span>
        <div className="flex items-center gap-5">
          <Link href="/docs" className="transition-colors hover:text-fd-foreground">Docs</Link>
          <Link href="/download" className="transition-colors hover:text-fd-foreground">Download</Link>
          <a href="https://github.com/Cronacl/Sentinel/releases" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fd-foreground">Releases</a>
          <a href="https://github.com/Cronacl/sentinel" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fd-foreground">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
