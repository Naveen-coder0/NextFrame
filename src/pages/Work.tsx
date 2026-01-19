import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Stethoscope, Building2, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroShapes } from "@/components/shared/HeroShapes";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

const projects = [
  {
    name: "Naveen Portfolio",
    type: "Personal Portfolio",
    img: "/team/naveen.jpg",
    link: "https://naveen-portfolio-nu.vercel.app/",
    description:
      "A modern, warm personal portfolio website showcasing Naveen’s projects, skills, experience, and contact details in a clean and professional layout.",
    gradient: "from-amber-500/30 to-orange-500/20",
  },
  {
    name: "Harshit Portfolio",
    type: "Personal Portfolio",
    img: "/team/harshit.jpg",
    link: "https://harshit-portfolio-sepia.vercel.app/",
    description:
      "A clean and professional personal portfolio highlighting Harshit’s work, achievements, skills, and providing an easy way to connect.",
    gradient: "from-emerald-500/30 to-teal-500/20",
  },
  {
    name: "Harbor View Hotel",
    type: "Hotel",
    icon: Building2,
    link: "https://harbor-view-hotel.vercel.app",
    description:
      "Elegant website showcasing rooms, amenities, and local attractions with booking integration.",
    gradient: "from-blue-500/30 to-indigo-500/20",
  },
  {
    name: "Fresh & Local Grocery",
    type: "Small Business",
    icon: Store,
    link: "https://fresh-local-grocery.vercel.app",
    description:
      "Modern website for an organic grocery store featuring weekly specials and delivery options.",
    gradient: "from-green-500/30 to-emerald-500/20",
  },
  {
    name: "Serenity Spa",
    type: "Small Business",
    icon: Store,
    link: "https://serenity-spa.vercel.app",
    description:
      "Relaxing, elegant website for a day spa with service menu and easy appointment scheduling.",
    gradient: "from-purple-500/30 to-pink-500/20",
  },
  {
    name: "Metro Dental Care",
    type: "Clinic",
    icon: Stethoscope,
    link: "https://metro-dental-care.vercel.app",
    description:
      "Friendly, approachable website for a dental practice focused on patient comfort.",
    gradient: "from-cyan-500/30 to-blue-500/20",
  },
];

const Work = () => {
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
                Our Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Projects That{" "}
              <span className="text-gradient glow-text">
                Speak for Themselves
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Every project represents a business or individual we've helped
              succeed online.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <StaggerItem key={project.name}>
                <div className="group glass-card rounded-3xl overflow-hidden hover-lift h-full flex flex-col">
                  {/* Image / Icon */}
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-500 overflow-hidden">
                        {project.img ? (
                          <img
                            src={project.img}
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          project.icon && (
                            <project.icon
                              className="text-primary"
                              size={40}
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                  </div>

                  {/* Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="mb-3 w-fit px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
                      {project.type}
                    </span>

                    <h3 className="font-display text-xl font-semibold mb-2">
                      {project.name}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-6 flex-1">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-border/50 hover:bg-primary/10 hover:border-primary/50"
                      >
                        <span>View Project</span>
                        <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-dark">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Want to See Your Business Here?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let’s create a website that you’ll be proud to show off.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/process">How We Work</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
