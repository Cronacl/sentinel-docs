import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import {
  DocsFullSearchTrigger,
  DocsGithubIcon,
  DocsSearchTrigger,
  DocsThemeSwitch,
} from "@/components/docs-layout-controls";
import Logo from "@/components/sentinel-logo";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Logo linked={false} showText textClassName="text-base font-semibold" />
      ),
      url: "/",
      transparentMode: "top",
    },
    githubUrl: "https://github.com/Cronacl/sentinel",
    searchToggle: {
      enabled: true,
    },
    themeSwitch: {
      enabled: true,
    },
    slots: {
      searchTrigger: {
        sm: DocsSearchTrigger,
        full: DocsFullSearchTrigger,
      },
      themeSwitch: DocsThemeSwitch,
    },
  };
}
