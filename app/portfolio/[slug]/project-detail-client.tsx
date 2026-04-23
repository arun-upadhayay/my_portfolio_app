"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Images } from "lucide-react";
import type { Project } from "@/lib/projects";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

function Eyebrow({ children, isDark }: { children: React.ReactNode; isDark: boolean }) {
  return (
    <span
      className={`inline-flex mb-3 px-3.5 py-1 rounded-full text-[11px] uppercase tracking-[0.18em] border ${
        isDark ? "border-white/15 text-white/50" : "border-[#1c1c1c]/12 text-[#1c1c1c]/45"
      }`}
    >
      {children}
    </span>
  );
}

function SectionHeading({ children, isDark }: { children: React.ReactNode; isDark: boolean }) {
  return (
    <h2 className={`text-2xl lg:text-3xl font-semibold mb-6 ${isDark ? "text-white" : "text-[#1c1c1c]"}`}>
      {children}
    </h2>
  );
}

function Divider({ isDark }: { isDark: boolean }) {
  return <hr className={`my-16 ${isDark ? "border-white/8" : "border-[#1c1c1c]/8"}`} />;
}

function ImageGallery({ images, title, isDark }: { images: string[]; title: string; isDark: boolean }) {
  const [active, setActive] = useState(0);
  const [hasError, setHasError] = useState<Record<number, boolean>>({});

  if (!images.length) return null;

  return (
    <div className="space-y-3">
      <div
        className={`relative w-full aspect-video rounded-3xl overflow-hidden ${
          isDark ? "bg-white/5" : "bg-[#1c1c1c]/5"
        }`}
      >
        {hasError[active] ? (
          <div
            className={`w-full h-full flex flex-col items-center justify-center gap-2 ${
              isDark ? "text-white/30" : "text-[#1c1c1c]/30"
            }`}
          >
            <Images size={32} strokeWidth={1.5} />
            <span className="text-xs">Screenshot {active + 1}</span>
          </div>
        ) : (
          <img
            src={images[active]}
            alt={`${title} — screenshot ${active + 1}`}
            className="w-full h-full object-cover object-top"
            onError={() => setHasError((prev) => ({ ...prev, [active]: true }))}
          />
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              aria-label={`View screenshot ${i + 1}`}
              onClick={() => setActive(i)}
              className={`relative shrink-0 w-20 h-12 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                i === active
                  ? isDark
                    ? "border-white"
                    : "border-[#1c1c1c]"
                  : isDark
                  ? "border-white/15 opacity-50 hover:opacity-70"
                  : "border-[#1c1c1c]/15 opacity-50 hover:opacity-70"
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const images = project.images ?? project.screenshots;

  return (
    <article>
      <section className={`py-16 lg:py-24 border-b ${isDark ? "border-white/8" : "border-[#1c1c1c]/8"}`}>
        <motion.div {...fadeUp}>
          <Link
            href="/#portfolio"
            className={`inline-flex items-center gap-1.5 text-xs mb-8 transition-colors ${
              isDark ? "text-white/40 hover:text-white/70" : "text-[#1c1c1c]/40 hover:text-[#1c1c1c]/70"
            }`}
          >
            <ArrowLeft size={14} />
            Portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`text-[11px] uppercase tracking-[0.18em] px-3 py-1 rounded-full border ${
                isDark ? "border-white/15 text-white/50" : "border-[#1c1c1c]/12 text-[#1c1c1c]/45"
              }`}
            >
              {project.projectType}
            </span>
            {project.duration && <span className={`text-xs ${isDark ? "text-white/35" : "text-[#1c1c1c]/35"}`}>{project.duration}</span>}
            {project.role && <span className={`text-xs ${isDark ? "text-white/35" : "text-[#1c1c1c]/35"}`}>· {project.role}</span>}
          </div>

          <h1 className={`text-4xl lg:text-6xl font-semibold leading-tight mb-4 ${isDark ? "text-white" : "text-[#1c1c1c]"}`}>
            {project.title}
          </h1>

          {project.tagline && (
            <p className={`text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed ${isDark ? "text-gray-400" : "text-text"}`}>
              {project.tagline}
            </p>
          )}

          {project.techStack && (
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span key={tech} className={`text-xs px-2.5 py-1 rounded-full ${isDark ? "bg-white/10 text-white/70" : "bg-[#1c1c1c]/5 text-[#1c1c1c]/70"}`}>
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium transition-all hover:scale-[1.02] ${isDark ? "bg-white text-bg-dark" : "bg-[#1c1c1c] text-white"}`}
            >
              <ExternalLink size={15} />
              Live Site
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium border transition-all hover:scale-[1.02] ${isDark ? "border-white/20 text-white hover:bg-white/10" : "border-[#1c1c1c]/20 text-[#1c1c1c] hover:bg-[#1c1c1c]/5"}`}
              >
                <Github size={15} />
                Source Code
              </a>
            )}
          </div>
        </motion.div>
      </section>

      {images.length > 0 && (
        <motion.section className="py-12" {...fadeUp}>
          <ImageGallery images={images} title={project.title} isDark={isDark} />
        </motion.section>
      )}

      {project.problemStatement && (
        <>
          <Divider isDark={isDark} />
          <motion.section {...fadeUp}>
            <Eyebrow isDark={isDark}>Problem</Eyebrow>
            <SectionHeading isDark={isDark}>The Challenge</SectionHeading>
            <p className={`text-base leading-8 max-w-3xl ${isDark ? "text-gray-400" : "text-text"}`}>
              {project.problemStatement}
            </p>
          </motion.section>
        </>
      )}

      {project.myRole && (
        <>
          <Divider isDark={isDark} />
          <motion.section {...fadeUp}>
            <Eyebrow isDark={isDark}>Contribution</Eyebrow>
            <SectionHeading isDark={isDark}>My Role & Scope</SectionHeading>
            <p className={`text-base leading-8 max-w-3xl ${isDark ? "text-gray-400" : "text-text"}`}>
              {project.myRole}
            </p>
          </motion.section>
        </>
      )}

      {project.features && project.features.length > 0 && (
        <>
          <Divider isDark={isDark} />
          <motion.section {...fadeUp}>
            <Eyebrow isDark={isDark}>Features</Eyebrow>
            <SectionHeading isDark={isDark}>What Was Built</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`p-6 rounded-3xl border ${isDark ? "bg-white/3 border-white/8" : "bg-white border-[#1c1c1c]/8"}`}
                >
                  <h3 className={`text-base font-semibold mb-2 ${isDark ? "text-white" : "text-[#1c1c1c]"}`}>
                    {feature.name}
                  </h3>
                  <p className={`text-sm leading-7 ${isDark ? "text-gray-400" : "text-text"}`}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </>
      )}

      {project.technicalHighlights && project.technicalHighlights.length > 0 && (
        <>
          <Divider isDark={isDark} />
          <motion.section {...fadeUp}>
            <Eyebrow isDark={isDark}>Engineering</Eyebrow>
            <SectionHeading isDark={isDark}>Technical Deep Dive</SectionHeading>
            <div className="space-y-6">
              {project.technicalHighlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`rounded-3xl overflow-hidden border ${isDark ? "border-white/8" : "border-[#1c1c1c]/8"}`}
                >
                  <div className={`px-6 py-4 border-b ${isDark ? "bg-white/3 border-white/8" : "bg-[#1c1c1c]/3 border-[#1c1c1c]/8"}`}>
                    <p className={`text-[11px] uppercase tracking-[0.15em] mb-1 ${isDark ? "text-white/40" : "text-[#1c1c1c]/40"}`}>
                      Challenge
                    </p>
                    <p className={`text-sm font-medium ${isDark ? "text-white/80" : "text-[#1c1c1c]/80"}`}>
                      {item.challenge}
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <p className={`text-[11px] uppercase tracking-[0.15em] mb-1 ${isDark ? "text-white/40" : "text-[#1c1c1c]/40"}`}>
                      Solution
                    </p>
                    <p className={`text-sm leading-7 ${isDark ? "text-gray-400" : "text-text"}`}>
                      {item.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </>
      )}

      {project.learnings && (
        <>
          <Divider isDark={isDark} />
          <motion.section {...fadeUp}>
            <Eyebrow isDark={isDark}>Reflection</Eyebrow>
            <SectionHeading isDark={isDark}>What I&apos;d Do Differently</SectionHeading>
            <p className={`text-base leading-8 max-w-3xl ${isDark ? "text-gray-400" : "text-text"}`}>
              {project.learnings}
            </p>
          </motion.section>
        </>
      )}

      <Divider isDark={isDark} />
      <motion.section className="py-8 text-center" {...fadeUp}>
        <p className={`text-sm mb-6 ${isDark ? "text-white/40" : "text-[#1c1c1c]/40"}`}>
          Interested in building something similar?
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#contact"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium transition-all hover:scale-[1.02] ${isDark ? "bg-white text-bg-dark" : "bg-[#1c1c1c] text-white"}`}
          >
            Get in Touch
          </Link>
          <Link
            href="/#portfolio"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium border transition-all hover:scale-[1.02] ${isDark ? "border-white/20 text-white hover:bg-white/10" : "border-[#1c1c1c]/20 text-[#1c1c1c] hover:bg-[#1c1c1c]/5"}`}
          >
            <ArrowLeft size={15} />
            Back to Portfolio
          </Link>
        </div>
      </motion.section>
    </article>
  );
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  return <ProjectDetail project={project} />;
}