export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: "project" | "freelance" | "leadership" | "opensource" | "internship" | "networking";
  description: string;
  highlights: string[];
  technologies?: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "zidio",
    title: "Full-Stack Development Intern",
    organization: "Zidio Development",
    period: "May 2026 — Present",
    type: "internship",
    description:
      "Building Project LOOP — a multi-tenant AI customer-feedback intelligence platform that classifies, analyses, and surfaces insights from customer feedback at scale.",
    highlights: [
      "Architecting multi-tenant workspace isolation and role-based access control",
      "Implementing a validated REST API layer with Next.js and TypeScript",
      "Developing AI-powered features: automated classification, retrieval-grounded Q&A, and report generation via Claude AI",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Claude AI", "REST APIs"],
  },
  {
    id: "codveda",
    title: "Full-Stack Development Intern",
    organization: "Codveda",
    period: "Jan 2026 — Apr 2026",
    type: "internship",
    description:
      "Rebuilt client-facing front ends and developed full-stack features across MERN-stack applications, shipping real-time communication and GraphQL API layers.",
    highlights: [
      "Rebuilt a client front end with a modern JS framework including auth and third-party API integration",
      "Built full-stack applications on the MERN stack (MongoDB, Express, React, Node.js)",
      "Implemented WebSocket-based real-time communication features",
      "Developed GraphQL APIs to support front-end data requirements",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "WebSockets", "GraphQL"],
  },
  {
    id: "node-mall",
    title: "CCTV Security & Networking Technician",
    organization: "Node Mall",
    period: "Dec 2025 — Apr 2026",
    type: "networking",
    description:
      "Maintained and secured physical and digital infrastructure for a busy commercial environment, covering network operations, CCTV systems, and web presence.",
    highlights: [
      "Monitored network security, Wi-Fi connectivity, and CCTV/communications infrastructure",
      "Configured and troubleshot Wi-Fi networking equipment and security settings; handled installations",
      "Maintained the organisation's website and tracked analytics to inform improvements",
    ],
    technologies: ["Networking", "CCTV", "Wi-Fi", "Security", "Analytics"],
  },
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
