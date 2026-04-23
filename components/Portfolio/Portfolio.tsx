"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ExternalLink, X, ChevronLeft, ChevronRight, Images, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

// ─── Project Data ───────────────────────────────────────────────────────────
// Drop screenshots into /public/projects/<slug>/ and list them here.
// Aspect ratio: 16:9 recommended (1280×720 or 1920×1080).
const projects = [
  {
    id: 1,
    slug: "shree-deepak-industries",
    title: "Shree Deepak Industries",
    category: "web",
    projectType: "Client Website",
    screenshots: [
      "/projects/shree-deepak-industries/1.png",
      "/projects/shree-deepak-industries/2.png",
      "/projects/shree-deepak-industries/3.png",
    ],
    description:
      "Corporate manufacturing website focused on trust, catalog clarity, and lead generation for industrial buyers.",
    demo: "https://shreedeepakindustries.com/",
    tags: ["Business Website", "Responsive UI", "SEO", "Lead Forms"],
    impact: "Built for credibility and inquiry-focused conversions.",
    results: [
      { label: "Lighthouse", value: "95+" },
      { label: "Mobile First", value: "100%" },
      { label: "Lead Flow", value: "Optimized" },
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "deepak-roofing",
    title: "Deepak Roofing",
    category: "web",
    projectType: "Client Website",
    screenshots: [
      "/projects/deepak-roofing/1.png",
      "/projects/deepak-roofing/2.png",
      "/projects/deepak-roofing/3.png",
    ],
    description:
      "Service-focused roofing website designed to communicate offerings quickly and drive local business enquiries.",
    demo: "https://www.deepakroofing.com/",
    tags: ["Service Website", "Mobile UX", "Performance", "Conversion"],
    impact: "Structured for faster user decisions and better service discovery.",
    results: [
      { label: "Page Speed", value: "Fast" },
      { label: "Service Clarity", value: "High" },
      { label: "CTA Placement", value: "Strategic" },
    ],
    featured: false,
  },
  {
    id: 3,
    slug: "stakehub-product",
    title: "StakeHub Product",
    category: "app",
    projectType: "Product Platform",
    screenshots: [
      "/projects/stakehub-product/1.png",
      "/projects/stakehub-product/2.png",
      "/projects/stakehub-product/3.png",
      "/projects/stakehub-product/4.png",
    ],
    description:
      "Product-facing experience for StakeHub that presents platform capabilities with a clean, task-oriented flow.",
    demo: "https://product.stakehub.in/",
    tags: ["Product UI", "Dashboard Flow", "SaaS", "Frontend"],
    impact: "Focused on onboarding clarity and feature communication.",
    results: [
      { label: "UX Flow", value: "Streamlined" },
      { label: "Feature Discovery", value: "Improved" },
      { label: "Onboarding", value: "Clear" },
    ],
    caseStudy: true,
    featured: true,
  },
  {
    id: 4,
    slug: "stakehub-main",
    title: "StakeHub Main Platform",
    category: "app",
    projectType: "Brand + Product",
    screenshots: [
      "/projects/stakehub-main/1.png",
      "/projects/stakehub-main/2.png",
      "/projects/stakehub-main/3.png",
    ],
    description:
      "Core StakeHub web presence highlighting product direction, positioning, and value proposition.",
    demo: "https://stakehub.in/",
    tags: ["Brand Website", "Product Positioning", "Marketing", "Web App"],
    impact: "Strengthened brand narrative across product and marketing touchpoints.",
    results: [
      { label: "Brand Consistency", value: "Strong" },
      { label: "Messaging", value: "Clear" },
      { label: "Product Intent", value: "Focused" },
    ],
    featured: true,
  },
  {
    id: 7,
    slug: "nakshatra-jyotish",
    title: "Nakshatra Jyotish",
    category: "app",
    projectType: "Product Platform",
    screenshots: [
      "/projects/nakshatra-jyotish/1.png",
      "/projects/nakshatra-jyotish/2.png",
      "/projects/nakshatra-jyotish/3.png",
    ],
    description:
      "Astrology product website focused on spiritual guidance journeys, clear service presentation, and trust-building storytelling.",
    demo: "https://nakshatra-jyotish.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    impact: "Crafted to improve service discovery and user confidence through a calm, conversion-focused experience.",
    results: [
      { label: "UX", value: "Guided" },
      { label: "Performance", value: "Fast" },
      { label: "Deployment", value: "Vercel" },
    ],
    featured: true,
  },
  {
    id: 5,
    slug: "studynotion-lms",
    title: "StudyNotion – LMS",
    category: "personal",
    projectType: "Personal Project",
    screenshots: [
      "/projects/studynotion-lms/1.png",
      "/projects/studynotion-lms/2.png",
      "/projects/studynotion-lms/3.png",
    ],
    description:
      "Full-stack learning management system enabling instructors to create courses and students to purchase, enroll, and track learning progress with integrated payments.",
    demo: "https://github.com/arun-upadhayay/",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Auth", "Payments"],
    impact: "End-to-end LMS with role-based access, payment integration, and real-time progress tracking.",
    results: [
      { label: "Stack", value: "MERN" },
      { label: "Auth", value: "JWT + RBAC" },
      { label: "Payments", value: "Integrated" },
    ],
    featured: false,
  },
  {
    id: 6,
    slug: "stocks-watchlist",
    title: "Stocks Watchlist Dashboard",
    category: "personal",
    projectType: "Personal Project",
    screenshots: [
      "/projects/stocks-watchlist/1.png",
      "/projects/stocks-watchlist/2.png",
    ],
    description:
      "Responsive stock watchlist dashboard with real-time data visualization, interactive charts, and toggle views for Balance Sheet and Cash Flow financial metrics.",
    demo: "https://github.com/arun-upadhayay/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ECharts", "PostgreSQL"],
    impact: "Optimized data fetching and reduced re-renders for smooth real-time financial data display.",
    results: [
      { label: "Charts", value: "ECharts" },
      { label: "TypeScript", value: "Full" },
      { label: "Performance", value: "Optimized" },
    ],
    featured: false,
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Client Websites" },
  { key: "app", label: "Products" },
  { key: "personal", label: "Personal Projects" },
];

type Project = (typeof projects)[0];

// ─── Image Carousel ──────────────────────────────────────────────────────────
function ImageCarousel({
  screenshots,
  title,
  isDark,
  onOpenLightbox,
  aspectClass = "aspect-video",
}: {
  screenshots: string[];
  title: string;
  isDark: boolean;
  onOpenLightbox?: (index: number) => void;
  aspectClass?: string;
}) {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const prev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length);
    },
    [screenshots.length]
  );

  const next = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrent((c) => (c + 1) % screenshots.length);
    },
    [screenshots.length]
  );

  useEffect(() => {
    setCurrent(0);
    setImgError({});
  }, [screenshots]);

  const hasError = imgError[current];

  return (
    <div className={`relative w-full ${aspectClass} overflow-hidden bg-black/10 group/carousel`}>
      {/* Image */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {hasError ? (
            // Placeholder when screenshot file is missing
            <div
              className={`w-full h-full flex flex-col items-center justify-center gap-2
                ${isDark ? "bg-white/5 text-white/30" : "bg-[#1c1c1c]/5 text-[#1c1c1c]/30"}
              `}
            >
              <Images size={32} strokeWidth={1.5} />
              <span className="text-xs font-medium">Screenshot {current + 1}</span>
              <span className="text-[10px] opacity-60">Add to /public/projects/{title.toLowerCase().replace(/\s+/g, "-")}/</span>
            </div>
          ) : (
            <img
              src={screenshots[current]}
              alt={`${title} — screenshot ${current + 1}`}
              className="w-full h-full object-cover object-top"
              onError={() => setImgError((prev) => ({ ...prev, [current]: true }))}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Expand to lightbox */}
      {onOpenLightbox && !hasError && (
        <button
          aria-label="Open fullscreen view"
          onClick={(e) => { e.stopPropagation(); onOpenLightbox(current); }}
          className={`absolute top-3 right-3 z-10 p-1.5 rounded-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity
            ${isDark ? "bg-black/60 text-white hover:bg-black/80" : "bg-white/80 text-[#1c1c1c] hover:bg-white"}
          `}
        >
          <Maximize2 size={14} />
        </button>
      )}

      {/* Navigation — only show if multiple screenshots */}
      {screenshots.length > 1 && (
        <>
          <button
            aria-label="Previous screenshot"
            onClick={prev}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-200
              ${isDark ? "bg-black/60 text-white hover:bg-black/80" : "bg-white/80 text-[#1c1c1c] hover:bg-white"}
            `}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            aria-label="Next screenshot"
            onClick={next}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-200
              ${isDark ? "bg-black/60 text-white hover:bg-black/80" : "bg-white/80 text-[#1c1c1c] hover:bg-white"}
            `}
          >
            <ChevronRight size={16} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {screenshots.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to screenshot ${i + 1}`}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300`}
              >
                <span className={`block rounded-full transition-all duration-300
                  ${i === current ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50"}
                `} />
              </button>
            ))}
          </div>

          {/* Count badge */}
          <div
            className={`absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium
              ${isDark ? "bg-black/60 text-white" : "bg-white/80 text-[#1c1c1c]"}
            `}
          >
            <Images size={10} />
            {current + 1} / {screenshots.length}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Thumbnail Strip ─────────────────────────────────────────────────────────
function ThumbnailStrip({
  screenshots,
  current,
  onSelect,
  isDark,
}: {
  screenshots: string[];
  current: number;
  onSelect: (i: number) => void;
  isDark: boolean;
}) {
  if (screenshots.length < 2) return null;
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 px-1 scrollbar-none">
      {screenshots.map((src, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`relative shrink-0 w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200
            ${i === current
              ? isDark ? "border-white" : "border-[#1c1c1c]"
              : isDark ? "border-white/20 opacity-50 hover:opacity-75" : "border-[#1c1c1c]/20 opacity-50 hover:opacity-75"
            }
          `}
        >
          <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-cover object-top" />
        </button>
      ))}
    </div>
  );
}

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({
  screenshots,
  startIndex,
  title,
  onClose,
}: {
  screenshots: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length), [screenshots.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % screenshots.length), [screenshots.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-60 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Header */}
      <div className="absolute top-4 left-0 right-0 flex items-center justify-between px-6 z-10">
        <span className="text-white/70 text-sm">{title} — {current + 1} / {screenshots.length}</span>
        <button
          aria-label="Close lightbox"
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Image */}
      <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={current}
            src={screenshots[current]}
            alt={`${title} ${current + 1}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
          />
        </AnimatePresence>

        {screenshots.length > 1 && (
          <>
            <button
              aria-label="Previous screenshot"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              aria-label="Next screenshot"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {screenshots.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
          {screenshots.map((src, i) => (
            <button
              key={i}
              aria-label={`View screenshot ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200
                ${i === current ? "border-white" : "border-white/20 opacity-50 hover:opacity-75"}
              `}
            >
              <img src={src} alt="" className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ─── Project Modal ───────────────────────────────────────────────────────────
function ProjectModal({
  project,
  isDark,
  onClose,
}: {
  project: Project;
  isDark: boolean;
  onClose: () => void;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape" && lightboxIndex === null) onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, lightboxIndex]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.93, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.93, opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`relative max-w-2xl w-full rounded-3xl overflow-hidden max-h-[92vh] overflow-y-auto
            ${isDark ? "bg-surface-dark border border-white/10" : "bg-white border border-[#1c1c1c]/10"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            aria-label="Close project detail"
            onClick={onClose}
            className={`absolute top-4 right-4 z-20 p-2 rounded-full transition-colors
              ${isDark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-[#1c1c1c] hover:bg-black/20"}
            `}
          >
            <X size={20} />
          </button>

          {/* Screenshot carousel */}
          <div className="relative">
            <ImageCarousel
              screenshots={project.screenshots}
              title={project.title}
              isDark={isDark}
              onOpenLightbox={(i) => { setCarouselIndex(i); setLightboxIndex(i); }}
              aspectClass="aspect-video"
            />
          </div>

          {/* Thumbnail strip */}
          <div className={`px-6 pt-3 pb-1 ${isDark ? "bg-surface-dark" : "bg-white"}`}>
            <ThumbnailStrip
              screenshots={project.screenshots}
              current={carouselIndex}
              onSelect={setCarouselIndex}
              isDark={isDark}
            />
          </div>

          {/* Content */}
          <div className="p-6 pt-4">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <span
                  className={`text-[11px] uppercase tracking-widest font-semibold mb-1 block
                    ${isDark ? "text-white/40" : "text-[#1c1c1c]/40"}
                  `}
                >
                  {project.projectType}
                </span>
                <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-[#1c1c1c]"}`}>
                  {project.title}
                </h3>
              </div>
            </div>

            <p className={`mb-5 leading-relaxed text-sm ${isDark ? "text-gray-400" : "text-text"}`}>
              {project.description}
            </p>

            {/* Results */}
            <div
              className={`grid grid-cols-3 gap-2 mb-5 rounded-2xl p-2
                ${isDark ? "bg-white/5" : "bg-[#1c1c1c]/5"}
              `}
            >
              {project.results.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl px-2 py-3 text-center
                    ${isDark ? "bg-white/5" : "bg-white"}
                  `}
                >
                  <p className={`text-[11px] ${isDark ? "text-white/50" : "text-text"}`}>{item.label}</p>
                  <p className={`text-sm font-semibold mt-1 ${isDark ? "text-white" : "text-[#1c1c1c]"}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Impact */}
            <p
              className={`text-sm rounded-2xl px-4 py-3 mb-5
                ${isDark ? "bg-white/5 text-white/70" : "bg-[#1c1c1c]/5 text-[#1c1c1c]/70"}
              `}
            >
              {project.impact}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-3 py-1.5 rounded-full
                    ${isDark ? "bg-white/10 text-white/80" : "bg-[#1c1c1c]/5 text-[#1c1c1c]/80"}
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-medium text-sm transition-all hover:scale-[1.02]
                  ${isDark ? "bg-white text-bg-dark" : "bg-[#1c1c1c] text-white"}
                `}
              >
                <ExternalLink size={16} />
                Live Site
              </a>
              <a
                href="#contact"
                onClick={onClose}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-medium text-sm border transition-all hover:scale-[1.02]
                  ${isDark ? "border-white/20 text-white hover:bg-white/10" : "border-[#1c1c1c]/20 text-[#1c1c1c] hover:bg-[#1c1c1c]/5"}
                `}
              >
                <ArrowRight size={16} />
                Build Similar
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            screenshots={project.screenshots}
            startIndex={lightboxIndex}
            title={project.title}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Project Card ────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  isDark,
  onClick,
  layoutClass = "",
}: {
  project: Project;
  index: number;
  isDark: boolean;
  onClick: () => void;
  layoutClass?: string;
}) {
  const [showMobileInfo, setShowMobileInfo] = useState(false);

  return (
    <motion.div
      layout
      key={project.id}
      initial={{ opacity: 0, y: index % 2 === 0 ? 40 : -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300
        ${isDark
          ? "bg-white/5 border border-white/10 hover:border-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          : "bg-white border border-[#1c1c1c]/10 hover:border-[#1c1c1c]/20 shadow-[0_10px_30px_rgba(28,28,28,0.08)]"
        }
        ${layoutClass}
      `}
      onClick={onClick}
    >
      {/* Soft glow frame */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
          ${isDark
            ? "bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_45%)]"
            : "bg-[radial-gradient(circle_at_80%_20%,rgba(28,28,28,0.08),transparent_45%)]"
          }
        `}
      />

      {/* Screenshot area */}
      <div className={`relative overflow-hidden ${project.caseStudy ? "aspect-2/1" : "aspect-video"}`}>
        <ImageCarousel
          screenshots={project.screenshots}
          title={project.title}
          isDark={isDark}
          aspectClass="h-full w-full"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />

        {/* Badges */}
        {project.featured && (
          <div
            className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide
              ${isDark ? "bg-white text-black" : "bg-[#1c1c1c] text-white"}
            `}
          >
            Featured
          </div>
        )}
        <div
          className={`absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[10px] tracking-wide uppercase font-semibold
            ${isDark ? "bg-black/50 text-white border border-white/20" : "bg-white/90 text-[#1c1c1c] border border-[#1c1c1c]/10"}
          `}
        >
          {project.projectType}
        </div>

        {/* Desktop hover action panel */}
        <div className="absolute inset-x-3 bottom-3 hidden md:block opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10 pointer-events-none group-hover:pointer-events-auto">
          <div
            className={`rounded-2xl p-3 border backdrop-blur-md
              ${isDark ? "bg-black/55 border-white/20" : "bg-white/90 border-[#1c1c1c]/10"}
            `}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <p className={`text-[11px] uppercase tracking-wider ${isDark ? "text-white/65" : "text-[#1c1c1c]/60"}`}>
                Stack Preview
              </p>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border transition-colors
                  ${isDark
                    ? "border-white/30 text-white hover:bg-white/10"
                    : "border-[#1c1c1c]/20 text-[#1c1c1c] hover:bg-[#1c1c1c]/5"
                  }
                `}
              >
                Open Live <ExternalLink size={12} />
              </a>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-[10px] px-2 py-1 rounded-full
                    ${isDark ? "bg-white/15 text-white/85" : "bg-[#1c1c1c]/10 text-[#1c1c1c]/85"}
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5 md:p-6">
        <h3 className={`text-lg md:text-xl font-semibold mb-1.5 ${isDark ? "text-white" : "text-[#1c1c1c]"}`}>
          {project.title}
        </h3>
        <p className={`text-sm mb-4 line-clamp-2 ${isDark ? "text-gray-400" : "text-text"}`}>
          {project.description}
        </p>

        {/* Results */}
        <div
          className={`grid grid-cols-3 gap-1.5 mb-4 rounded-2xl p-1.5 border
            ${isDark ? "bg-white/5 border-white/10" : "bg-[#1c1c1c]/5 border-[#1c1c1c]/10"}
          `}
        >
          {project.results.map((item) => (
            <div
              key={item.label}
              className={`rounded-xl px-2 py-2 text-center ${isDark ? "bg-white/5" : "bg-white"}`}
            >
              <p className={`text-[10px] ${isDark ? "text-white/50" : "text-text"}`}>{item.label}</p>
              <p className={`text-xs font-semibold mt-0.5 ${isDark ? "text-white" : "text-[#1c1c1c]"}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className={`text-xs px-2.5 py-1 rounded-full
                ${isDark ? "bg-white/10 text-white/70" : "bg-[#1c1c1c]/5 text-[#1c1c1c]/70"}
              `}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className={`text-xs px-2.5 py-1 rounded-full ${isDark ? "text-white/40" : "text-[#1c1c1c]/40"}`}>
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <div className="hidden md:flex items-center justify-between gap-3">
          <p className={`text-xs ${isDark ? "text-white/45" : "text-[#1c1c1c]/45"}`}>
            Hover card to preview stack
          </p>
          <div
            className={`inline-flex items-center gap-1.5 text-xs font-medium
              ${isDark ? "text-white/70" : "text-[#1c1c1c]/70"}
            `}
          >
            Open Details <ArrowRight size={14} />
          </div>
        </div>

        <div className="mt-3 md:hidden">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowMobileInfo((prev) => !prev);
            }}
            className={`w-full text-xs px-3 py-2 rounded-xl border transition-colors
              ${isDark
                ? "border-white/20 text-white/80 hover:bg-white/10"
                : "border-[#1c1c1c]/20 text-[#1c1c1c]/80 hover:bg-[#1c1c1c]/5"
              }
            `}
          >
            {showMobileInfo ? "Hide Tech Details" : "Tap to View Tech Details"}
          </button>

          {showMobileInfo && (
            <div
              onClick={(e) => e.stopPropagation()}
              className={`mt-2 rounded-2xl p-3 border
                ${isDark ? "bg-white/5 border-white/15" : "bg-[#1c1c1c]/5 border-[#1c1c1c]/10"}
              `}
            >
              <p className={`text-[11px] uppercase tracking-wider mb-2 ${isDark ? "text-white/60" : "text-[#1c1c1c]/60"}`}>
                Tech Used
              </p>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-[10px] px-2 py-1 rounded-full
                      ${isDark ? "bg-white/10 text-white/85" : "bg-[#1c1c1c]/10 text-[#1c1c1c]/85"}
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className={`text-[11px] leading-relaxed ${isDark ? "text-white/75" : "text-[#1c1c1c]/75"}`}>
                {project.impact}
              </p>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`mt-3 inline-flex w-full items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium
                  ${isDark ? "bg-white text-black" : "bg-[#1c1c1c] text-white"}
                `}
              >
                Open Live Site <ExternalLink size={13} />
              </a>
            </div>
          )}
        </div>

        <p className={`mt-3 md:hidden text-xs ${isDark ? "text-white/45" : "text-[#1c1c1c]/45"}`}>
          Tap to view stack details. Tap card for full project details.
        </p>
      </div>

      {/* Hover border glow */}
      <div
        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
          ${isDark ? "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22)]" : "shadow-[inset_0_0_0_1px_rgba(28,28,28,0.12)]"}
        `}
      />
    </motion.div>
  );
}

// ─── Portfolio Section ───────────────────────────────────────────────────────
export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const allProjectsLayout = [
    { slug: "stakehub-main", className: "lg:col-span-4" },
    { slug: "stakehub-product", className: "lg:col-span-2" },
    { slug: "shree-deepak-industries", className: "lg:col-span-3" },
    { slug: "deepak-roofing", className: "lg:col-span-3" },
    { slug: "nakshatra-jyotish", className: "lg:col-span-2" },
    { slug: "studynotion-lms", className: "lg:col-span-2" },
    { slug: "stocks-watchlist", className: "lg:col-span-2" },
  ];

  const arrangedProjects =
    filter === "all"
      ? [
          ...allProjectsLayout
            .map((layout) => {
              const project = filteredProjects.find((p) => p.slug === layout.slug);
              return project ? { project, className: layout.className } : null;
            })
            .filter((item): item is { project: Project; className: string } => item !== null),
          ...filteredProjects
            .filter((p) => !allProjectsLayout.some((layout) => layout.slug === p.slug))
            .map((project) => ({ project, className: "lg:col-span-2" })),
        ]
      : filteredProjects.map((project) => ({ project, className: "" }));

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="portfolio">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${isDark ? "bg-white" : "bg-[#1c1c1c]"}`} />
        <div className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${isDark ? "bg-white" : "bg-[#1c1c1c]"}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className={`inline-flex mb-4 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] border
              ${isDark ? "border-white/20 text-white/60" : "border-[#1c1c1c]/15 text-[#1c1c1c]/55"}
            `}
          >
            Selected Work
          </span>
          <h2 className={`text-3xl lg:text-5xl font-semibold mb-4 ${isDark ? "text-white" : "text-[#1c1c1c]"}`}>
            Portfolio
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-text"}`}>
            Product builds and client launches designed for speed, clarity, and measurable outcomes.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div
          className={`mb-12 mx-auto w-fit p-1.5 rounded-2xl border flex justify-center gap-2 flex-wrap
            ${isDark ? "bg-white/5 border-white/10" : "bg-white/80 border-[#1c1c1c]/10"}
          `}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                ${filter === f.key
                  ? isDark
                    ? "bg-white text-bg-dark shadow-lg shadow-white/10"
                    : "bg-[#1c1c1c] text-white shadow-lg shadow-black/10"
                  : isDark
                    ? "text-white/80 hover:bg-white/10"
                    : "text-[#1c1c1c]/75 hover:bg-[#1c1c1c]/5"
                }
              `}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
          className={`grid gap-6 ${filter === "all" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-6" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
        >
          <AnimatePresence mode="popLayout">
            {arrangedProjects.map(({ project, className }, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isDark={isDark}
                onClick={() => setSelectedProject(project)}
                layoutClass={className}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            className={`group inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:gap-4
              ${isDark
                ? "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                : "bg-[#1c1c1c] text-white hover:bg-[#2d2d2d]"
              }
            `}
          >
            View All Projects
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isDark={isDark}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
