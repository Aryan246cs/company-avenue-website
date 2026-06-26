"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const floatCards = [
  { value: "15+", label: "Years Experience", delay: 0.6 },
  { value: "1000+", label: "Businesses Served", delay: 0.8 },
  { value: "98%", label: "Client Satisfaction", delay: 1.0 },
];

const trustPoints = [
  "Trusted by 1000+ startups & enterprises",
  "100% online — no office visits needed",
  "CA & CS certified experts",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark via-primary-900 to-primary-800">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Subtle glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-[100px] opacity-30" />

      <div className="container-custom relative z-10 pt-28 pb-20 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6"
            >
              <Star size={12} className="text-accent fill-accent" />
              <span className="text-white/80 text-xs font-heading font-medium tracking-wide">
                India&apos;s Most Trusted Compliance Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl text-white mb-6"
            >
              Business Compliance,{" "}
              <span className="text-accent relative">
                Done Right
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/50 origin-left"
                />
              </span>
              <br />
              from Day One
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/65 text-lg leading-relaxed mb-8 max-w-lg"
            >
              From company registration to annual compliance — we handle the paperwork 
              so you can focus on building your business. Trusted by 1000+ companies across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button
                href="/contact"
                variant="accent"
                size="lg"
                icon={<ArrowRight size={16} />}
              >
                Book Free Consultation
              </Button>
              <Button
                href="/services"
                size="lg"
                className="border border-white/25 text-white bg-transparent hover:bg-white/10"
              >
                Explore Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-2.5"
            >
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <CheckCircle size={15} className="text-accent shrink-0" />
                  <span className="text-white/55 text-sm font-body">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image + stats */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=85"
                alt="Professional business consulting team in a modern office"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating stat cards */}
            {floatCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.delay }}
                className={`absolute bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/20 ${
                  i === 0
                    ? "-left-6 top-8"
                    : i === 1
                    ? "-right-4 top-1/3"
                    : "-left-4 bottom-8"
                }`}
              >
                <p className="font-heading font-bold text-2xl text-primary leading-none">
                  {card.value}
                </p>
                <p className="text-muted text-xs mt-0.5 font-body whitespace-nowrap">
                  {card.label}
                </p>
              </motion.div>
            ))}

            {/* Google rating card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute -right-2 bottom-6 bg-white rounded-2xl px-4 py-3 shadow-card flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#4285F4]/10 flex items-center justify-center">
                <span className="font-heading font-bold text-[#4285F4] text-sm">G</span>
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-muted font-body whitespace-nowrap">
                  4.9 · 200+ Google Reviews
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
