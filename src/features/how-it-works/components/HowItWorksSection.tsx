'use client';

import { useState } from 'react';
import { HOW_IT_WORKS_DATA } from '../constants';
import { StepNumbers } from './StepNumbers';
import { StepContent } from './StepContent';

export const HowItWorksSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };
  
  const currentStepData = HOW_IT_WORKS_DATA.steps.find(step => step.id === currentStep) || HOW_IT_WORKS_DATA.steps[0];
  
  return (
    <section className="pt-12 lg:pt-20 relative bg-[#f0f0f0] overflow-hidden">
      {/* Mobile background */}
      <div className="absolute inset-0 z-0 lg:hidden">
        {/* Purple circle - top right */}
        <div className="absolute -top-[100px] -right-[0] w-[239px] h-[447px] z-0">
          <svg width="239" height="447" viewBox="0 0 239 447" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g filter="url(#filter0_f_7325_246913)">
              <circle cx="223" cy="223.436" r="91" fill="#D5BDFF" />
            </g>
            <defs>
              <filter id="filter0_f_7325_246913" x="0.115936" y="0.551483" width="445.768" height="445.768" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="65.942" result="effect1_foregroundBlur_7325_246913" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Green ellipse - bottom left */}
        <div className="absolute -bottom-[350px] left-0 w-[312px] h-[750px] z-0">
          <svg width="312" height="750" viewBox="0 0 312 750" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g filter="url(#filter0_f_7325_246912)">
              <ellipse cx="9" cy="374.936" rx="123" ry="194.5" fill="#DFFFB5" />
            </g>
            <defs>
              <filter id="filter0_f_7325_246912" x="-293.917" y="0.519043" width="605.833" height="748.833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="89.9583" result="effect1_foregroundBlur_7325_246912" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Desktop background */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <img 
            src="/images/landing/bg/how-work-green.svg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img 
            src="/images/landing/bg/how-work-purple.svg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 lg:mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-5xl font-bold text-[#344054] mb-2 lg:mb-4">
            {HOW_IT_WORKS_DATA.title}
          </h2>
          <p className="text-base lg:text-xl text-[#667085] leading-relaxed">
            {HOW_IT_WORKS_DATA.subtitle}
          </p>
        </div>
        
        <StepNumbers 
          currentStep={currentStep}
          totalSteps={HOW_IT_WORKS_DATA.steps.length}
          onStepClick={handleStepClick}
        />
        
        <StepContent step={currentStepData} />
      </div>
    </section>
  );
};
