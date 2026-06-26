"use client";
import { TRUST_LOGOS } from "@/lib/constants";

export function TrustBar() {
  const doubled = [...TRUST_LOGOS, ...TRUST_LOGOS];

  return (
    <section className="bg-white border-y border-slate-100 py-5 overflow-hidden">
      <div className="flex items-center gap-4 mb-2">
        <div className="container-custom">
          <p className="text-xs font-heading font-semibold text-muted tracking-widest uppercase text-center">
            Recognised & trusted by
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee w-max gap-0">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 shrink-0"
            >
              <span className="text-sm font-heading font-semibold text-slate-400 whitespace-nowrap hover:text-primary transition-colors cursor-default">
                {logo}
              </span>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
