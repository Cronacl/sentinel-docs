import type { MDXComponents } from "mdx/types";
import { getMDXComponents } from "@/components/mdx";

export function useMDXComponents(components: MDXComponents) {
  return getMDXComponents(components);
}
