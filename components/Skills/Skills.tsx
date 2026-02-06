// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiGit,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiPostgresql,
//   SiRedis,
//   SiGraphql,
//   SiAmazonwebservices,
//   SiDocker,
//   SiFigma,
//   SiVercel
// } from "react-icons/si";
// import { Code2, Server, Sparkles } from "lucide-react";

// // Skill data with official brand colors
// const orbitSkills = {
//   inner: [
//     { name: "HTML5", Icon: SiHtml5, color: "#E34F26", orbit: "cw", speed: 20 },
//     { name: "CSS3", Icon: SiCss3, color: "#1572B6", orbit: "ccw", speed: 25 },
//     { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", orbit: "cw", speed: 22 },
//     { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", orbit: "ccw", speed: 28 },
//   ],
//   middle: [
//     { name: "React", Icon: SiReact, color: "#61DAFB", orbit: "cw", speed: 30 },
//     { name: "Next.js", Icon: SiNextdotjs, color: "#000000", orbit: "ccw", speed: 35 },
//     { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4", orbit: "cw", speed: 32 },
//     { name: "Node.js", Icon: SiNodedotjs, color: "#339933", orbit: "ccw", speed: 38 },
//   ],
//   outer: [
//     { name: "MongoDB", Icon: SiMongodb, color: "#47A248", orbit: "cw", speed: 45 },
//     { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791", orbit: "ccw", speed: 50 },
//     { name: "GraphQL", Icon: SiGraphql, color: "#E10098", orbit: "cw", speed: 48 },
//     { name: "AWS", Icon: SiAmazonwebservices, color: "#FF9900", orbit: "ccw", speed: 55 },
//     { name: "Docker", Icon: SiDocker, color: "#2496ED", orbit: "cw", speed: 52 },
//     { name: "Git", Icon: SiGit, color: "#F05032", orbit: "ccw", speed: 58 },
//   ],
// };

// export default function SkillsOrbit() {
//   const { resolvedTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

//   useEffect(() => setMounted(true), []);

//   const isDark = mounted && resolvedTheme === "dark";

//   return (
//     <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className={`absolute inset-0 transition-colors duration-500
//           ${isDark ? 'bg-[#0b0b0b]' : 'bg-[#f9f4f4]'}
//         `} />
//         {/* Subtle grid */}
//         <div className={`absolute inset-0 opacity-[0.03]
//           ${isDark ? 'bg-[radial-gradient(circle,_white_1px,_transparent_1px)]' : 'bg-[radial-gradient(circle,_#1c1c1c_1px,_transparent_1px)]'}
//           bg-[size:40px_40px]
//         `} />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border
//             ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-[#1c1c1c]/5 border-[#1c1c1c]/10 text-[#1c1c1c]'}
//           `}>
//             <Sparkles size={16} />
//             Technical Expertise
//           </div>
//           <h2 className={`text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-500
//             ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
//           `}>
//             Skills & Technologies
//           </h2>
//           <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500
//             ${isDark ? 'text-gray-400' : 'text-[#5f5f5f]'}
//           `}>
//             My orbital tech stack - technologies I work with daily
//           </p>
//         </motion.div>

//         {/* Orbital Container */}
//         <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">

//           {/* Center Core */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
//             className={`absolute w-32 h-32 rounded-full flex items-center justify-center z-30 shadow-2xl
//               ${isDark
//                 ? 'bg-gradient-to-br from-white/20 to-white/5 border border-white/20'
//                 : 'bg-gradient-to-br from-[#1c1c1c] to-[#2d2d2d] border border-[#1c1c1c]/20'
//               }
//             `}
//           >
//             <div className="text-center">
//               <Code2 className={`w-8 h-8 mx-auto mb-1 ${isDark ? 'text-white' : 'text-white'}`} />
//               <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-white'}`}>DEV</span>
//             </div>
//           </motion.div>

//           {/* Orbit Rings - Visual only */}
//           <div className={`absolute w-[280px] h-[280px] rounded-full border transition-colors duration-500
//             ${isDark ? 'border-white/10' : 'border-[#1c1c1c]/10'}
//           `} />
//           <div className={`absolute w-[440px] h-[440px] rounded-full border transition-colors duration-500
//             ${isDark ? 'border-white/10' : 'border-[#1c1c1c]/10'}
//           `} />
//           <div className={`absolute w-[600px] h-[600px] rounded-full border transition-colors duration-500
//             ${isDark ? 'border-white/10' : 'border-[#1c1c1c]/10'}
//           `} />

//           {/* Inner Orbit - 4 skills */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[280px] h-[280px]"
//           >
//             {orbitSkills.inner.map((skill, index) => {
//               const angle = (index / 4) * 360;
//               return (
//                 <motion.div
//                   key={skill.name}
//                   className="absolute w-full h-full"
//                   style={{ rotate: angle }}
//                 >
//                   <motion.div
//                     animate={{ rotate: -360 }}
//                     transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                     className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                   >
//                     <div
//                       onMouseEnter={() => setHoveredSkill(skill.name)}
//                       onMouseLeave={() => setHoveredSkill(null)}
//                       className={`relative w-16 h-16 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300
//                         ${isDark
//                           ? 'bg-white/10 border border-white/20'
//                           : 'bg-white border border-[#1c1c1c]/10'
//                         }
//                         ${hoveredSkill === skill.name ? 'scale-125 shadow-2xl' : 'scale-100'}
//                       `}
//                       style={{
//                         backgroundColor: hoveredSkill === skill.name ? skill.color : undefined,
//                         borderColor: hoveredSkill === skill.name ? skill.color : undefined,
//                       }}
//                     >
//                       <skill.Icon
//                         className={`w-8 h-8 transition-all duration-300
//                           ${hoveredSkill === skill.name ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}
//                         `}
//                       />
//                       {/* Tooltip */}
//                       {hoveredSkill === skill.name && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-black text-white text-xs font-medium whitespace-nowrap"
//                         >
//                           {skill.name}
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>

//           {/* Middle Orbit - 4 skills, counter-clockwise */}
//           <motion.div
//             animate={{ rotate: -360 }}
//             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[440px] h-[440px]"
//           >
//             {orbitSkills.middle.map((skill, index) => {
//               const angle = (index / 4) * 360;
//               return (
//                 <motion.div
//                   key={skill.name}
//                   className="absolute w-full h-full"
//                   style={{ rotate: angle }}
//                 >
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//                     className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                   >
//                     <div
//                       onMouseEnter={() => setHoveredSkill(skill.name)}
//                       onMouseLeave={() => setHoveredSkill(null)}
//                       className={`relative w-16 h-16 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300
//                         ${isDark
//                           ? 'bg-white/10 border border-white/20'
//                           : 'bg-white border border-[#1c1c1c]/10'
//                         }
//                         ${hoveredSkill === skill.name ? 'scale-125 shadow-2xl' : 'scale-100'}
//                       `}
//                       style={{
//                         backgroundColor: hoveredSkill === skill.name ? skill.color : undefined,
//                         borderColor: hoveredSkill === skill.name ? skill.color : undefined,
//                       }}
//                     >
//                       <skill.Icon
//                         className={`w-8 h-8 transition-all duration-300
//                           ${hoveredSkill === skill.name ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}
//                         `}
//                       />
//                       {hoveredSkill === skill.name && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-black text-white text-xs font-medium whitespace-nowrap"
//                         >
//                           {skill.name}
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>

//           {/* Outer Orbit - 6 skills */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[600px] h-[600px]"
//           >
//             {orbitSkills.outer.map((skill, index) => {
//               const angle = (index / 6) * 360;
//               return (
//                 <motion.div
//                   key={skill.name}
//                   className="absolute w-full h-full"
//                   style={{ rotate: angle }}
//                 >
//                   <motion.div
//                     animate={{ rotate: -360 }}
//                     transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
//                     className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                   >
//                     <div
//                       onMouseEnter={() => setHoveredSkill(skill.name)}
//                       onMouseLeave={() => setHoveredSkill(null)}
//                       className={`relative w-16 h-16 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300
//                         ${isDark
//                           ? 'bg-white/10 border border-white/20'
//                           : 'bg-white border border-[#1c1c1c]/10'
//                         }
//                         ${hoveredSkill === skill.name ? 'scale-125 shadow-2xl' : 'scale-100'}
//                       `}
//                       style={{
//                         backgroundColor: hoveredSkill === skill.name ? skill.color : undefined,
//                         borderColor: hoveredSkill === skill.name ? skill.color : undefined,
//                       }}
//                     >
//                       <skill.Icon
//                         className={`w-8 h-8 transition-all duration-300
//                           ${hoveredSkill === skill.name ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}
//                         `}
//                       />
//                       {hoveredSkill === skill.name && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-black text-white text-xs font-medium whitespace-nowrap"
//                         >
//                           {skill.name}
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* Legend / Skill List */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
//         >
//           {[...orbitSkills.inner, ...orbitSkills.middle, ...orbitSkills.outer].map((skill) => (
//             <div
//               key={skill.name}
//               onMouseEnter={() => setHoveredSkill(skill.name)}
//               onMouseLeave={() => setHoveredSkill(null)}
//               className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300
//                 ${isDark
//                   ? 'bg-white/5 hover:bg-white/10'
//                   : 'bg-white hover:shadow-md'
//                 }
//                 ${hoveredSkill === skill.name ? 'scale-105' : ''}
//               `}
//             >
//               <div
//                 className="w-10 h-10 rounded-lg flex items-center justify-center"
//                 style={{ backgroundColor: `${skill.color}20` }}
//               >
//                 <skill.Icon
//                   className="w-5 h-5"
//                   style={{ color: skill.color }}
//                 />
//               </div>
//               <span className={`text-sm font-medium
//                 ${isDark ? 'text-gray-300' : 'text-[#1c1c1c]'}
//               `}>
//                 {skill.name}
//               </span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// return (
//   <div
//     key={skill.name}
//     className="absolute inset-0"
//     style={{ transform: `rotate(${angle}deg)` }}
//   >
//     <div
//       className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
//       style={{ transform: `rotate(-${angle}deg)` }}
//     >
//       <motion.div
//         onMouseEnter={() => handleHover(skill.name)}
//         onMouseLeave={() => handleHover(null)}
//         whileHover={{ scale: 1.3 }}
//         animate={{
//           scale: isAnyHovered && !isHovered ? 0.85 : 1,
//           opacity: isAnyHovered && !isHovered ? 0.4 : 1,
//         }}
//         transition={{ duration: 0.2 }}
//         className={`relative w-14 h-14 rounded-2xl flex items-center justify-center cursor-pointer backdrop-blur-sm border-2 transition-all duration-300
//           ${
//             isDark
//               ? "bg-[#1c1c1c]/80 border-white/10"
//               : "bg-white border-[#1c1c1c]/10"
//           }
//         `}
//         style={{
//           borderColor: isHovered ? skill.color : undefined,
//           backgroundColor: isHovered ? skill.color : undefined,
//           boxShadow: isHovered
//             ? `0 0 40px ${skill.color}, 0 0 80px ${skill.color}50`
//             : undefined,
//           zIndex: isHovered ? 50 : 10,
//         }}
//       >
//         <skill.Icon
//           className="w-7 h-7 transition-all duration-300"
//           style={{
//             color: isHovered
//               ? "#ffffff"
//               : isDark
//                 ? "#9ca3af"
//                 : "#6b7280",
//             filter: isHovered ? "none" : "grayscale(100%)",
//           }}
//         />

//         {isHovered && (
//           <motion.div
//             initial={{ scale: 1, opacity: 0.6 }}
//             animate={{ scale: 2.5, opacity: 0 }}
//             transition={{ duration: 1, repeat: Infinity }}
//             className="absolute inset-0 rounded-2xl border-2"
//             style={{ borderColor: skill.color }}
//           />
//         )}

//         {isHovered && (
//           <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-black text-white text-xs font-bold whitespace-nowrap z-50">
//             {skill.name}
//             <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
//           </div>
//         )}
//       </motion.div>
//     </div>
//   </div>
// );

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiAmazonwebservices,
  SiDocker,
  SiFigma,
  SiPostman,
  SiLinux,
  SiApachekafka,
  SiPrisma,
  SiSupabase,
  SiVercel,
  SiGithubactions,
} from "react-icons/si";

import { FaServer } from "react-icons/fa";
import { Code2 } from "lucide-react";
import { DiRedis } from "react-icons/di";

const orbitSkills = {
  inner: [
    { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  ],

  middle: [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Git", Icon: SiGit, color: "#F05032" },
  ],

  outer: [
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
    { name: "Redis", Icon: DiRedis, color: "#DC382D" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "Vercel", Icon: SiVercel, color: "#000000" },
    { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  ],

  /** 🆕 EXTRA / ECOSYSTEM RING */
  extra: [
    { name: "Kafka", Icon: SiApachekafka, color: "#FFFFFF" },
    { name: "AWS", Icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
    { name: "Inngest", Icon: FaServer, color: "#6366F1" },
    { name: "Prisma", Icon: SiPrisma, color: "#187367" },
    { name: "Linux", Icon: SiLinux, color: "#F7DF1E" },
  ],
};

export default function SkillsOrbit() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const glowColor = hoveredSkill
    ? orbitSkills.inner.find((s) => s.name === hoveredSkill)?.color ||
      orbitSkills.middle.find((s) => s.name === hoveredSkill)?.color ||
      orbitSkills.outer.find((s) => s.name === hoveredSkill)?.color ||
      orbitSkills.extra.find((s) => s.name === hoveredSkill)?.color
    : null;

  const handleHover = (skill: string | null) => {
    setHoveredSkill(skill);
    setIsPaused(!!skill);
  };

  const renderOrbit = (
    skills: typeof orbitSkills.inner,
    size: number,
    duration: number,
    reverse = false,
    zIndex = 10,
  ) => (
    <motion.div
      animate={isPaused ? {} : { rotate: reverse ? -360 : 360 }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
      }}
      className="absolute pointer-events-none"
      style={{ width: size, height: size, zIndex }}
    >
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * 360;
        const isHovered = hoveredSkill === skill.name;
        const isAnyHovered = !!hoveredSkill;

        return (
          <div
            key={skill.name}
            className="absolute inset-0"
            style={{ transform: `rotate(${angle}deg)` }} // positioning ONLY
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `rotate(-${angle}deg)` }}
            >
              {/* Counter-rotate against orbit animation */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                animate={isPaused ? {} : { rotate: reverse ? 360 : -360 }}
                transition={{
                  duration,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <motion.div
                  onMouseEnter={() => handleHover(skill.name)}
                  onMouseLeave={() => handleHover(null)}
                  whileHover={{ scale: 1.3 }}
                  animate={{
                    scale: isAnyHovered && !isHovered ? 0.85 : 1,
                    opacity: isAnyHovered && !isHovered ? 0.4 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`relative w-14 h-14 rounded-2xl flex items-center justify-center cursor-pointer backdrop-blur-sm border-2 transition-all duration-300
                    ${
                      isDark
                        ? "bg-[#1c1c1c]/80 border-white/10"
                        : "bg-white border-[#1c1c1c]/10"
                    }
                  `}
                  style={{
                    borderColor: isHovered ? skill.color : undefined,
                    backgroundColor: isHovered ? skill.color : undefined,
                    boxShadow: isHovered
                      ? `0 0 40px ${skill.color}, 0 0 80px ${skill.color}50`
                      : undefined,
                    zIndex: isHovered ? 50 : 10,
                  }}
                >
                  <skill.Icon
                    className="w-7 h-7 transition-all duration-300"
                    style={{
                      color: isHovered
                        ? "#ffffff"
                        : isDark
                          ? "#9ca3af"
                          : "#6b7280",
                      filter: isHovered ? "none" : "grayscale(100%)",
                    }}
                  />

                  {/* Ripple */}
                  {isHovered && (
                    <motion.div
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl border-2"
                      style={{ borderColor: skill.color }}
                    />
                  )}

                  {/* Tooltip */}
                  {isHovered && (
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-black text-white text-xs font-bold whitespace-nowrap z-50">
                      {skill.name}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div
        className={`absolute inset-0 transition-colors duration-500 bg-transparent`}
      />

      <motion.div
        animate={{
          opacity: hoveredSkill ? 0.15 : 0,
          scale: hoveredSkill ? 1.2 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="absolute top-1/2 left-1/2 w-175 h-175 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: glowColor
            ? `radial-gradient(circle, ${glowColor} 0%, transparent 60%)`
            : "transparent",
        }}
      />

      <div className="text-center mb-20 relative z-10">
        <h2
          className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? "text-white" : "text-[#1c1c1c]"
          }`}
        >
          Skills & Technologies
        </h2>
        <p className={isDark ? "text-gray-400" : "text-text"}>
          Hover to explore
        </p>
      </div>

      <div className="relative h-175 flex items-center justify-center">
        <motion.div
          animate={{
            boxShadow:
              hoveredSkill && glowColor
                ? `0 0 60px ${glowColor}20`
                : "0 0 0 transparent",
          }}
          className={`absolute w-24 h-24 rounded-full flex items-center justify-center z-40 ${
            isDark
              ? "bg-white/10 border border-white/20"
              : "bg-[#1c1c1c] border border-[#1c1c1c]/20"
          }`}
        >
          <Code2 className="w-8 h-8 text-white" />
        </motion.div>

        {[280, 420, 580, 720].map((size, idx) => {
          const skill =
            idx === 0
              ? orbitSkills.inner.find((s) => s.name === hoveredSkill)
              : idx === 1
                ? orbitSkills.middle.find((s) => s.name === hoveredSkill)
                : idx === 2
                  ? orbitSkills.outer.find((s) => s.name === hoveredSkill)
                  : orbitSkills.extra.find((s) => s.name === hoveredSkill);

          const activeColor = skill?.color;

          return (
            <motion.div
              key={size}
              animate={{
                borderColor: activeColor
                  ? activeColor
                  : isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(28,28,28,0.08)",
                boxShadow: activeColor ? `0 0 20px ${activeColor}30` : "none",
              }}
              className="absolute rounded-full border pointer-events-none"
              style={{ width: size, height: size }}
            />
          );
        })}

        {renderOrbit(orbitSkills.inner, 280, 25, false, 30)}
        {renderOrbit(orbitSkills.middle, 420, 35, true, 20)}
        {renderOrbit(orbitSkills.outer, 580, 45, false, 10)}
        {renderOrbit(orbitSkills.extra, 720, 65, true, 10)}
      </div>
    </section>
  );
}
