import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow Solutions",
    content: "CtrlAltBuild transformed our entire tech infrastructure. Their consultancy was invaluable, and the custom software they built increased our efficiency by 300%. Absolutely phenomenal team.",
    rating: 5,
    initials: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, InnovateLab",
    content: "Working with CtrlAltBuild was a game-changer for our startup. They didn't just build our MVP, they helped us think through the entire product strategy. Now we're scaling rapidly with their solid foundation.",
    rating: 5,
    initials: "MR"
  },
  {
    name: "Emma Thompson",
    role: "Product Director, DataSync",
    content: "The SaaS solution CtrlAltBuild developed for us is simply outstanding. Clean code, intuitive design, and exceptional performance. They truly understand what modern businesses need.",
    rating: 5,
    initials: "ET"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with CtrlAltBuild.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-medium hover-lift bg-gradient-to-br from-card to-muted/30">
                    <CardContent className="p-8 md:p-12 text-center">
                      {/* Quote Icon */}
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg-primary/10 mb-8">
                        <Quote className="w-8 h-8 text-primary" />
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <Avatar className="w-12 h-12 border-2 border-primary/20">
                          <AvatarFallback className="gradient-bg-primary text-white font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === activeIndex 
                    ? 'gradient-bg-primary shadow-glow' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;