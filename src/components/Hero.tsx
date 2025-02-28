
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Brand logos
const brands = [
  { name: "Microsoft", logo: "/microsoft-logo.svg" },
  { name: "Google", logo: "/google-logo.svg" },
  { name: "Amazon", logo: "/amazon-logo.svg" },
  { name: "IBM", logo: "/ibm-logo.svg" },
  { name: "Adobe", logo: "/adobe-logo.svg" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-32">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-purple-200 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 blur-3xl opacity-40"></div>
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-teal-100 to-blue-100 dark:from-teal-900/10 dark:to-blue-900/10 blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-100 to-rose-100 dark:from-blue-900/20 dark:to-rose-900/20 blur-3xl opacity-40"></div>
      </div>

      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Transforming Ideas into
              <br />
              <span className="text-gradient">Digital Excellence</span>
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We craft innovative software solutions that drive business growth and
              deliver exceptional user experiences.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="500">
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="magic-shine button-hover">
                Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gradient-edge button-hover"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="700" className="mt-16">
            <p className="text-sm text-muted-foreground mb-4">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="h-8 w-28 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/microsoft.svg')" }}></div>
              <div className="h-8 w-28 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/google.svg')" }}></div>
              <div className="h-8 w-28 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/amazon.svg')" }}></div>
              <div className="h-8 w-28 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/ibm.svg')" }}></div>
              <div className="h-8 w-28 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/adobe.svg')" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
