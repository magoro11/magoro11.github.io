export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    excerpt:
      "Best practices for structuring large React applications with performance and maintainability in mind.",
    date: "2025-03-15",
    readTime: "8 min read",
    tags: ["React", "Architecture"],
    slug: "building-scalable-react-applications",
  },
  {
    id: "2",
    title: "Mastering TypeScript for Full-Stack Development",
    excerpt:
      "A comprehensive guide to leveraging TypeScript across your entire stack for type-safe applications.",
    date: "2025-02-20",
    readTime: "12 min read",
    tags: ["TypeScript", "Backend"],
    slug: "mastering-typescript-fullstack",
  },
  {
    id: "3",
    title: "Deploying Next.js Apps to Production",
    excerpt:
      "Step-by-step guide to deploying Next.js applications with optimal performance and SEO configuration.",
    date: "2025-01-10",
    readTime: "6 min read",
    tags: ["Next.js", "DevOps"],
    slug: "deploying-nextjs-production",
  },
];
