
import { useState, useEffect, useRef } from "react";
import { Tab } from "@headlessui/react";
import { Code, Database, Globe, Layers, Server, Shield } from "lucide-react";

const categories = [
  {
    name: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    technologies: [
      { name: "React", level: 90 },
      { name: "Angular", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    technologies: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "Go", level: 75 },
      { name: "C#/.NET", level: 85 },
      { name: "PHP", level: 80 },
    ],
  },
  {
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    technologies: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "Redis", level: 80 },
      { name: "Elasticsearch", level: 75 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    name: "DevOps",
    icon: <Code className="h-5 w-5" />,
    technologies: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "AWS", level: 90 },
      { name: "Azure", level: 85 },
      { name: "CI/CD", level: 90 },
      { name: "Terraform", level: 80 },
    ],
  },
  {
    name: "Mobile",
    icon: <Layers className="h-5 w-5" />,
    technologies: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "Swift", level: 80 },
      { name: "Kotlin", level: 85 },
      { name: "Progressive Web Apps", level: 90 },
      { name: "Ionic", level: 80 },
    ],
  },
  {
    name: "Security",
    icon: <Shield className="h-5 w-5" />,
    technologies: [
      { name: "OAuth/OIDC", level: 90 },
      { name: "JWT", level: 95 },
      { name: "OWASP Standards", level: 90 },
      { name: "Penetration Testing", level: 85 },
      { name: "Data Encryption", level: 90 },
      { name: "Secure DevOps", level: 85 },
    ],
  },
];

const Technologies = () => {
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

  useEffect(() => {
    // Animation for skill bars when they become visible
    if (isVisible) {
      const bars = document.querySelectorAll(".skill-bar-fill");
      bars.forEach((bar, index) => {
        setTimeout(() => {
          (bar as HTMLElement).style.width = (bar as HTMLElement).getAttribute("data-level") + "%";
        }, 100 * index);
      });
    }
  }, [isVisible]);

  return (
    <section id="technologies" ref={sectionRef} className="py-20 md:py-32">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`section-title ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            Our <span className="text-gradient">Technologies</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? "animate-fade-in" : "opacity-0"} delay-100`}>
            We leverage cutting-edge technologies to build robust, scalable, and future-proof software solutions.
          </p>
        </div>

        <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} delay-200`}>
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-secondary p-1 mb-8 max-w-3xl mx-auto">
              {categories.map((category) => (
                <Tab
                  key={category.name}
                  className={({ selected }) =>
                    `w-full rounded-lg py-3 px-3 text-sm font-medium transition-all
                    ${
                      selected
                        ? "bg-white dark:bg-slate-800 shadow text-primary"
                        : "text-muted-foreground hover:bg-white/20 hover:text-primary"
                    }`
                  }
                >
                  <div className="flex items-center justify-center space-x-1">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {categories.map((category, idx) => (
                <Tab.Panel
                  key={idx}
                  className="rounded-xl glass-card p-8 md:p-10 focus:outline-none transition-all duration-300"
                >
                  <h3 className="text-2xl font-display font-semibold mb-8">
                    {category.name} Technologies
                  </h3>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {category.technologies.map((tech, techIdx) => (
                      <div key={techIdx} className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{tech.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {tech.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="skill-bar-fill h-full bg-gradient-to-r from-primary to-purple-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: isVisible ? "0%" : "0%" }}
                            data-level={tech.level}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
