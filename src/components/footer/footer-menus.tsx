import { FooterMenuList } from "./footer-menu-list"

const FOOTER_CATALOG_MENU = [
  { name: "Для собак", url: "/dogs" },
  { name: "Для котів", url: "/cats" },
  { name: "Для птахів", url: "/birds" },
  { name: "Для риб", url: "/fish" },
  { name: "Для гризунів", url: "/rodents" },
];

const FOOTER_SERVICES_MENU = [
  { name: "Зоосервіс", url: "/zooservice" },
  { name: "Маркетплейс", url: "/marketplace", badge: "new" as const },
  { name: "Дошка оголошень", url: "/board", badge: "new" as const },
  { name: "Ветеринарія", url: "/veterinary" },
  { name: "Груминг", url: "/grooming" },
];

export function FooterMenus() {
  return (
    <div className="flex flex-wrap gap-7">
      <FooterMenuList title="Каталог" items={FOOTER_CATALOG_MENU} />
      <FooterMenuList title="Сервіси" items={FOOTER_SERVICES_MENU} />
    </div>
  )
}
