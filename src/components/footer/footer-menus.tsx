import { FooterMenuList } from "./footer-menu-list"

const FOOTER_CATALOG_MENU = [
  { name: "Ветклініки", url: "/veterinary" },
  { name: "Грумінги", url: "/grooming", badge: "new" as const },
  { name: "Вигул", url: "/walking" },
  { name: "Зоомагазини", url: "/petshops" },
  { name: "Готелі", url: "/hotels" },
  { name: "Кінологи", url: "/cynologists" },
  { name: "Розплідники", url: "/breeders" },
];

const FOOTER_SERVICES_MENU = [
  { name: "Контакти", url: "/contacts" },
  { name: "Блог і новини", url: "/blog" },
  { name: "Бібліотека знань", url: "/knowledge" },
  { name: "Тарифи", url: "/pricing" },
  { name: "Технічна підтримка", url: "/support" },
  { name: "Співпраця", url: "/partnership" },
];

const FOOTER_SERVICES_MENU_2 = [
  { name: "Контакти", url: "/contacts" },
  { name: "Блог і новини", url: "/blog" },
  { name: "Бібліотека знань", url: "/knowledge" },
  { name: "Тарифи", url: "/pricing" },
  { name: "Технічна підтримка", url: "/support" },
  { name: "Співпраця", url: "/partnership" },
];

export function FooterMenus() {
  return (
    <div className="flex gap-[28px]">
      <FooterMenuList title="Каталог" items={FOOTER_CATALOG_MENU} />
      <FooterMenuList title="Сервіси" items={FOOTER_SERVICES_MENU} />
      <FooterMenuList title="Сервіси" items={FOOTER_SERVICES_MENU_2} />
    </div>
  )
}
