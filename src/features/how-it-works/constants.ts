import { HowItWorksData } from '@/types';

export const HOW_IT_WORKS_DATA: HowItWorksData = {
  title: "Как это работает",
  subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
  steps: [
    {
      id: 1,
      title: "Воспользуйтесь поиском",
      description: "Найдите подходящего специалиста в вашем районе через удобный поиск",
      imageSrc: "/images/landing/mobile.png"
    },
    {
      id: 2,
      title: "Выберите категорию",
      description: "Выберите нужную категорию услуг для вашего питомца",
      imageSrc: "/images/phone-categories.png"
    },
    {
      id: 3,
      title: "Забронируйте услугу",
      description: "Забронируйте удобное время и дату для оказания услуги",
      imageSrc: "/images/phone-booking.png"
    },
    {
      id: 4,
      title: "Получите услугу",
      description: "Специалист приедет в назначенное время и окажет качественную услугу",
      imageSrc: "/images/phone-service.png"
    },
    {
      id: 5,
      title: "Оставьте отзыв",
      description: "Поделитесь своим опытом и помогите другим владельцам питомцев",
      imageSrc: "/images/phone-review.png"
    }
  ]
};
