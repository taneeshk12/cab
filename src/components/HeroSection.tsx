import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-background/90 transition-colors duration-500" />
        {/* Animated Mesh Gradients - Adjusted for light mode visibility */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 dark:bg-primary/20 blur-[120px] rounded-full animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 dark:bg-secondary/20 blur-[120px] rounded-full animate-float" style={{animationDelay: '3s'}} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          {/* <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 mb-8 animate-fade-in glass-card">
            <Sparkles className="w-4 h-4 text-primary dark:text-primary-light" />
            <span className="text-xs md:text-sm font-bold text-primary dark:text-primary-light uppercase tracking-wider"></span>
          </div> */}

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight animate-fade-in text-slate-900 dark:text-white">
            <span className="gradient-text drop-shadow-sm">CtrlAltBuild</span>
            <br />
            Innovate.{" "}
            <span className="text-primary/80 dark:text-muted-foreground/60">Scale.</span>{" "}
            Success.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-slate-700 dark:text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium">
            We turn complex ideas into <span className="text-primary dark:text-white font-extrabold border-b-2 border-primary/20">seamless digital reality</span>. 
            From expert consultancy to custom software, we build the future of tech.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="gradient-bg-primary hover-glow rounded-2xl h-16 px-10 text-xl font-bold transition-bounce group w-full sm:w-auto"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: "smooth" })}
              className="glass-card hover:bg-primary/5 h-16 px-10 text-xl font-semibold rounded-2xl w-full sm:w-auto"
            >
              Our Solutions
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/10 animate-fade-in flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all">
             {/* Icons would go here */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-30">
        <div className="h-12 w-0.5 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;