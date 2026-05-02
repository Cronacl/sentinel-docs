import type { Metadata } from "next";
import HomeCTA from "@/components/home-cta";
import HomeFeatures from "@/components/home-features";
import HomeHero from "@/components/home-hero";
import HomeProviders from "@/components/home-providers";

export const metadata: Metadata = {
  title: "Sentinel — AI-powered software work",
  description:
    "A desktop app for doing software work with AI inside a local project. Workspace-aware, multi-engine, with a built-in terminal and browser.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeProviders />
      <HomeCTA />
    </>
  );
}
