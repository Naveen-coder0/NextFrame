import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Smartphone,
  Search,
  Zap,
  DollarSign,
  Palette,
  Layout,
  Building,
  FileText,
  RefreshCw,
  MessageCircle,
  Users,
  Clock,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout as PageLayout } from "@/components/layout/Layout";
import { HeroShapes } from "@/components/shared/HeroShapes";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

const trustHighlights = [
  { icon: Smartphone, title: "Mobile-First Design", description: "Optimized for all devices" },
  { icon: Search, title: "Google Optimized", description: "SEO best practices built-in" },
  { icon: Zap, title: "Fast Delivery", description: "Quick turnaround time" },
  { icon: DollarSign, title: "Affordable Pricing", description: "Quality within your budget" },
];

const services = [
  { icon: Palette, title: "Website Design", description: "Beautiful, modern designs that convert visitors into customers." },
  { icon: Layout, title: "UI/UX Design", description: "User-centered design that creates seamless experiences." },
  { icon: Building, title: "Business Websites", description: "Professional websites that establish your online presence." },
  { icon: FileText, title: "Landing Pages", description: "High-converting pages for campaigns and promotions." },
  { icon: RefreshCw, title: "Website Redesign", description: "Transform your outdated website into a modern masterpiece." },
];

const whyChooseUs = [
  { icon: MessageCircle, title: "Simple Communication", description: "We speak your language, not tech jargon." },
  { icon: Users, title: "Client-First Mindset", description: "Your success is our priority." },
  { icon: Clock, title: "Fast Turnaround", description: "Get your website up and running quickly." },
  { icon: DollarSign, title: "Honest Pricing", description: "No hidden fees, ever." },
  { icon: Heart, title: "Long-term Support", description: "We're here for you beyond launch." },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <HeroShapes />
        <div className="container-wide mx-auto section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <span className="inline-block px-5 py-2 mb-8 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full shadow-glow">
                Web Design Agency for Local Businesses
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Websites That Bring{" "}
              <span className="text-gradient glow-text">Real Customers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              We design modern, fast, and professional websites for cafés, clinics,
              hotels, and growing local businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="text-base px-8 btn-glow bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Link to="/work" className="flex items-center gap-2">
                  View Our Work
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 border-border/50 hover:bg-muted/50 hover:border-primary/50"
              >
                <a
                  href="https://wa.me/9467269782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Highlights */}
      <section className="section-padding section-dark">
        <div className="container-wide mx-auto">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustHighlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card rounded-2xl p-6 text-center hover-lift">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center">
                    <item.icon className="text-primary" size={26} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Our Services"
            title="What We Do Best"
            description="From design to development, we create websites that help local businesses thrive online."
          />

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group glass-card rounded-2xl p-8 hover-lift h-full">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow transition-all duration-500">
                    <service.icon
                      className="text-primary group-hover:scale-110 transition-transform duration-300"
                      size={30}
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-border/50 hover:bg-muted/50 hover:border-primary/50">
              <Link to="/services" className="flex items-center gap-2">
                Explore All Services
                <ArrowRight size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding section-darker">
        <div className="container-wide mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-5 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              We're Different, and That's a Good Thing
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              We understand local businesses because we work with them every day.
              No corporate talk, just results.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-glow transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 lg:p-20 text-center">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90" />
              
              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
              </div>

              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Online Presence?
                </h2>
                <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                  Let's build a website that brings real customers to your business.
                  Get in touch today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 text-base px-8 shadow-elevated"
                  >
                    <Link to="/contact">Start Your Project</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 text-base px-8"
                  >
                    <Link to="/work">View Our Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
