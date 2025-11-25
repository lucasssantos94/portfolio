import { TitleSection } from "@/components/title-section";
import Image from "next/image";
import { AnimatedElement } from "@/components/animated-element";

export const About = () => {
  return (
    <section id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center border-t border-border">
        {/* Título */}

        <TitleSection title="Sobre Mim" />

        {/* Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-10 items-start">
          {/* Texto */}
          <AnimatedElement
            direction="left"
            distance={80}
            stagger={0.2}
            className="text-left text-muted-foreground flex flex-col gap-6 leading-relaxed"
          >
            <p>
              Minha jornada na programação começou há pouco mais de um ano,
              impulsionado pela curiosidade de entender como as coisas são
              construídas na web. Aquele primeiro &quot;Hello World&quot; foi a
              porta de entrada para um universo que nunca para de evoluir, e eu
              me encontro nele.
            </p>

            <p>
              Como desenvolvedor fullstack, tenho me dedicado a dominar tanto o
              front-end quanto o back-end, transformando ideias em soluções
              digitais tangíveis e funcionais. Meu foco está em escrever código
              não apenas que funcione, mas que seja limpo, eficiente e acessível
              — porque acredito que a verdadeira qualidade técnica está na
              simplicidade e na capacidade de impactar positivamente a
              experiência do usuário.
            </p>
          </AnimatedElement>

          {/* Imagem */}
          <AnimatedElement
            direction="right"
            distance={40}
            delay={0.15}
            className="flex justify-center md:justify-end items-end"
          >
            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full shadow-xl border border-border hover:scale-105 transition-transform duration-500"
            />
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};
