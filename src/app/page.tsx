import { HeroSection } from '@/features/hero';
import { ProductAudienceSection } from '@/features/product-audience';
import { RiskFreeSection } from '@/features/risk-free';
import { PricingSection } from '@/features/pricing';
import { CollaborationSection } from '@/features/collaboration';
import { HowItWorksSection } from '@/features/how-it-works';
import { FAQSection } from '@/features/faq';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <main className='bg-[#f0f0f0] overflow-hidden'>
        <HeroSection />
        <ProductAudienceSection />
        <HowItWorksSection />
        <RiskFreeSection />
        <PricingSection />
        <CollaborationSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
