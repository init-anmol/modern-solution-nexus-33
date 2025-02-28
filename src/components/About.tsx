
import { useState, useEffect, useRef } from "react";
import { Code, Users, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Technical Excellence",
    description:
      "We maintain high standards in our code and technical solutions, ensuring scalability, security, and performance."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaborative Approach",
    description:
      "We work closely with our clients, fostering open communication and partnership throughout the development process."
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovative Thinking",
    description:
      "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive edge."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Result-Oriented",
    description:
      "We focus on delivering measurable outcomes that align with our clients' business objectives and drive growth."
  }
];

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-gradient-to-bl from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`section-title ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            About <span className="text-gradient">Us</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? "animate-fade-in" : "opacity-0"} delay-100`}>
            We are a team of passionate technologists dedicated to crafting innovative software solutions that empower businesses to thrive in the digital age.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-start gap-16">
          <div className={`md:w-1/2 ${isVisible ? "animate-fade-in" : "opacity-0"} delay-200`}>
            <div className="glass-card p-8 relative h-full">
              <h3 className="text-2xl font-display font-semibold mb-4">Our Story</h3>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, NexusDev began with a simple mission: to bridge the gap between complex technology and real business needs. Our founders, with decades of combined experience in software development and business strategy, recognized that many companies struggled to find technology partners who truly understood their objectives.
              </p>
              <p className="text-muted-foreground mb-4">
                We've since grown into a global team of experts, working with clients ranging from ambitious startups to established enterprises. Through every project, we've maintained our core commitment to technical excellence and client partnership.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to push the boundaries of what's possible, helping our clients navigate the rapidly evolving digital landscape and transform their ideas into powerful software solutions.
              </p>
            </div>
          </div>

          <div className={`md:w-1/2 ${isVisible ? "animate-fade-in" : "opacity-0"} delay-300`}>
            <h3 className="text-2xl font-display font-semibold mb-6">Our Values</h3>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass-card p-6 flex items-start hover-lift"
                >
                  <div className="mr-4 mt-1 p-2 bg-primary/5 rounded-lg text-primary">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
