import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            {/* <div className="w-10 h-10  rounded-xl flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300 shadow-glow">
              <img src="../../public/logo_ctrl.png" alt="Logo" />
            </div> */}
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="gradient-text">CtrlAltBuild</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { label: 'Services', id: 'services' },
              { label: 'Clients', id: 'clients' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-smooth rounded-full hover:bg-primary/10"
              >
                {item.label}
              </button>
            ))}
            <div className="mx-4 w-px h-6 bg-border"></div>
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="ml-4 gradient-bg-primary hover-glow rounded-full px-6 transition-bounce"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              className="p-2 text-foreground bg-secondary/10 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 glass-card mx-4 mt-4 rounded-3xl overflow-hidden transition-all duration-500 origin-top transform ${
          isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}>
          <div className="flex flex-col p-6 space-y-4">
            {[
              { label: 'Services', id: 'services' },
              { label: 'Clients', id: 'clients' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-3 px-4 rounded-2xl hover:bg-primary/10 text-foreground font-medium transition-smooth"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="gradient-bg-primary hover-glow w-full py-6 text-lg rounded-2xl"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;