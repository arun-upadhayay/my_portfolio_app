"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./BackgroundDecorations.module.css";

export default function BackgroundDecorations() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

      {/* Base Gradient */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{ background: isDark ? "#0a0a0f" : "#faf9f7" }}
      />

      {/* Animated Gradient Orbs — pure CSS @keyframes, compositor-only */}
      <div className="absolute inset-0">
        <div
          className={styles.orb1}
          style={{
            background: isDark
              ? "radial-gradient(circle, #1e3a5f 0%, #0f172a 100%)"
              : "radial-gradient(circle, #e2e8f0 0%, #f1f5f9 100%)",
          }}
        />
        <div
          className={styles.orb2}
          style={{
            background: isDark
              ? "radial-gradient(circle, #134e4a 0%, #0f172a 100%)"
              : "radial-gradient(circle, #ccfbf1 0%, #f0fdfa 100%)",
          }}
        />
        <div
          className={styles.orb3}
          style={{
            background: isDark
              ? "radial-gradient(circle, #292524 0%, #0c0a09 100%)"
              : "radial-gradient(circle, #e7e5e4 0%, #fafaf9 100%)",
          }}
        />
      </div>

      {/* Left Dot Matrix — SVG pattern, no per-circle animation */}
      <div className="absolute left-0 top-0 w-[35%] h-full">
        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <radialGradient id="leftFade" cx="0%" cy="50%" r="100%">
              <stop
                offset="0%"
                stopColor={isDark ? "#94a3b8" : "#475569"}
                stopOpacity="0.25"
              />
              <stop
                offset="100%"
                stopColor={isDark ? "#94a3b8" : "#475569"}
                stopOpacity="0"
              />
            </radialGradient>
            <pattern
              id="leftDots"
              x="0"
              y="0"
              width="8.33%"
              height="7.14%"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle cx="50%" cy="50%" r="2" fill="url(#leftFade)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leftDots)" />
        </svg>
      </div>

      {/* Right Dot Matrix */}
      <div className="absolute right-0 top-0 w-[35%] h-full">
        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <radialGradient id="rightFade" cx="100%" cy="50%" r="100%">
              <stop
                offset="0%"
                stopColor={isDark ? "#94a3b8" : "#475569"}
                stopOpacity="0.25"
              />
              <stop
                offset="100%"
                stopColor={isDark ? "#94a3b8" : "#475569"}
                stopOpacity="0"
              />
            </radialGradient>
            <pattern
              id="rightDots"
              x="0"
              y="0"
              width="8.33%"
              height="7.14%"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle cx="50%" cy="50%" r="2" fill="url(#rightFade)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rightDots)" />
        </svg>
      </div>

      {/* Fine Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
