import { Github, Linkedin, Mail, LucideIcon } from "lucide-react";
import { AnimatedElement } from "./animated-element";

interface ContactItem {
  label: string;
  icon: LucideIcon;
  href: string;
  text: string;
}

const contacts: ContactItem[] = [
  {
    label: "Email",
    icon: Mail,
    href: "mailto:lucas.dev94@email.com",
    text: "lucas.dev94@outlook.com",
  },
  {
    label: "Linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lucas-silva-santos-439815a2/",
    text: "Visite meu Perfil",
  },
  {
    label: "Github",
    icon: Github,
    href: "https://github.com/lucasssantos94",
    text: "Veja meus projetos",
  },
];

export const ContactCard = () => {
  return (
    <>
      {contacts.map((contact, index) => (
        <AnimatedElement key={index} direction="up" distance={10}>
          <div className="p-6 rounded-lg border border-border bg-secondary group hover:scale-[1.02] transition-all duration-500">
            <div className="flex gap-2 mb-4 md:flex-col md:items-center lg:items-start lg:flex-row">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                <contact.icon
                  className="text-primary group-hover:scale-110 transition-transform"
                  size={24}
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground md:text-center lg:text-left">
                  {contact.label}
                </h3>
                <a
                  href={contact.href}
                  className="text-primary text-sm hover:underline"
                >
                  {contact.text}
                </a>
              </div>
            </div>
          </div>
        </AnimatedElement>
      ))}
    </>
  );
};
