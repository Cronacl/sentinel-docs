import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import DocImage from "@/components/doc-image";
import HeroButton from "@/components/heroui-button";
import HeroLink from "@/components/heroui-link";
import Icon from "@/components/icon";
import Mermaid from "@/components/mermaid";

export function getMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    ...defaultMdxComponents,
    Button: HeroButton,
    DocImage,
    HeroLink,
    Icon,
    Mermaid,
    ...components,
  };
}
