import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import {
  Sidebar,
  SidebarProvider,
  useSidebar,
} from "fumadocs-ui/layouts/docs/slots/sidebar";
import { DocsSidebarTrigger } from "@/components/docs-layout-controls";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  const options = baseOptions();

  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...options}
      slots={{
        ...options.slots,
        sidebar: {
          provider: SidebarProvider,
          root: Sidebar,
          trigger: DocsSidebarTrigger,
          useSidebar,
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
