"use client";

import mermaid from "mermaid";
import { useEffect, useId, useRef, useState } from "react";

type MermaidProps = {
  chart: string;
};

let initialized = false;

function stripScriptTags(markup: string) {
  return markup.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");
}

function initializeMermaid() {
  if (initialized) return;

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    theme: "base",
    themeVariables: {
      background: "#09090b",
      mainBkg: "#111113",
      secondBkg: "#16161a",
      tertiaryColor: "#18181b",
      primaryColor: "#111113",
      primaryTextColor: "#f4f4f5",
      secondaryColor: "#16161a",
      secondaryTextColor: "#d4d4d8",
      tertiaryTextColor: "#a1a1aa",
      primaryBorderColor: "#27272a",
      lineColor: "#52525b",
      textColor: "#e4e4e7",
      nodeBorder: "#3f3f46",
      clusterBkg: "#111113",
      clusterBorder: "#27272a",
      defaultLinkColor: "#71717a",
      edgeLabelBackground: "#09090b",
      fontFamily: "inherit",
    },
  });

  initialized = true;
}

export default function Mermaid({ chart }: MermaidProps) {
  const diagramId = useId().replace(/[:]/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      try {
        initializeMermaid();
        const { svg: renderedSvg, bindFunctions } = await mermaid.render(
          `sentinel-mermaid-${diagramId}`,
          chart,
        );

        if (cancelled || !containerRef.current) return;

        const template = document.createElement("template");
        template.innerHTML = stripScriptTags(renderedSvg);

        containerRef.current.replaceChildren(template.content.cloneNode(true));
        setFailed(false);

        requestAnimationFrame(() => {
          if (!containerRef.current) return;
          bindFunctions?.(containerRef.current);
        });
      } catch (error) {
        console.error("Failed to render Mermaid diagram", error);

        if (cancelled) return;

        setFailed(true);
      }
    }

    renderDiagram();

    return () => {
      cancelled = true;
      containerRef.current?.replaceChildren();
    };
  }, [chart, diagramId]);

  if (failed) {
    return (
      <pre className="mermaid-fallback">
        <code>{chart}</code>
      </pre>
    );
  }

  return (
    <div className="mermaid-shell not-prose">
      <div
        ref={containerRef}
        aria-label="Mermaid diagram"
        className="mermaid-diagram"
      />
    </div>
  );
}
