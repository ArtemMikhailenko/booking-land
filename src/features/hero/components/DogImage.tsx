import React from 'react';

export const DogImage: React.FC = () => {
  return (
    <>
      {/* Mobile Dog Image */}
      <div className="lg:hidden flex justify-center items-center relative w-full max-w-[343px] h-[424px] mx-auto">
        {/* Background with shadow effect */}
        <div className="absolute inset-0 rounded-[24px] overflow-hidden"
          
        />
        
        {/* Dog image */}
        <div className="relative z-10 w-full h-full rounded-[24px] overflow-hidden">
          <img 
            src="/images/landing/dog-main.png" 
            className="w-full h-full object-cover" 
            alt="Собака" 
          />
        </div>
      </div>

      {/* Desktop Dog Image */}
      <div className="hidden lg:flex justify-center items-center relative w-[636px] h-[787px]">
        {/* Dog image */}
        <img 
          src="/images/landing/dog-main.png" 
          className="w-full h-full object-cover" 
          alt="Собака" 
        />
      </div>
    </>
  );
};
