import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Award, Users, TrendingUp, Target, Eye } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stats } from "@/components/sections/Stats";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Company Avenue Advisory — 15+ years of trusted business compliance for Indian startups and SMEs.",
};

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & Managing Director",
    qual: "CA, CS",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "15+ years in corporate law, tax advisory, and company secretarial services.",
  },
  {
    name: "Sunita Agarwal",
    role: "Head of Taxation",
    qual: "CA (ICAI)",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    bio: "Expert in income tax, GST compliance, and transfer pricing for SMEs.",
  },
  {
    name: "Anil Mehta",
    role: "Head of Registrations",
    qual: "CS (ICSI)",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Specializes in MCA filings, ROC compliance, and company secretarial work.",
  },
];

const values = [
  { icon: CheckCircle, title: "Integrity", desc: "Ethical practice is the foundation of everything we do." },
  { icon: TrendingUp, title: "Excellence", desc: "We raise our standards with every client engagement." },
  { icon: Users, title: "Partnership", desc: "Your success is our success. We invest in long-term relationships." },
  { icon: Award, title: "Expertise", desc: "Qualified, experienced, and continually learning professionals." },
  { icon: Target, title: "Accountability", desc: "We own our commitments and deliver on them, every time." },
  { icon: Eye, title: "Transparency", desc: "Clear pricing, honest timelines, and open communication." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-dark to-primary-900 pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <Badge variant="accent" className="mb-5">Our Story</Badge>
            <h1 className="heading-lg text-white mb-5">
              Built on Trust. Driven by Expertise.
            </h1>
            <p className="text-white/55 text-lg leading-relaxed">
              For over 15 years, Company Avenue Advisory has helped thousands of entrepreneurs, 
              startups, and growing businesses navigate the complex world of compliance with 
              confidence and clarity.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="More Than a Filing Service"
                subtitle="We are compliance partners who understand that every business decision has a legal and financial implication. Our role is to protect you from pitfalls while clearing the path for growth."
                align="left"
              />
              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: Target,
                    title: "Our Mission",
                    desc: "To make business compliance accessible, affordable, and stress-free for every Indian entrepreneur.",
                  },
                  {
                    icon: Eye,
                    title: "Our Vision",
                    desc: "A India where every business, regardless of size, operates with full legal and financial compliance.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-dark text-sm mb-1">{item.title}</p>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85"
                  alt="Modern office interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-5 text-white shadow-lg">
                <p className="font-heading font-bold text-3xl">15+</p>
                <p className="text-white/60 text-sm">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="section-pad bg-background">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Values"
            title="The Principles We Work By"
            subtitle="These aren't just words on a wall. They define how we treat every client, every document, and every deadline."
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-dark text-base mb-2">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-white" id="team">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Leadership"
            title="Meet the Experts Behind Your Compliance"
            subtitle="Qualified CAs and Company Secretaries with deep expertise across every compliance domain."
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-background rounded-2xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="font-heading font-bold text-dark text-base">{member.name}</p>
                  <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
                  <Badge variant="default" className="mb-3">{member.qual}</Badge>
                  <p className="text-muted text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
