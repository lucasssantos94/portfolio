import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface IAnimatedElementProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  distance?: number;
  skew?: number;
  scrub?: boolean;
  stagger?: number;
  className?: string;
}

export const AnimatedElement = ({
  children,
  direction = "up",
  delay = 0.3,
  distance = 80,
  skew = 0,
  scrub = false,
  stagger = 0,
  className,
}: IAnimatedElementProps) => {
  const ref = useScrollAnimation({
    direction,
    delay,
    distance,
    skew,
    scrub,
    stagger,
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
