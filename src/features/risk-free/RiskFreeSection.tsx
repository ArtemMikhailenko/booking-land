import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FeatureCard } from "./components/FeatureCard";
import { RISK_FREE_DATA } from "./constants";

export function RiskFreeSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-[1232px] mx-auto px-[16px]">
        <h2 className="font-bold text-gray-800 mb-12 text-center" style={{fontSize: '48px', lineHeight: '130%'}}>
          {RISK_FREE_DATA.title}
        </h2>
        
        <div className="flex gap-[25px] max-h-[642px]  mx-auto relative">
          <div className="grid grid-cols-2 gap-[23px]  flex-1">
            {RISK_FREE_DATA.features.map((feature) => (
              <div key={feature.id} className="">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center max-w-[378px]">
            <div className="mb-[24px] w-full max-h-[558px]">
              <img src="/images/landing/dog-why-we.png" className="w-full h-full object-cover rounded-[32px]" alt="" />
            </div>
            
            <Button 
              size="lg" 
              className="bg-[#9270cb] hover:bg-[transparent] hover:text-[#9270cb] hover:border-[#9270cb] border border-[#9270cb] h-[60px] text-white px-8 py-4 rounded-full text-lg w-full"
            >
              {RISK_FREE_DATA.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
