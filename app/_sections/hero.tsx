import {
  ArrowRight,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { AnimatedElement } from "@/components/animated-element";
import { handleScroll } from "@/lib/utils";
import { Section } from "@/components/section";

export const Hero = () => {
  return (
    <Section id="hero" className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <AnimatedElement
        direction="up"
        distance={100}
        skew={3}
        stagger={0.15}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center"
      >
        <div className="mb-8 flex justify-center">
          {/* Avatar */}
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
          <button
            className="flex items-center gap-1 p-3 rounded-md bg-primary hover:bg-primary/80 cursor-pointer transition-all duration-300"
            onClick={() => handleScroll("projects")}
          >
            Ver Projetos
            <ArrowRight size={20} />
          </button>

          <button
            className="bg-background hover:bg-background/80 py-3 px-6 rounded-md cursor-pointer transition-all duration-300 border border-border "
            onClick={() => handleScroll("contact")}
          >
            Fale Comigo
          </button>
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

        {/* curriculum link */}
        <div className="flex justify-center mt-12">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 rounded-lg bg-linear-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 text-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
              <FileText size={20} className="text-primary" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-sm">Visualizar Currículo</div>
              <div className="text-xs text-muted-foreground group-hover:text-primary/80">
                PDF - Abre em nova guia
              </div>
            </div>
            <Download
              size={16}
              className="ml-2 text-primary group-hover:animate-bounce"
            />
          </a>
        </div>
      </AnimatedElement>
    </Section>
  );
};
