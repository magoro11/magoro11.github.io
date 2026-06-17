"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, FolderGit2, Star } from "lucide-react";
import { GitHubIcon } from "@/components/ui/social-icons";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";

interface GitHubData {
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  login: string;
  bio: string | null;
}

interface LanguageData {
  name: string;
  percentage: number;
  color: string;
}

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  React: "#61dafb",
  default: "#06b6d4",
};

export function GitHubStats() {
  const { t } = useI18n();
  const [data, setData] = useState<GitHubData | null>(null);
  const [languages, setLanguages] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const res = await fetch("https://api.github.com/users/brightonmagoro");
        if (res.ok) {
          const user = await res.json();
          setData({
            publicRepos: user.public_repos,
            followers: user.followers,
            following: user.following,
            avatarUrl: user.avatar_url,
            login: user.login,
            bio: user.bio,
          });

          const reposRes = await fetch(
            "https://api.github.com/users/brightonmagoro/repos?sort=updated&per_page=10"
          );
          if (reposRes.ok) {
            const repos = await reposRes.json();
            const langCounts: Record<string, number> = {};
            let total = 0;

            for (const repo of repos.slice(0, 6)) {
              if (repo.language) {
                langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
                total++;
              }
            }

            const langData = Object.entries(langCounts)
              .map(([name, count]) => ({
                name,
                percentage: Math.round((count / total) * 100),
                color: languageColors[name] || languageColors.default,
              }))
              .sort((a, b) => b.percentage - a.percentage);

            setLanguages(langData);
          }
        }
      } catch {
        setData({
          publicRepos: 25,
          followers: 10,
          following: 15,
          avatarUrl: "",
          login: "brightonmagoro",
          bio: "Software Engineer",
        });
        setLanguages([
          { name: "JavaScript", percentage: 35, color: "#f1e05a" },
          { name: "TypeScript", percentage: 30, color: "#3178c6" },
          { name: "Python", percentage: 15, color: "#3572A5" },
          { name: "HTML", percentage: 12, color: "#e34c26" },
          { name: "CSS", percentage: 8, color: "#563d7c" },
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHub();
  }, []);

  const stats = data
    ? [
        { icon: FolderGit2, value: data.publicRepos, label: "Repositories" },
        { icon: Star, value: data.followers, label: "Followers" },
        { icon: GitCommit, value: data.following, label: "Following" },
      ]
    : [];

  return (
    <section id="github" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.github.title} subtitle={t.github.subtitle} />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <GitHubIcon size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">@{data?.login || "brightonmagoro"}</h3>
                <p className="text-white/50 text-sm">{data?.bio || "Software Engineer"}</p>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-20 rounded-xl bg-white/5 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors"
                  >
                    <stat.icon size={20} className="text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <p className="text-white/50 text-xs mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            )}

            <a
              href="https://github.com/brightonmagoro"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
            >
              <GitHubIcon size={16} />
              View GitHub Profile
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Language Breakdown</h3>
            <div className="space-y-4">
              {languages.map((lang, i) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{lang.name}</span>
                    <span className="text-white/50">{lang.percentage}%</span>
                  </div>
                  <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/50 text-sm text-center">
                Contribution graph available on{" "}
                <a
                  href="https://github.com/brightonmagoro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  GitHub Profile
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
