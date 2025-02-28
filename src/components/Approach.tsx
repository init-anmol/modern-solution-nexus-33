
import { Check, Code, Beaker, LayoutDashboard, MessagesSquare, Wrench } from "lucide-react";

const steps = [
  {
    icon: <MessagesSquare className="h-10 w-10" />,
    title: "Planning",
    description: "We begin with a comprehensive consultation to understand your business needs and objectives for the software solution.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <LayoutDashboard className="h-10 w-10" />,
    title: "Prototyping",
    description: "We create interactive mockups and wireframes to visualize the solution before committing to full development.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Development",
    description: "Our skilled developers build your solution using cutting-edge technologies and best practices in software engineering.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: <Beaker className="h-10 w-10" />,
    title: "Testing",
    description: "Rigorous testing ensures your software is robust, secure, and delivers a seamless user experience across devices.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: "Maintenance",
    description: "We provide ongoing support and updates to keep your software running smoothly and adapting to evolving business needs.",
    color: "from-emerald-500 to-teal-500",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-gradient-to-bl from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 data-aos="fade-up" className="section-title">
            Our Development <span className="text-gradient">Approach</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="section-subtitle">
            A systematic methodology that delivers excellence at every stage of the software development lifecycle.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 rounded-full hidden md:block"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={100 * index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-800 border-4 border-primary shadow-lg z-10 flex items-center justify-center hidden md:flex">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                
                {/* Content */}
                <div className={`glass-card p-8 md:w-[calc(50%-4rem)] w-full hover-lift ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}>
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-r ${step.color} text-white mx-auto md:mx-0 ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Spacer div to push content to right position */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
