import Link from "next/link";
import { SentinelLogoMark } from "@/components/sentinel-logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Download", href: "/download" },
      { label: "Agents", href: "/docs/engines-and-runtime/agents" },
      { label: "Changelog", href: "https://github.com/Cronacl/Sentinel/releases" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Quickstart", href: "/docs/getting-started/quickstart" },
      { label: "GitHub", href: "https://github.com/Cronacl/sentinel" },
    ],
  },
];

export default function HomeFooter() {
  return (
    <footer className="mx-auto max-w-[1200px] px-5 pb-12 sm:px-8">
      <div className="grid gap-10 rounded-[6px] bg-fd-card px-6 py-10 sm:grid-cols-[1fr_auto_auto] sm:gap-20 sm:px-10">
        <div className="flex flex-col justify-between gap-6 text-[13.5px] text-fd-muted-foreground">
          <span className="flex items-center gap-2 text-fd-foreground">
            <SentinelLogoMark className="h-4 w-4" />
            Sentinel
          </span>
          <span>&copy; {new Date().getFullYear()} Cronacl</span>
        </div>
        {COLUMNS.map((column) => (
          <div key={column.title} className="text-[13.5px]">
            <p>{column.title}</p>
            <ul className="mt-3 space-y-2 text-fd-muted-foreground">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fd-foreground">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="transition-colors hover:text-fd-foreground">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
