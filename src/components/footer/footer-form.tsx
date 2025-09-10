'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import Envelopes from './envelopes';
import styles from './styles.module.scss';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface FooterFormProps {
  showCheckboxProp?: boolean;
}

function FooterForm({ showCheckboxProp }: FooterFormProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.footer__form}>
      <h3 className={styles.footer__form_title}>
        <Envelopes />
        Підпишіться, щоб отримувати найкращі пропозиції першим
      </h3>
      <form className={styles.footer__form_form}>
        <div
          className={cn(styles.footer__form_form_row, {
            [styles.withCheckbox]: showCheckboxProp,
          })}
        >
          <Input
            type="text"
            placeholder="Email"
            className={styles.footer__form_input}
          />
          <Button
            type="submit"
            variant="default"
            className={styles.footer__form_btn}
          >
            Підписатись
          </Button>
        </div>

        {showCheckboxProp && (
          <div className={styles.footer__form_checkbox}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="border-[#98A2B3]"
            />
            <span>Я даю згоду на обробку даних</span>
          </div>
        )}
      </form>
    </div>
  );
}

export default FooterForm;
