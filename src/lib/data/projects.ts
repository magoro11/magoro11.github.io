export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  category: "fullstack" | "frontend" | "backend" | "collaboration";
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "learning-hub",
    title: "Collaborative Learning Hub",
    description:
      "Real-time peer coding and collaborative learning platform with AI-powered tools and gamification for developer education.",
    features: [
      "Real-time collaboration via WebSockets",
      "AI-powered learning tools",
      "Gamification system with achievements",
      "Cloud storage integration",
    ],
    technologies: ["React", "Node.js", "Firebase", "WebSockets", "TypeScript"],
    category: "collaboration",
    githubUrl: "https://github.com/brightonmagoro",
    image: "/projects/learning-hub.jpg",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    description:
      "Scalable marketplace platform with product management, shopping cart, and integrated payment processing systems.",
    features: [
      "Product management dashboard",
      "Shopping cart & checkout",
      "Payment integration",
      "Admin analytics panel",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "REST APIs"],
    category: "fullstack",
    githubUrl: "https://github.com/brightonmagoro",
    image: "/projects/ecommerce.jpg",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
  },
  {
    id: "cloth-wear",
    title: "Cloth Wear E-commerce",
    description:
      "Responsive modern e-commerce platform for clothing with dynamic product display, category filtering, and mobile-first design.",
    features: [
      "Dynamic product catalog",
      "Category filtering",
      "Performance optimized",
      "Mobile-first responsive design",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase", "Vercel"],
    category: "fullstack",
    liveUrl: "https://cloth-ware-qtu8.vercel.app/",
    githubUrl: "https://github.com/brightonmagoro",
    image: "/projects/cloth-wear.jpg",
    gradient: "from-rose-500 via-pink-600 to-purple-700",
  },
  {
    id: "university",
    title: "University Management System",
    description:
      "Comprehensive university management platform with student portal, course management, and secure authentication.",
    features: [
      "Student portal & profiles",
      "Course management system",
      "Role-based authentication",
      "Grade tracking & reports",
    ],
    technologies: ["React", "Node.js", "MySQL", "Express.js", "JWT"],
    category: "fullstack",
    githubUrl: "https://github.com/brightonmagoro",
    image: "/projects/university.jpg",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
  },
  {
    id: "agritrack",
    title: "AgriTrack System",
    description:
      "Agriculture-focused tracking system for monitoring farm activities with reporting dashboards for small-scale farmers.",
    features: [
      "Farm activity tracking",
      "Reporting dashboards",
      "Data visualization",
      "Mobile-responsive interface",
    ],
    technologies: ["React", "Node.js", "Django", "PostgreSQL", "Vercel"],
    category: "fullstack",
    liveUrl: "https://frontend-beige-seven-97.vercel.app/",
    githubUrl: "https://github.com/brightonmagoro",
    image: "/projects/agritrack.jpg",
    gradient: "from-green-500 via-emerald-600 to-teal-700",
  },
  {
    id: "rest-api",
    title: "REST API Project",
    description:
      "Production-ready REST API with CRUD operations, JWT authentication, comprehensive documentation, and rate limiting.",
    features: [
      "Full CRUD operations",
      "JWT authentication",
      "API documentation",
      "Input validation & error handling",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "Postman", "Swagger"],
    category: "backend",
    githubUrl: "https://github.com/brightonmagoro",
    image: "/projects/rest-api.jpg",
    gradient: "from-amber-500 via-orange-600 to-red-600",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "collaboration", label: "Collaboration" },
];
