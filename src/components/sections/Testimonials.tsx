"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 360;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="section-pad bg-background" id="testimonials">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <SectionHeader
            eyebrow="Client Stories"
            title="What Our Clients Say"
            subtitle="Real reviews from businesses we've helped register, file, and grow."
            align="left"
            className="mb-0"
          />
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex-shrink-0 w-80 md:w-96 snap-start"
            >
              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 h-full flex flex-col">
                <Quote size={20} className="text-accent/40 mb-4" />

                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-white text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-dark text-sm">{t.name}</p>
                    <p className="text-muted text-xs">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 bg-white rounded-2xl p-6 shadow-card border border-slate-100"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#4285F4]/10 flex items-center justify-center">
              <span className="font-heading font-bold text-[#4285F4] text-xl">G</span>
            </div>
            <div>
              <p className="font-heading font-bold text-dark text-lg">4.9 / 5.0</p>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-muted text-xs ml-1">200+ Google Reviews</span>
              </div>
            </div>
          </div>
          <p className="text-muted text-sm text-center sm:text-right max-w-xs">
            Verified reviews from real clients on Google Business Profile
          </p>
          <a
            href="#"
            className="text-primary text-sm font-heading font-semibold hover:underline shrink-0"
          >
            Read All Reviews →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
