
import { Cpu, Cloud, Smartphone, Code, GitMerge, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Cpu className="h-10 w-10" />,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to address your unique business challenges and objectives.",
    features: ["Requirements Analysis", "Architecture Design", "Development & Testing", "Deployment & Support"]
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "Cloud Solutions",
    description:
      "Scalable, secure, and cost-effective cloud infrastructure and migration services.",
    features: ["Cloud Migration", "Infrastructure Setup", "Serverless Architecture", "DevOps Implementation"]
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications with intuitive user experiences.",
    features: ["iOS Development", "Android Development", "Cross-Platform Solutions", "Progressive Web Apps"]
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Development",
    description:
      "Responsive and performant web applications built with modern technologies.",
    features: ["Frontend Development", "Backend Systems", "E-commerce Solutions", "CMS Implementation"]
  },
  {
    icon: <GitMerge className="h-10 w-10" />,
    title: "API Development & Integration",
    description:
      "Seamless integration services connecting your systems with third-party platforms.",
    features: ["RESTful API Design", "API Gateway Implementation", "Third-party Integrations", "Microservices Architecture"]
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Data Analytics & BI",
    description:
      "Transforming your data into actionable insights for informed decision-making.",
    features: ["Data Warehousing", "Business Intelligence", "Predictive Analytics", "Data Visualization"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 data-aos="fade-up" className="section-title">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="section-subtitle">
            Comprehensive software development services tailored to meet your specific business needs and technological requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="glass-card p-8 flex flex-col h-full hover-lift"
            >
              <div className="mb-6 text-primary">{service.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-auto gradient-edge button-hover">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
