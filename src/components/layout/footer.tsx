"use client";

import { useI18n } from "@/lib/i18n/context";
import { Mail, Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";

const socialLinks = [
  { Icon: GitHubIcon, href: "https://github.com/brightonmagoro", label: "GitHub" },
  { Icon: LinkedInIcon, href: "https://linkedin.com/in/brightonmagoro", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:brightonmagoro@gmail.com", label: "Email", lucide: true },
];

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
              BM
            </div>
            <span className="text-white/60 text-sm">
              © {year} Brighton Magoro. {t.footer.rights}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-white/40 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-400" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
