import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FeatureCard } from "./components/FeatureCard";
import { RISK_FREE_DATA } from "./constants";

export function RiskFreeSection() {
  return (
    <section className="py-8 lg:py-16 relative overflow-hidden">
      <div className="max-w-[1232px] mx-auto px-[16px]">
        
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Button first on mobile */}
          <div className="flex justify-center mb-6">
            <Button 
              size="lg" 
              className="bg-[#9270cb] hover:bg-[transparent] hover:text-[#9270cb] hover:border-[#9270cb] border border-[#9270cb] h-[50px] text-white px-6 py-3 rounded-full text-base w-full sm:max-w-[280px]"
            >
              {RISK_FREE_DATA.buttonText}
            </Button>
          </div>
          
          {/* Title second on mobile */}
          <h2 className="font-bold text-gray-800 mb-8 text-center text-2xl leading-tight">
            {RISK_FREE_DATA.title}
          </h2>
          
          {/* Cards only (no images) on mobile */}
          <div className="grid grid-cols-1 gap-4">
            {RISK_FREE_DATA.features.map((feature) => (
              <div key={feature.id}>
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <h2 className="font-bold text-gray-800 mb-12 text-center" style={{fontSize: '48px', lineHeight: '130%'}}>
            {RISK_FREE_DATA.title}
          </h2>
          
          <div className="flex gap-[25px] max-h-[642px] mx-auto">
            <div className="grid grid-cols-2 gap-[23px] flex-1 relative">
              {RISK_FREE_DATA.features.map((feature) => (
                <div key={feature.id} className="">
                  <FeatureCard feature={feature} />
                </div>
              ))}
              <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[150px] h-[150px] z-10'>
                <img src="/images/landing/4friend-icon.svg" alt="" />
              </div>
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
      </div>
    </section>
  );
}
