import React from 'react';
import { PlanCard } from "./components/PlanCard";
import { COLLABORATION_DATA } from "./constants";

export function CollaborationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-[602px] mx-auto">
          <h2 className="font-bold text-[#344054] mb-2" style={{fontSize: '48px', lineHeight: '130%', fontFamily: "'Geologica', sans-serif"}}>
            {COLLABORATION_DATA.title}
          </h2>
          <p className="text-[#667085]" style={{fontSize: '20px', lineHeight: '150%', fontFamily: "'Wix Madefor Display', sans-serif", fontWeight: '500'}}>
            {COLLABORATION_DATA.subtitle}
          </p>
        </div>
        
        {/* Plans */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          {COLLABORATION_DATA.plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
