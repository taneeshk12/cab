import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full gradient-bg-primary opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full gradient-bg-secondary opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full gradient-bg-primary opacity-25 animate-float" style={{animationDelay: '4s'}}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">CtrlAltBuild</span>
            <br />
            <span className="text-foreground">Where Innovation</span>
            <br />
            <span className="text-foreground">Meets Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We craft exceptional digital experiences through tech consultancy, 
            custom software development, and innovative SaaS solutions. 
            Your vision, our expertise, unlimited possibilities.
          </p>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              Tech Consultancy
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              Custom Software
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              SaaS Products
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="hover-glow hover-scale px-8 py-3 text-lg font-semibold text-white"
            >
              Let's Build Together
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary/30 text-primary hover:bg-primary/10 hover-lift px-8 py-3 text-lg"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;