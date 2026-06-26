"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-transparent"
        )}
      >
        {/* Top bar */}
        <div
          className={cn(
            "border-b border-white/10 transition-all duration-300 overflow-hidden",
            scrolled ? "h-0 opacity-0" : "h-auto opacity-100"
          )}
        >
          <div className="container-custom flex items-center justify-between py-2">
            <p className="text-xs text-white/70 font-body">
              India&apos;s Trusted Business Compliance Partner — 15+ Years of Excellence
            </p>
            <div className="flex items-center gap-4 text-xs text-white/70">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Phone size={11} />
                {COMPANY.phone}
              </a>
              <span>|</span>
              <span>{COMPANY.workingHours}</span>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className="container-custom" ref={dropdownRef}>
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                <span className="text-white font-heading font-bold text-base">CA</span>
              </div>
              <div>
                <span
                  className={cn(
                    "font-heading font-bold text-base leading-tight block transition-colors",
                    scrolled ? "text-dark" : "text-white"
                  )}
                >
                  Company Avenue
                </span>
                <span
                  className={cn(
                    "text-xs font-body leading-tight block transition-colors",
                    scrolled ? "text-muted" : "text-white/60"
                  )}
                >
                  Advisory Pvt. Ltd.
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative">
                    <button
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-heading font-medium transition-all duration-200 group",
                        scrolled
                          ? "text-slate-700 hover:text-primary hover:bg-primary/5"
                          : "text-white/85 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.label ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          onMouseEnter={() => setActiveDropdown(link.label)}
                          onMouseLeave={() => setActiveDropdown(null)}
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.12)] border border-slate-100 p-5 min-w-[640px]"
                        >
                          <div className="grid grid-cols-2 gap-6">
                            {link.children.map((group) => (
                              <div key={group.group}>
                                <p className="text-xs font-heading font-semibold tracking-widest uppercase text-muted mb-3">
                                  {group.group}
                                </p>
                                <ul className="space-y-1">
                                  {group.items.map((item) => (
                                    <li key={item.href}>
                                      <Link
                                        href={item.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-primary hover:bg-primary/5 transition-all group"
                                      >
                                        {item.label}
                                        <ArrowRight
                                          size={12}
                                          className="opacity-0 group-hover:opacity-100 transition-opacity text-accent"
                                        />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-heading font-medium transition-all duration-200",
                      scrolled
                        ? "text-slate-700 hover:text-primary hover:bg-primary/5"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href="/contact"
                variant="outline"
                size="sm"
                className={cn(
                  "transition-all",
                  !scrolled &&
                    "border-white/40 text-white hover:bg-white hover:text-primary"
                )}
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-dark" : "text-white"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white pt-20"
          >
            <div className="container-custom py-6 overflow-y-auto h-full">
              <nav className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-dark font-heading font-medium hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      {link.label}
                      {link.children && <ChevronDown size={16} className="text-muted" />}
                    </Link>
                  </div>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3">
                <Button href="/contact" variant="primary" size="lg" className="w-full justify-center">
                  Book Consultation
                </Button>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center justify-center gap-2 text-primary font-heading font-medium py-3"
                >
                  <Phone size={16} />
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
