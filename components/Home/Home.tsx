"use client";

import { ArrowDown, Send } from "lucide-react";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaInstagram, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <section id="home" className="min-h-screen">
      <div className="pt-28 max-w-7xl mx-auto px-6">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-8">
          {/* LEFT – SOCIAL (desktop only) */}
          <div className="hidden lg:flex lg:col-span-2 justify-center">
            <div className="flex flex-col gap-4 text-lg">
              <a href="#" className="transition text-[#1c1c1c] hover:opacity-70 dark:text-white">
                <FaInstagram className="h-8 w-8" />
              </a>
              <a href="#" className="transition text-[#1c1c1c] hover:opacity-70 dark:text-white">
                <FaSquareGithub className="h-8 w-8" />
              </a>
              <a href="#" className="transition text-[#1c1c1c] hover:opacity-70 dark:text-white">
                <FaSquareXTwitter className="h-8 w-8" />
              </a>
              <a href="#" className="transition text-[#1c1c1c] hover:opacity-70 dark:text-white">
                <AiOutlineDiscord  className="h-8 w-8" />
              </a>
            </div>
          </div>

          {/* CENTER – TEXT */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h1 className="text-4xl lg:text-[58px] font-semibold leading-tight text-[#1c1c1c] dark:text-white">
              arun upadhyay
            </h1>

            <h2 className="mt-3 text-lg lg:text-2xl font-medium text-[#1c1c1c] dark:text-white">
              Full-Stack Software Engineer
            </h2>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-sm lg:text-[16px] leading-7 text-text dark:text-gray-300">
              Passionate full-stack developer with 3+ years of experience building
              scalable web applications. Specialized in React, Node.js, and modern
              cloud technologies. I transform ideas into elegant, high-performance
              solutions.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 bg-[#1c1c1c] text-white dark:bg-white dark:text-bg-dark px-8 py-4 rounded-2xl text-sm lg:text-base font-medium hover:opacity-90 transition"
            >
              Say Hello
              <Send size={16} />
            </a>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-[url('/assets/about.jpg')] bg-cover bg-center animate-profile
                shadow-[0_0_0_10px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_10px_rgba(255,255,255,0.08)]"
            />
          </div>
        </div>

        {/* SCROLL DOWN */}
        <div className="mt-20 hidden lg:flex items-center gap-3 text-sm text-[#1c1c1c] dark:text-white">
          <div className="w-6 h-10 rounded-full border-2 border-[#1c1c1c] dark:border-white flex justify-center">
            <span className="w-1 h-2 bg-[#1c1c1c] dark:bg-white mt-2 rounded animate-scroll" />
          </div>
          <span className="text-xl">Scroll Down</span>
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  );
}