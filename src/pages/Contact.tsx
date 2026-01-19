import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layout } from "@/components/layout/Layout";
import { HeroShapes } from "@/components/shared/HeroShapes";
import { AnimatedSection } from "@/components/ui/motion";
import { useToast } from "@/hooks/use-toast";

const businessTypes = [
  "Café / Restaurant",
  "Clinic / Healthcare",
  "Hotel / Hospitality",
  "Retail / E-commerce",
  "Service Provider",
  "Other",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <HeroShapes />
        <div className="container-wide mx-auto section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-5 py-2 mb-8 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full shadow-glow">
                Contact Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Let's Build{" "}
              <span className="text-gradient glow-text">Your Website</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Ready to take your business online? We'd love to hear from you.
              Reach out through any of these channels.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-16">
            {/* Contact Options */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Choose the method that works best for you. We typically
                    respond within a few hours during business hours.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <a
                    href="https://wa.me/9467269782"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:shadow-[0_0_30px_rgba(37,211,102,0.2)] transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#25D366] flex items-center justify-center shadow-lg">
                      <MessageCircle className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Fastest way to reach us
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-4 p-6 rounded-2xl glass-card hover:border-primary/40 hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <Phone className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        Call Us
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        +91 9988324455
                      </p>
                    </div>
                  </a>

                  <a
                    href="naveen.maan2006@gmail.com"
                    className="flex items-center gap-4 p-6 rounded-2xl glass-card hover:border-primary/40 hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <Mail className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        naveen.maan2006@gmail.com
                      </p>
                    </div>
                  </a>
                </div>

                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                  <p className="text-foreground">
                    <span className="font-semibold">Office Hours:</span> Monday
                    – Saturday, 9:00 AM – 6:00 PM
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    We respond to all inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card-elevated rounded-3xl p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/30 flex items-center justify-center shadow-glow">
                      <CheckCircle className="text-primary" size={32} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-border/50 hover:bg-muted/50">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                      Send Us a Message
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">
                            Your Name
                          </label>
                          <Input
                            placeholder="John Doe"
                            required
                            className="h-12 bg-muted/30 border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">
                            Phone Number
                          </label>
                          <Input
                            placeholder="+91 9988324455"
                            type="tel"
                            required
                            className="h-12 bg-muted/30 border-border/50 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Business Type
                        </label>
                        <Select required>
                          <SelectTrigger className="h-12 bg-muted/30 border-border/50 focus:border-primary">
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border">
                            {businessTypes.map((type) => (
                              <SelectItem key={type} value={type.toLowerCase()}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Your Message
                        </label>
                        <Textarea
                          placeholder="Tell us about your project..."
                          required
                          className="min-h-[120px] resize-none bg-muted/30 border-border/50 focus:border-primary"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full btn-glow bg-gradient-to-r from-primary to-accent hover:opacity-90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                            />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send size={18} />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Friendly Closing */}
      <section className="section-padding section-dark">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Not Sure Where to Start?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                No worries! Just drop us a message on WhatsApp and we'll help
                you figure out what you need. No pressure, just a friendly
                conversation.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300"
              >
                <a
                  href="https://wa.me/9467269782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
