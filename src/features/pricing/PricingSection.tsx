import React from 'react';
import { Button } from "@/components/ui/button";
import { PricingCard } from "./components/PricingCard";
import { PRICING_DATA } from "./constants";

export function PricingSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-blue-100 to-green-200"></div>
      <div className="flex-shrink-0 w-[full] max-w-[696px] absolute left-0 bottom-0">
            <img 
              src="/images/landing/cat-bg.png" 
              alt="Cat"
              className="w-full h-auto object-cover"
            />
          </div>
      <div className="relative max-w-[1232px] mx-auto px-[16px]">
        {/* Title */}
        <h2 className="text-center font-bold text-[#344054] mb-16" style={{fontSize: '48px', lineHeight: '130%', fontFamily: "'Geologica', sans-serif"}}>
          {PRICING_DATA.title}
        </h2>
        
        <div className="flex gap-8  w-full justify-end">
          
          
          
          {/* Right side - Cards grid */}
          <div className="flex-1 max-w-[895px] flex flex-col items-end">
            {/* Top wide card */}
            <div className="mb-6">
              <PricingCard 
                feature={PRICING_DATA.features[0]} 
                className="w-full max-w-[792px] min-h-[142px]"
                maxLines={2}
              />
            </div>
            
            {/* Bottom row - two cards */}
            <div className="flex gap-6 mb-8">
              <PricingCard 
                feature={PRICING_DATA.features[1]} 
                className="min-h-[178px] max-w-[385px]"
                maxLines={3}
              />
              <PricingCard 
                feature={PRICING_DATA.features[2]} 
                className="min-h-[178px] max-w-[486px]"
                maxLines={3}
              />
            </div>
            
            {/* Bottom card */}
            <div className="mb-8">
              <PricingCard 
                feature={PRICING_DATA.features[3]} 
                className="w-full max-w-[792px] min-h-[142px]"
                maxLines={2}
              />
            </div>
            
            {/* Button */}
            <div className="flex justify-end">
              <Button 
                size="lg" 
                className="bg-[#9270cb] hover:bg-[transparent] hover:text-[#9270cb] hover:border-[#9270cb] border border-[#9270cb] h-[60px] w-[282px] text-white rounded-full"
                style={{fontFamily: "'Wix Madefor Text', sans-serif", fontSize: '16px', lineHeight: '150%', fontWeight: '500'}}
              >
                {PRICING_DATA.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
