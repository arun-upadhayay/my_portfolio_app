"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Mail, MessageCircle, Send, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "arun@example.com",
    link: "mailto:arun@example.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 999-888-7777",
    link: "https://wa.me/919998887777",
  },
  {
    icon: Send,
    title: "Messenger",
    value: "user.fb",
    link: "#",
  },
];

export default function Contact() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto sm:px-6">
        {/* Section Header - Matches your other sections */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl lg:text-4xl font-semibold mb-3 transition-colors duration-500
            ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
          `}>
            Contact Me
          </h2>
          <p className={`text-sm transition-colors duration-500
            ${isDark ? 'text-gray-400' : 'text-text'}
          `}>
            Get In Touch
          </p>
        </div>

        {/* Main Grid - Perfectly aligned */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column - Contact Cards */}
          <div>
            <h3 className={`text-lg font-medium mb-6 text-center lg:text-left transition-colors duration-500
              ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
            `}>
              Talk to me
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1
                    ${isDark 
                      ? 'bg-[#1c1c1c] border-white/10 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)]' 
                      : 'bg-white border-[#1c1c1c]/10 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
                    }
                  `}
                >
                  <item.icon 
                    size={28} 
                    className={`mx-auto mb-3 transition-colors duration-500
                      ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
                    `} 
                  />
                  <h4 className={`text-sm font-medium mb-1 transition-colors duration-500
                    ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
                  `}>
                    {item.title}
                  </h4>
                  <p className={`text-xs mb-4 transition-colors duration-500
                    ${isDark ? 'text-gray-400' : 'text-text'}
                  `}>
                    {item.value}
                  </p>
                  <a
                    href={item.link}
                    className={`inline-flex items-center gap-1 text-sm transition-all duration-300 hover:gap-2
                      ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
                    `}
                  >
                    Write me 
                    <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <h3 className={`text-lg font-medium mb-6 text-center lg:text-left transition-colors duration-500
              ${isDark ? 'text-white' : 'text-[#1c1c1c]'}
            `}>
              Write me your project
            </h3>

            <form className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className={`peer w-full h-14 rounded-xl border px-5 text-sm outline-none transition-all duration-300 bg-transparent
                    ${isDark 
                      ? 'border-white/20 text-white focus:border-white placeholder:text-transparent' 
                      : 'border-[#1c1c1c]/20 text-[#1c1c1c] focus:border-[#1c1c1c] placeholder:text-transparent'
                    }
                  `}
                />
                <label className={`absolute left-5 transition-all duration-300 pointer-events-none
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                  peer-focus:-top-2.5 peer-focus:text-xs peer-focus:px-2
                  peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:px-2
                  ${isDark 
                    ? 'text-gray-400 peer-focus:text-white peer-focus:bg-bg-dark' 
                    : 'text-text peer-focus:text-[#1c1c1c] peer-focus:bg-bg'
                  }
                `}>
                  Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder=" "
                  className={`peer w-full h-14 rounded-xl border px-5 text-sm outline-none transition-all duration-300 bg-transparent
                    ${isDark 
                      ? 'border-white/20 text-white focus:border-white placeholder:text-transparent' 
                      : 'border-[#1c1c1c]/20 text-[#1c1c1c] focus:border-[#1c1c1c] placeholder:text-transparent'
                    }
                  `}
                />
                <label className={`absolute left-5 transition-all duration-300 pointer-events-none
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                  peer-focus:-top-2.5 peer-focus:text-xs peer-focus:px-2
                  peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:px-2
                  ${isDark 
                    ? 'text-gray-400 peer-focus:text-white peer-focus:bg-bg-dark' 
                    : 'text-text peer-focus:text-[#1c1c1c] peer-focus:bg-bg'
                  }
                `}>
                  Email
                </label>
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  placeholder=" "
                  rows={6}
                  className={`peer w-full rounded-xl border px-5 pt-4 text-sm outline-none transition-all duration-300 resize-none bg-transparent
                    ${isDark 
                      ? 'border-white/20 text-white focus:border-white placeholder:text-transparent' 
                      : 'border-[#1c1c1c]/20 text-[#1c1c1c] focus:border-[#1c1c1c] placeholder:text-transparent'
                    }
                  `}
                />
                <label className={`absolute left-5 transition-all duration-300 pointer-events-none
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                  peer-focus:-top-2.5 peer-focus:text-xs peer-focus:px-2
                  peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:px-2
                  ${isDark 
                    ? 'text-gray-400 peer-focus:text-white peer-focus:bg-bg-dark' 
                    : 'text-text peer-focus:text-[#1c1c1c] peer-focus:bg-bg'
                  }
                `}>
                  Message
                </label>
              </div>

              {/* Submit Button - Matches your Home section button */}
              <button
                type="submit"
                className={`group inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-medium transition-all duration-300 hover:opacity-90 hover:scale-105
                  ${isDark 
                    ? 'bg-white text-bg-dark' 
                    : 'bg-[#1c1c1c] text-white'
                  }
                `}
              >
                Send Message
                <Send size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}