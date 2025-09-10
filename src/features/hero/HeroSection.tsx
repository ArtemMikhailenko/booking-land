import React from 'react';
import { Button } from '@/components/ui/button';
import { DogImage } from './components/DogImage';
import { CategoriesList } from './components/CategoriesList';
import { HERO_CATEGORIES, HERO_CONTENT } from './constants';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#e1e1e1] relative overflow-hidden">
      {/* Mobile background */}
      <div className="absolute inset-0 z-0 lg:hidden">
        {/* Purple background - center left */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[375px] h-[1098px] z-0">
          <svg width="375" height="1098" viewBox="0 0 375 1098" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g filter="url(#filter0_f_7323_246800)">
              <circle cx="68.5" cy="520.5" r="177.5" fill="#D5BDFF" />
            </g>
            <defs>
              <filter id="filter0_f_7323_246800" x="-509" y="-57" width="1155" height="1155" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_7323_246800" />
              </filter>
            </defs>
          </svg>
        </div>
        
        {/* Green background - bottom center */}
        <div className="absolute left-1/2 -bottom-110 transform -translate-x-1/2 w-full h-[915px] z-0">
          <svg width="375" height="915" viewBox="0 0 375 915" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g filter="url(#filter0_f_7323_246801)">
              <circle cx="188.5" cy="457.5" r="157.5" fill="#DFFFB5" />
            </g>
            <defs>
              <filter id="filter0_f_7323_246801" x="-269" y="0" width="915" height="915" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_7323_246801" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Desktop background */}
      <div className="absolute inset-0 z-0 hidden lg:block">
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

      {/* Mobile Layout */}
      <div className="lg:hidden relative z-20">
        {/* Mobile Dog Image Section */}
        <div className="px-4 pt-0 relative z-20">
          <div className="w-full flex justify-center">
            <DogImage />
          </div>
        </div>

        {/* Mobile Content Section */}
        <div className="px-4 pb-10 space-y-10 relative z-20">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="">
              <h1 className="text-[40px] font-bold text-[#344054] text-left leading-none"
                style={{ fontFamily: "'Geologica', sans-serif" }}>
                Отримуй нових клієнтів
              </h1>
              <h2 className="text-[40px] font-bold text-[#344054] text-right leading-none"
                style={{ fontFamily: "'Geologica', sans-serif" }}>
                в пару кліків
              </h2>
            </div>
            
            <p className="text-[16px] text-[#667085] leading-[150%]"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}>
              Вас легко знайти власникам тварин, які шукають товари та послуги саме зараз. Отримуєте постійний потік клієнтів без додаткових зусиль.
            </p>
            
            <Button 
              className="bg-[#9270cb] text-white w-full h-[53px] rounded-[48px] text-[14px] font-medium"
              style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}
            >
              Почати
            </Button>
          </div>

          {/* Categories Grid */}
          <div className="space-y-4 z-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12  flex items-center justify-center">
                  <img src="/images/landing/pet-food-icon.svg" alt=""  />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#344054] leading-[130%]"
                    style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}>
                    Корм і харчування
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/images/landing/pet-medicine-icon.svg" alt=""  />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#344054] leading-[130%]"
                    style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}>
                    Ліки та <br />вет. товари
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12  flex items-center justify-center">
                  <img src="/images/landing/pet-food-icon.svg" alt=""  />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#344054] leading-[130%]"
                    style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}>
                    Ігри <br />та побут
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12  flex items-center justify-center">
                  <img src="/images/landing/pet-closes-icon.svg" alt="" className="w-12 h-12" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#344054] leading-[130%]"
                    style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}>
                    Догляд та одяг <br />для тварин
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-[1225px] mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between min-h-screen relative items-center">
            {/* Left content */}
            <div className="flex-shrink-0 space-y-6 mb-20 relative z-20">
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
      </div>
    </section>
  );
};
