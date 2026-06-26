"use client";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-dark py-24">
      {/* Background elements */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-[60px]" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-4 py-1.5 text-white/60 text-xs font-heading font-medium tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available Mon–Sat, 9 AM – 7 PM IST
          </span>

          <h2 className="heading-lg text-white mb-5 max-w-2xl mx-auto text-balance">
            Ready to Register, File, or Stay Compliant?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Speak with a compliance expert for free. No commitment, just clarity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="accent"
              size="lg"
              icon={<Calendar size={16} />}
              iconPosition="left"
            >
              Book Free Consultation
            </Button>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors font-heading font-semibold text-base"
            >
              <Phone size={16} />
              Call Now: {COMPANY.phone}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/30 text-xs font-body">
            <span>✓ Free 30-min consultation</span>
            <span>✓ No hidden fees</span>
            <span>✓ Expert CAs & CSs</span>
            <span>✓ 100% digital process</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
