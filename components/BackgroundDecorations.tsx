"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundDecorations() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  // Generate dot grid
  const generateDots = (rows: number, cols: number) => {
    const dots = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        dots.push({
          x: (j / (cols - 1)) * 100,
          y: (i / (rows - 1)) * 100,
          delay: (i + j) * 0.03,
        });
      }
    }
    return dots;
  };

  const leftDots = generateDots(15, 12);
  const rightDots = generateDots(15, 12);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      
      {/* Base Gradient */}
      <div className={`absolute inset-0 transition-colors duration-500
        ${isDark ? 'bg-[#0a0a0f]' : 'bg-[#faf9f7]'}
      `} />

      {/* Animated Gradient Orbs - Professional Colors */}
      <div className="absolute inset-0">
        {/* Orb 1 - Deep Slate/Blue */}
        <motion.div
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-[100px] opacity-20"
          style={{
            width: '500px',
            height: '500px',
            left: '10%',
            top: '20%',
            background: isDark 
              ? 'radial-gradient(circle, #1e3a5f 0%, #0f172a 100%)' 
              : 'radial-gradient(circle, #e2e8f0 0%, #f1f5f9 100%)',
          }}
        />

        {/* Orb 2 - Teal/Cyan */}
        <motion.div
          animate={{
            x: [0, -80, 80, 0],
            y: [0, 60, -60, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute rounded-full blur-[120px] opacity-15"
          style={{
            width: '600px',
            height: '600px',
            right: '5%',
            top: '10%',
            background: isDark 
              ? 'radial-gradient(circle, #134e4a 0%, #0f172a 100%)' 
              : 'radial-gradient(circle, #ccfbf1 0%, #f0fdfa 100%)',
          }}
        />

        {/* Orb 3 - Warm Neutral/Stone */}
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute rounded-full blur-[90px] opacity-20"
          style={{
            width: '450px',
            height: '450px',
            left: '40%',
            bottom: '10%',
            background: isDark 
              ? 'radial-gradient(circle, #292524 0%, #0c0a09 100%)' 
              : 'radial-gradient(circle, #e7e5e4 0%, #fafaf9 100%)',
          }}
        />
      </div>

      {/* Left Dot Matrix */}
      <div className="absolute left-0 top-0 w-[35%] h-full">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="leftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isDark ? "#94a3b8" : "#475569"} stopOpacity="0.3" />
              <stop offset="100%" stopColor={isDark ? "#94a3b8" : "#475569"} stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {leftDots.map((dot, i) => (
            <motion.circle
              key={`left-${i}`}
              cx={`${dot.x}%`}
              cy={`${dot.y}%`}
              r="2"
              fill="url(#leftGrad)"
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Right Dot Matrix */}
      <div className="absolute right-0 top-0 w-[35%] h-full">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="rightGrad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor={isDark ? "#94a3b8" : "#475569"} stopOpacity="0.3" />
              <stop offset="100%" stopColor={isDark ? "#94a3b8" : "#475569"} stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {rightDots.map((dot, i) => (
            <motion.circle
              key={`right-${i}`}
              cx={`${100 - dot.x}%`}
              cy={`${dot.y}%`}
              r="2"
              fill="url(#rightGrad)"
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: dot.delay + 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Subtle Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${25 + Math.random() * 50}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: isDark ? '#64748b' : '#94a3b8',
              filter: 'blur(1px)',
            }}
          />
        ))}
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