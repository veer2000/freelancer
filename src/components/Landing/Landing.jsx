import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

function Landing() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
