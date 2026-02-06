import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Services from "@/components/Services/Services";
import Qualification from "@/components/Qualification/Qualification";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import BackgroundDecorations from "@/components/BackgroundDecorations";
import Header from "@/components/Header/Header";
import CTASection from "@/components/CTASection/page";

export default function Page() {
  return (
    <>
      <BackgroundDecorations />

      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      {/* <Portfolio /> */}
      <CTASection />
      <Contact />
      <Footer />
    </>
  );
}
