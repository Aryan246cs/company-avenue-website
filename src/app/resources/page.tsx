import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description: "Expert guides on GST, income tax, company registration, and business compliance for Indian entrepreneurs.",
};

const categories = ["All", "GST", "Company Registration", "Trademark", "Tax", "Business Tips"];

export default function ResourcesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-dark to-primary-900 pt-32 pb-20">
        <div className="container-custom text-center">
          <span className="text-accent text-xs font-heading font-semibold tracking-widest uppercase mb-4 block">
            Knowledge Hub
          </span>
          <h1 className="heading-lg text-white mb-4">Compliance Insights & Guides</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Practical, expert-written articles to help you navigate Indian business compliance.
          </p>
        </div>
      </div>

      <section className="section-pad bg-background">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-xl text-sm font-heading font-medium transition-colors ${
                  cat === "All"
                    ? "bg-primary text-white"
                    : "bg-white border border-slate-200 text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...BLOG_POSTS, ...BLOG_POSTS].map((post, i) => (
              <Link
                key={`${post.id}-${i}`}
                href={`/resources/${post.id}`}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
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
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
