import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaViber,
  FaWhatsapp,
} from 'react-icons/fa6';
import { cn } from '@/lib/utils';
import styles from './socials/styles.module.scss';

interface SocialsProps {
  className?: string;
}

function Socials({ className }: SocialsProps) {
  return (
    <ul className={cn(styles.social, className)}>
      <li>
        <Link
          href="https://www.facebook.com/4friends"
          target="_blank"
          className={styles.social_link}
        >
          <FaFacebook className="size-8" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href="https://www.instagram.com/4friends.ua/profilecard/?igsh=MWJ5OTg1a2l4ZWkyNQ=="
          className={styles.social_link}
        >
          <FaInstagram className="size-8" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href="https://t.me/UA4friends"
          className={styles.social_link}
        >
          <FaTelegram className="size-8" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href="https://wa.me/+380931434503"
          className={styles.social_link}
        >
          <FaWhatsapp className="size-8" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href="https://connect.viber.com/business/4537961e-190f-11f0-909c-36482bc6d4ae?utm_source=manage&utm_medium=copy_link"
          className={styles.social_link}
        >
          <FaViber className="size-8" />
        </Link>
      </li>
    </ul>
  );
}

export default Socials;
