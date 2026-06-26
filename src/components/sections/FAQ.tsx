"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "How long does Private Limited Company registration take?",
    a: "Typically 7–10 business days after all documents are submitted. The timeline includes DIN/DSC issuance, name approval, and Certificate of Incorporation.",
  },
  {
    q: "Is GST registration mandatory for all businesses?",
    a: "GST is mandatory if your annual turnover exceeds ₹40 lakhs (goods) or ₹20 lakhs (services). Inter-state suppliers and e-commerce sellers must register regardless of turnover.",
  },
  {
    q: "What documents are needed for company registration?",
    a: "PAN, Aadhaar, and passport-size photo for all directors; address proof for the registered office; and a utility bill. We provide a complete checklist tailored to your company type.",
  },
  {
    q: "Can I register a company if I'm a foreign national?",
    a: "Yes. Foreign nationals can be directors or shareholders in Indian companies. Additional documents like apostilled passports are required, and we handle the entire process.",
  },
  {
    q: "What is the difference between a Private Limited Company and an LLP?",
    a: "A Pvt. Ltd. has stricter compliance but better investor access and scalability. An LLP has simpler compliance and flexible profit distribution. We help you choose based on your business goals.",
  },
  {
    q: "How much does it cost to register a company?",
    a: "Our pricing is transparent and fixed. Company registration starts from ₹6,999 inclusive of government fees. Get a detailed quote after a free consultation.",
  },
  {
    q: "Do you provide ongoing compliance support after registration?",
    a: "Yes. We offer annual compliance packages covering ROC filings, ITR, GST returns, and more. Your dedicated relationship manager proactively reminds you of all due dates.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              subtitle="Quick answers to common questions about our services and processes."
              align="left"
              className="mb-0"
            />
            <div className="mt-8 p-6 rounded-2xl bg-primary text-white">
              <p className="font-heading font-semibold text-base mb-2">
                Still have questions?
              </p>
              <p className="text-white/60 text-sm mb-5">
                Our experts are available Mon–Sat, 9 AM – 7 PM.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://wa.me/919876543210"
                  className="flex items-center gap-2 text-white text-sm font-medium hover:text-accent transition-colors"
                >
                  WhatsApp us →
                </a>
                <a
                  href="/contact"
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                >
                  Book a free consultation →
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  aria-expanded={open === i}
                >
                  <span className="font-heading font-semibold text-dark text-sm leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-primary/8 flex items-center justify-center text-primary">
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-4 text-muted text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
