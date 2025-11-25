import { AnimatedElement } from "@/components/animated-element";
import { Badge } from "@/components/badge";
import { Section } from "@/components/section";
import { TitleSection } from "@/components/title-section";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const Projects = () => {
  return (
    <Section id="projects">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center border-t border-border">
        <TitleSection title="Projetos" />

        <AnimatedElement
          direction="up"
          delay={0.18}
          distance={25}
          skew={1}
          className="text-center mb-10"
        >
          <p className="text-sm text-muted-foreground">
            Confira alguns projetos destacados
          </p>
        </AnimatedElement>

        <AnimatedElement
          direction="left"
          delay={0.25}
          distance={80}
          skew={3}
          stagger={0.15}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="
          group flex flex-col p-4 rounded-lg border border-border
          bg-secondary transition-all duration-500
          hover:border-primary hover:bg-secondary/60
          hover:scale-[1.03] hover:shadow-xl
          hover:shadow-primary/10
        "
              >
                <div className="w-full h-40 mb-4 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={`projeto ${project.title}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col grow text-left">
                  <h3 className="font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 grow">
                    {project.description}
                  </p>

                  <div className="space-x-1 mb-4">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
              text-sm text-muted-foreground flex items-center gap-1 mt-auto
              hover:text-primary transition-colors
            "
                  >
                    ver projeto
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </Section>
  );
};
