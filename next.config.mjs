import path from "node:path";
import { fileURLToPath } from "node:url";
import { createMDX } from "fumadocs-mdx/next";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

/** @type {import("next").NextConfig} */
const config = {
  // Next 16.4 writes an AGENTS.md into the repo when an AI agent runs
  // `next dev`; keep the tree clean.
  agentRules: false,
  reactStrictMode: true,
  turbopack: {
    root: rootDir,
  },
};

const withMDX = createMDX();

export default withMDX(config);
