import { TitleSection } from "@/components/title-section";

export const About = () => {
  return (
    <section id="about" className="min-h-[calc(100vh-64px)] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center border-t border-border">
        <TitleSection title="Sobre Mim" />
      </div>
    </section>
  );
};
