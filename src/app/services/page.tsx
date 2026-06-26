import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2, Users, User, Receipt, FileText, IndianRupee,
  ShieldCheck, BookOpen, Wallet, Award, Rocket, Globe, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "All Services",
  description: "Comprehensive business compliance services — company registration, GST, income tax, trademark, payroll, and more.",
};

const iconMap: Record<string, React.ElementType> = {
  Building2, Users, User, Receipt, FileText, IndianRupee,
  ShieldCheck, BookOpen, Wallet, Award, Rocket, Globe,
};

const categories = [...new Set(SERVICES.map((s) => s.category))];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-dark to-primary-900 pt-32 pb-20">
        <div className="container-custom text-center">
          <span className="text-accent text-xs font-heading font-semibold tracking-widest uppercase mb-4 block">
            Services
          </span>
          <h1 className="heading-lg text-white mb-4">
            Complete Compliance. One Partner.
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Everything your business needs to stay registered, compliant, and growing — handled by expert CAs and CSs.
          </p>
        </div>
      </div>

      <section className="section-pad bg-background">
        <div className="container-custom">
          {categories.map((cat) => (
            <div key={cat} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="font-heading font-bold text-dark text-xl">{cat}</h2>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SERVICES.filter((s) => s.category === cat).map((service) => {
                  const Icon = iconMap[service.icon] || Globe;
                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className="group bg-white border border-slate-100 hover:border-primary/20 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-primary/8 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-all duration-300">
                          <Icon size={20} />
                        </div>
                        {service.popular && <Badge variant="accent">Popular</Badge>}
                      </div>
                      <h3 className="font-heading font-semibold text-dark text-sm mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted text-xs leading-relaxed flex-1 mb-4">
                        {service.shortDesc}
                      </p>
                      <div className="flex items-center gap-1 text-primary text-xs font-heading font-semibold">
                        Learn More
                        <ArrowRight size={12} className="transition-transform group-hover:translate-x-1 text-accent" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
