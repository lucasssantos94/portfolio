import { ISkill } from "@/lib/types";

export const skills = <ISkill[]>[
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "CI/CD", "AWS"],
  },
  {
    category: "Design",
    items: ["UI/UX", "Figma", "Accessibility", "Performance"],
  },
];
