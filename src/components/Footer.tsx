
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/30 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-display font-bold tracking-tight mb-6 inline-block">
              Nexus<span className="text-gradient">Dev</span>
            </a>
            <p className="text-muted-foreground mt-4 mb-6 max-w-md">
              We transform ideas into exceptional software solutions, empowering businesses to thrive in the digital era through innovative technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-primary/5 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/5 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/5 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["About", "Services", "Technologies", "Solutions", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NexusDev. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Designed with precision. Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
