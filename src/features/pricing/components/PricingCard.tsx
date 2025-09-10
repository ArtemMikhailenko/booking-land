import React from 'react';
import { PricingFeature } from '@/types';

interface PricingCardProps {
  feature: PricingFeature;
  className?: string;
  maxLines?: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({ feature, className = "", maxLines = 3 }) => {
  const lineClampClass = maxLines === 2 ? 'line-clamp-2' : 'line-clamp-3';
  
  return (
    <div className={`bg-white/40 backdrop-blur-md rounded-[16px] lg:rounded-[32px] p-4 lg:p-6 flex flex-col gap-1 lg:gap-2 ${className}`}>
      <h3 className="text-lg lg:text-2xl font-medium text-[#344054]" style={{fontFamily: "'Geologica', sans-serif", lineHeight: '150%'}}>
        {feature.title}
      </h3>
      <p className={`text-sm lg:text-base text-[#667085] ${lineClampClass}`} style={{fontFamily: "'Wix Madefor Display', sans-serif", lineHeight: '150%'}}>
        {feature.description}
      </p>
    </div>
  );
};
