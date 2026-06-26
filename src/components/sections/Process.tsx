"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section className="section-pad bg-background">
      <div className="container-custom">
        <SectionHeader
          eyebrow="How It Works"
          title="From Consultation to Completion in 6 Steps"
          subtitle="A structured, transparent process that keeps you informed at every stage — no surprises, no delays."
          className="mb-16"
        />

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-slate-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative z-10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-100 shadow-card flex items-center justify-center mb-4 relative">
                    <span className="font-heading font-bold text-2xl text-primary">
                      {step.step}
                    </span>
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-dark text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
