"use client";

import { useState, useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  Award,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const educationData = [
  {
    title: "B.Tech – Computer Science Engineering",
    subtitle: "AKTU University",
    date: "2018 – 2022",
    icon: BookOpen,
    highlights: ["Core CS fundamentals", "Data structures & algorithms", "Software engineering principles"],
  },
  {
    title: "Full Stack Web Development",
    subtitle: "CodeHelp · Certificate Program",
    date: "2022",
    icon: Award,
    highlights: ["Complete MERN stack development", "REST APIs, auth, deployment", "Hands-on production projects"],
  },
  {
    title: "Class XII – Science (PCM)",
    subtitle: "SVM School",
    date: "2018",
    icon: GraduationCap,
    highlights: [],
  },
  {
    title: "Class X – CBSE",
    subtitle: "SBSDVM School",
    date: "2016",
    icon: GraduationCap,
    highlights: [],
  },
];

const experienceData = [
  {
    title: "Software Engineer",
    subtitle: "Stakehub Infotech Pvt. Ltd. · Jaipur",
    date: "Oct 2024 – Present",
    icon: Briefcase,
    highlights: [
      "Built fintech order-matching platform on Node.js, TypeScript, PostgreSQL & Next.js — 1000+ daily transactions",
      "Integrated JWT-based auth with role-based access control",
      "Automated order processing via cron jobs; managed state with Redux & React Context",
    ],
  },
  {
    title: "Full Stack Developer",
    subtitle: "Blurock Wealth Management",
    date: "Jan 2023 – Oct 2024",
    icon: Briefcase,
    highlights: [
      "Built and maintained scalable web apps with Node.js, Express.js, React.js, and MongoDB",
      "Designed and documented RESTful APIs for frontend & third-party integrations",
      "Led integration testing to maintain high code quality across releases",
    ],
  },
];

export default function Qualification() {
  const [toggleState, setToggleState] = useState(1);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const currentData = toggleState === 1 ? educationData : experienceData;

  return (
    <section
      className="py-24 lg:py-40 relative overflow-hidden"
      id="qualification"
    >
      <div className="max-w-4xl mx-auto px-2 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-5xl font-semibold mb-4 transition-colors
              ${isDark ? "text-white" : "text-[#1c1c1c]"}`}
          >
            Qualification
          </h2>
          <p
            className={`transition-colors
              ${isDark ? "text-gray-400" : "text-text"}`}
          >
            My Journey
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16 gap-4 sm:gap-12">
          <button
            onClick={() => setToggleState(1)}
            className={`flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-medium px-4 sm:px-6 py-3 rounded-2xl transition-all
              ${
                toggleState === 1
                  ? isDark
                    ? "text-white bg-white/10 shadow-lg"
                    : "text-[#1c1c1c] bg-[#1c1c1c]/5 shadow-lg"
                  : isDark
                  ? "text-gray-500 hover:text-gray-300"
                  : "text-text hover:text-[#1c1c1c]"
              }`}
          >
            <GraduationCap size={24} className="sm:w-7 sm:h-7" />
            <span className="hidden sm:inline">Education</span>
            <span className="sm:hidden">Edu</span>
          </button>

          <button
            onClick={() => setToggleState(2)}
            className={`flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-medium px-4 sm:px-6 py-3 rounded-2xl transition-all
              ${
                toggleState === 2
                  ? isDark
                    ? "text-white bg-white/10 shadow-lg"
                    : "text-[#1c1c1c] bg-[#1c1c1c]/5 shadow-lg"
                  : isDark
                  ? "text-gray-500 hover:text-gray-300"
                  : "text-text hover:text-[#1c1c1c]"
              }`}
          >
            <Briefcase size={24} className="sm:w-7 sm:h-7" />
            <span className="hidden sm:inline">Experience</span>
            <span className="sm:hidden">Exp</span>
          </button>
        </div>

        {/* Desktop Timeline - Hidden on mobile */}
        <div className="hidden md:block relative">
          {/* ONE fixed center line */}
          <div
            className={`absolute left-1/2 top-0 -translate-x-1/2 w-px h-full
              ${isDark ? "bg-white/30" : "bg-[#1c1c1c]/30"}`}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={toggleState}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-24"
            >
              {currentData.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="relative flex justify-between items-start min-h-20"
                  >
                    {/* Dot */}
                    <div className="absolute left-1/2 top-2 -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: index * 0.15 + 0.2,
                          type: "spring",
                        }}
                        className={`w-4 h-4 rounded-full border-2 relative
                          ${
                            isDark
                              ? "bg-bg-dark border-white shadow-[0_0_0_4px_rgba(255,255,255,0.1)]"
                              : "bg-bg border-[#1c1c1c] shadow-[0_0_0_4px_rgba(28,28,28,0.1)]"
                          }`}
                      >
                        <span
                          className={`absolute inset-0 rounded-full animate-ping opacity-30
                            ${isDark ? "bg-white" : "bg-[#1c1c1c]"}`}
                        />
                      </motion.div>
                    </div>

                    {/* Left */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -40 : 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="w-[45%] text-right pr-6"
                    >
                      {isLeft && (
                        <>
                          <div
                            className={`text-sm uppercase mb-2
                              ${
                                isDark
                                  ? "text-gray-500"
                                  : "text-text"
                              }`}
                          >
                            {item.subtitle}
                          </div>
                          <h3
                            className={`text-xl font-semibold mb-2
                              ${isDark ? "text-white" : "text-[#1c1c1c]"}`}
                          >
                            {item.title}
                          </h3>
                          <div
                            className={`flex justify-end items-center gap-2 text-sm mb-3
                              ${isDark ? "text-gray-400" : "text-text"}`}
                          >
                            <Calendar size={14} />
                            {item.date}
                          </div>
                          {"highlights" in item && item.highlights && (
                            <ul className="space-y-1.5 text-left">
                              {item.highlights.map((h, hi) => (
                                <li key={hi} className={`text-xs leading-relaxed flex gap-2
                                  ${isDark ? "text-gray-400" : "text-text"}`}>
                                  <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-current opacity-50" />
                                  {h}
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </motion.div>

                    {/* Right */}
                    <motion.div
                      initial={{ opacity: 0, x: !isLeft ? 40 : 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="w-[45%] text-left pl-6"
                    >
                      {!isLeft && (
                        <>
                          <div
                            className={`text-sm uppercase mb-2
                              ${isDark ? "text-gray-500" : "text-text"}`}
                          >
                            {item.subtitle}
                          </div>
                          <h3
                            className={`text-xl font-semibold mb-2
                              ${isDark ? "text-white" : "text-[#1c1c1c]"}`}
                          >
                            {item.title}
                          </h3>
                          <div
                            className={`flex items-center gap-2 text-sm mb-3
                              ${isDark ? "text-gray-400" : "text-text"}`}
                          >
                            <Calendar size={14} />
                            {item.date}
                          </div>
                          {"highlights" in item && item.highlights && (
                            <ul className="space-y-1.5">
                              {item.highlights.map((h, hi) => (
                                <li key={hi} className={`text-xs leading-relaxed flex gap-2
                                  ${isDark ? "text-gray-400" : "text-text"}`}>
                                  <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-current opacity-50" />
                                  {h}
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Timeline - Hidden on desktop */}
        <div className="md:hidden relative">
          {/* Vertical line on left */}
          <div
            className={`absolute left-4 top-0 w-px h-full
              ${isDark ? "bg-white/30" : "bg-[#1c1c1c]/30"}`}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={toggleState}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {currentData.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <div
                    key={index}
                    className="relative flex gap-6 items-start"
                  >
                    {/* Dot and Icon */}
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: index * 0.15 + 0.2,
                          type: "spring",
                        }}
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
                          ${
                            isDark
                              ? "bg-bg-dark border-white shadow-[0_0_0_4px_rgba(255,255,255,0.1)]"
                              : "bg-bg border-[#1c1c1c] shadow-[0_0_0_4px_rgba(28,28,28,0.1)]"
                          }`}
                      >
                        <Icon 
                          size={14} 
                          className={isDark ? "text-white" : "text-[#1c1c1c]"} 
                        />
                        <span
                          className={`absolute inset-0 rounded-full animate-ping opacity-30
                            ${isDark ? "bg-white" : "bg-[#1c1c1c]"}`}
                        />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className={`flex-1 p-5 rounded-2xl
                        ${
                          isDark
                            ? "bg-white/5 border border-white/10"
                            : "bg-[#1c1c1c]/5 border border-[#1c1c1c]/10"
                        }`}
                    >
                      <div
                        className={`text-xs uppercase mb-1 tracking-wider
                          ${isDark ? "text-gray-500" : "text-text"}`}
                      >
                        {item.subtitle}
                      </div>
                      <h3
                        className={`text-lg font-semibold mb-2
                          ${isDark ? "text-white" : "text-[#1c1c1c]"}`}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={`flex items-center gap-2 text-sm mb-3
                          ${isDark ? "text-gray-400" : "text-text"}`}
                      >
                        <Calendar size={14} />
                        {item.date}
                      </div>
                      {"highlights" in item && item.highlights && (
                        <ul className="space-y-1.5">
                          {item.highlights.map((h, hi) => (
                            <li key={hi} className={`text-xs leading-relaxed flex gap-2
                              ${isDark ? "text-gray-400" : "text-text"}`}>
                              <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-current opacity-50" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}