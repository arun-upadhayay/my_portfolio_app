"use client";

import { useState } from "react";
import { ArrowRight, Github, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    description:
      "A full-featured e-commerce platform with real-time inventory, payment integration, and admin dashboard.",
    demo: "#",
    github: "#",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    featured: true,
  },
  {
    id: 2,
    title: "Social Media App",
    category: "app",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    description:
      "Real-time social platform with stories, messaging, and video sharing capabilities.",
    demo: "#",
    github: "#",
    tags: ["React Native", "Firebase", "Node.js"],
    featured: false,
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    description:
      "Award-winning portfolio with smooth animations and interactive 3D elements.",
    demo: "#",
    github: "#",
    tags: ["Next.js", "Framer Motion", "Three.js"],
    featured: true,
  },
  {
    id: 4,
    title: "Task Management",
    category: "app",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    description:
      "Collaborative task manager with drag-and-drop, real-time sync, and team analytics.",
    demo: "#",
    github: "#",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    featured: false,
  },
  {
    id: 5,
    title: "Weather Dashboard",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    description:
      "Beautiful weather visualization with 7-day forecasts and interactive maps.",
    demo: "#",
    github: "#",
    tags: ["React", "D3.js", "OpenWeather API"],
    featured: false,
  },
  {
    id: 6,
    title: "AI Image Generator",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    description:
      "AI-powered image generation platform with custom model training.",
    demo: "#",
    github: "#",
    tags: ["Python", "FastAPI", "React", "TensorFlow"],
    featured: true,
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Web Development" },
  { key: "app", label: "Applications" },
];

const cardVariants = {
  initial: (i: number) => ({
    opacity: 0,
    y: i % 2 === 0 ? 40 : -40,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
  exit: (i: number) => ({
    opacity: 0,
    y: i % 2 === 0 ? -40 : 40,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  }),
};

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  // const filteredProjects =
  //   filter === "all"
  //     ? projects
  //     : projects.filter((project) => project.category === filter);

  const filteredProjects = (() => {
    if (filter === "all") return projects;

    const list = projects.filter((p) => p.category === filter);

    // 🔥 This creates the zig-zag feel
    return [...list.slice(-1), ...list.slice(0, -1)];
  })();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="portfolio">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-20
          ${isDark ? "bg-white" : "bg-[#1c1c1c]"}
        `}
        />
        <div
          className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-10
          ${isDark ? "bg-white" : "bg-[#1c1c1c]"}
        `}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl lg:text-5xl font-semibold mb-4 transition-colors duration-500
            ${isDark ? "text-white" : "text-[#1c1c1c]"}
          `}
          >
            Portfolio
          </h2>
          <p
            className={`text-base transition-colors duration-500
            ${isDark ? "text-gray-400" : "text-text"}
          `}
          >
            Most Recent Work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300
                ${
                  filter === f.key
                    ? isDark
                      ? "bg-white text-bg-dark shadow-lg shadow-white/10"
                      : "bg-[#1c1c1c] text-white shadow-lg shadow-black/10"
                    : isDark
                      ? "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                      : "bg-white text-[#1c1c1c] border border-[#1c1c1c]/10 hover:bg-[#1c1c1c]/5"
                }
              `}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              // <motion.div
              //   key={project.id}
              //   layout
              //   initial={{ opacity: 0, scale: 0.9 }}
              //   animate={{ opacity: 1, scale: 1 }}
              //   exit={{ opacity: 0, scale: 0.9 }}
              //   transition={{ duration: 0.3, delay: index * 0.1 }}
              //   className={`group relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer
              //     ${isDark
              //       ? 'bg-white/5 border border-white/10 hover:bg-white/10'
              //       : 'bg-white border border-[#1c1c1c]/10 hover:shadow-2xl'
              //     }
              //     ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
              //   `}
              //   onClick={() => setSelectedProject(project)}
              // >

              <motion.div
                key={project.id}
                layout
                custom={index}
                
                initial="initial"
                animate="animate"
                exit="exit"
                className={`group relative rounded-3xl overflow-hidden cursor-pointer
    ${
      isDark
        ? "bg-white/5 border border-white/10 hover:bg-white/10"
        : "bg-white border border-[#1c1c1c]/10 hover:shadow-2xl"
    }
    ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}
  `}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    ${isDark ? "bg-linear-to-t from-black/80 to-transparent" : "bg-linear-to-t from-white/90 to-transparent"}
                  `}
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium
                      ${isDark ? "bg-white text-black" : "bg-[#1c1c1c] text-white"}
                    `}
                    >
                      Featured
                    </div>
                  )}

                  {/* Quick Actions on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={project.demo}
                      onClick={(e) => e.stopPropagation()}
                      className={`p-3 rounded-full transition-transform hover:scale-110
                        ${isDark ? "bg-white text-black" : "bg-[#1c1c1c] text-white"}
                      `}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className={`p-3 rounded-full transition-transform hover:scale-110
                        ${isDark ? "bg-white/20 text-white backdrop-blur-sm" : "bg-white/90 text-[#1c1c1c] backdrop-blur-sm"}
                      `}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-500
                    ${isDark ? "text-white" : "text-[#1c1c1c]"}
                  `}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 line-clamp-2 transition-colors duration-500
                    ${isDark ? "text-gray-400" : "text-text"}
                  `}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 rounded-full transition-colors duration-500
                          ${
                            isDark
                              ? "bg-white/10 text-white/80"
                              : "bg-[#1c1c1c]/5 text-text"
                          }
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span
                        className={`text-xs px-3 py-1 rounded-full
                        ${isDark ? "text-white/60" : "text-text"}
                      `}
                      >
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Border Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                  ${
                    isDark
                      ? "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"
                      : "shadow-[inset_0_0_0_1px_rgba(28,28,28,0.1)]"
                  }
                `}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            className={`group inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:gap-4
            ${
              isDark
                ? "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                : "bg-[#1c1c1c] text-white hover:bg-[#2d2d2d]"
            }
          `}
          >
            View All Projects
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative max-w-2xl w-full rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto
                ${isDark ? "bg-surface-dark border border-white/10" : "bg-white border border-[#1c1c1c]/10"}
              `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors
                  ${isDark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-[#1c1c1c] hover:bg-black/20"}
                `}
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h3
                  className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-[#1c1c1c]"}`}
                >
                  {selectedProject.title}
                </h3>
                <p
                  className={`mb-6 leading-relaxed ${isDark ? "text-gray-400" : "text-text"}`}
                >
                  {selectedProject.description}
                </p>

                {/* All Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-sm px-4 py-2 rounded-full
                        ${
                          isDark
                            ? "bg-white/10 text-white"
                            : "bg-[#1c1c1c]/5 text-[#1c1c1c]"
                        }
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.demo}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-medium transition-all hover:scale-[1.02]
                      ${
                        isDark
                          ? "bg-white text-bg-dark"
                          : "bg-[#1c1c1c] text-white"
                      }
                    `}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-medium border transition-all hover:scale-[1.02]
                      ${
                        isDark
                          ? "border-white/20 text-white hover:bg-white/10"
                          : "border-[#1c1c1c]/20 text-[#1c1c1c] hover:bg-[#1c1c1c]/5"
                      }
                    `}
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          
        )}
      </AnimatePresence>
    </section>
  );
}
