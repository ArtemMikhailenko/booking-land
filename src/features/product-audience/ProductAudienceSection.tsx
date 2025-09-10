import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FeatureList } from './components/FeatureList';
import { PRODUCT_AUDIENCE_DATA } from './constants';

export const ProductAudienceSection: React.FC = () => {
  return (
    <section className="bg-[#f0f0f0] py-[40px] sm:py-[64px]">
      <div className="max-w-[1232px] mx-auto px-[16px]">
        {/* Header */}
        <div className="text-center mb-[36px] sm:mb-[36px]">
          <h2 className="text-[30px] leading-[30px] sm:text-5xl font-bold text-[#344054] font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
            {PRODUCT_AUDIENCE_DATA.title}
          </h2>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pet-stores" className="w-full">
          {/* Tab triggers */}
          <TabsList className="flex w-full gap-[8px] lg:gap-[24px] bg-transparent h-auto p-0 mb-[32px] sm:mb-16 justify-start lg:justify-center overflow-x-auto lg:overflow-x-visible scrollbar-hide">
            {PRODUCT_AUDIENCE_DATA.tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`
                   rounded-full px-4 py-3 lg:px-6 lg:py-4 font-[500] transition-all duration-200 min-h-[30px] lg:min-h-[62px] flex items-center justify-center whitespace-nowrap flex-shrink-0
                  data-[state=active]:bg-[#344054] data-[state=active]:text-white
                  data-[state=inactive]:bg-[#e3e6eb] data-[state=inactive]:text-[#344054]
                  hover:bg-[#344054] hover:text-white
                  ${tab.id === 'vet-clinics' ? 'text-[12px] lg:text-lg px-4 lg:px-6 flex-1 lg:max-w-[383px]' : 'text-[12px] lg:text-xl px-4 lg:px-6 sm:min-w-[180px] lg:min-w-[247px]'}
                `}
                style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab content */}
          {PRODUCT_AUDIENCE_DATA.tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-[40px] sm:gap-12 items-start">
                {/* Left side - Images */}
                <div className="relative h-[300px] lg:h-[580px] lg:w-[400px]">
                  {tab.id === 'vet-pharmacies' ? (
                    // Layout for vet-pharmacies: pets image left, accessories right
                    <div className='flex flex-col gap-[10px] items-end h-full w-full'>
                      {/* Pets image (left) */}
                      <div className="flex-1 sm:absolute top-0 left-0 w-full h-[160px] lg:w-[588px] lg:h-[315px] rounded-2xl overflow-hidden z-10 ">
                        <Image 
                          src="/images/landing/img-ambulance.png" 
                          alt="Veterinary pharmacy" 
                          width={588} 
                          height={315}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Accessories image (right) */}
                      <div className="flex-1 sm:absolute bottom-0  lg:-right-45 w-full max-w-[225px] h-[115px] lg:w-[386px] lg:h-[202px] rounded-2xl overflow-hidden z-20">
                        <Image 
                          src="/images/landing/img-ambulance2.png" 
                          alt="Veterinary pharmacy products" 
                          width={386} 
                          height={202}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : tab.id === 'grooming' ? (
                    // Layout for grooming
                    <div className='flex justify-between items-center w-full h-full gap-[16px]'>
                      {/* Grooming image left */}
                      <div className="relative flex-1 sm:absolute top-5 sm:top-20 left-0 w-[162px] h-[243px] lg:w-[282px] lg:h-[450px] rounded-2xl overflow-hidden z-10">
                        <Image 
                          src="/images/landing/img-grooming1.png" 
                          alt="Pet grooming services" 
                          width={282} 
                          height={450}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Grooming image right */}
                      <div className="relative flex-1 sm:absolute top-0 sm:-right-25 lg:-right-45 w-[162px] h-[263px] lg:w-[282px] lg:h-[450px] rounded-2xl overflow-hidden z-20">
                        <Image 
                          src="/images/landing/img-grooming2.png" 
                          alt="Pet grooming tools" 
                          width={282} 
                          height={450}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : tab.id === 'vet-clinics' ? (
                    // Layout for vet-clinics
                    <div className='flex flex-col gap-[10px] items-end h-full w-full'>
                      {/* Clinic image left */}
                      <div className="flex-1 sm:absolute top-0 left-0 w-full h-[160px] lg:w-[588px] lg:h-[315px] rounded-2xl overflow-hidden z-10">
                        <Image 
                          src="/images/landing/img-clinik.png" 
                          alt="Veterinary clinic" 
                          width={588} 
                          height={315}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Clinic image right */}
                      <div className="flex sm:absolute bottom-0 lg:-right-45 w-full  h-[105px] lg:w-[588px] lg:h-[202px] rounded-2xl overflow-hidden z-20">
                        <Image 
                          src="/images/landing/img-clinik2.png" 
                          alt="Veterinary clinic services" 
                          width={588} 
                          height={202}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    // Default layout: accessories left, pets right
                    <div className='flex justify-between items-center w-full h-full gap-[16px]'>
                      {/* Pet accessories image */}
                      <div className="relative flex-1 sm:absolute top-5 sm:top-20 left-0 w-[162px] h-[243px] lg:w-[282px] lg:h-[450px] rounded-2xl overflow-hidden z-10">
                        <Image 
                          src="/images/landing/who-2.png" 
                          alt="Pet accessories and products" 
                          width={282} 
                          height={450}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Person with pets image */}
                      <div className="relative flex-1 sm:absolute top-0 sm:-right-25 lg:-right-45 w-[162px] h-[263px] lg:w-[282px] lg:h-[450px] rounded-2xl overflow-hidden z-20">
                        <Image 
                          src="/images/landing/who-1.png" 
                          alt="Pet care professional with animals" 
                          width={282} 
                          height={450}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Right side - Content */}
                <div className="space-y-6">
                  <div className="space-y-6">
                    {/* Tab title and description */}
                    <div>
                      <h3 className="text-[24px] sm:text-4xl font-bold text-[#344054] mb-[16px] sm:mb-4 font-geologica leading-[30px]" style={{ fontFamily: "'Geologica', sans-serif" }}>
                        {tab.title}
                      </h3>
                      <p className="text-[14px] sm:text-base text-[#667085] leading-6 mb-[24px] sm:mb-8" style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}>
                        {tab.description}
                      </p>
                    </div>

                    {/* Features list */}
                    <FeatureList features={tab.features} />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
