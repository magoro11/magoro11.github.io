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
    id: "enjims",
    title: "Junior Software Engineer",
    organization: "Enjims Solution",
    period: "May 2026 — Present",
    type: "project",
    description: "Working as a backend-focused engineer on production systems, contributing to server-side features and system reliability.",
    highlights: [
      "Building and maintaining backend services and APIs",
      "Collaborating on system design and implementation",
      "Developing practical IT and networking skills alongside backend engineering",
    ],
    technologies: ["Node.js", "REST APIs", "JavaScript", "Networking"],
  },
  {
    id: "zidio",
    title: "Full-Stack Development Intern",
    organization: "Zidio Development",
    period: "May 2026 — Present",
    type: "internship",
    description:
      "Building Project LOOP — a multi-tenant AI customer-feedback intelligence platform that classifies, analyses, and surfaces insights from customer feedback at scale.",
    highlights: [
      "Building Project LOOP, a multi-tenant AI customer-feedback intelligence platform",
      "Designing workspace isolation, role-based access control, and a schema-validated REST API",
      "Developing automated feedback classification, retrieval-grounded Q&A, and report generation with Claude AI",
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
      "Rebuilt a client-facing React front end with authentication, authorization, and three third-party API integrations",
      "Built and shipped MERN-stack features across sprint cycles",
      "Implemented WebSocket-based real-time communication",
      "Developed GraphQL APIs for key front-end data needs",
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
      "Maintained network security and Wi-Fi infrastructure for CCTV and communications systems",
      "Configured and repaired networking equipment for new installs and upgrades",
      "Administered the website and analyzed traffic metrics to guide UX improvements",
    ],
    technologies: ["Networking", "CCTV", "Wi-Fi", "Security", "Analytics"],
  },
];
