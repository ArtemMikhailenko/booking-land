import React from 'react';
import { FeatureItem } from '@/types';

interface FeatureListProps {
  features: FeatureItem[];
}

export const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-[#344054] mb-4 font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
        Отработка желаний
      </h3>
      <div className="space-y-4">
        {features.map((feature) => (
          <div key={feature.id} className="flex gap-3">
            {/* Purple bullet point */}
            <div className="w-5 h-5 bg-[#9270cb] rounded-full mt-0.5 flex-shrink-0"></div>
            
            <div className="flex-1">
              <h4 className="text-base font-bold text-[#344054] mb-2 font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
                {feature.title}
              </h4>
              <p className="text-base text-[#667085] leading-6" style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
