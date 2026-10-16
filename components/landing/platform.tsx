"use client";

import { useSyncExternalStore } from "react";
import { WindowsLogo } from "@/components/brand-icons";
import { BrandMark } from "@/components/brand-marks";

export type Os = "macOS" | "Windows" | "Linux";

function detectOs(): Os | null {
  const agent = navigator.userAgent;
  if (/Mac/i.test(agent) && !/iPhone|iPad/i.test(agent)) return "macOS";
  if (/Windows/i.test(agent)) return "Windows";
  if (/Linux/i.test(agent) && !/Android/i.test(agent)) return "Linux";
  return null;
}

const subscribeToNothing = () => () => {};

/** The visitor's desktop OS once hydrated; null on the server and on phones. */
export function useOs() {
  return useSyncExternalStore(subscribeToNothing, detectOs, () => null);
}

export function OsMark({ os, size = 14 }: { os: Os; size?: number }) {
  if (os === "Windows") return <WindowsLogo size={size} />;
  return <BrandMark name={os === "macOS" ? "apple" : "linux"} size={size} />;
}
