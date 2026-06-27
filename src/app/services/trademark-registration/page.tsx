import type { Metadata } from "next";
import { TrademarkPage } from "@/components/sections/TrademarkPage";

export const metadata: Metadata = {
  title: "Trademark Registration Online | Brand Protection & TM Filing | Company Avenue Advisory",
  description:
    "Protect your brand with online trademark registration. Learn about trademark classes, search, filing process, objections, renewals, and complete trademark protection with Company Avenue Advisory.",
  keywords: [
    "trademark registration",
    "trademark registration online",
    "register trademark india",
    "brand registration",
    "trademark filing",
    "trademark search",
    "trademark class",
    "trademark certificate",
    "trademark renewal",
    "trademark objection",
    "intellectual property registration",
  ],
  openGraph: {
    title: "Trademark Registration Online | Brand Protection | Company Avenue Advisory",
    description:
      "Register your trademark with expert assistance. Free search included, class selection guidance, objection handling, and renewal support. PAN India service.",
    type: "website",
  },
};

export default function TrademarkRegistrationPage() {
  return <TrademarkPage />;
}
