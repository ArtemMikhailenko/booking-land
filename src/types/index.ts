export interface CategoryItem {
  id: number;
  title: string;
  icon: string;
}

export interface HeroData {
  mainTitle: string;
  subtitle: string;
  description: string;
  buttonText: string;
  categories: CategoryItem[];
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

export interface AudienceTab {
  id: string;
  title: string;
  description: string;
  features: FeatureItem[];
}

export interface ProductAudienceData {
  title: string;
  tabs: AudienceTab[];
}

export interface RiskFreeFeature {
  id: number;
  title: string;
  description: string;
}

export interface RiskFreeData {
  title: string;
  buttonText: string;
  features: RiskFreeFeature[];
}

export interface PricingFeature {
  id: number;
  title: string;
  description: string;
}

export interface PricingData {
  title: string;
  buttonText: string;
  features: PricingFeature[];
}

export interface CollaborationPlan {
  id: number;
  title: string;
  percentage: string;
  priceNote: string;
  description: string;
  buttonText: string;
  features: string[];
  bgColor: string;
  buttonColor: string;
}

export interface CollaborationData {
  title: string;
  subtitle: string;
  plans: CollaborationPlan[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQData {
  title: string;
  items: FAQItem[];
}

export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
}

export interface HowItWorksData {
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
}
