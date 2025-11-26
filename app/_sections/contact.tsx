"use client";

import { TitleSection } from "@/components/title-section";
import { Github, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { AnimatedElement } from "@/components/animated-element";
import { Section } from "@/components/section";
import { Toaster } from "sonner";

export const Contact = () => {
  return (
    <Section id="contact">
      <TitleSection title="Vamos Conversar" />

      <AnimatedElement direction="up" distance={40} delay={0.2}>
        <p className="text-xl text-muted-foreground max-w-2xl text-balance mx-auto text-center">
          Tenho interesse em ouvir sobre novos projetos, oportunidades e ideias
          inovadoras.
        </p>
      </AnimatedElement>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1 space-y-6">
          <AnimatedElement direction="left" distance={20} skew={5} delay={0.1}>
            <div className="p-6 rounded-lg border border-border bg-secondary group hover:scale-[1.02] transition-all duration-500">
              <div className="flex gap-2 mb-4 md:flex-col md:items-center lg:items-start lg:flex-row">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <Mail
                    className="text-primary group-hover:scale-110 transition-transform"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground md:text-center lg:text-left">
                    Email
                  </h3>
                  <a
                    href="mailto:lucas.dev94@email.com"
                    className="text-primary text-sm hover:underline"
                  >
                    lucas.dev94@outlook.com
                  </a>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="left" distance={20} skew={5} delay={0.3}>
            <div className="p-6 rounded-lg border border-border bg-secondary group hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-2 mb-4 md:flex-col md:items-center lg:items-start lg:flex-row">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <Linkedin
                    className="text-primary group-hover:scale-110 transition-transform"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground md:text-center lg:text-left">
                    LinkedIn
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/lucas-silva-santos-439815a2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline "
                  >
                    Visite meu perfil
                  </a>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="left" distance={20} skew={5} delay={0.5}>
            <div className="p-6 rounded-lg border border-border bg-secondary group hover:scale-[1.02] transition-all duration-500">
              <div className="flex gap-2 mb-4 md:flex-col md:items-center lg:items-start lg:flex-row">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <Github
                    className="text-primary group-hover:scale-110 transition-transform"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground md:text-center lg:text-left">
                    GitHub
                  </h3>
                  <a
                    href="https://github.com/lucasssantos94"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    Veja meus projetos
                  </a>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement
          direction="up"
          distance={60}
          delay={0.5}
          className="md:col-span-2"
        >
          <div className="p-6 rounded-lg border border-border bg-secondary">
            <ContactForm />
          </div>
        </AnimatedElement>

        <Toaster position="bottom-center" richColors />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border">
        <AnimatedElement direction="up" distance={40} delay={0.4}>
          <div className="p-6 rounded-lg border border-border bg-secondary text-center mt-12">
            <p className="text-muted-foreground">
              Costumo responder mensagens em até{" "}
              <span className="text-primary font-semibold">24 horas</span>
            </p>
          </div>
        </AnimatedElement>
      </div>
    </Section>
  );
};
