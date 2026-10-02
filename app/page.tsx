import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Services from "@/components/Services/Services";
import Qualification from "@/components/Qualification/Qualification";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import BackgroundDecorations from "@/components/BackgroundDecorations";
import CTASection from "@/components/CTASection/page";

export const metadata = {
  title: { absolute: "Arun Upadhayay | Full Stack Developer" },
  description:
    "Portfolio of Arun Upadhayay, a full-stack developer building production web applications with React, Next.js, Node.js, TypeScript, and PostgreSQL.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <BackgroundDecorations />

      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Portfolio />
      <CTASection />
      <Contact />
      <Footer />
    </>
  );
}
