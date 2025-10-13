import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRightIcon,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Open WhatsApp with prefilled message
    try {
      const whatsappNumber = "919033001841"; // E.164 without '+'
      const text = `Hello CtrlAltBuild,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        text
      )}`;

      // Prefer opening in a new tab; fall back to same tab if blocked
      const newWin = window.open(whatsappUrl, "_blank");
      if (!newWin) {
        window.location.href = whatsappUrl;
      }

      // Optional: clear the form after initiating WhatsApp
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to open WhatsApp:", err);
      toast({
        title: "Couldn't open WhatsApp",
        description: "Please try again or contact us via email or phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "team@ctrlaltbuild.in",
      href: "mailto:team@ctrlaltbuild.in",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 90330 01841",
      href: "tel:+919033001841",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujarat, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ctrlaltbuild-technologies-508119383/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/CtrlAltBuild-Technologies",
      label: "GitHub",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 gradient-bg-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Build Something</span>
            <br />
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us and
            let's discuss how we can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <Card className="border-0 shadow-medium hover-lift bg-black/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-black">
                  Get in Touch
                </h3>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center space-x-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-smooth group hover-lift"
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-bg-primary/10 group-hover:gradient-bg-primary group-hover:shadow-glow transition-smooth">
                          <IconComponent className="w-6 h-6 text-white/70 group-hover:text-white transition-smooth" />
                        </div>
                        <div>
                          <div className="text-sm text-white/50 font-bold">
                            {item.label}
                          </div>
                          <div className="font-medium text-foreground group-hover:text-white transition-smooth">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Social Links */}
                {/* <div>
                  <h4 className="font-semibold mb-4 text-foreground">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:gradient-bg-primary group transition-smooth hover-scale shadow-soft hover:shadow-glow"
                        >
                          <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-white transition-smooth" />
                        </a>
                      );
                    })}
                  </div>
                </div> */}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="border-0 shadow-medium hover-lift bg-black/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-black">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-foreground font-medium"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-border focus:border-primary focus:ring-primary/20"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-foreground font-medium"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-border focus:border-primary focus:ring-primary/20"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-foreground font-medium"
                    >
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-2 border-border focus:border-primary focus:ring-primary/20"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-bg-primary hover-glow hover-scale py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-border text-center animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between mr-20">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold gradient-text mb-2">
                CtrlAltBuild
              </h3>
              <p className="text-sm text-muted-foreground">
                <strong>Ctrl</strong>ling Outcomes <strong>Alt</strong>ernating
                Innovations <strong>Build</strong>ing Dreams
              </p>
  
              <div className="text-sm text-muted-foreground mt-6">
                © 2025 CtrlAltBuild. All rights reserved.
              </div>
            </div>

            <div className="text-left flex text-sm text-muted-foreground gap-10">
                <div>
                  <h2 className="text-sm text-muted-foreground">Work with us?</h2>
                  <a href="#" className="underline text-sm text-muted-foreground">Internships</a>
                </div>
                <div>
                  <h2>Our Projects</h2>
                  <a href="https://www.ieltsprepai.tech/" className="underline flex gap-1 items-center">
                    IELTS Prep AI
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
