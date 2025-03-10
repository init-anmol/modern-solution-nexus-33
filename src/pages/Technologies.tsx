
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import TechnologiesSection from "@/components/Technologies";
import Footer from "@/components/Footer";

const TechnologiesPage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 0,
    });

    // Refresh AOS on window resize
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <div className="pt-20">
          <TechnologiesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologiesPage;
