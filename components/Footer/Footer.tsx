"use client";

import { Instagram, Twitter, Github } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <footer
      className={`border-t transition-colors duration-300
        ${isDark ? "bg-surface-dark border-white/10" : "bg-white border-[#1c1c1c]/10"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          <h1
            className={`text-2xl font-semibold
              ${isDark ? "text-white" : "text-[#1c1c1c]"}
            `}
          >
            Arun
          </h1>

          <ul className="flex flex-wrap justify-center gap-8">
            {[
              { label: "About", href: "#about" },
              { label: "Projects", href: "#portfolio" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-sm transition-colors duration-300
                    ${isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-text hover:text-[#1c1c1c]"
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-5 justify-center">
            <a
              href="https://www.instagram.com/arun__upadhayay/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={`transition-all duration-300 hover:-translate-y-1
                ${isDark ? "text-gray-400 hover:text-white" : "text-text hover:text-[#1c1c1c]"}
              `}
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com/arun__upadhayay"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className={`transition-all duration-300 hover:-translate-y-1
                ${isDark ? "text-gray-400 hover:text-white" : "text-text hover:text-[#1c1c1c]"}
              `}
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/arun-upadhayay/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`transition-all duration-300 hover:-translate-y-1
                ${isDark ? "text-gray-400 hover:text-white" : "text-text hover:text-[#1c1c1c]"}
              `}
            >
              <Github size={20} />
            </a>
          </div>

          <span
            className={`text-xs text-center
              ${isDark ? "text-gray-500" : "text-text"}
            `}
          >
            &copy; {new Date().getFullYear()} Arun Upadhayay. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
