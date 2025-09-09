import React from 'react';
import { CategoryItem } from '@/types';
import { CategoryCard } from './CategoryCard';

interface CategoriesListProps {
  categories: CategoryItem[];
}

export const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
  return (
    <div className="space-y-4 mt-8 flex flex-col items-start">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};
