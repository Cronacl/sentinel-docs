import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer className="border-t border-fd-border/30">
      <div className="mx-auto flex max-w-[960px] items-center justify-between px-6 py-3 text-[11px] text-fd-muted-foreground/35">
        <span>&copy; {new Date().getFullYear()} Cronacl</span>
        <div className="flex items-center gap-4">
          <Link href="/docs" className="hover:text-fd-muted-foreground transition-colors">Docs</Link>
          <Link href="/download" className="hover:text-fd-muted-foreground transition-colors">Download</Link>
          <a href="https://github.com/Cronacl/sentinel" target="_blank" rel="noopener noreferrer" className="hover:text-fd-muted-foreground transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
