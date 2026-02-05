"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mail } from "lucide-react";

export default function CTASection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background - Matches your theme */}
      <div className={"bg-transparent"}>
        {/* Subtle gradient overlay using your accent colors */}
        <div className={`absolute inset-0 opacity-30
          
        `} />
      </div>

      {/* Grid Pattern - Your colors */}
      <div className={`absolute inset-0 transition-opacity duration-500
        ${isDark ? 'opacity-[0.08]' : 'opacity-[0.15]'}
      `}>
        {/* Vertical Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(28,28,28,0.2)'} 1px, transparent 1px)`,
          backgroundSize: '80px 100%'
        }} />
        {/* Horizontal Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to bottom, ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(28,28,28,0.2)'} 1px, transparent 1px)`,
          backgroundSize: '100% 80px'
        }} />
      </div>

      {/* Floating Squares/Wall Design - Your color palette */}
      <div className="absolute left-0 top-0 bottom-0 w-40 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`left-${i}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`absolute w-20 h-20 border-2 rounded-2xl backdrop-blur-sm transition-colors duration-500
              ${isDark 
                ? 'border-white/10 bg-white/3' 
                : 'border-[#1c1c1c]/10 bg-[#1c1c1c]/2'
              }
            `}
            style={{
              top: `${i * 15 + 5}%`,
              left: `${(i % 2) * 50}px`,
              transform: `rotate(${i * 12}deg)`,
            }}
          />
        ))}
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-40 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`right-${i}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`absolute w-20 h-20 border-2 rounded-2xl backdrop-blur-sm transition-colors duration-500
              ${isDark 
                ? 'border-white/10 bg-white/3' 
                : 'border-[#1c1c1c]/10 bg-[#1c1c1c]/2'
              }
            `}
            style={{
              top: `${i * 15 + 10}%`,
              right: `${(i % 2) * 50}px`,
              transform: `rotate(${-i * 12}deg)`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge - Your style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 transition-colors duration-500
            ${isDark 
              ? 'bg-white/10 border-white/20 text-white' 
              : 'bg-[#1c1c1c]/5 border-[#1c1c1c]/10 text-[#1c1c1c]'
            }
          `}
        >
          <Sparkles className={isDark ? 'text-white' : 'text-[#1c1c1c]'} size={16} />
          <span className="text-sm font-medium">Open for Opportunities</span>
        </motion.div>

        {/* Main Heading - Your colors */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-colors duration-500
            ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
          `}
        >
          Ready to Build
          <br />
          <span className="relative">
            Something Amazing?
            <svg className={`absolute -bottom-2 left-0 w-full h-3 transition-colors duration-500
              ${isDark ? 'text-white/20' : 'text-[#1c1c1c]/10'}
            `} viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,8 Q100,0 200,8" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </motion.h2>

        {/* Subtitle - Your text color */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-500
            ${isDark ? 'text-gray-400' : 'text-text'}
          `}
        >
          Let's collaborate and bring your ideas to life. I'm available for freelance projects, 
          full-time positions, and consulting opportunities.
        </motion.p>

        {/* CTA Buttons - Your button styles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary Button - Matches your Home section */}
          <a
            href="#contact"
            className={`group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-medium transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg
              ${isDark 
                ? 'bg-white text-bg-dark' 
                : 'bg-[#1c1c1c] text-white'
              }
            `}
          >
            Start a Project
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary Button - Outline style */}
          <a
            href="mailto:arun@example.com"
            className={`group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-medium transition-all duration-300 hover:scale-105
              ${isDark 
                ? 'border border-white/30 text-white hover:bg-white/10' 
                : 'border border-[#1c1c1c]/30 text-[#1c1c1c] hover:bg-[#1c1c1c]/5'
              }
            `}
          >
            <Mail size={18} />
            Send Email
          </a>
        </motion.div>

        {/* Trust Indicators - Your subtle style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`mt-12 flex flex-wrap justify-center gap-8 text-sm transition-colors duration-500
            ${isDark ? 'text-gray-500' : 'text-text'}
          `}
        >
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full animate-pulse
              ${isDark ? 'bg-green-400' : 'bg-green-500'}
            `} />
            <span>Available Now</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-[#1c1c1c]'}`}>20+</span>
            <span>Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-[#1c1c1c]'}`}>3+</span>
            <span>Years Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}