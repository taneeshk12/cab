import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ClientsSection from "../components/ClientsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Navigation from "../components/Navigation";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      
      {/* Dynamic Footer */}
      <footer className="py-12 border-t border-border/10 bg-muted/20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-8 h-8 gradient-bg-primary rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-black text-xs">C</span>
            </div>
            <span className="text-xl font-bold gradient-text">CtrlAltBuild</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2025 CtrlAltBuild Technologies. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
             <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-bold">Privacy Policy</a>
             <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-bold">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Background blobs for depth */}
      <div className="fixed top-0 left-0 -z-50 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-primary rounded-full blur-[150px] animate-float" />
        <div className="absolute top-[60%] right-[10%] w-[40vw] h-[40vw] bg-secondary rounded-full blur-[150px] animate-float" style={{animationDelay: '4s'}} />
      </div>
    </div>
  );
};

export default Index;