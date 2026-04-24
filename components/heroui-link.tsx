"use client";

import { Link } from "@heroui/react";
import type { ComponentProps } from "react";

export default function HeroLink(props: ComponentProps<typeof Link>) {
  return <Link {...props} />;
}
