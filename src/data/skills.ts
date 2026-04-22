import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGit, SiDocker, SiFigma } from "react-icons/si";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "TailwindCSS", Icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "Docker", Icon: SiDocker },
      { name: "Figma", Icon: SiFigma },
    ],
  },
];
