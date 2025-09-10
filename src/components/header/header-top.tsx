import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa6';

import styles from './styles.module.scss';

function HeaderTop() {
  return (
    <div className={styles.header__top}>
      <div className="container">
        <div className={styles.header__top_inner}>
          <div className={styles.header__top_phone}>
            Подзвоніть нам:
            <Link href="tel:+380979472301">+380 97 947 23 01</Link>
          </div>
          <ul className={styles.header__top_social}>
            <li>
              <Link target="_blank" href="https://t.me/UA4friends">
                <FaTelegram />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/4friends" target="_blank">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.instagram.com/4friends.ua/profilecard/?igsh=MWJ5OTg1a2l4ZWkyNQ=="
              >
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
