import React from 'react';
import Image from 'next/image';
import { CategoryItem } from '@/types';

interface CategoryCardProps {
  category: CategoryItem;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-xl  group flex-row-reverse">
      {/* Category title */}
      <div className="text-gray-800 font-medium text-sm leading-tight whitespace-pre-line text-left">
        {category.title}
      </div>
      
      {/* Icon container */}
      <div className="w-[64px] h-[64px]">
        <Image 
          src={category.icon} 
          alt={category.title.replace('\n', ' ')} 
          width={64} 
          height={64}
        />
      </div>
    </div>
  );
};
