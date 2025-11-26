import { AnimatedElement } from "@/components/animated-element";
import { Section } from "@/components/section";
import { TitleSection } from "@/components/title-section";
import { skills } from "@/data/skills";
import { GraduationCap } from "lucide-react";

export const Skills = () => {
  return (
    <Section id="skills">
      <TitleSection title="Skills & Competências" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10">
        {skills.map((skill, index) => (
          <AnimatedElement
            key={skill.category}
            direction="left"
            distance={80}
            stagger={0.2 * index}
            className="text-left text-muted-foreground"
          >
            <div className="p-6 rounded-lg border border-border bg-secondary h-full">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:border-primary/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement
        direction="up"
        distance={40}
        delay={0.2}
        className="text-center mt-12"
      >
        <div className="flex justify-center mt-12">
          <a
            href="https://www.linkedin.com/in/lucas-silva-santos-439815a2/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 rounded-lg bg-linear-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 text-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-sm">
                Visualizar Certificados
              </div>
            </div>
          </a>
        </div>
      </AnimatedElement>
    </Section>
  );
};
