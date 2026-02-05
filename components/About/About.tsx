"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Award, Briefcase, Headphones, Download } from "lucide-react";

const infoItems = [
  { icon: Award, title: "Experience", value: "3+ Years Working" },
  { icon: Briefcase, title: "Completed", value: "20+ Projects" },
  { icon: Headphones, title: "Support", value: "24/7 Available" },
];

export default function About() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section id="about" className="py-20 lg:py-32">
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className={`text-3xl lg:text-4xl font-semibold ${isDark ? 'text-white' : 'text-[#1c1c1c]'}`}>
          About Me
        </h2>
        <p className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-text'}`}>
          My Introduction
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid items-center gap-16 lg:grid-cols-[380px_1fr]">
        {/* IMAGE */}
        <div className="relative mx-auto lg:mx-0">
          <img
            src="/assets/about.jpg"
            alt="About"
            className={`w-[320px] h-100 object-cover rounded-3xl 
              ${isDark 
                ? 'shadow-[0_0_0_12px_rgba(255,255,255,0.05)]' 
                : 'shadow-[0_0_0_12px_rgba(0,0,0,0.05)]'
              }
            `}
          />
          {/* Decorative blur behind image */}
          <div className={`absolute -inset-4 rounded-4xl -z-10 blur-2xl opacity-20
            ${isDark ? 'bg-white' : 'bg-black'}
          `} />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Info Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {infoItems.map(({ icon: Icon, title, value }) => (
              <div
                key={title}
                className={`rounded-2xl border p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                  ${isDark 
                    ? 'border-white/10 bg-[#1c1c1c]/50 hover:bg-[#1c1c1c]' 
                    : 'border-black/10 bg-white hover:bg-gray-50'
                  }
                `}
              >
                <Icon 
                  className={`mx-auto mb-2 ${isDark ? 'text-white' : 'text-[#1c1c1c]'}`} 
                  size={22} 
                />
                <h3 className={`text-sm font-medium ${isDark ? 'text-white' : 'text-[#1c1c1c]'}`}>
                  {title}
                </h3>
                <p className={`mt-1 text-xs ${isDark ? 'text-gray-400' : 'text-text'}`}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className={`max-w-xl text-[15px] leading-relaxed mb-10 ${isDark ? 'text-gray-300' : 'text-text'}`}>
            Full-stack software engineer with 3+ years of experience delivering
            scalable, enterprise-grade web applications. Specialized in modern
            frontend frameworks and robust backend systems, with a strong focus
            on performance, clean architecture, and user experience.
          </p>

          {/* Download Button */}
          <a
            href="/assets/Arun-CV.pdf"
            download
            className={`inline-flex items-center gap-2 px-7 h-12 rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-300 hover:gap-3
              ${isDark 
                ? 'bg-white text-bg-dark' 
                : 'bg-[#1c1c1c] text-white'
              }
            `}
          >
            Download CV
            <Download size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}