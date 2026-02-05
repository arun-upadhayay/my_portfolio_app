"use client";

import { useState } from "react";
import { 
  LayoutGrid, 
  ArrowRight, 
  X, 
  CheckCircle, 
  Code, 
  FileCode, 
  Smartphone,
  Globe,
  Database,
  Cloud,
  Zap,
  Shield,
  Cpu,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const services = [
  {
    id: 1,
    icon: LayoutGrid,
    title: "Frontend Development",
    subtitle: "Web Developer",
    description: "Building modern, responsive web applications with cutting-edge technologies and exceptional user experiences.",
    features: [
      "React & Next.js application development",
      "Responsive & mobile-first design",
      "Performance optimization",
      "SEO-friendly architecture",
      "Progressive Web Apps (PWA)",
      "Third-party API integration",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    icon: FileCode,
    title: "Backend Development",
    subtitle: "Server-Side Expert",
    description: "Robust server-side solutions with scalable architecture and secure data handling.",
    features: [
      "REST & GraphQL API development",
      "Node.js & Express applications",
      "Database design (SQL & NoSQL)",
      "Authentication & authorization",
      "Cloud deployment & DevOps",
      "Microservices architecture",
    ],
    color: "from-green-500 to-emerald-400",
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Mobile Development",
    subtitle: "Cross-Platform Apps",
    description: "Native-like mobile applications that work seamlessly across iOS and Android platforms.",
    features: [
      "React Native development",
      "Cross-platform solutions",
      "Mobile UI/UX implementation",
      "App store deployment",
      "Push notifications",
      "Offline functionality",
    ],
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 4,
    icon: Cloud,
    title: "SaaS Development",
    subtitle: "Cloud Solutions",
    description: "End-to-end SaaS product development with multi-tenancy and subscription management.",
    features: [
      "Multi-tenant architecture",
      "Subscription management",
      "Payment gateway integration",
      "Admin dashboards",
      "Real-time collaboration",
      "Scalable infrastructure",
    ],
    color: "from-orange-500 to-amber-400",
  },
  {
    id: 5,
    icon: Shield,
    title: "Technical Consultation",
    subtitle: "Expert Guidance",
    description: "Strategic technology consulting to help you make informed decisions for your business.",
    features: [
      "Architecture review & planning",
      "Technology stack selection",
      "Code review & optimization",
      "Performance auditing",
      "Security assessment",
      "Team mentoring & training",
    ],
    color: "from-red-500 to-rose-400",
  },
  {
    id: 6,
    icon: Zap,
    title: "API Integration",
    subtitle: "Third-Party Services",
    description: "Seamless integration with third-party services and custom API development.",
    features: [
      "Payment gateways (Stripe, PayPal)",
      "Social media APIs",
      "CRM & ERP integrations",
      "Real-time data sync",
      "Webhook implementation",
      "Custom API development",
    ],
    color: "from-yellow-500 to-orange-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-40 left-10 w-72 h-72 rounded-full blur-3xl opacity-10
          ${isDark ? 'bg-white' : 'bg-[#1c1c1c]'}
        `} />
        <div className={`absolute bottom-40 right-10 w-96 h-96 rounded-full blur-3xl opacity-10
          ${isDark ? 'bg-white' : 'bg-[#1c1c1c]'}
        `} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl lg:text-5xl font-semibold mb-4 transition-colors duration-500
            ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
          `}>
            Services
          </h2>
          <p className={`text-base transition-colors duration-500
            ${isDark ? 'text-gray-400' : 'text-text'}
          `}>
            What I Offer
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              // variants={itemVariants}
              className={`group relative rounded-3xl p-8 transition-all duration-500 cursor-pointer overflow-hidden
                ${isDark 
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                  : 'bg-white border border-[#1c1c1c]/10 hover:shadow-2xl hover:-translate-y-2'
                }
              `}
              onClick={() => setSelectedService(service)}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                ${isDark ? 'bg-white/10' : 'bg-[#1c1c1c]/5'}
              `}>
                <service.icon 
                  className={`transition-colors duration-500
                    ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
                  `} 
                  size={28} 
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className={`text-xs font-medium tracking-wider uppercase mb-2 transition-colors duration-500
                  ${isDark ? 'text-gray-500' : 'text-text'}
                `}>
                  {service.subtitle}
                </p>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-500
                  ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
                `}>
                  {service.title}
                </h3>
                <p className={`text-sm mb-6 line-clamp-2 transition-colors duration-500
                  ${isDark ? 'text-gray-400' : 'text-text'}
                `}>
                  {service.description}
                </p>

                {/* View More Link */}
                <div className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3
                  ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
                `}>
                  View Details
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Corner Decoration */}
              <div className={`absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                ${isDark ? 'text-white/5' : 'text-[#1c1c1c]/5'}
              `}>
                <ArrowUpRight size={96} className="absolute -top-4 -right-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`mt-16 text-center p-8 rounded-3xl border
            ${isDark 
              ? 'bg-white/5 border-white/10' 
              : 'bg-[#1c1c1c]/2 border-[#1c1c1c]/10'
            }
          `}
        >
          <h3 className={`text-2xl font-semibold mb-3 transition-colors duration-500
            ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
          `}>
            Need a Custom Solution?
          </h3>
          <p className={`mb-6 transition-colors duration-500
            ${isDark ? 'text-gray-400' : 'text-text'}
          `}>
            Let's discuss your project requirements and build something amazing together.
          </p>
          <a 
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105
              ${isDark 
                ? 'bg-white text-bg-dark' 
                : 'bg-[#1c1c1c] text-white'
              }
            `}
          >
            Start a Project
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`relative max-w-2xl w-full rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto
                ${isDark ? 'bg-surface-dark border border-white/10' : 'bg-white border border-[#1c1c1c]/10'}
              `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Gradient */}
              <div className={`relative h-32 bg-linear-to-br ${selectedService.color} p-8 flex items-end`}>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <selectedService.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-medium uppercase tracking-wider">
                      {selectedService.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className={`mb-8 leading-relaxed
                  ${isDark ? 'text-gray-400' : 'text-text'}
                `}>
                  {selectedService.description}
                </p>

                <h4 className={`text-lg font-semibold mb-4
                  ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
                `}>
                  What I Provide
                </h4>

                <ul className="space-y-4 mb-8">
                  {selectedService.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`mt-0.5 p-1 rounded-full
                        ${isDark ? 'bg-white/10' : 'bg-[#1c1c1c]/10'}
                      `}>
                        <CheckCircle 
                          className={isDark ? 'text-white' : 'text-[#1c1c1c]'} 
                          size={16} 
                        />
                      </div>
                      <span className={`text-sm
                        ${isDark ? 'text-gray-300' : 'text-text'}
                      `}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <a
                    href="#contact"
                    className={`flex-1 text-center py-4 rounded-2xl font-medium transition-all hover:scale-[1.02]
                      ${isDark 
                        ? 'bg-white text-bg-dark' 
                        : 'bg-[#1c1c1c] text-white'
                      }
                    `}
                  >
                    Get Started
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className={`px-8 py-4 rounded-2xl font-medium border transition-all hover:scale-[1.02]
                      ${isDark 
                        ? 'border-white/20 text-white hover:bg-white/10' 
                        : 'border-[#1c1c1c]/20 text-[#1c1c1c] hover:bg-[#1c1c1c]/5'
                      }
                    `}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}