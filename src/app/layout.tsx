import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brighton Magoro | Software Engineer & Full-Stack Developer",
  description:
    "Passionate Software Engineer specializing in modern web technologies, scalable applications, and user-centered digital experiences. Available for internships, graduate roles, and full-time opportunities.",
  keywords: [
    "Brighton Magoro",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Nairobi",
    "Kenya",
  ],
  authors: [{ name: "Brighton Magoro", url: "https://github.com/brightonmagoro" }],
  creator: "Brighton Magoro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://magoro11.github.io/",
    siteName: "Brighton Magoro Portfolio",
    title: "Brighton Magoro | Software Engineer",
    description:
      "Passionate Software Engineer specializing in modern web technologies and scalable applications.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Brighton Magoro - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brighton Magoro | Software Engineer",
    description:
      "Passionate Software Engineer specializing in modern web technologies and scalable applications.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://magoro11.github.io"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brighton Magoro",
  jobTitle: "Software Engineer",
  url: "https://magoro11.github.io/",
  email: "brightonmagoro@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "Kenya",
  },
  sameAs: [
    "https://github.com/brightonmagoro",
    "https://linkedin.com/in/brightonmagoro",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Full-Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
