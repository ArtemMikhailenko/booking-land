import { HowItWorksStep } from '@/types';
import Image from 'next/image';

interface StepContentProps {
  step: HowItWorksStep;
}

export const StepContent = ({ step }: StepContentProps) => {
  return (
    <div className="flex items-center justify-center mx-auto">
      <div className="relative  flex justify-center">
        <div className="relative w-[487px] h-[650px]">
          <div className="absolute inset-0 ">
            {step.imageSrc && (
              <Image
                src={step.imageSrc}
                alt={step.title}
                fill
                className="object-contain  w-[487px] h-[500px]"
              />
            )}
          </div>
          
          <div className="absolute top-[160px] -left-[88px] w-[460px] h-[156px]">
            <img src="/images/landing/tab1-mob.png" alt="" />
            
            <div className="absolute -top-[40px] -left-[110px] text-[#344054] text-[24px] font-[500] font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }} >
              Воспользуйтесь <br /> поиском
            </div>
          </div>
          
          <div className="absolute bottom-[100px] left-[200px] w-[441px] h-[108px]">
               <img src="/images/landing/tab2-mob.png" alt="" />
             <div className="absolute bottom-[73px] -right-[145px] text-[#344054] text-[24px] font-[500] text-right w-[192px] font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
            или выберите категорию
          </div>
          </div>
          
         
         
        </div>
      </div>
    
    </div>
  );
};
