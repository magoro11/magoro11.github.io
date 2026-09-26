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
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "Tailwind CSS", level: 85 },
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
      { name: "Django", level: 75 },
      { name: "FastAPI", level: 75 },
      { name: "Flask", level: 72 },
      { name: "GraphQL", level: 78 },
      { name: "RBAC & OAuth", level: 80 },
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
    id: "languages",
    title: "Languages",
    icon: "Wrench",
    skills: [
      { name: "Python", level: 82 },
      { name: "Java", level: 70 },
      { name: "C#", level: 68 },
      { name: "SQL", level: 85 },
      { name: "Go", level: 65 },
      { name: "C++", level: 62 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "Vercel", level: 90 },
      { name: "AWS (EC2, S3)", level: 75 },
      { name: "Docker", level: 75 },
      { name: "GitHub Actions", level: 75 },
      { name: "Firebase", level: 72 },
      { name: "Vercel", level: 85 },
    ],
  },
  {
    id: "data-ai",
    title: "Data & AI",
    icon: "Database",
    skills: [
      { name: "ETL Pipelines", level: 75 },
      { name: "Data Transformation", level: 78 },
      { name: "BI & Reporting", level: 75 },
      { name: "Applied ML", level: 72 },
      { name: "Claude API", level: 78 },
      { name: "Databricks", level: 62 },
      { name: "Azure Data Lake", level: 62 },
    ],
  },
  {
    id: "it-networking",
    title: "IT & Networking",
    icon: "Wrench",
    skills: [
      { name: "Network Troubleshooting", level: 78 },
      { name: "Wi-Fi Infrastructure", level: 78 },
      { name: "CCTV Systems", level: 78 },
      { name: "Security Administration", level: 72 },
    ],
  },
];
