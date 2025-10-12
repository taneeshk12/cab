import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Lightbulb,
    title: "Tech Consultancy",
    description: "Strategic technology guidance to accelerate your business growth. We help you make informed decisions about technology stack, architecture, and digital transformation.",
    features: ["Technology Strategy", "Architecture Planning", "Digital Transformation", "Risk Assessment"],
    color: "primary"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your unique business needs. From web applications to enterprise systems, we build scalable and maintainable solutions.",
    features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
    color: "secondary"
  },
  {
    icon: Rocket,
    title: "Personal SaaS Products",
    description: "Innovative SaaS solutions designed to solve real-world problems. We create and launch our own products while partnering with clients on theirs.",
    features: ["Product Development", "MVP Launch", "Scaling Solutions", "Market Research"],
    color: "accent"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 gradient-bg-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive technology services to help businesses thrive in the digital age. 
            From strategic consulting to cutting-edge development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className={`relative overflow-hidden border-0 shadow-soft hover-lift transition-smooth group animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  service.color === 'primary' ? 'from-primary/5 to-primary/10' :
                  service.color === 'secondary' ? 'from-secondary/5 to-secondary/10' :
                  'from-accent to-accent/50'
                } opacity-0 group-hover:opacity-100 transition-smooth`}></div>
                
                <CardContent className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    service.color === 'primary' ? 'gradient-bg-primary' :
                    service.color === 'secondary' ? 'gradient-bg-secondary' :
                    'bg-accent'
                  } shadow-medium group-hover:shadow-glow transition-smooth`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:gradient-text transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          service.color === 'primary' ? 'bg-primary' :
                          service.color === 'secondary' ? 'bg-secondary' :
                          'bg-accent-foreground'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary-dark group-hover:translate-x-1 transition-smooth"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in">
          <Button 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" })}
            className="gradient-bg-primary hover-glow hover-scale px-8 py-3"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;