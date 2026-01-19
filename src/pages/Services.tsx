import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Coffee,
  Stethoscope,
  Building2,
  Store,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroShapes } from "@/components/shared/HeroShapes";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

const services = [
  {
    icon: Coffee,
    title: "Café Websites",
    description: "Beautiful websites for coffee shops, bakeries, and restaurants that showcase your menu and ambiance.",
    features: [
      "Menu display with photos",
      "Online ordering integration",
      "Location and hours",
      "Social media integration",
      "Mobile-optimized design",
    ],
  },
  {
    icon: Stethoscope,
    title: "Clinic Websites",
    description: "Professional websites for doctors, dentists, and healthcare providers that build patient trust.",
    features: [
      "Service descriptions",
      "Doctor profiles",
      "Appointment booking",
      "Contact forms",
      "HIPAA-aware design",
    ],
  },
  {
    icon: Building2,
    title: "Hotel Websites",
    description: "Stunning websites for hotels and hospitality businesses that drive direct bookings.",
    features: [
      "Room galleries",
      "Booking integration",
      "Amenities showcase",
      "Location maps",
      "Guest reviews",
    ],
  },
  {
    icon: Store,
    title: "Small Business Websites",
    description: "Custom websites for retail shops, salons, and service providers that attract local customers.",
    features: [
      "Service/product showcase",
      "About your business",
      "Customer testimonials",
      "Contact information",
      "Lead generation forms",
    ],
  },
  {
    icon: Wrench,
    title: "Custom Web Solutions",
    description: "Tailored web solutions for unique business needs that don't fit standard categories.",
    features: [
      "Custom functionality",
      "Third-party integrations",
      "Database solutions",
      "E-commerce setup",
      "Ongoing support",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <HeroShapes />
        <div className="container-wide mx-auto section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-5 py-2 mb-8 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full shadow-glow">
                Our Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Websites Designed for{" "}
              <span className="text-gradient glow-text">Your Industry</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              We specialize in creating websites for specific business types,
              ensuring you get exactly what your industry needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <StaggerContainer className="space-y-8">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <div className="glass-card rounded-3xl p-8 lg:p-12 hover-lift">
                  <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 lg:gap-12 items-start">
                    {/* Left: Icon and Title */}
                    <div>
                      <div className="w-18 h-18 mb-6 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/30 flex items-center justify-center w-16 h-16 shadow-glow">
                        <service.icon className="text-primary" size={32} />
                      </div>
                      <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Right: Features */}
                    <div className="bg-muted/30 border border-border/50 rounded-2xl p-6 lg:p-8">
                      <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                        What You Get
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <CheckCircle className="text-primary shrink-0" size={20} />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process CTA */}
      <section className="section-padding section-dark">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Wondering How We Work?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our process is simple, transparent, and designed to get your
                website live quickly without compromising quality.
              </p>
              <Button asChild size="lg" className="btn-glow bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Link to="/process" className="flex items-center gap-2">
                  See Our Process
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 lg:p-20 text-center">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90" />
              
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
              </div>

              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Don't See Your Industry?
                </h2>
                <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                  No problem! We create custom solutions for any local business.
                  Let's talk about your specific needs.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-elevated"
                >
                  <Link to="/contact">Discuss Your Project</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
