
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: "hello@nexusdev.tech",
    link: "mailto:hello@nexusdev.tech"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Office",
    value: "101 Innovation Drive, San Francisco, CA",
    link: "https://maps.google.com"
  }
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`section-title ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? "animate-fade-in" : "opacity-0"} delay-100`}>
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} delay-200`}>
            <div className="glass-card p-8 mb-8">
              <h3 className="text-xl font-display font-semibold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full magic-shine button-hover"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} delay-300`}>
            <div className="glass-card p-8 mb-8">
              <h3 className="text-xl font-display font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 p-2 rounded-full bg-primary/5 text-primary mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">
                        {item.title}
                      </h4>
                      <a
                        href={item.link}
                        className="text-lg hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-display font-semibold mb-6">Working Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h4 className="font-medium mb-2">Need urgent assistance?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  For existing clients with support agreements, please use our priority support channel.
                </p>
                <Button variant="outline" className="w-full gradient-edge button-hover">
                  Priority Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
