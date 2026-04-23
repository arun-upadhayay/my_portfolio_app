"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div
      className={`min-h-[60vh] flex flex-col items-center justify-center text-center px-6 ${
        isDark ? "text-white" : "text-[#1c1c1c]"
      }`}
    >
      <p
        className={`text-[11px] uppercase tracking-[0.2em] mb-4 ${
          isDark ? "text-white/40" : "text-[#1c1c1c]/40"
        }`}
      >
        404
      </p>
      <h1 className="text-3xl font-semibold mb-3">Project not found</h1>
      <p
        className={`text-sm mb-8 max-w-sm leading-relaxed ${
          isDark ? "text-gray-400" : "text-text"
        }`}
      >
        This project doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href="/#portfolio"
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium border transition-colors ${
          isDark
            ? "border-white/20 text-white hover:bg-white/10"
            : "border-[#1c1c1c]/20 text-[#1c1c1c] hover:bg-[#1c1c1c]/5"
        }`}
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </Link>
    </div>
  );
}
