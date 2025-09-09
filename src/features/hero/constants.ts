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
  mainTitle: "Отримуй\nнових\nклієнтів\n",
  subtitle: "в пару\nкліків",
  description: "Вас легко знайти власникам тварин, які шукають товари та послуги саме зараз.  Отримуєте постійний потік клієнтів без додаткових зусиль.",
  buttonText: "Почати"
} as const;
