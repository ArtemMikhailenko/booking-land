import { Headphones } from "lucide-react";
import Link from "next/link";

export function FooterPhones() {
  return (
    <div className='flex items-start gap-3 text-white font-semibold'>
      <Headphones className="size-6 text-[#9270cb]" />
      <ul className='flex flex-col gap-3'>
        <li>
          <Link href="tel:0800500505" className="hover:text-purple-300 transition-colors text-base font-semibold text-[#f4f1fa] leading-[130%]">
            0800 500 50 50
          </Link>
        </li>
        <li>
          <Link href="tel:0800500505" className="hover:text-purple-300 transition-colors text-base font-semibold text-[#f4f1fa] leading-[130%]">
            0800 500 50 50
          </Link>
        </li>
        <li>
          <Link href="tel:0800500505" className="hover:text-purple-300 transition-colors text-base font-semibold text-[#f4f1fa] leading-[130%]">
            0800 500 50 50
          </Link>
        </li>
      </ul>
    </div>
  );
}
