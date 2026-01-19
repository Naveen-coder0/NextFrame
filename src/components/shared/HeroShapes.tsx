import { FloatingShape } from "@/components/ui/motion";

export const HeroShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large primary glow - top right */}
      <FloatingShape
        delay={0}
        duration={10}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px] animate-pulse-glow"
      />
      
      {/* Secondary warm glow - bottom left */}
      <FloatingShape
        delay={2}
        duration={12}
        className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full bg-accent/15 blur-[120px] animate-pulse-glow"
      />
      
      {/* Center accent sphere */}
      <FloatingShape
        delay={1}
        duration={8}
        className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-primary/30 blur-[60px]"
      />
      
      {/* Small floating orb */}
      <FloatingShape
        delay={3}
        duration={6}
        className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-accent/25 blur-[40px]"
      />

      {/* Geometric glowing orbs */}
      <FloatingShape
        delay={0.5}
        duration={7}
        className="absolute top-32 left-1/4 w-4 h-4 rounded-full bg-primary shadow-glow"
      />
      <FloatingShape
        delay={1.5}
        duration={9}
        className="absolute bottom-1/3 right-1/3 w-5 h-5 rounded-full bg-accent shadow-glow-accent"
      />
      <FloatingShape
        delay={2.5}
        duration={6}
        className="absolute top-1/4 right-[15%] w-3 h-3 rounded-full bg-primary shadow-glow"
      />
      
      {/* Additional depth orbs */}
      <FloatingShape
        delay={4}
        duration={11}
        className="absolute top-2/3 left-[10%] w-6 h-6 rounded-full bg-primary/40 blur-sm"
      />
      <FloatingShape
        delay={1}
        duration={8}
        className="absolute top-[15%] right-[30%] w-8 h-8 rounded-full bg-accent/30 blur-md"
      />

      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(220_15%_8%)_70%)]" />
    </div>
  );
};
