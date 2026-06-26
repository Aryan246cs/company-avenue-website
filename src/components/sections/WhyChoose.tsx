"use client";
import { motion } from "framer-motion";
import {
  UserCheck, Zap, DollarSign, Headphones, CheckCircle, Monitor,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WHY_CHOOSE } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  UserCheck, Zap, DollarSign, Headphones, CheckCircle, Monitor,
};

export function WhyChoose() {
  return (
    <section className="section-pad bg-background">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Why Us"
          title="The Compliance Partner You Actually Deserve"
          subtitle="We combine professional expertise with a client-first approach to deliver compliance that is accurate, timely, and genuinely stress-free."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = iconMap[item.icon] || CheckCircle;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-100/80"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading font-semibold text-dark text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
