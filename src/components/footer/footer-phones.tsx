import { Headphones } from "lucide-react";
import Link from "next/link";

export function FooterPhones() {
  return (
    <div className='flex items-start gap-3 text-white font-semibold'>
      <Headphones className="size-6 text-purple-500" />
      <ul className='grid gap-2'>
        <li>
          <Link href="tel:+380979472301" className="hover:text-purple-300 transition-colors">
            +380 97 947 23 01
          </Link>
        </li>
        <li>
          <Link href="tel:+380753002461" className="hover:text-purple-300 transition-colors">
            +380 75 300 24 61
          </Link>
        </li>
        <li>
          <Link href="tel:+380632359617" className="hover:text-purple-300 transition-colors">
            +380 63 235 96 17
          </Link>
        </li>
      </ul>
    </div>
  );
}
