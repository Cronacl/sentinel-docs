import type { Metadata } from "next";
import HomeAgents from "@/components/home-agents";
import HomeChapters from "@/components/home-chapters";
import HomeCTA from "@/components/home-cta";
import HomeFlex from "@/components/home-flex";
import HomeHero from "@/components/home-hero";

export const metadata: Metadata = {
  title: { absolute: "Sentinel — every coding agent, one workspace" },
  description:
    "A free desktop app to run Claude, Codex, Copilot, Cursor, Grok Build, Antigravity, Pi and ACP agents side by side, in your own projects.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAgents />
      <HomeChapters />
      <HomeFlex />
      <HomeCTA />
    </>
  );
}
