import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  MessageSquare,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroShapes } from "@/components/shared/HeroShapes";
import { SectionHeading } from "@/components/shared/SectionHeading";

import naveenImg from "@/assets/team/naveen.jpg";
// import harshitImg from "@/assets/team/harshit.jpg";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

/* -------------------- VALUES -------------------- */

const values = [
  {
    icon: Sparkles,
    title: "Quality Over Quantity",
    description:
      "We take on fewer projects to deliver exceptional results for every client.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "No technical jargon. We explain everything in simple terms.",
  },
  {
    icon: Users,
    title: "Client-First Mindset",
    description:
      "Your business goals drive every design decision we make.",
  },
  {
    icon: Target,
    title: "Modern Standards",
    description:
      "We use the latest technologies and design practices for lasting results.",
  },
];

/* -------------------- TEAM -------------------- */

const team = [
  {
    name: "Naveen Maan",
    role: "Founder & Lead Designer",
    bio: "With over 2 years of experience in web design, Naveen founded NextFrame Web to help local businesses compete confidently in the digital world. He is passionate about clean design and intuitive user experiences.",
    image: "/team/naveen.jpg",
  },
  {
    name: "Harshit",
    role: "Co-Founder & Lead Developer",
    bio: "Harshit brings strong technical expertise and creative problem-solving to every project. He ensures every website we build is fast, secure, scalable, and built to last.",
    image: "/team/harshit.jpg",
  },
];


/* -------------------- COMPONENT -------------------- */

const About = () => {
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
                About Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              We Build Websites That{" "}
              <span className="text-gradient glow-text">
                Actually Work
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              NextFrame Web is a modern web agency focused on creating
              beautiful, functional websites for local businesses that
              drive real results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding section-dark">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-5 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Team That Understands Local Business
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We started NextFrame Web because we saw too many local
                businesses struggling with outdated, slow, or confusing
                websites.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                So we created an agency focused entirely on helping local
                businesses succeed online with modern design, clear
                communication, and honest pricing.
              </p>
              <Button
                asChild
                className="btn-glow bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Work With Us
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl glass-card overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/30 flex items-center justify-center shadow-glow">
                        <Users className="text-primary" size={40} />
                      </div>
                      <p className="font-display text-3xl font-bold text-foreground">
                        50+ Projects Delivered
                      </p>
                      <p className="text-muted-foreground mt-2">
                        For businesses just like yours
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-accent/15 blur-3xl animate-pulse-glow" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Our Team"
            title="Meet the Founders"
            description="The people behind NextFrame Web who make it all happen."
          />

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="glass-card rounded-3xl p-8 hover-lift text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto mb-6 rounded-full object-cover border border-white/10 shadow-glow"
                  />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding section-darker">
        <div className="container-wide mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-5 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              What Drives Us Every Day
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Our values shape how we work and the results we deliver.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-glow transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center">
                      <value.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-12 md:p-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Let's discuss how we can help your business grow with a
                modern, professional website.
              </p>
              <Button
                asChild
                size="lg"
                className="btn-glow bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch
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

export default About;
