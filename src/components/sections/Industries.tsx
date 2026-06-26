"use client";
import { motion } from "framer-motion";
import {
  Monitor, Factory, Heart, ShoppingBag, Globe, Building,
  GraduationCap, Hotel, TrendingUp,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Factory, Heart, ShoppingBag, Globe, Building,
  GraduationCap, Hotel, TrendingUp,
};

export function Industries() {
  return (
    <section className="section-pad bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Industries"
          title="Serving Businesses Across Every Sector"
          subtitle="Deep domain expertise combined with regulatory knowledge to serve the unique compliance needs of different industries."
          className="mb-16"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Monitor;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center text-center p-4 rounded-2xl bg-background hover:bg-primary cursor-default transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center mb-3 shadow-sm transition-colors">
                  <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <p className="font-heading font-semibold text-dark group-hover:text-white text-xs transition-colors leading-snug">
                  {industry.name}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Extended card for larger screens */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-12">
          {INDUSTRIES.slice(0, 3).map((industry, i) => {
            const Icon = iconMap[industry.icon] || Monitor;
            return (
              <motion.div
                key={`card-${industry.name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-dark text-sm mb-1">
                    {industry.name}
                  </p>
                  <p className="text-muted text-xs leading-relaxed">{industry.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
