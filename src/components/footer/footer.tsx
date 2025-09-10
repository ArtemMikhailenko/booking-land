import { categoriesList, pagesNav, BASE_URL } from '@/constants';
import { Headphones } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../socials';
import FooterForm from './footer-form';
import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer} style={{ backgroundColor: '#344054' }}>
      <div className={styles.container}>
        <div className={styles.footer__inner}>
          <div className={styles.footer__menus}>
            <ul className={styles.footer__menu}>
              <li className={styles.footer__menu_title}>Каталог</li>
              {categoriesList.map(item => (
                <li key={item.href}>
                  <a
                    href={`${BASE_URL}/catalog/map?category=${item.href}`}
                    className={styles.footer__menu_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className={styles.footer__menu}>
              <li className={styles.footer__menu_title}>Сервіси</li>
              {pagesNav.map(item => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className={styles.footer__menu_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer__contacts}>
            <FooterForm />
            <div className={styles.footer__links}>
              <div className={styles.footer__phones}>
                <Headphones />
                <ul className={styles.footer__phones_list}>
                  <li>
                    <Link
                      href="tel:+380979472301"
                      className={styles.footer__phones_link}
                    >
                      +380 97 947 23 01
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+380753002461"
                      className={styles.footer__phones_link}
                    >
                      +380 75 300 24 61
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+380632359617"
                      className={styles.footer__phones_link}
                    >
                      +380 63 235 96 17
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <Socials className={styles.footer__socials} />
                <ul className={styles.footer__payments}>
                  <li>
                    <Image
                      src="/images/payments/payment4.svg"
                      width={51}
                      height={36}
                      alt="payment"
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/payments/payment1.svg"
                      width={51}
                      height={36}
                      alt="payment"
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/payments/payment2.svg"
                      width={51}
                      height={36}
                      alt="payment"
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/payments/payment3.svg"
                      width={51}
                      height={36}
                      alt="payment"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__copyright}>
          <h2 className={styles.footer__logo}>
            <Image src="/images/logo.svg" width={100} height={100} alt="logo" />
          </h2>
          <p>©{new Date().getFullYear()}. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}
