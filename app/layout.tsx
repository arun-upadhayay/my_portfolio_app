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
  title: "Portfolio - Full Stack Software Engineer",
  description:
    "Professional portfolio of a Full Stack Software Engineer with experience in modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
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
