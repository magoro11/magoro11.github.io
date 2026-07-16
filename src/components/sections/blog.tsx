"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/lib/data/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function Blog() {
  const { t } = useI18n();

  return (
    <section id="blog" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.blog.title} subtitle={t.blog.subtitle} />

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group flex flex-col p-6 rounded-2xl border border-[--border] bg-[--surface] hover:border-[--border-2] transition-colors duration-200 cursor-pointer"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-medium border border-[--border-2] text-[--text-muted]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[--text-primary] mb-2 group-hover:text-[--accent-light] transition-colors leading-snug">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[--text-muted] text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-[--text-muted]">
                <span>{formatDate(post.date)}</span>
                <span className="flex items-center gap-0.5">{post.readTime}</span>
              </div>

              {/* Read more */}
              <div className="mt-4 pt-4 border-t border-[--border] flex items-center justify-between">
                <span className="text-xs text-[--accent-light] font-medium">Read article</span>
                <ArrowUpRight
                  size={14}
                  className="text-[--text-muted] group-hover:text-[--accent-light] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
