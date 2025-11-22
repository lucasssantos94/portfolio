import { projects } from "@/lib/projects";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/badge";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-linear-to-br from-primary to-accent p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
          Desenvolvedor{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
            Fullstack
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
          Transformo ideias em realidade digital. Especializado em criar
          experiências web modernas, performáticas e acessíveis.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center sm:flex-row gap-4 justify-center mb-12">
          <Link href="/projetos">
            <button className="flex items-center gap-1 p-3 rounded-md bg-primary hover:bg-primary/80 cursor-pointer transition-all duration-300">
              Ver Projetos
              <ArrowRight size={20} />
            </button>
          </Link>
          <Link href="/contato">
            <button className="bg-background hover:bg-background/80 py-3 px-6 rounded-md cursor-pointer transition-all duration-300 border border-border ">
              Fale Comigo
            </button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/lucasssantos94"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary text-muted-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-silva-santos-439815a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary text-muted-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:lucas.dev94@outlook.com"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary text-muted-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Projects Preview */}

        <div className="mt-16 pt-12 border-t border-border">
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

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-lg border border-border bg-secondary">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Pronto para trabalhar junto?
            </h2>
            <p className="text-muted-foreground mb-6">
              Vamos criar algo incrível em conjunto.
            </p>
            <Link href="/contato">
              <button className="cursor-pointer border border-border p-2 rounded-md bg-primary">
                Envie uma Mensagem
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
