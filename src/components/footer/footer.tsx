import Socials from "../socials"
import { FooterBottom } from "./footer-bottom"
import FooterForm from "./footer-form"
import { FooterMenus } from "./footer-menus"
import { FooterPayments } from "./footer-payments"
import { FooterPhones } from "./footer-phones"

export function Footer() {
  return (
    <>
    <footer className="bg-gray-900 mt-20 hidden py-9 sm:block">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <FooterMenus />
          <div className="grid w-full max-w-[486px] shrink-0 gap-10">
            <FooterForm />
            <div className="flex flex-wrap justify-between gap-3 sm:flex-nowrap">
              <FooterPhones />
              <div className="grid gap-6">
                <Socials
                  networks={[
                    "facebook",
                    "instagram",
                    "telegram",
                    "viber",
                    "whatsapp",
                  ]}
                  size={32}
                  className="justify-between"
                />
                <FooterPayments />
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
    </>
  )
}
