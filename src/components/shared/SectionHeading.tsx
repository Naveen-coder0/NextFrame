import { AnimatedSection } from "@/components/ui/motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeading = ({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) => {
  return (
    <AnimatedSection
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16`}
    >
      {badge && (
        <span className="inline-block px-5 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
};
