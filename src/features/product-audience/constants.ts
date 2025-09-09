import { ProductAudienceData } from '@/types';

export const PRODUCT_AUDIENCE_DATA: ProductAudienceData = {
  title: "Для кого створено продукт",
  tabs: [
    {
      id: "pet-stores",
      title: "Зоомагазины",
      description: "Lorem ipsum dolor sit amet consectetur. Pellentesque arcu metus mauris montes egestas. Adipiscing hac felis netus habitasse tellus senectus ac. Nec mauris nisl massa consequat tincidunt.",
      features: [
        {
          id: 1,
          title: "Желание 1",
          description: "Lorem ipsum dolor sit amet consectetur. Pellentesque arcu metus mauris montes egestas. Adipiscing hac felis netus habitasse tellus senectus ac."
        },
        {
          id: 2,
          title: "Желание 2",
          description: "Lorem ipsum dolor sit amet consectetur. Pellentesque arcu metus mauris montes egestas. Adipiscing hac felis netus habitasse tellus senectus ac."
        },
        {
          id: 3,
          title: "Желание 3",
          description: "Lorem ipsum dolor sit amet consectetur. Pellentesque arcu metus mauris montes egestas. Adipiscing hac felis netus habitasse tellus senectus ac."
        }
      ]
    },
    {
      id: "vet-pharmacies",
      title: "Ветаптеки",
      description: "Специализированные ветеринарные аптеки и клиники, которые предоставляют медицинские товары и услуги для животных.",
      features: [
        {
          id: 1,
          title: "Медицинские товары",
          description: "Широкий ассортимент ветеринарных препаратов и медицинского оборудования для лечения животных."
        },
        {
          id: 2,
          title: "Консультации",
          description: "Профессиональные консультации по применению препаратов и уходу за больными животными."
        },
        {
          id: 3,
          title: "Рецептурные препараты",
          description: "Возможность заказа специализированных рецептурных лекарств для животных."
        }
      ]
    },
    {
      id: "grooming",
      title: "Груминги",
      description: "Салоны красоты для животных, предоставляющие услуги по уходу за внешним видом питомцев.",
      features: [
        {
          id: 1,
          title: "Стрижка и укладка",
          description: "Профессиональная стрижка и укладка шерсти для различных пород животных."
        },
        {
          id: 2,
          title: "Гигиенические процедуры",
          description: "Купание, чистка ушей, стрижка когтей и другие гигиенические процедуры."
        },
        {
          id: 3,
          title: "Косметические услуги",
          description: "SPA-процедуры, массаж и косметические средства для ухода за животными."
        }
      ]
    },
    {
      id: "vet-clinics",
      title: "Ветклиники, которые продают товары",
      description: "Ветеринарные клиники, которые помимо медицинских услуг также продают товары для животных.",
      features: [
        {
          id: 1,
          title: "Комплексное обслуживание",
          description: "Сочетание ветеринарных услуг с продажей необходимых товаров для животных."
        },
        {
          id: 2,
          title: "Профессиональные рекомендации",
          description: "Рекомендации ветеринаров по выбору кормов и средств ухода для конкретного животного."
        },
        {
          id: 3,
          title: "Лечебные диеты",
          description: "Специализированные корма и добавки для животных с особыми потребностями."
        }
      ]
    }
  ]
};
