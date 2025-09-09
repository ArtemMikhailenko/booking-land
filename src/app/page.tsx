import { HeroSection } from '@/features/hero';
import { ProductAudienceSection } from '@/features/product-audience';
import { RiskFreeSection } from '@/features/risk-free';
import { PricingSection } from '@/features/pricing';
import { CollaborationSection } from '@/features/collaboration';
import { HowItWorksSection } from '@/features/how-it-works';
import { FAQSection } from '@/features/faq';

export default function Home() {
  return (
    <main className='bg-[#e1e1e1]'>
      <HeroSection />
      <ProductAudienceSection />
      <HowItWorksSection />
      <RiskFreeSection />
      <PricingSection />
      <CollaborationSection />
      
      <FAQSection />
    </main>
  );
}
