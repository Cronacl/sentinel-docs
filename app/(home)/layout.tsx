import type { ReactNode } from "react";
import HomeNav from "@/components/home-nav";
import HomeFooter from "@/components/home-footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HomeNav />
      <main>{children}</main>
      <HomeFooter />
    </>
  );
}
