import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <WhyChoose />
      <Stats />
      <Services />
      <Process />
      <Industries />
      <Testimonials />
      <BlogSection />
      <FAQ />
      <CTABanner />
    </>
  );
}
