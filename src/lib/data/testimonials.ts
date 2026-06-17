export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "TechStart Inc.",
    content:
      "Brighton delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and ability to translate requirements into elegant solutions is remarkable.",
    avatar: "SJ",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Lead Developer",
    company: "DevCollab",
    content:
      "Working with Brighton on our collaborative learning platform was a great experience. He's a skilled full-stack developer who writes clean, maintainable code and communicates effectively.",
    avatar: "MC",
  },
  {
    id: "3",
    name: "Amina Ochieng",
    role: "Startup Founder",
    company: "AgriTech Solutions",
    content:
      "Brighton built our AgriTrack system from scratch with impressive speed and quality. He understood our domain needs and delivered a solution that our farmers actually love using.",
    avatar: "AO",
  },
  {
    id: "4",
    name: "David Kimani",
    role: "Senior Engineer",
    company: "CodeWorks",
    content:
      "Brighton's problem-solving skills and dedication to continuous learning make him stand out. He's always eager to take on challenging projects and delivers results on time.",
    avatar: "DK",
  },
];
