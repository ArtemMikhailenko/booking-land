'use client'
import React, { useState } from 'react';
import { PlanCard } from "./components/PlanCard";
import { COLLABORATION_DATA } from "./constants";

export function CollaborationSection() {
  const [expandedPlanId, setExpandedPlanId] = useState<number>(0);

  const handlePlanExpand = (planId: number) => {
    setExpandedPlanId(planId);
  };

  return (
    <section className="py-8 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16 max-w-[602px] mx-auto">
          <h2 className="font-bold text-[#344054] mb-2 text-2xl lg:text-[48px] leading-tight lg:leading-[130%]" style={{fontFamily: "'Geologica', sans-serif"}}>
            {COLLABORATION_DATA.title}
          </h2>
          <p className="text-[#667085] text-base lg:text-[20px] leading-normal lg:leading-[150%]" style={{fontFamily: "'Wix Madefor Display', sans-serif", fontWeight: '500'}}>
            {COLLABORATION_DATA.subtitle}
          </p>
        </div>
        
        {/* Plans */}
        {expandedPlanId === 0 ? (
          <div className="flex flex-col gap-6 lg:gap-8 justify-center items-center lg:flex-row lg:items-start">
            {COLLABORATION_DATA.plans.map((plan) => (
              <PlanCard 
                key={plan.id} 
                plan={plan}
                onExpand={handlePlanExpand}
                isExpanded={false}
                isHidden={false}
              />
            ))}
          </div>
        ) : (
          <div className="w-full">
            {COLLABORATION_DATA.plans
              .filter(plan => plan.id === expandedPlanId)
              .map((plan) => (
                <PlanCard 
                  key={plan.id} 
                  plan={plan}
                  onExpand={handlePlanExpand}
                  isExpanded={true}
                  isHidden={false}
                />
              ))
            }
          </div>
        )}
      </div>
    </section>
  );
}
