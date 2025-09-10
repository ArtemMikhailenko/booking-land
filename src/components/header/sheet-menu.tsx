'use client';

import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { categoriesListHeader, pagesNav } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

type SheetProps = {
  onOpen: () => void;
  isOpen: boolean;
  side: 'left' | 'right';
};

export function SheetMenu({ onOpen, isOpen, side }: SheetProps) {
  const handleLinkClick = () => {
    onOpen(); // Закрываем меню при клике на ссылку
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onOpen(); // Закрываем меню
    }
  };

  return (
    <Sheet onOpenChange={handleOpenChange} open={isOpen}>
      <SheetTitle>
        <span className="sr-only">Меню</span>
      </SheetTitle>
      <SheetContent
        side={side}
        className={cn(
          'z-[99] bg-background flex flex-col gap-0 p-0',
          styles.header__menu,
          styles.sheet_menu
        )}
      >
        <div className="pt-10 px-0">
        <nav className={styles.header__nav}>
          <div className={styles.header__nav_item}>
            <a 
              href="https://4friends.in.ua/categories" 
              className={styles.header__nav_link}
              onClick={handleLinkClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              Всі категорії
            </a>
          </div>
          {categoriesListHeader.map(item => (
            <div className={styles.header__nav_item} key={item.href}>
              <a
                href={item.href}
                className={cn(
                  styles.header__nav_link,
                  'opacity-50 cursor-not-allowed pointer-events-none relative',
                )}
                aria-disabled="true"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
              <Image
                src="/images/in-development.png"
                alt="development"
                className="absolute top-1/2 -left-[100px] transform  -translate-y-1/2"
                width={100}
                height={20}
              />
            </div>
          ))}
        </nav>
        
        <nav className={styles.header__nav}>
          {pagesNav.map(item => (
            <div key={item.href} className={styles.header__nav_item}>
              <a 
                href={item.href} 
                className={styles.header__nav_link}
                onClick={handleLinkClick}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
