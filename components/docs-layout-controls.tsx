"use client";

import {
  ComputerIcon,
  Github01Icon,
  Moon02Icon,
  PanelLeftOpenIcon,
  Search01Icon,
  Sun01Icon,
} from "@hugeicons/core-free-icons";
import { useTranslations } from "@fuma-translate/react";
import { useSearchContext } from "fumadocs-ui/contexts/search";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import type {
  FullSearchTriggerProps,
  SearchTriggerProps,
} from "fumadocs-ui/layouts/shared/slots/search-trigger";
import type { ThemeSwitchProps } from "fumadocs-ui/layouts/shared/slots/theme-switch";
import { useTheme } from "next-themes";
import type { ComponentProps, ReactNode } from "react";
import { useSyncExternalStore } from "react";
import Icon from "@/components/icon";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const subscribeNoop = () => () => {};

function ThemeIconButton({
  active,
  label,
  onClick,
  children,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      aria-label={label}
      className={cx(
        "inline-flex size-6.5 items-center justify-center rounded-full p-1.5 transition-colors",
        active
          ? "bg-fd-accent text-fd-accent-foreground"
          : "text-fd-muted-foreground",
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export function DocsSidebarTrigger({
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      aria-label="Open Sidebar"
      className={className}
      type="button"
      {...props}
    >
      <Icon icon={PanelLeftOpenIcon} size={18} strokeWidth={1.7} />
    </button>
  );
}

export function DocsSearchTrigger({
  hideIfDisabled,
  size = "icon-sm",
  color,
  variant = color ?? "ghost",
  className,
  ...props
}: SearchTriggerProps) {
  const { enabled, setOpenSearch } = useSearchContext();

  if (hideIfDisabled && !enabled) return null;

  return (
    <button
      aria-label="Open Search"
      className={cx(buttonVariants({ size, variant }), className)}
      data-search=""
      onClick={() => setOpenSearch(true)}
      type="button"
      {...props}
    >
      <Icon icon={Search01Icon} size={18} strokeWidth={1.7} />
    </button>
  );
}

export function DocsFullSearchTrigger({
  hideIfDisabled,
  className,
  ...props
}: FullSearchTriggerProps) {
  const { enabled, hotKey, setOpenSearch } = useSearchContext();
  const t = useTranslations({ note: "search trigger" });

  if (hideIfDisabled && !enabled) return null;

  return (
    <button
      className={cx(
        "inline-flex items-center gap-2 rounded-lg border bg-fd-secondary/50 p-1.5 ps-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground",
        className,
      )}
      data-search-full=""
      onClick={() => setOpenSearch(true)}
      type="button"
      {...props}
    >
      <Icon icon={Search01Icon} size={16} strokeWidth={1.7} />
      {t("Search")}
      <div className="ms-auto inline-flex gap-0.5">
        {hotKey.map((key, index) => (
          <kbd className="rounded-md border bg-fd-background px-1.5" key={index}>
            {key.display}
          </kbd>
        ))}
      </div>
    </button>
  );
}

export function DocsThemeSwitch({
  className,
  mode = "light-dark",
  ...props
}: ThemeSwitchProps) {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  const currentResolvedTheme = mounted ? resolvedTheme : null;
  const currentTheme = mounted ? theme : null;

  if (mode === "light-dark") {
    return (
      <div
        className={cx(
          "inline-flex items-center overflow-hidden rounded-full border p-1",
          className,
        )}
        data-theme-toggle=""
        {...props}
      >
        <ThemeIconButton
          active={currentResolvedTheme === "light"}
          label="Light"
          onClick={() => setTheme("light")}
        >
          <Icon icon={Sun01Icon} size={14} strokeWidth={1.8} />
        </ThemeIconButton>
        <ThemeIconButton
          active={currentResolvedTheme === "dark"}
          label="Dark"
          onClick={() => setTheme("dark")}
        >
          <Icon icon={Moon02Icon} size={14} strokeWidth={1.8} />
        </ThemeIconButton>
      </div>
    );
  }

  return (
    <div
      className={cx(
        "inline-flex items-center overflow-hidden rounded-full border p-1",
        className,
      )}
      data-theme-toggle=""
      {...props}
    >
      <ThemeIconButton
        active={currentTheme === "light"}
        label="Light"
        onClick={() => setTheme("light")}
      >
        <Icon icon={Sun01Icon} size={14} strokeWidth={1.8} />
      </ThemeIconButton>
      <ThemeIconButton
        active={currentTheme === "dark"}
        label="Dark"
        onClick={() => setTheme("dark")}
      >
        <Icon icon={Moon02Icon} size={14} strokeWidth={1.8} />
      </ThemeIconButton>
      <ThemeIconButton
        active={currentTheme === "system"}
        label="System"
        onClick={() => setTheme("system")}
      >
        <Icon icon={ComputerIcon} size={14} strokeWidth={1.8} />
      </ThemeIconButton>
    </div>
  );
}

export function DocsGithubIcon() {
  return <Icon icon={Github01Icon} size={18} strokeWidth={1.7} />;
}
