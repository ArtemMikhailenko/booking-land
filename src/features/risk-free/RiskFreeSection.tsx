import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FeatureCard } from "./components/FeatureCard";
import { RISK_FREE_DATA } from "./constants";

export function RiskFreeSection() {
  return (
    <section className="bg-[#f0f0f0] py-16 relative overflow-hidden">
      <div className="max-w-[1232px] mx-auto px-[16px]">
        <div className="flex gap-[25px] mx-auto relative">
            <img src="/images/landing/4friend-icon.svg" className='absolute top-[49%] left-[33%] translate-x-[-50%] translate-y-[-50%] z-10' alt="" />
          <div className="flex flex-col max-w-[384px] h-[646px]">
            <h2 className="font-bold text-gray-800 mb-12 text-right" style={{fontSize: '48px', lineHeight: '130%'}}>
              {RISK_FREE_DATA.title}
            </h2>
            
            <div className="mb-8 h-[351px]">
              <FeatureCard feature={RISK_FREE_DATA.features[0]} />
            </div>
            
            <Button 
              size="lg" 
              className="bg-[#9270cb] hover:bg-[transparent] hover:text-[#9270cb] hover:border-[#9270cb] border border-[#9270cb] h-[60px] text-white px-8 py-4 rounded-full text-lg w-full"
            >
              {RISK_FREE_DATA.buttonText}
            </Button>
          </div>

          {/* ПРАВАЯ КОЛОНКА - грид из двух подколонок (карточки + фото) */}
          <div className="grid grid-cols-2 gap-[25px] items-start w-full h-[646px]">
            {/* Подколонка с двумя карточками */}
            <div className="space-y-8 w-full">
              <div className="-mt-4  h-[311px]">
                <FeatureCard feature={RISK_FREE_DATA.features[0]} />
              </div>
              <div className="mt-8  h-[311px]">
                <FeatureCard feature={RISK_FREE_DATA.features[1]} />
              </div>
            </div>
            
            <div className="relative w-full h-full flex flex-col">
              {/* Контейнер для изображения собаки */}
              <div className="flex-1  flex justify-center max-h-[646px]">
                {/* Здесь будет ваше изображение */}
                <img src="/images/landing/dog-why-we.png" className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
