"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2, Users, User, Receipt, FileText, IndianRupee,
  ShieldCheck, BookOpen, Wallet, Award, Rocket, Globe, ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Building2, Users, User, Receipt, FileText, IndianRupee,
  ShieldCheck, BookOpen, Wallet, Award, Rocket, Globe,
};

const categoryColors: Record<string, string> = {
  "Company Formation": "bg-blue-50 text-blue-700",
  "Tax & GST": "bg-green-50 text-green-700",
  "Compliance": "bg-purple-50 text-purple-700",
  "Accounting & HR": "bg-orange-50 text-orange-700",
  "Startup & MSME": "bg-rose-50 text-rose-700",
};

export function Services() {
  return (
    <section className="section-pad bg-white" id="services">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything Your Business Needs to Stay Compliant"
          subtitle="Comprehensive compliance and advisory services tailored for Indian startups, MSMEs, and growing companies — all under one roof."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const catColor = categoryColors[service.category] || "bg-slate-50 text-slate-600";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="group block bg-white border border-slate-100 hover:border-primary/20 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full relative overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="accent">Popular</Badge>
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/8 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </div>

                    <span className={`inline-flex text-xs font-heading font-semibold px-2.5 py-1 rounded-full mb-3 ${catColor}`}>
                      {service.category}
                    </span>

                    <h3 className="font-heading font-semibold text-dark text-base mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>

                    <div className="flex items-center gap-1 text-primary text-sm font-heading font-semibold">
                      Learn More
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1 text-accent"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button href="/services" variant="outline" size="lg">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
