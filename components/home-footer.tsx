import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer>
      <div className="mx-auto flex max-w-[980px] items-center justify-between px-6 py-6 text-xs text-fd-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Cronacl</span>
        <div className="flex items-center gap-5">
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
      </div>
    </footer>
  );
}
