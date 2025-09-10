'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { PricingCard } from "./components/PricingCard";
import { PRICING_DATA } from "./constants";
import { MAIN_ACTION_URL } from '@/constants';
import { RegistrationModal } from '@/components/modals';
import { useModal } from '@/hooks/useModal';

export function PricingSection() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <section className="pt-8 lg:py-16 relative overflow-hidden bg-[#f0f0f0]">
      {/* SVG Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Purple circle - bottom center */}
        <div className="absolute -bottom-[800px] -left-[100px] lg:-bottom-[350px] sm:left-1/2 transform -translate-x-1/2 w-[1221px] h-[1297px]">
          <svg width="1221" height="1297" viewBox="0 0 1221 1297" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g filter="url(#filter0_f_7088_174884)">
              <circle cx="572.5" cy="648.5" r="248.5" fill="#D5BDFF" />
            </g>
            <defs>
              <filter id="filter0_f_7088_174884" x="-76" y="0" width="1297" height="1297" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_7088_174884" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Green circle - right */}
        <div className="absolute -top-[900px] sm:top-1/2 -right-[150px] lg:left-auto transform lg:-translate-y-1/2 w-[1010px] h-[1666px]">
          <svg width="1010" height="1666" viewBox="0 0 1010 1666" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g filter="url(#filter0_f_7088_174882)">
              <circle cx="833" cy="833" r="333" fill="#DFFFB5" />
            </g>
            <defs>
              <filter id="filter0_f_7088_174882" x="0" y="0" width="1666" height="1666" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_7088_174882" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Purple circle - left middle */}
        <div className="absolute top-[30%] lg:top-1/2 -left-[0px] lg:left-0 transform lg:-translate-y-1/2 w-[662px] h-[1139px]">
          <svg width="662" height="1139" viewBox="0 0 662 1139" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g filter="url(#filter0_f_7088_174883)">
              <circle cx="92.5" cy="569.5" r="169.5" fill="#D5BDFF" />
            </g>
            <defs>
              <filter id="filter0_f_7088_174883" x="-477" y="0" width="1139" height="1139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_7088_174883" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Desktop cat image - absolute positioned */}
      <div className="hidden lg:block flex-shrink-0 w-[full] max-w-[696px] absolute left-0 bottom-0">
        <img 
          src="/images/landing/cat-bg.webp" 
          alt="Cat"
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="relative max-w-[1232px] mx-auto px-[16px]">
        {/* Title */}
        <h2 className="text-center font-bold text-[#344054] mb-8 lg:mb-16 text-2xl lg:text-[48px] leading-tight lg:leading-[130%]" style={{fontFamily: "'Geologica', sans-serif"}}>
          {PRICING_DATA.title}
        </h2>
        
        {/* Mobile Layout */}
        <div className="block lg:hidden relative">
          {/* Cards in single column */}
          <div className="space-y-4 mb-6 relative z-10">
            {PRICING_DATA.features.map((feature) => (
              <PricingCard 
                key={feature.id}
                feature={feature} 
                className="w-full min-h-[120px]"
                maxLines={3}
              />
            ))}
          </div>
          
          {/* Button */}
          <div className="flex justify-center mb-6 relative z-10">
            <Button 
              className="bg-[#9270cb] hover:bg-[transparent] hover:text-[#9270cb] hover:border-[#9270cb] border border-[#9270cb] h-[50px] w-full sm:max-w-[280px] text-white rounded-full text-base"
              style={{fontFamily: "'Wix Madefor Text', sans-serif", fontWeight: '500'}}
              onClick={openModal}
            >
              {PRICING_DATA.buttonText}
            </Button>
          </div>
          
          {/* Mobile cat image - positioned to show only top half */}
          <div className="relative w-full h-[280px] overflow-hidden">
            <img 
              src="/images/landing/cat-bg-small.webp" 
              alt="Cat"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-8 w-full justify-end">
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
                onClick={openModal}
              >
                {PRICING_DATA.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}
