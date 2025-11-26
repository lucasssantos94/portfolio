"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { handleScroll } from "@/lib/utils";

gsap.registerPlugin(MorphSVGPlugin);

const navItems = [
  { label: "Home", id: "hero" },
  { label: "Sobre", id: "about" },
  { label: "Projetos", id: "projects" },
  { label: "Contato", id: "contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLButtonElement[]>([]);
  const iconRef = useRef<SVGSVGElement>(null);

  const handleScrollMobile = (id: string) => {
    setIsOpen(false);
    handleScroll(id);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      gsap.to("#line1", {
        duration: 0.4,
        morphSVG: "M4 18 L20 4",
        ease: "power3.inOut",
      });

      gsap.to("#line2", {
        duration: 0.4,
        opacity: 0,
        ease: "power2.out",
      });

      gsap.to("#line3", {
        duration: 0.4,
        morphSVG: "M4 4 L20 18",
        ease: "power3.inOut",
      });

      gsap.fromTo(
        menuRef.current,
        { x: 200, opacity: 0, filter: "blur(8px)" },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          filter: "blur(0px)",
          ease: "expo.out",
        },
      );

      gsap.fromTo(
        linksRef.current,
        { x: 40, opacity: 0, y: 10 },
        {
          x: 0,
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: "expo.out",
        },
      );
    } else {
      document.body.style.overflow = "auto";

      gsap.to("#line1", {
        duration: 0.4,
        morphSVG: "M3 6h18",
        ease: "power3.inOut",
      });

      gsap.to("#line2", {
        duration: 0.4,
        opacity: 1,
        ease: "power2.out",
      });

      gsap.to("#line3", {
        duration: 0.4,
        morphSVG: "M3 18h18",
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-60 backdrop-blur-lg border-b border-white/10 bg-background/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleScroll("hero")}
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-sm shadow-primary/20">
              <span className="text-sm font-bold text-primary-foreground font-mono">
                &lt;/&gt;
              </span>
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              Lucas Santos
            </span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                onClick={() => handleScroll(item.id)}
                key={item.id}
                className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-all active:scale-95"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
            aria-owns="mobile-menu"
            aria-labelledby="mobile-menu"
          >
            <svg
              ref={iconRef}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="stroke-current"
            >
              <path
                id="line1"
                d="M3 6h18"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                id="line2"
                d="M3 12h18"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                id="line3"
                d="M3 18h18"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            ref={menuRef}
            className="
              md:hidden absolute top-16 right-0 left-0 h-[calc(100vh-64px)]
              bg-background backdrop-blur-2xl
              border-l border-white/10 border-r border-b
              p-6 z-55 flex flex-col space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)]
            "
          >
            {navItems.map((item, index) => (
              <button
                key={item.id}
                ref={(el) => {
                  if (el) linksRef.current[index] = el;
                }}
                onClick={() => handleScrollMobile(item.id)}
                className="
                  w-full text-left px-4 py-3 rounded-lg text-xl
                  font-medium text-muted-foreground
                  hover:text-foreground hover:bg-secondary/60
                  transition-all backdrop-blur-xl
                "
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
