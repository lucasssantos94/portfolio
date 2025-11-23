import { ISkill } from "@/lib/types";

export const skills = <ISkill[]>[
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "DevOps & Tools",
    items: ["Vercel", "Docker", "Git", "CI/CD", "AWS"],
  },
  {
    category: "Design",
    items: ["UI/UX", "Figma", "Web Design", "Accessibility", "Performance"],
  },
];
