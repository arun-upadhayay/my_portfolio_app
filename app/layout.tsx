import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header/Header";
import BackgroundDecorations from "@/components/BackgroundDecorations";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Arun Upadhayay | Full Stack Developer",
    template: "%s | Arun Upadhayay",
  },
  description:
    "Portfolio of Arun Upadhayay, a full-stack developer building production web applications with React, Next.js, Node.js, TypeScript, and PostgreSQL.",

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
    canonical: "/",
  },

  openGraph: {
    title: "Arun Upadhayay | Full Stack Developer",
    description:
      "Portfolio of Arun Upadhayay, a full-stack developer building production web applications with React, Next.js, Node.js, TypeScript, and PostgreSQL.",
    url: "https://arunupadhayay.in",
    siteName: "Arun Upadhayay Portfolio",
    images: [
      {
        url: "/assets/about.jpg",
        width: 1200,
        height: 630,
        alt: "Arun Upadhayay, full-stack developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arun Upadhayay | Full Stack Developer",
    description:
      "Full-stack developer portfolio featuring React, Next.js, Node.js, TypeScript, and backend systems.",
    images: ["/assets/about.jpg"],
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
                "https://github.com/arun-upadhayay",
                "https://www.linkedin.com/in/arun-upadhayay",
                "https://twitter.com/arun__upadhayay",
                "https://www.instagram.com/arun__upadhayay",
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

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <BackgroundDecorations />
          <Header />

          {/* GLOBAL CONTAINER */}
          <main className="pt-16">
            <div className="max-w-7xl mx-auto px-6">{children}</div>
          </main>
        </ThemeProvider>

        {/* Google Analytics 4 — loaded after page is interactive so it never blocks rendering */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
