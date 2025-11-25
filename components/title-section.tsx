import { AnimatedElement } from "./animated-element";

interface ITitleSectionProps {
  title: string;
}

export const TitleSection = ({ title }: ITitleSectionProps) => {
  return (
    <AnimatedElement direction="up" distance={60} delay={0.1} skew={2}>
      <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance text-center">
        {title}
      </h2>
    </AnimatedElement>
  );
};
