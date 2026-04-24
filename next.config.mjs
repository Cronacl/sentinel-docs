import path from "node:path";
import { fileURLToPath } from "node:url";
import { createMDX } from "fumadocs-mdx/next";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  turbopack: {
    root: rootDir,
  },
};

const withMDX = createMDX();

export default withMDX(config);
