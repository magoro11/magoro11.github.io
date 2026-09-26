"use client";

import { useI18n } from "@/lib/i18n/context";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[--border] mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
              style={{ background: "linear-gradient(135deg, var(--accent), #d96b4d)" }}
              aria-hidden="true"
            >
              BM
            </div>
            <span className="text-[--text-muted] text-sm">
              © {year} Brighton Magoro. {t.footer.rights}
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {[
              { Icon: GitHubIcon,  href: "https://github.com/magoro11",        label: "GitHub" },
              { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/brighton-magoro-b3aa45364/", label: "LinkedIn" },
              { Icon: Mail,        href: "mailto:brightonmagoro@gmail.com",          label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg border border-[--border] flex items-center justify-center text-[--text-muted] hover:text-[--accent-light] hover:border-[--accent] transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Built-with note */}
          <p className="text-[--text-muted] text-xs">
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
