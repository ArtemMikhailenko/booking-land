import React from 'react';
import { Button } from '@/components/ui/button';
import { DogImage } from './components/DogImage';
import { CategoriesList } from './components/CategoriesList';
import { HERO_CATEGORIES, HERO_CONTENT } from './constants';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#e1e1e1]relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 ">
        {/* Purple background - left */}
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <img 
            src="/images/landing/bg/main-purple.svg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Green background - right */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img 
            src="/images/landing/bg/main-green.svg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-[1225px] mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row  justify-between min-h-screen relative items-center">
          {/* Left content */}
          <div className="flex-shrink-0 space-y-6 mb-20 relative z-20 ">
            <div className="space-y-6">
              <h1 className="font-geologica text-5xl sm:text-[80px] font-bold text-[#344054] relative z-20 whitespace-pre-line"
              style={{ fontFamily: "'Geologica', sans-serif" }}>
                {HERO_CONTENT.mainTitle}
              </h1>
              
              <p className="text-[20px] text-[#667085] max-w-[370px] leading-relaxed">
                {HERO_CONTENT.description}
              </p>
              
              <Button 
                className="bg-[#9270cb] hover:bg-[transparent] text-[16px] hover:text-[#9270cb] hover:border-[#9270cb] hover:border-2 text-white px-8 py-4 sm:w-[226px] sm:h-[60px] rounded-full text-base font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {HERO_CONTENT.buttonText}
              </Button>
            </div>
          </div>

          {/* Center - Dog image */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <DogImage />
          </div>

          {/* Right content */}
          <div className="flex-shrink-0 space-y-6 relative mb-60 ml-10 z-20 text-right">
            <CategoriesList categories={HERO_CATEGORIES} />
            <h2 className="relative z-20 text-5xl sm:text-[80px] font-bold text-[#344054] font-geologica relative z-20 whitespace-pre-line text-left -left-8"
            style={{ fontFamily: "'Geologica', sans-serif" }}>
              {HERO_CONTENT.subtitle}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
