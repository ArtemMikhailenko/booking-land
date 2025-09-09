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
    <section className="pt-20 relative bg-[#f0f0f0]">
      <div className="absolute inset-0 z-0">
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-[#344054] mb-4">
            {HOW_IT_WORKS_DATA.title}
          </h2>
          <p className="text-xl text-[#667085] leading-relaxed">
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
