
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Solutions from "@/components/Solutions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for animation-on-scroll
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
