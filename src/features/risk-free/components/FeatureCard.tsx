import React from 'react';
import { RiskFreeFeature } from '@/types';

interface FeatureCardProps {
  feature: RiskFreeFeature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="bg-white rounded-[32px] p-6 relative shadow-lg h-full">
      {/* Purple dot */}
      <div className="absolute top-9 right-8 w-5 h-5 bg-[#9270cb] rounded-full"></div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-medium text-[#344054] mb-4 font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
          {feature.title}
        </h3>
        <p className="text-base text-[#667085] leading-6" style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}>
          {feature.description}
        </p>
      </div>
    </div>
  );
};
