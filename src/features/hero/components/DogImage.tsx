import React from 'react';

export const DogImage: React.FC = () => {
  return (
    <div className="flex justify-center items-center relative w-[636px] h-[787px]">
      {/* Glass container */}
     
        
        {/* Dog image */}
          <img 
            src="/images/landing/dog-main.png" 
            className="w-full h-full object-cover" 
            alt="Собака" 
          />
       
    </div>
  );
};
