import type { Metadata } from "next";
import { GSTPage } from "@/components/sections/GSTPage";

export const metadata: Metadata = {
  title: "GST Registration Online | Apply GSTIN with Expert Assistance | Company Avenue Advisory",
  description:
    "Register your business under GST online with Company Avenue Advisory. Check eligibility, understand the GST registration process, required documents, timelines, GSTIN issuance, and post-registration compliance.",
  keywords: [
    "GST registration",
    "GST registration online",
    "GST registration india",
    "GST number registration",
    "apply GSTIN",
    "GST certificate",
    "GST registration process",
    "GST registration documents",
    "GST registration for business",
    "GST registration for startups",
    "GST consultant",
  ],
  openGraph: {
    title: "GST Registration Online | Apply GSTIN | Company Avenue Advisory",
    description:
      "Get your GSTIN in 2–7 working days with expert CA assistance. 100% online, transparent pricing, PAN India service.",
    type: "website",
  },
};

export default function GSTRegistrationPage() {
  return <GSTPage />;
}
