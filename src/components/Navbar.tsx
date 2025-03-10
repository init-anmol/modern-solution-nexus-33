
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Technologies", href: "/technologies" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Solutions", href: "/solutions" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check if we're on the home page
    setIsHomePage(location.pathname === "/");

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    
    // If it's an anchor link on the homepage
    if (href.startsWith('#') && isHomePage) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        
        // Update URL hash without jumping
        window.history.pushState(null, "", href);
      }
    }
    // If it's a navigation to a section on homepage from another page
    else if (href.startsWith('#') && !isHomePage) {
      // Let React Router handle the navigation to homepage first
    } 
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-display font-bold tracking-tight"
            >
              Nexus<span className="text-gradient">Dev</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => link.href.includes('#') && handleLinkClick(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="ml-4 button-hover">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (link.href.includes('#')) handleLinkClick(e, link.href);
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full button-hover">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
