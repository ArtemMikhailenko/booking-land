import { CollaborationData } from '@/types';

export const COLLABORATION_DATA: CollaborationData = {
  title: "Формат сотрудничества",
  subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
  plans: [
    {
      id: 1,
      title: "“Оплата за бронь”",
      percentage: "0.5%",
      priceNote: "від продажу",
      description: "Тут треба розписати про цю форму співпраці",
      buttonText: "Обрати",
      features: [
        "5 рекламних банерів",
        "10 показів с топ списку",
        "15 кліків на оголошення",
        "20 нових підписників",
        "25 відгуків від користувачів"
      ],
      bgColor: "#c9ff83",
      buttonColor: "#9270cb"
    },
    {
      id: 2,
      title: "“Оплата за продажу”",
      percentage: "3%",
      priceNote: "від продажу",
      description: "Тут треба розписати про цю форму співпраці",
      buttonText: "Обрати",
      features: [
        "5 рекламних банерів",
        "10 показів с топ списку",
        "15 кліків на оголошення",
        "20 нових підписників",
        "25 відгуків від користувачів"
      ],
      bgColor: "#9270cb",
      buttonColor: "#c9ff83"
    }
  ]
};
