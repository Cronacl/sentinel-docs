import Link from "next/link";
import type { ComponentProps } from "react";

const BASE =
  "inline-flex h-9 items-center justify-center gap-1.5 rounded-full px-4 text-[14px] transition-colors";

export function PrimaryButton({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={`${BASE} bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/85 ${className ?? ""}`}
    />
  );
}

export function SecondaryButton({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={`${BASE} border border-fd-border text-fd-foreground hover:bg-fd-accent ${className ?? ""}`}
    />
  );
}

/** The small accent link under a section ("Learn about … →"). */
export function ArrowLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={`inline-flex items-center gap-1 text-[15px] text-(--color-link) transition-opacity hover:opacity-80 ${className ?? ""}`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
