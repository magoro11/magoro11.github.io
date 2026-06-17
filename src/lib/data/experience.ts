export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: "project" | "freelance" | "leadership" | "opensource" | "internship";
  description: string;
  highlights: string[];
  technologies?: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "freelance",
    title: "Freelance Full-Stack Developer",
    organization: "Self-Employed",
    period: "2023 — Present",
    type: "freelance",
    description:
      "Delivering custom web applications and e-commerce solutions for clients across various industries.",
    highlights: [
      "Built 10+ client projects from concept to deployment",
      "Managed full project lifecycle including design and deployment",
      "Maintained 100% client satisfaction rate",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: "projects",
    title: "Software Development Projects",
    organization: "Personal & Academic",
    period: "2022 — Present",
    type: "project",
    description:
      "Developed diverse full-stack applications including e-commerce platforms, learning systems, and management tools.",
    highlights: [
      "25+ completed projects across web and mobile",
      "Focus on scalable architecture and clean code",
      "Deployed applications on Vercel, Railway, and Render",
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    id: "opensource",
    title: "Open Source Contributor",
    organization: "GitHub Community",
    period: "2023 — Present",
    type: "opensource",
    description:
      "Contributing to open-source projects and sharing knowledge with the developer community.",
    highlights: [
      "Active GitHub contributor with consistent commits",
      "Collaborated on community-driven projects",
      "Shared technical knowledge through documentation",
    ],
    technologies: ["Git", "GitHub", "JavaScript", "TypeScript"],
  },
  {
    id: "leadership",
    title: "Technical Leadership",
    organization: "Development Teams",
    period: "2023 — Present",
    type: "leadership",
    description:
      "Led small development teams on collaborative projects, coordinating architecture decisions and code reviews.",
    highlights: [
      "Led team of 3-5 developers on group projects",
      "Established coding standards and review processes",
      "Mentored junior developers on best practices",
    ],
    technologies: ["React", "Node.js", "Git", "Agile"],
  },
  {
    id: "internship",
    title: "Software Engineering Intern",
    organization: "Tech Industry",
    period: "2024",
    type: "internship",
    description:
      "Gained hands-on experience in professional software development environments and industry workflows.",
    highlights: [
      "Worked on production-level codebases",
      "Participated in agile development sprints",
      "Collaborated with cross-functional teams",
    ],
    technologies: ["React", "TypeScript", "REST APIs", "Git"],
  },
];
