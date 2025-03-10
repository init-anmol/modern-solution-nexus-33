
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, ArrowRight, ZoomIn } from "lucide-react";

const portfolioCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "enterprise", label: "Enterprise Solutions" },
  { id: "ecommerce", label: "E-commerce" },
];

const portfolioItems = [
  {
    id: 1,
    title: "HealthTrack Patient Portal",
    description: "A secure patient management system for healthcare providers with telemedicine capabilities.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop",
    categories: ["web", "enterprise"],
    client: "MedLife Healthcare",
    technologies: ["React", "Node.js", "PostgreSQL", "WebRTC"],
    link: "#"
  },
  {
    id: 2,
    title: "EcoCommerce Platform",
    description: "Sustainable products marketplace with carbon footprint tracking and eco-friendly packaging options.",
    image: "https://images.unsplash.com/photo-1611223235982-891163a7c7bf?q=80&w=2940&auto=format&fit=crop",
    categories: ["web", "ecommerce"],
    client: "GreenLife Collective",
    technologies: ["Next.js", "MongoDB", "Stripe", "AWS"],
    link: "#"
  },
  {
    id: 3,
    title: "AgriConnect Mobile App",
    description: "IoT-integrated mobile application for farmers to monitor crops, weather conditions, and optimize farming practices.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2831&auto=format&fit=crop",
    categories: ["mobile"],
    client: "AgriTech Solutions",
    technologies: ["React Native", "Firebase", "IoT Integration", "Machine Learning"],
    link: "#"
  },
  {
    id: 4,
    title: "FinEdge Banking Platform",
    description: "Comprehensive banking solution with advanced security features, real-time analytics, and personalized user experiences.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop",
    categories: ["web", "enterprise"],
    client: "Global Finance Corp",
    technologies: ["Angular", "Java Spring", "Oracle", "Kubernetes"],
    link: "#"
  },
  {
    id: 5,
    title: "LearnSphere LMS",
    description: "Interactive learning management system with course creation tools, progress tracking, and social learning features.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2874&auto=format&fit=crop",
    categories: ["web"],
    client: "EduTech Innovations",
    technologies: ["Vue.js", "Django", "PostgreSQL", "AWS"],
    link: "#"
  },
  {
    id: 6,
    title: "ShopSmart E-commerce App",
    description: "Feature-rich mobile shopping application with AR product visualization, loyalty rewards, and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2940&auto=format&fit=crop",
    categories: ["mobile", "ecommerce"],
    client: "RetailX Group",
    technologies: ["Flutter", "Firebase", "Stripe", "ARKit/ARCore"],
    link: "#"
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categories.includes(selectedCategory));

  const openProjectDetails = (id: number) => {
    setSelectedProject(id);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = portfolioItems.find(item => item.id === selectedProject);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-900/20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-tr from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 data-aos="fade-up" className="section-title">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="section-subtitle">
            Explore our recent projects and see how we've helped businesses across various industries achieve their digital transformation goals.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="mb-12">
          <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="mx-auto flex justify-center mb-8 overflow-x-auto p-1 bg-secondary rounded-full">
              {portfolioCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="rounded-full px-4 py-2 min-w-24"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    data-aos="fade-up"
                    data-aos-delay={200 + (index * 100)}
                    className="glass-card overflow-hidden hover-lift cursor-pointer group"
                    onClick={() => openProjectDetails(project.id)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 text-white">
                          <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-primary/90 text-primary-foreground rounded-full p-3">
                              <ZoomIn size={24} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.categories.map(cat => (
                          <span key={cat} className="text-xs px-2 py-1 bg-secondary rounded-full">
                            {portfolioCategories.find(c => c.id === cat)?.label}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary group-hover:bg-primary/10 transition-colors">
                        View Details <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 glass-card">
            <p className="text-lg text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        {/* Project details modal */}
        {selectedProject && selectedProjectData && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeProjectDetails}>
            <div 
              className="bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-80 relative">
                <img 
                  src={selectedProjectData.image} 
                  alt={selectedProjectData.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-black/40 transition-colors"
                  onClick={closeProjectDetails}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">{selectedProjectData.title}</h2>
                <p className="text-muted-foreground mb-6">{selectedProjectData.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Project Details</h3>
                    <div className="space-y-2">
                      <p><span className="font-medium">Client:</span> {selectedProjectData.client}</p>
                      <p><span className="font-medium">Category:</span> {selectedProjectData.categories.map(cat => 
                        portfolioCategories.find(c => c.id === cat)?.label).join(", ")}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-secondary rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <a href={selectedProjectData.link} target="_blank" rel="noopener noreferrer">
                    <Button className="button-hover">
                      Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
