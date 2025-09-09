import React from 'react';
import { Button } from "@/components/ui/button";
import { CollaborationPlan } from '@/types';

interface PlanCardProps {
  plan: CollaborationPlan;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const isGreen = plan.bgColor === "#c9ff83";
  const textColor = isGreen ? "text-black" : "text-white";
  const buttonTextColor = plan.buttonColor === "#c9ff83" ? "text-black" : "text-white";
  
  return (
    <div className="bg-white rounded-[32px] shadow-lg relative overflow-hidden max-w-[604px] w-full">
    <div className='px-[12px] pt-[12px] pb-[24px] rounded-[24px]' style={{boxShadow:' 0 5px 11px 0 rgba(134, 131, 131, 0.1), 0 20px 20px 0 rgba(134, 131, 131, 0.09), 0 46px 27px 0 rgba(134, 131, 131, 0.05), 0 81px 32px 0 rgba(134, 131, 131, 0.01), 0 127px 35px 0 rgba(134, 131, 131, 0);'}}>
        <div className="rounded-[24px] p-6 mb-6 relative" style={{backgroundColor: plan.bgColor}}>
        <h3 className={`text-[24px] font-medium ${textColor} mb-4`} style={{fontFamily: "'Geologica', sans-serif"}}>
          {plan.title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className={`text-5xl font-bold ${textColor}`} style={{fontFamily: "'Geologica', sans-serif"}}>
              {plan.percentage}
            </span>
            <span className={`${textColor} text-sm`} style={{fontFamily: "'Wix Madefor Display', sans-serif"}}>
              {plan.priceNote}
            </span>
          </div>
          
          <Button 
            className={`hover:opacity-90 ${buttonTextColor} rounded-full px-8 py-2 font-[500] h-[52px] w-[170px]`}
            style={{backgroundColor: plan.buttonColor, fontFamily: "'Wix Madefor Text', sans-serif"}}
          >
            {plan.buttonText}
          </Button>
        </div>
      </div>

      
      
      <p className="text-[#344054] font-[600] text-[14px] pl-2" style={{fontFamily: "'Wix Madefor Display', sans-serif", fontSize: '16px', lineHeight: '150%'}}>
        {plan.description}
      </p>
      
    </div>
      
      <div className="space-y-3 px-[36px] pt-[24px] pb-[48px]">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="#344054" />
                </svg>
            </div>
            <span className="text-gray-700" style={{fontFamily: "'Wix Madefor Display', sans-serif", fontSize: '16px', lineHeight: '150%'}}>
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
