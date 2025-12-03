"use client";

import { TitleSection } from "@/components/title-section";
import { ContactForm } from "@/components/contact-form";
import { AnimatedElement } from "@/components/animated-element";
import { Section } from "@/components/section";
import { Toaster } from "sonner";
import { ContactCard } from "@/components/contact-card";

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
          <ContactCard />
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
    </Section>
  );
};
