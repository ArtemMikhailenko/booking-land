import { CategoryItem } from '@/types';

export const HERO_CATEGORIES: CategoryItem[] = [
  {
    id: 1,
    title: "Корма\nи питание",
    icon: "/images/landing/pet-food-icon.svg"
  },
  {
    id: 2,
    title: "Ліки та\nвет. товари",
    icon: "/images/landing/pet-medicine-icon.svg"
  },
  {
    id: 3,
    title: "Ігри\nта побут",
    icon: "/images/landing/pet-play-icon.svg"
  },
  {
    id: 4,
    title: "Догляд та одяг\nдля тварин",
    icon: "/images/landing/pet-closes-icon.svg"
  }
];

export const HERO_CONTENT = {
  mainTitle: "Знаходь\nпотрібне",
  subtitle: "в пару\nкліків",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
  buttonText: "Почати"
} as const;
