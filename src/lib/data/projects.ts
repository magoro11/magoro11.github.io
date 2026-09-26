export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  category: "fullstack" | "backend" | "ai" | "data" | "realtime";
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "project-loop",
    title: "Project LOOP",
    description: "Multi-tenant AI customer-feedback intelligence platform for classifying feedback, answering questions, and generating reports.",
    features: [
      "Multi-tenant workspace architecture",
      "Role-based access control",
      "Claude-powered feedback classification",
      "Retrieval-grounded Q&A and report generation",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Claude AI", "REST APIs"],
    category: "ai",
    githubUrl: "https://github.com/magoro11",
    image: "/projects/project-loop.jpg",
    gradient: "from-orange-500 via-rose-500 to-emerald-700",
  },
  {
    id: "learning-hub",
    title: "Collaborative Learning Hub",
    description:
      "Real-time collaborative coding platform enabling developers to work together live through WebSocket-based sessions.",
    features: [
      "Real-time collaboration via WebSockets",
      "Concurrent coding sessions",
      "Streaks, badges, and leaderboards",
      "Modular front-end and back-end architecture",
    ],
    technologies: ["React", "Node.js", "WebSockets", "TypeScript"],
    category: "realtime",
    githubUrl: "https://github.com/magoro11",
    image: "/projects/learning-hub.jpg",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
  },
  {
    id: "agritrack",
    title: "AgriTrack Analytics Platform",
    description: "Agricultural management and reporting platform with farm-operation workflows, data transformation, and decision dashboards.",
    features: [
      "Farm operations tracking",
      "Interactive reporting dashboards",
      "Data transformation pipelines",
      "Responsive experience across devices",
    ],
    technologies: ["React", "Node.js", "Django", "PostgreSQL"],
    category: "data",
    liveUrl: "https://frontend-beige-seven-97.vercel.app/",
    githubUrl: "https://github.com/magoro11/AgriTrack",
    image: "/projects/ecommerce.jpg",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Marketplace Platform",
    description:
      "Multi-vendor marketplace architecture supporting product management, transactions, and vendor administration.",
    features: [
      "Vendor product management",
      "Payment processing integration",
      "Secure authentication and authorization",
      "Normalized relational data model",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    category: "fullstack",
    liveUrl: "https://cloth-ware-qtu8.vercel.app/",
    githubUrl: "https://github.com/magoro11",
    image: "/projects/cloth-wear.jpg",
    gradient: "from-rose-500 via-pink-600 to-purple-700",
  },
  {
    id: "enterprise-analytics",
    title: "Enterprise Analytics Dashboard",
    description: "Business intelligence and KPI monitoring platform backed by data ingestion, transformation, governance, and executive dashboards.",
    features: [
      "Data ingestion and transformation workflows",
      "Executive KPI monitoring dashboards",
      "Data quality and governance practices",
      "Azure and Databricks integration patterns",
    ],
    technologies: ["Python", "SQL", "PostgreSQL", "Power BI", "Azure"],
    category: "data",
    githubUrl: "https://github.com/magoro11",
    image: "/projects/university.jpg",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
  },
  {
    id: "analytics-foundation",
    title: "Data Engineering Foundation",
    description: "A practical foundation in ETL, data transformation, BI reporting, and cloud data platforms for reliable analytical products.",
    features: [
      "ETL pipeline concepts",
      "Data transformation workflows",
      "BI and reporting foundations",
      "Cloud lakehouse fundamentals",
    ],
    technologies: ["Python", "SQL", "Power BI", "Databricks", "Azure Data Lake"],
    category: "data",
    liveUrl: "https://frontend-beige-seven-97.vercel.app/",
    githubUrl: "https://github.com/magoro11",
    image: "/projects/agritrack.jpg",
    gradient: "from-green-500 via-emerald-600 to-teal-700",
  },
  {
    id: "rest-api",
    title: "API & Systems Engineering",
    description: "Backend-focused work across REST and GraphQL APIs, authentication, system design, and reliable service development.",
    features: [
      "Schema-validated REST APIs",
      "GraphQL data layers",
      "RBAC and OAuth foundations",
      "Input validation and error handling",
    ],
    technologies: ["Node.js", "Express.js", "GraphQL", "REST APIs", "Auth"],
    category: "backend",
    githubUrl: "https://github.com/magoro11",
    image: "/projects/rest-api.jpg",
    gradient: "from-amber-500 via-orange-600 to-red-600",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "AI" },
  { id: "data", label: "Data" },
  { id: "realtime", label: "Real-Time" },
];
