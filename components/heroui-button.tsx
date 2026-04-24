"use client";

import { Button } from "@heroui/react";
import type { ComponentProps } from "react";

export default function HeroButton(props: ComponentProps<typeof Button>) {
  return <Button {...props} />;
}
