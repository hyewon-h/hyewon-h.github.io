import { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  {
    category: "Core",
    skills: [
      { name: "Semantic HTML5" },
      { name: "Modern CSS3 / SCSS" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React.js / Next.js" },
      { name: "Tailwind CSS" },
      { name: "styled-components" },
    ],
  },
  {
    category: "Tools",
    skills: [{ name: "Figma" }, { name: "Zeplin" }, { name: "Git / GitHub" }],
  },
];
