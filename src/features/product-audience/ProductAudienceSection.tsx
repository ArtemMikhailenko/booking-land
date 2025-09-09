import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FeatureList } from './components/FeatureList';
import { PRODUCT_AUDIENCE_DATA } from './constants';

export const ProductAudienceSection: React.FC = () => {
  return (
    <section className="bg-[#f0f0f0] py-16">
      <div className="max-w-[1232px] mx-auto px-[16px]">
        {/* Header */}
        <div className="text-center mb-9">
          <h2 className="text-5xl font-bold text-[#344054] font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
            {PRODUCT_AUDIENCE_DATA.title}
          </h2>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pet-stores" className="w-full">
          {/* Tab triggers */}
          <TabsList className="flex w-full gap-[24px] bg-transparent h-auto p-0 mb-16 justify-center">
            {PRODUCT_AUDIENCE_DATA.tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`
                  rounded-full px-6 py-4 font-medium transition-all duration-200 min-h-[62px] flex items-center justify-center whitespace-nowrap
                  data-[state=active]:bg-[#344054] data-[state=active]:text-white
                  data-[state=inactive]:bg-[#e3e6eb] data-[state=inactive]:text-[#344054]
                  hover:bg-[#344054] hover:text-white
                  ${tab.id === 'vet-clinics' ? 'text-lg px-6 flex-1 max-w-[383px]' : 'text-xl px-6 min-w-[247px]'}
                `}
                style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Images */}
            <div className="relative h-[600px] w-[400px]">
              {/* Pet accessories image */}
              <div className="absolute top-20 left-0 w-[282px] h-[450px] rounded-2xl overflow-hidden z-10">
                <Image 
                  src="/images/landing/who-2.png" 
                  alt="Pet accessories and products" 
                  width={282} 
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Person with pets image */}
              <div className="absolute top-0 -right-45 w-[282px] h-[450px] rounded-2xl overflow-hidden z-20">
                <Image 
                  src="/images/landing/who-1.png" 
                  alt="Pet care professional with animals" 
                  width={282} 
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              {PRODUCT_AUDIENCE_DATA.tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-0">
                  <div className="space-y-6">
                    {/* Tab title and description */}
                    <div>
                      <h3 className="text-4xl font-bold text-[#344054] mb-4 font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
                        {tab.title}
                      </h3>
                      <p className="text-base text-[#667085] leading-6 mb-8" style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}>
                        {tab.description}
                      </p>
                    </div>

                    {/* Features list */}
                    <FeatureList features={tab.features} />
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
