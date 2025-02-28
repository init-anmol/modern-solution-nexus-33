
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
  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/10 dark:to-blue-900/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute right-0 top-1/4 w-80 h-80 bg-gradient-to-bl from-rose-50 to-orange-50 dark:from-rose-900/10 dark:to-orange-900/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 data-aos="fade-up" className="section-title">
            About <span className="text-gradient">Us</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="section-subtitle">
            We are a team of passionate technologists dedicated to crafting innovative software solutions that empower businesses to thrive in the digital age.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-start gap-16">
          <div data-aos="fade-right" data-aos-delay="200" className="md:w-1/2">
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

          <div data-aos="fade-left" data-aos-delay="300" className="md:w-1/2">
            <h3 className="text-2xl font-display font-semibold mb-6">Our Values</h3>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 100}
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
