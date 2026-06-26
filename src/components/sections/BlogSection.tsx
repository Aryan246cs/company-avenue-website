"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/constants";

export function BlogSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <SectionHeader
            eyebrow="Resources"
            title="Insights & Expert Guides"
            subtitle="Practical knowledge on compliance, tax, and business registration for Indian entrepreneurs."
            align="left"
            className="mb-0"
          />
          <Button href="/resources" variant="outline" size="sm">
            View All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Link
                href={`/resources/${post.id}`}
                className="group block bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="default" className="bg-white/90 text-primary backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-muted text-xs mb-3">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-dark text-sm leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-primary text-xs font-heading font-semibold">
                    Read Article
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
