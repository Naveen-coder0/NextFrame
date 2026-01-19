import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Work", path: "/work" },
  { name: "Process", path: "/process" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Café Websites",
  "Clinic Websites",
  "Hotel Websites",
  "Business Websites",
  "Custom Solutions",
];

export const Footer = () => {
  return (
    <footer className="section-darker border-t border-border/30">
      {/* CTA Section */}
      <div className="border-b border-border/20">
        <div className="container-wide mx-auto section-padding">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">
                Ready to Build Your Website?
              </h2>
              <p className="text-muted-foreground text-lg">
                Let's create something amazing together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="btn-glow bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                <a
                  href="https://wa.me/9467269782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border/50 hover:bg-muted/50 hover:border-primary/50"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-display font-bold text-xl">N</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">NextFrame</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Simple Websites for Local Businesses. We design modern, fast, and professional websites that bring real customers.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary hover:shadow-glow transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary hover:shadow-glow transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary hover:shadow-glow transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/9467269782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="tel:+919988324455"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Phone size={18} />
                  +91 9988324455
                </a>
              </li>
              <li>
                <a
                  href="mailto:naveen.maan2006@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail size={18} />
                  naveen.maan2006@gmail.com"
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} NextFrame Web. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
