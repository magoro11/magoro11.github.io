export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Authentication", level: 82 },
      { name: "Server Architecture", level: 80 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Supabase", level: 80 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Postman", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 78 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    icon: "Cloud",
    skills: [
      { name: "Vercel", level: 90 },
      { name: "Netlify", level: 85 },
      { name: "Railway", level: 80 },
      { name: "Render", level: 78 },
    ],
  },
];
