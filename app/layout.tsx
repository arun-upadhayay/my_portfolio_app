import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header/Header";
import BackgroundDecorations from "@/components/BackgroundDecorations";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Arun Upadhayay | Full Stack Software Engineer",
    template: "%s | Arun Upadhayay",
  },
  description:
    "Professional portfolio of Arun Upadhayay, a Full Stack Software Engineer specializing in React, Next.js, Node.js, and modern web technologies.",

  keywords: [
    "Arun Upadhayay",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer India",
    "JavaScript Developer",
    "TypeScript Developer",
  ],

  authors: [{ name: "Arun Upadhayay" }],
  creator: "Arun Upadhayay",

  metadataBase: new URL("https://arunupadhayay.in"),

  alternates: {
    canonical: "https://arunupadhayay.in",
  },

  openGraph: {
    title: "Arun Upadhayay | Full Stack Software Engineer",
    description:
      "Portfolio of Arun Upadhayay — Full Stack Software Engineer building modern, scalable web applications.",
    url: "https://arunupadhayay.in",
    siteName: "Arun Upadhayay Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Arun Upadhayay | Full Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arun Upadhayay | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in Next.js, React, and backend systems.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        {/* Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arun Upadhayay",
              url: "https://arunupadhayay.in",
              jobTitle: "Full Stack Software Engineer",
              description:
                "Full Stack Software Engineer specializing in React, Next.js, Node.js, and modern web technologies.",
              sameAs: [
                "https://github.com/your-username",
                "https://www.linkedin.com/in/your-profile",
                "https://twitter.com/your-handle",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "PostgreSQL",
                "AWS",
                "Docker",
              ],
            }),
          }}
        />

        {/* Website schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Arun Upadhayay Portfolio",
              url: "https://arunupadhayay.in",
              description:
                "Official portfolio website of Arun Upadhayay, Full Stack Software Engineer.",
              publisher: {
                "@type": "Person",
                name: "Arun Upadhayay",
              },
              inLanguage: "en",
            }),
          }}
        />

        {/* Breadcrumb schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://arunupadhayay.in",
                },
              ],
            }),
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <BackgroundDecorations />
          <Header />

          {/* GLOBAL CONTAINER */}
          <main className="pt-16">
            <div className="max-w-7xl mx-auto px-6">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
