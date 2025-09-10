'use client';

import { Button } from '@/components/ui/button';
import { categoriesListHeader } from '@/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import HeaderTop from './header-top';
import { SheetMenu } from './sheet-menu';
import styles from './styles.module.scss';

export function Header() {
  const isMobile = useIsMobile();
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  // Закрыть меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isBurgerOpen && !target.closest('.mobile_menu') && !target.closest('.header__burger')) {
        setBurgerOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isBurgerOpen]);

  return (
    <header className={styles.header}>
      <HeaderTop />
      <div className="container">
        <div className={styles.header__inner}>
          <Link href="/">
            <Image src="/images/logo.svg" width={132} height={100} alt="logo" />
          </Link>

          <div className={styles.header__auth_wrap}>
            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className={styles.header__nav}>
                <li className={styles.header__nav_item}>
                  <Link href="/categories" className={styles.header__nav_link}>
                    Всі категорії
                  </Link>
                </li>
                {categoriesListHeader.map(item => (
                  <li className={styles.header__nav_item} key={item.href}>
                    <Link
                      href={`/catalog/map?category=${item.href}`}
                      className={cn(
                        styles.header__nav_link,
                        'opacity-50 cursor-not-allowed pointer-events-none',
                      )}
                      aria-disabled="true"
                    >
                      {item.label}
                    </Link>
                    <Image
                      src="/images/in-development.png"
                      alt="dev"
                      width={100}
                      height={20}
                      className="w-full h-auto"
                    />
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Auth buttons */}
            <div className={`${styles.header__auth} hidden lg:flex`}>
              <Button
                asChild
                variant="ghost"
                className={styles.header__auth_btn}
              >
                <Link href="https://external-login-site.com" target="_blank">Увійти</Link>
              </Button>
              <Button
                asChild
                variant="default"
                className={styles.header__auth_btn}
                style={{ backgroundColor: '#9270cb', color: 'white' }}
              >
                <Link href="https://external-signup-site.com" target="_blank">Реєстрація</Link>
              </Button>
            </div>

            {/* Mobile burger button */}
            <Button
              className={`${styles.header__burger} lg:hidden`}
              variant="ghost"
              onClick={() => setBurgerOpen(!isBurgerOpen)}
            >
              <RxHamburgerMenu />
            </Button>
          </div>
        </div>
      </div>

      <SheetMenu
        isOpen={isBurgerOpen}
        onOpen={() => setBurgerOpen(false)}
        side="right"
      />
    </header>
  );
}
