"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

const navItems = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skills" },
  { text: "Services", href: "#services" },
  { text: "Portfolio", href: "#portfolio" },
  { text: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // Debug: Check if theme is working
  console.log("Current theme:", theme, "Resolved:", resolvedTheme);

  if (!mounted) {
    // Prevent hydration mismatch - render neutral colors initially
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-bg border-b border-[#1c1c1c]/10">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <div className="text-lg font-medium text-[#1c1c1c]">Arun</div>
          <div className="ml-auto">...</div>
        </nav>
      </header>
    );
  }

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300
        ${resolvedTheme === 'dark' 
          ? 'bg-surface-dark border-white/10 text-white' 
          : 'bg-white border-[#1c1c1c]/10 text-[#1c1c1c]'
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center">
        
        {/* LEFT – LOGO */}
        <a
          href="#home"
          className={`text-lg font-medium transition-colors
            ${resolvedTheme === 'dark' ? 'text-white' : 'text-[#1c1c1c]'}
          `}
        >
          Arun
        </a>

        {/* CENTER – NAV (DESKTOP) */}
        <ul className="hidden md:flex mx-auto gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.text}>
              <a
                href={item.href}
                className={`transition-colors hover:opacity-70
                  ${resolvedTheme === 'dark' ? 'text-white' : 'text-[#1c1c1c]'}
                `}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT – ACTIONS */}
        <div className="ml-auto flex items-center gap-4">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full transition
              ${resolvedTheme === 'dark' 
                ? 'hover:bg-white/10 text-white' 
                : 'hover:bg-[#1c1c1c]/10 text-[#1c1c1c]'
              }
            `}
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className={`md:hidden ${resolvedTheme === 'dark' ? 'text-white' : 'text-[#1c1c1c]'}`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-x-0 bottom-0 rounded-t-2xl p-6 transition-transform duration-300 md:hidden shadow-2xl border-t
          ${isMenuOpen ? "translate-y-0" : "translate-y-full"}
          ${resolvedTheme === 'dark' 
            ? 'bg-surface-dark border-white/10 text-white' 
            : 'bg-white border-[#1c1c1c]/10 text-[#1c1c1c]'
          }
        `}
      >
        <ul className="flex flex-col gap-4 text-center text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.text}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2
                  ${resolvedTheme === 'dark' ? 'text-white' : 'text-[#1c1c1c]'}
                `}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMenuOpen(false)}
          className={`absolute right-6 top-6
            ${resolvedTheme === 'dark' ? 'text-white' : 'text-[#1c1c1c]'}
          `}
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;