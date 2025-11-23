import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface IScrollAnimationProps {
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  distance?: number;
  skew?: number;
  scrub?: boolean;
  stagger?: number;
}

export const useScrollAnimation = ({
  direction = "up",
  delay = 0,
  distance = 80,
  skew = 0,
  scrub = false,
  stagger = 0,
}: IScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const offset = {
      left: { x: -distance, y: 0 },
      right: { x: distance, y: 0 },
      up: { x: 0, y: -distance },
      down: { x: 0, y: distance },
    }[direction];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.children.length ? el.children : el,
        {
          opacity: 0,
          x: offset.x,
          y: offset.y,
          skewY: skew,
          scale: 0.98,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          skewY: 0,
          scale: 1,
          ease: "power3.out",
          duration: 1.2,
          delay,
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 40%",
            toggleActions: "play none none reverse",
            scrub,
            anticipatePin: 0.5,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [direction, delay, distance, skew, scrub, stagger]);

  return elementRef;
};
