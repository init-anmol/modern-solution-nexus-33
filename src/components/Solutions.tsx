
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Building, ShoppingBag, Stethoscope, Wheat, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: <Building className="h-10 w-10" />,
    title: "Enterprise Solutions",
    description:
      "Comprehensive digital transformation for large organizations, including ERP, CRM, and business intelligence systems.",
    link: "#"
  },
  {
    icon: <ShoppingBag className="h-10 w-10" />,
    title: "E-commerce Platforms",
    description:
      "Custom online stores and marketplaces with seamless payment integration, inventory management, and personalized shopping experiences.",
    link: "#"
  },
  {
    icon: <Stethoscope className="h-10 w-10" />,
    title: "Healthcare Systems",
    description:
      "Secure and compliant healthcare applications, including patient management, telemedicine, and medical record systems.",
    link: "#"
  },
  {
    icon: <Wheat className="h-10 w-10" />,
    title: "AgriTech Solutions",
    description:
      "Innovative technology for agriculture, including farm management systems, IoT integration, and supply chain optimization.",
    link: "#"
  },
  {
    icon: <Briefcase className="h-10 w-10" />,
    title: "FinTech Applications",
    description:
      "Secure financial platforms, payment gateways, investment tools, and banking solutions with rigorous security standards.",
    link: "#"
  },
  {
    icon: <GraduationCap className="h-10 w-10" />,
    title: "EdTech Platforms",
    description:
      "Interactive learning environments, course management systems, and educational content delivery platforms.",
    link: "#"
  }
];

const Solutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -left-64 top-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-50/50 to-blue-50/50 dark:from-purple-900/5 dark:to-blue-900/5 blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`section-title ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            Industry <span className="text-gradient">Solutions</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? "animate-fade-in" : "opacity-0"} delay-100`}>
            Specialized software solutions tailored for the unique challenges and requirements of different industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`glass-card p-8 flex flex-col h-full ${
                isVisible
                  ? "animate-fade-in"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="mb-6 text-primary">{solution.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{solution.description}</p>
              <a 
                href={solution.link} 
                className="group inline-flex items-center text-sm font-medium text-primary hover:underline mt-auto"
              >
                Discover More 
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center ${isVisible ? "animate-fade-in" : "opacity-0"} delay-700`}>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't see a solution for your industry? We specialize in creating custom solutions for unique business needs.
          </p>
          <Button size="lg" className="magic-shine button-hover">
            Request Custom Solution
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
