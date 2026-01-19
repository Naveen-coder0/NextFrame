import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, Palette, RefreshCw, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroShapes } from "@/components/shared/HeroShapes";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Requirement Discussion",
    description: "We start with a friendly conversation to understand your business, goals, and vision. No technical jargon—just a simple chat about what you need.",
    details: [
      "Understand your business and target audience",
      "Define project goals and requirements",
      "Discuss timeline and budget",
      "Answer all your questions",
    ],
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Development",
    description: "Our team creates a custom design tailored to your brand and builds it with modern, fast-loading technology. You'll see progress at every step.",
    details: [
      "Custom design mockups for approval",
      "Mobile-first responsive development",
      "SEO optimization built-in",
      "Regular progress updates",
    ],
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Review & Feedback",
    description: "You review the website and share your thoughts. We make revisions until you're 100% satisfied with every detail.",
    details: [
      "Detailed walkthrough of your website",
      "Unlimited revisions within scope",
      "Content adjustments and tweaks",
      "Final approval before launch",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "We launch your website and provide ongoing support to ensure everything runs smoothly. You're never left hanging after launch.",
    details: [
      "Seamless website launch",
      "Training on how to update content",
      "30-day post-launch support",
      "Optional ongoing maintenance plans",
    ],
  },
];

const Process = () => {
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
                Our Process
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Simple Steps to{" "}
              <span className="text-gradient glow-text">Your New Website</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              We've streamlined our process to make getting your website as easy
              and stress-free as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <StaggerContainer className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div className="relative">
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-1/2 top-full w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}

                  <div className="glass-card rounded-3xl p-8 lg:p-12">
                    <div className="grid lg:grid-cols-[auto,1fr,1.5fr] gap-8 lg:gap-12 items-start">
                      {/* Step Number */}
                      <div className="flex lg:flex-col items-center gap-4 lg:gap-2">
                        <span className="font-display text-4xl lg:text-5xl font-bold text-primary/30">
                          {step.number}
                        </span>
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                          <step.icon className="text-white" size={28} />
                        </div>
                      </div>

                      {/* Title and Description */}
                      <div>
                        <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="bg-muted/30 border border-border/50 rounded-2xl p-6">
                        <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                          What Happens
                        </h4>
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0 shadow-glow" />
                              <span className="text-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding section-darker">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Typical Timeline
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Most projects are completed within 2-4 weeks, depending on complexity.
            </p>

            <div className="grid grid-cols-4 gap-4 lg:gap-8">
              {[
                { label: "Week 1", task: "Discovery & Design" },
                { label: "Week 2", task: "Development" },
                { label: "Week 3", task: "Review & Revisions" },
                { label: "Week 4", task: "Launch!" },
              ].map((item, index) => (
                <div key={item.label} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/30 flex items-center justify-center shadow-glow">
                    <span className="font-display font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <p className="font-display font-semibold text-sm mb-1 text-foreground">
                    {item.label}
                  </p>
                  <p className="text-muted-foreground text-xs">{item.task}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-12 md:p-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                The first step is a simple conversation. Let's discuss your project
                and see how we can help.
              </p>
              <Button asChild size="lg" className="btn-glow bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Link to="/contact" className="flex items-center gap-2">
                  Start the Conversation
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
