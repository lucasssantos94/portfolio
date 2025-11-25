import { AnimatedElement } from "@/components/animated-element";
import { TitleSection } from "@/components/title-section";
import { skills } from "@/data/skills";

export const Skills = () => {
  return (
    <section id="skills">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center border-t border-border">
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
      </div>
    </section>
  );
};
