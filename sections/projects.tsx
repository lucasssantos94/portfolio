import { Badge } from "@/components/badge";
import { projects } from "@/lib/projects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const Projects = () => {
  return (
    <section id="projects" className="mt-16 pt-12 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Projetos</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Confira alguns projetos destacados
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col p-4 rounded-lg border border-border bg-secondary hover:bg-secondary hover:border-primary transition-all h-full hover:scale-102 "
            >
              {/* Imagem com altura fixa */}
              <div className="w-full h-40 mb-4 shrink-0">
                <Image
                  src={project.image}
                  alt={`projeto ${project.title}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Conteúdo do card com crescimento flexível */}
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

                {/* <button className="flex items-center gap-1 p-3 rounded-md bg-primary hover:bg-primary/80 cursor-pointer transition-all duration-300">

                    </button> */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground flex items-center gap-1 mt-auto hover:text-primary transition-all "
                >
                  ver projeto
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
