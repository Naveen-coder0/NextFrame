import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroShapes } from "@/components/shared/HeroShapes";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

/* ================= DATA ================= */

const portfolioProjects = [
  {
    name: "Naveen Portfolio",
    type: "Personal Portfolio",
    img: "/previews/naveen-portfolio.png",
    link: "https://naveen-portfolio-nu.vercel.app/",
    description:
      "Modern personal portfolio showcasing skills, projects, and experience.",
  },
  {
    name: "Harshit Portfolio",
    type: "Personal Portfolio",
    img: "/previews/harshit-portfolio.png",
    link: "https://harshit-portfolio-sepia.vercel.app/",
    description:
      "Clean and professional portfolio with strong visual presence.",
  },
];

const clientProjects = [
  {
    name: "Salon Website",
    type: "Salon Business",
    img: "/previews/salon.png",
    link: "https://demo-salon-ochre.vercel.app/",
    description:
      "Elegant salon website with services, gallery, and booking flow.",
  },
  {
    name: "Shoes E-commerce Store",
    type: "E-commerce",
    img: "/previews/shoes.png",
    link: "https://strid-shoes-store.vercel.app/",
    description:
      "Modern e-commerce store with conversion-focused layout and clean UI.",
  },
  {
    name: "Serenity Spa",
    type: "Small Business",
    img: "/previews/spa.png",
    link: "https://serenity-spa.vercel.app",
    description:
      "Calm, elegant spa website with premium look and feel.",
  },
];

/* ================= PAGE ================= */

export default function Work() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <HeroShapes />
        <div className="container-wide mx-auto section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-6xl font-bold mb-6"
            >
              Our <span className="text-gradient glow-text">Work</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground">
              Personal portfolios & real client projects.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO (2 COL) ================= */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <h2 className="text-4xl font-bold mb-14">
            Personal Portfolios
          </h2>

          <StaggerContainer className="grid md:grid-cols-2 gap-14">
            {portfolioProjects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================= CLIENT WORK (2 COL FIXED) ================= */}
      <section className="section-padding pt-0">
        <div className="container-wide mx-auto">
          <h2 className="text-4xl font-bold mb-14">
            Client Projects
          </h2>

          <StaggerContainer className="grid md:grid-cols-2 gap-14">
            {clientProjects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-dark">
        <div className="container-wide mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">
              Want Your Project Here?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let’s build something bold and professional.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

/* ================= CARD ================= */

function ProjectCard({ project }: any) {
  return (
    <StaggerItem>
      <div className="glass-card hover-lift flex flex-col">
        {/* IMAGE */}
        <div className="relative h-[340px] w-full overflow-hidden">
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex items-center justify-center"
          >
            <span className="px-8 py-3 rounded-full bg-primary text-lg font-medium text-primary-foreground">
              Live Preview <ExternalLink className="inline ml-2" size={18} />
            </span>
          </a>
        </div>

        {/* CONTENT */}
        <div className="p-8">
          <span className="inline-block mb-4 text-sm px-4 py-1 rounded-full bg-primary/10 text-primary">
            {project.type}
          </span>

          <h3 className="text-2xl font-semibold mb-3">
            {project.name}
          </h3>

          <p className="text-base text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>
    </StaggerItem>
  );
}
