import React from 'react';
import { Button } from "@/components/ui/button";
import { CollaborationPlan } from '@/types';

interface PlanCardProps {
  plan: CollaborationPlan;
  onExpand?: (planId: number) => void;
  isExpanded?: boolean;
  isHidden?: boolean;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, onExpand, isExpanded = false, isHidden = false }) => {
  const isGreen = plan.bgColor === "#c9ff83";
  const isPurple = plan.bgColor === "#8B6BB1" || plan.title.includes("Оплата за продажу");
  const textColor = isGreen ? "text-black" : "text-white";
  const buttonTextColor = plan.buttonColor === "#c9ff83" ? "text-black" : "text-white";

  const handleDetailsClick = () => {
    if (onExpand) {
      onExpand(plan.id);
    }
  };

  if (isHidden) {
    return null;
  }

  // Контент для "Як це працює" для фиолетовой карточки
  const purpleCardContent = [
    {
      number: "01",
      title: "Оберіть товари", 
      description: "З готового каталогу відмічаєте потрібний асортимент, вказуєте ціну та кількість (можна додати знижку чи розпродаж). Опис і фото вже є — ви економите час та одразу виходите на продажі."
    },
    {
      number: "02",
      title: "Отримайте замовлення",
      description: "Клієнт бронює товар → ви підтверджуєте чи відхиляєте замовлення на основі наявності. Клієнт приходить у магазин і навіть номер бронювання. У вашому кабінеті відображається вся інформація про замовлення."
    },
    {
      number: "03",
      title: "Отримайте прибуток і платіть лише 3% з факту",
      description: "Ви отримуєте гроші від клієнта як завжди, а сервіс знімає лише невеликий відсоток (3%). Жодних додаткових витрат — ви платіть тільки з реальних грошей, що уже у вас в касі!"
    }
  ];

  if (isExpanded) {
    return (
      <div className="bg-white rounded-[16px] lg:rounded-[32px] shadow-lg w-full transition-all duration-300 ease-in-out">
        <div className='px-[8px] lg:px-[12px] pt-[8px] lg:pt-[12px] pb-[16px] lg:pb-[24px] rounded-[16px] lg:rounded-[24px]' style={{boxShadow:' 0 5px 11px 0 rgba(134, 131, 131, 0.1), 0 20px 20px 0 rgba(134, 131, 131, 0.09), 0 46px 27px 0 rgba(134, 131, 131, 0.05), 0 81px 32px 0 rgba(134, 131, 131, 0.01), 0 127px 35px 0 rgba(134, 131, 131, 0);'}}>
          {/* Шапка */}
          <div className="rounded-[16px] lg:rounded-[24px] p-4 lg:p-6 relative" style={{backgroundColor: plan.bgColor}}>
            <h3 className={`text-lg lg:text-[24px] font-medium ${textColor} mb-3 lg:mb-4`} style={{fontFamily: "'Geologica', sans-serif"}}>
              {plan.title}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl lg:text-5xl font-bold ${textColor}`} style={{fontFamily: "'Geologica', sans-serif"}}>
                  {plan.percentage}
                </span>
                <span className={`${textColor} text-xs lg:text-sm`} style={{fontFamily: "'Wix Madefor Display', sans-serif"}}>
                  {plan.priceNote}
                </span>
              </div>
              
              <Button 
                className={`hover:opacity-90 ${buttonTextColor} rounded-full cursor-pointer px-4 lg:px-8 py-2 font-[500] h-[40px] lg:h-[52px] w-[120px] lg:w-[170px] text-xs lg:text-base`}
                style={{backgroundColor: plan.buttonColor, fontFamily: "'Wix Madefor Text', sans-serif"}}
              >
                {plan.buttonText}
              </Button>
              
              <button 
                onClick={() => onExpand && onExpand(0)}
                className="absolute top-3 right-3 lg:top-4 lg:right-4 w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer text-base lg:text-[20px] font-normal leading-none"
              >
                ×
              </button>
            </div>
          </div>
        </div>
        
        {/* Пункты с галочками */}
        <div className="px-4 lg:px-6 py-4 lg:py-5">
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            {plan.features.filter((_, index) => index % 2 === 0).map((feature, index) => {
              const descriptionIndex = index * 2 + 1;
              const description = plan.features[descriptionIndex];
              return (
                <div key={index} className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0">
                    <svg width="20" height="20" className="lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="#344054" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-semibold text-sm lg:text-base mb-1" style={{fontFamily: "'Wix Madefor Display', sans-serif"}}>
                      {feature}
                    </h4>
                    {description && (
                      <p className="text-gray-600 text-xs lg:text-base" style={{fontFamily: "'Wix Madefor Display', sans-serif"}}>
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Секция "Як це працює" */}
        <div className="px-6 lg:px-9 pb-8 lg:pb-12">
          <h2 className="text-2xl lg:text-[36px] font-bold text-center text-[#344054] mb-4 lg:mb-6" style={{fontFamily: "'Geologica', sans-serif"}}>
            Як це працює
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            {(isPurple ? purpleCardContent : [
              {
                number: "01",
                title: "Оберіть товари", 
                description: "З готового каталогу відмічаєте потрібний асортимент, вказуєте ціну та кількість (можна додати знижку чи розпродаж). Опис і фото вже є — ви економите час та одразу виходите на продажі."
              },
              {
                number: "02",
                title: "Отримайте бронювання",
                description: "Клієнт бронює товар → ви одразу отримуєте повідомлення з його даними. Можете підтвердити або відхилити бронь (повністю чи частково) залежно від наявності. Жодних ризиків: ви самі контролюєте, що віддати клієнту."
              },
              {
                number: "03", 
                title: "Зустріч із клієнтом",
                description: "Покупець приходить у магазин за товаром. Ви продаєте йому броньований товар і маєте шанс додати супутні покупки. Якщо клієнт не прийшов - ви можете позначити його як ненадійного."
              }
            ]).map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[16px] lg:rounded-[32px] p-4 lg:p-6" 
                style={{
                  boxShadow: '3px 6px 14px 0 rgba(0, 0, 0, 0.1), 10px 23px 25px 0 rgba(0, 0, 0, 0.09), 23px 51px 33px 0 rgba(0, 0, 0, 0.05), 40px 91px 40px 0 rgba(0, 0, 0, 0.01), 63px 142px 43px 0 rgba(0, 0, 0, 0)',
                  animationDelay: `${400 + index * 150}ms`
                }}
              >
                <div className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center mb-2 lg:mb-3">
                  <span className="text-2xl lg:text-[36px] font-extrabold text-[#60478b]" style={{fontFamily: "'Wix Madefor Display', sans-serif"}}>
                    {item.number}
                  </span>
                </div>
                <h3 className="text-lg lg:text-[24px] font-bold text-[#344054] mb-2 lg:mb-3" style={{fontFamily: "'Geologica', sans-serif"}}>
                  {item.title}
                </h3>
                <p className="text-[#667085] text-sm lg:text-base leading-relaxed" style={{fontFamily: "'Wix Madefor Display', sans-serif"}}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-[16px] lg:rounded-[32px] shadow-lg lg:shadow-none lg:hover:shadow-xl relative overflow-hidden max-w-[604px] w-full">
      <div className='px-[8px] lg:px-[12px] pt-[8px] lg:pt-[12px] pb-[16px] lg:pb-[24px] rounded-[16px] lg:rounded-[24px]' style={{boxShadow:' 0 5px 11px 0 rgba(134, 131, 131, 0.1), 0 20px 20px 0 rgba(134, 131, 131, 0.09), 0 46px 27px 0 rgba(134, 131, 131, 0.05), 0 81px 32px 0 rgba(134, 131, 131, 0.01), 0 127px 35px 0 rgba(134, 131, 131, 0);'}}>
        <div className="rounded-[16px] lg:rounded-[24px] p-4 lg:p-6 relative" style={{backgroundColor: plan.bgColor}}>
          <h3 className={`text-lg lg:text-[24px] font-medium ${textColor} mb-3 lg:mb-4`} style={{fontFamily: "'Geologica', sans-serif"}}>
            {plan.title}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className={`text-3xl lg:text-5xl font-bold ${textColor}`} style={{fontFamily: "'Geologica', sans-serif"}}>
                {plan.percentage}
              </span>
              <span className={`${textColor} text-xs lg:text-sm`} style={{fontFamily: "'Wix Madefor Display', sans-serif"}}>
                {plan.priceNote}
              </span>
            </div>
            
            <Button 
              onClick={handleDetailsClick}
              className={`hover:opacity-90 ${buttonTextColor} rounded-full px-4 lg:px-8 py-2 font-[500] h-[40px] lg:h-[52px] w-[120px] lg:w-[170px] text-xs lg:text-base`}
              style={{backgroundColor: plan.buttonColor, fontFamily: "'Wix Madefor Text', sans-serif"}}
            >
              {plan.buttonText}
            </Button>
          </div>
        </div>
      </div>
        
      <div className="px-[24px] lg:px-[36px] pt-[16px] lg:pt-[24px] pb-[32px] lg:pb-[48px]">
        {plan.features.map((feature, index) => {
          const isTitle = index % 2 === 0;
          
          if (isTitle) {
            return (
              <div key={index} className={`flex items-center gap-2 lg:gap-3 ${index > 0 ? 'mt-4 lg:mt-6' : ''}`}>
                <div>
                  <svg width="20" height="20" className="lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="#344054" />
                  </svg>
                </div>
                <span className="text-gray-700 font-semibold text-sm lg:text-[16px]" style={{fontFamily: "'Wix Madefor Display', sans-serif"}}>
                  {feature}
                </span>
              </div>
            );
          } else {
            return (
              <div key={index} className="ml-6 lg:ml-9 mt-1">
                <span className="text-gray-600 text-xs lg:text-[16px]" style={{fontFamily: "'Wix Madefor Display', sans-serif" }}>
                  {feature}
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
