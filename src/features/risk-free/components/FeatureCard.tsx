import React from 'react';
import { RiskFreeFeature } from '@/types';

interface FeatureCardProps {
  feature: RiskFreeFeature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="bg-white rounded-[16px] lg:rounded-[32px] p-4 lg:p-6 relative shadow-lg h-full">
      {/* Purple dot */}
      <div className="absolute top-4 right-4 lg:top-9 lg:right-8 w-3 h-3 lg:w-5 lg:h-5 bg-[#9270cb] rounded-full"></div>
      
      <div className="mt-8 lg:mt-16">
        <h3 className="text-lg lg:text-2xl font-medium text-[#344054] mb-2 lg:mb-4 font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
          {feature.title}
        </h3>
        <p className="text-sm lg:text-base text-[#667085] leading-5 lg:leading-6" style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}>
          {feature.description}
        </p>
      </div>
    </div>
  );
};
