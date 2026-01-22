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
    // {
    //   icon: Github,
    //   href: "https://github.com/CtrlAltBuild-Technologies",
    //   label: "GitHub",
    // },
    // { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-24 lg:py-40 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Contact Info */}
          <div className="animate-fade-in order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
              Let's Start a <br />
              <span className="gradient-text">Conversation</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Ready to take your project to the next level? Our team of experts is
              standing by to help you solve your toughest technical challenges.
            </p>

            <div className="space-y-8 mb-12">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center group p-6 glass-card rounded-3xl hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-bg-primary flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-glow">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">
                      {info.label}
                    </p>
                    <p className="text-xl font-semibold text-foreground">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-2xl glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 group-hover:scale-125 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up order-1 lg:order-2">
            <div className="glass-card p-8 md:p-12 rounded-[3rem] relative overflow-hidden shadow-large border-primary/20 bg-white/90 dark:bg-card/40">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

              <h3 className="text-2xl md:text-3xl font-black mb-8 text-center text-slate-900 dark:text-white">
                Project Inquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-black uppercase tracking-wider ml-1 text-slate-700 dark:text-foreground/70"
                  >
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-14 px-6 rounded-2xl bg-white/50 dark:bg-muted/30 border border-slate-200 dark:border-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-black uppercase tracking-wider ml-1 text-slate-700 dark:text-foreground/70"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-14 px-6 rounded-2xl bg-white/50 dark:bg-muted/30 border border-slate-200 dark:border-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-black uppercase tracking-wider ml-1 text-slate-700 dark:text-foreground/70"
                  >
                    How can we help?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or vision..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="min-h-[150px] px-6 py-4 rounded-2xl bg-white/50 dark:bg-muted/30 border border-slate-200 dark:border-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-16 gradient-bg-primary hover-glow text-white font-bold text-xl rounded-2xl transition-bounce group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Opening WhatsApp..." : "Send Message"}
                  <Send className="ml-2 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                {/* <p className="text-center text-xs text-muted-foreground mt-4">
                  Powered by 128-bit Encryption & Seamless WhatsApp Integration
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
