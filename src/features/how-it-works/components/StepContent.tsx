import { HowItWorksStep } from '@/types';
import Image from 'next/image';

interface StepContentProps {
  step: HowItWorksStep;
}

export const StepContent = ({ step }: StepContentProps) => {
  return (
    <div className={`flex items-center justify-center mx-auto ${step.id === 2 ? 'pb-10 lg:pb-0' : ''}`}>
      <div className="relative flex justify-center">
        {step.id === 2 && step.imageSrc && step.imageSrc2 ? (
          // Special layout for step 2 with two images
          <div className="relative">
            <div className="flex items-center justify-center gap-[12px] lg:gap-[23px]">
              <div className="relative w-[145px] h-[280px] lg:w-[390px] lg:h-[500px] b-0">
                <img
                  src={step.imageSrcMobile || step.imageSrc} 
                  alt={`${step.title} - left`}
                  className="w-full h-full object-contain lg:hidden"
                />
                <img
                  src={step.imageSrc} 
                  alt={`${step.title} - left`}
                  className="w-full h-full object-contain hidden lg:block"
                />
              </div>
              <div className="relative w-[145px] h-[280px] lg:w-[390px] lg:h-[500px]">
                <img
                  src={step.imageSrc2Mobile || step.imageSrc2}
                  alt={`${step.title} - right`}
                  className="w-full h-full object-contain lg:hidden"
                />
                <img
                  src={step.imageSrc2}
                  alt={`${step.title} - right`}
                  className="w-full h-full object-contain hidden lg:block"
                />
              </div>
            </div>
            
            {/* Наложенные элементы для второго шага */}
            <div className="absolute top-[45px] -left-[45px] lg:top-[90px] lg:-left-[118px] w-[172px] h-[22px] lg:w-[460px] lg:h-[156px]">
              <img src="/images/landing/tab2-mob1.webp" alt="" className="w-full h-full object-contain" />
              
              <div className="absolute -top-[80px] left-[30px] lg:-top-[70px] lg:-left-[60px] text-[#344054] text-[12px] lg:text-[24px] font-[500] font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
                Вивчає все <br /> про товар
              </div>
            </div>
            
         
            
            <div className="absolute bottom-[80px] right-[-25px] lg:bottom-[100px] lg:right-[-150px] w-[129px] h-[82px] lg:w-[441px] lg:h-[108px]">
               <img src="/images/landing/tab2-mob2.webp" alt="" className="w-full h-full object-contain" />
              <div className="absolute -top-[151px] right-[2px] lg:-top-[203px] lg:right-[25px] text-[#344054] text-[12px] lg:text-[24px] font-[500] text-right w-[125px] lg:w-[250px] font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
                Обирає вагу,<br className='hidden sm:block'/> колір та інші<br className='hidden sm:block'/> параметри
              </div>
            </div>
          </div>
        ) : (
          // Default layout for other steps
          <div className="relative w-[244px] h-[300px] lg:w-[487px] lg:h-[600px]">
            <div className="absolute inset-0">
              {step.imageSrc && (
                <Image
                  src={step.imageSrc}
                  alt={step.title}
                  fill
                  className="object-contain w-[244px] h-[250px] lg:w-[487px] lg:h-[500px]"
                />
              )}
            </div>
            
            {step.id === 1 && (
              <>
                <div className="absolute top-[80px] -left-[24px] lg:top-[160px] lg:-left-[88px] w-[186px] h-[60px] lg:w-[460px] lg:h-[156px]">
                  <img src="/images/landing/tab1-mob.webp" alt="" className="w-full h-full object-contain" />
                  
                  <div className="absolute -top-[100px] -left-[25px] lg:-top-[40px] lg:-left-[110px] text-[#344054] text-[12px] lg:text-[24px] font-[500] font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
                    Скористуйтесь <br /> пошуком
                  </div>
                </div>
                
                <div className="absolute bottom-[50px] left-[130px] lg:bottom-[100px] lg:left-[200px] w-[166px] h-[40px] lg:w-[441px] lg:h-[108px]">
                  <img src="/images/landing/tab1-mob2.webp" alt="" className="w-full h-full object-contain" />
                  <div className="absolute bottom-[116px] -right-[12px] lg:bottom-[73px] lg:-right-[145px] text-[#344054] text-[12px] lg:text-[24px] font-[500] text-right w-[96px] lg:w-[192px] font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
                    або оберіть категорію
                  </div>
                </div>
              </>
            )}
            
            {step.id === 3 && (
              <>
                <div className="absolute top-[10px] right-[95px] lg:top-[20px] lg:right-[190px] w-[230px] h-[78px] lg:w-[396px] lg:h-[245px]">
                  <img src="/images/landing/tab3-mob1.webp" alt="" className="w-full h-full object-contain" />
                  
                  <div className="absolute -top-[35px] right-[95px] lg:-top-[40px] lg:right-[300px] text-[#344054] text-[12px] lg:text-[24px] font-[500] text-right font-geologica text-nowrap" style={{ fontFamily: "'Geologica', sans-serif" }}>
                    Порівняй ціни
                  </div>
                </div>
                
                <div className="absolute bottom-[35px] left-[110px] lg:bottom-[40px] lg:left-[280px] w-[180px] h-[130px] lg:w-[382px] lg:h-[276px]">
                  <img src="/images/landing/tab3-mob2.webp" alt="" className="w-full h-full object-contain" />
                  <div className="absolute flex flex-col -top-[166px] -right-[12px] lg:bottom-[273px] lg:-right-[45px] text-[#344054] text-[12px] lg:text-[24px] font-[500]  font-geologica text-right justify-end items-end" style={{ fontFamily: "'Geologica', sans-serif" }}>
                    <span>Швидко знаходить </span>
                    <span>магазин на мапі</span>
                  </div>
                </div>
              </>
            )}
            
            {step.id === 4 && (
              <>
                <div className="absolute bottom-[135px] -left-[45px] lg:bottom-[290px] lg:-left-[150px] w-[188px] h-[50px] lg:w-[406px] lg:h-[108px]">
                  <img src="/images/landing/tab4-mob1.webp" alt="" className="w-full h-full object-contain" />
                  
                  <div className="absolute -top-[150px] -left-[15px] lg:bottom-[90px] lg:-left-[170px] text-[#344054] text-[12px] lg:text-[24px] font-[500] font-geologica" style={{ fontFamily: "'Geologica', sans-serif" }}>
                    Керуй товарами з<br className='lg:hidden'/> зручної<br className='hidden lg:block'/> адмін панелі
                  </div>
                </div>
                
                <div className="absolute bottom-[15px] -right-[100px] lg:bottom-[100px] lg:-right-[200px] w-[182px] h-[219px] lg:w-[353px] lg:h-[424px]">
                  <img src="/images/landing/tab4-mob2.webp" alt="" className="w-full h-full object-contain" />
                  <div className="absolute flex flex-col -top-[100px] right-[72px] lg:-top-[45px] lg:-right-[145px] text-[#344054] text-[12px] lg:text-[24px] font-[500] text-right w-[96px] lg:w-[192px] font-geologica justify-end items-end" style={{ fontFamily: "'Geologica', sans-serif" }}>
                    <span className='text-nowrap'>легко редагуй ціни</span>
                    <span>та знижки</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
