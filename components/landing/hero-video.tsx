"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

// The product film, muted and looping with no controls. Phones get the
// 720p encode; reduced-motion visitors see the poster frame instead.
export function HeroVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React does not reflect `muted` to the DOM attribute, which iOS needs
    // before it allows autoplay.
    video.defaultMuted = true;
    video.muted = true;
    if (reduceMotion) {
      video.pause();
    } else {
      void video.play().catch(() => {});
    }
  }, [reduceMotion]);

  return (
    <div
      className={`overflow-hidden rounded-[10px] bg-fd-card ring-1 ring-fd-border ${className ?? ""}`}
    >
      <video
        ref={ref}
        aria-label="Sentinel product film: threads, agents, the built-in terminal and browser"
        autoPlay={!reduceMotion}
        className="block aspect-video h-auto w-full"
        disablePictureInPicture
        disableRemotePlayback
        loop
        muted
        playsInline
        poster="/video/sentinel-hero-poster.webp"
        preload="auto"
      >
        <source media="(max-width: 767px)" src="/video/sentinel-hero-720.mp4" type="video/mp4" />
        <source src="/video/sentinel-hero-1080.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
