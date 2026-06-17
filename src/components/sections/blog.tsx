"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data/blog";

export function Blog() {
  const { t } = useI18n();

  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.blog.title} subtitle={t.blog.subtitle} />

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4 text-white/40 text-xs mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              <span className="inline-flex items-center gap-1 text-cyan-400 text-sm group-hover:gap-2 transition-all">
                Read More
                <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
