"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { handleScroll } from "@/lib/utils";
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* branding */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Lucas Santos
            </h3>
            <p className="text-sm text-muted-foreground">
              Desenvolvedor Fullstack apaixonado por tecnologia e inovação.
            </p>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Links
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleScroll("about")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("projects")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("certificates")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Certificados
                </button>
              </li>
            </ul>
          </div>

          {/* social links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Redes Sociais
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:seu@email.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© {currentYear} Portfolio. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
