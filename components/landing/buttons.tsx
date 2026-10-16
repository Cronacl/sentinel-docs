import Link from "next/link";
import type { ComponentProps } from "react";

// The app's own buttons: a solid pill for the main action, a quiet gray pill
// for everything else.
const BASE =
  "inline-flex h-9 items-center justify-center gap-2 rounded-full px-4 text-[13px] font-medium transition-colors";

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
      className={`${BASE} bg-fd-accent text-fd-foreground hover:bg-fd-muted ${className ?? ""}`}
    />
  );
}
