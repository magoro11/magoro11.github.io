"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, Users, GitCommit, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/social-icons";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";

interface GitHubData {
  publicRepos: number;
  followers: number;
  following: number;
  login: string;
  bio: string | null;
}

interface LangData {
  name: string;
  percentage: number;
  color: string;
}

const LANG_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python:     "#3572A5",
  HTML:       "#e34c26",
  CSS:        "#563d7c",
  Java:       "#b07219",
};

const FALLBACK_LANGS: LangData[] = [
  { name: "TypeScript",  percentage: 38, color: "#3178c6" },
  { name: "JavaScript",  percentage: 28, color: "#f1e05a" },
  { name: "Python",      percentage: 18, color: "#3572A5" },
  { name: "HTML",        percentage: 10, color: "#e34c26" },
  { name: "CSS",         percentage: 6,  color: "#563d7c" },
];

export function GitHubStats() {
  const { t } = useI18n();
  const [data, setData] = useState<GitHubData | null>(null);
  const [langs, setLangs] = useState<LangData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://api.github.com/users/brightonmagoro");
        if (!res.ok) throw new Error();
        const u = await res.json();
        setData({ publicRepos: u.public_repos, followers: u.followers, following: u.following, login: u.login, bio: u.bio });

        const rRes = await fetch("https://api.github.com/users/brightonmagoro/repos?sort=updated&per_page=10");
        if (rRes.ok) {
          const repos = await rRes.json();
          const counts: Record<string, number> = {};
          let total = 0;
          for (const r of repos.slice(0, 6)) {
            if (r.language) { counts[r.language] = (counts[r.language] || 0) + 1; total++; }
          }
          const result = Object.entries(counts)
            .map(([name, c]) => ({ name, percentage: Math.round((c / total) * 100), color: LANG_COLORS[name] ?? "#7c6af7" }))
            .sort((a, b) => b.percentage - a.percentage);
          setLangs(result.length ? result : FALLBACK_LANGS);
        }
      } catch {
        setData({ publicRepos: 25, followers: 10, following: 15, login: "brightonmagoro", bio: "Software Engineer" });
        setLangs(FALLBACK_LANGS);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const statCards = data
    ? [
        { icon: FolderGit2, value: data.publicRepos, label: "Repositories" },
        { icon: Users,      value: data.followers,   label: "Followers" },
        { icon: GitCommit,  value: data.following,   label: "Following" },
      ]
    : [];

  return (
    <section id="github" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.github.title} subtitle={t.github.subtitle} />

        <div className="grid lg:grid-cols-2 gap-6">

          {/* ── Profile card ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl border border-[--border] bg-[--surface]"
          >
            <div className="flex items-center gap-4 mb-7">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center border border-[--border-2]"
                style={{ background: "var(--accent-glow)" }}
              >
                <GitHubIcon size={22} className="text-[--accent-light]" />
              </div>
              <div>
                <p className="font-semibold text-[--text-primary]">@{data?.login ?? "brightonmagoro"}</p>
                <p className="text-[--text-muted] text-sm">{data?.bio ?? "Software Engineer"}</p>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((k) => (
                  <div key={k} className="h-16 rounded-xl bg-[--surface-2] animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {statCards.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-3 rounded-xl border border-[--border] bg-[--surface-2] text-center"
                  >
                    <s.icon size={16} className="text-[--accent-light] mx-auto mb-1.5" />
                    <p className="text-xl font-bold text-[--text-primary] leading-none">
                      <AnimatedCounter value={s.value} />
                    </p>
                    <p className="text-[10px] text-[--text-muted] mt-1">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            )}

            <a
              href="https://github.com/brightonmagoro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[--accent-light] hover:underline mt-5"
            >
              <ExternalLink size={12} />
              View profile
            </a>
          </motion.div>

          {/* ── Language breakdown ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-7 rounded-2xl border border-[--border] bg-[--surface]"
          >
            <h3 className="font-semibold text-[--text-primary] mb-6 text-sm uppercase tracking-wide">
              Language Breakdown
            </h3>

            <div className="space-y-4">
              {(loading ? FALLBACK_LANGS : langs).map((lang, i) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-[--text-secondary] font-medium">{lang.name}</span>
                    <span className="text-[--text-muted]">{lang.percentage}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[--surface-2] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.7, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
