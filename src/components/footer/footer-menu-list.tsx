"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterMenuItem {
  name: string;
  url: string;
  badge?: "default" | "secondary" | "destructive" | "outline" | "new";
}

interface FooterMenuBlockProps {
  title: string;
  items: FooterMenuItem[];
  className?: string;
}

export function FooterMenuList({
  title,
  items,
  className,
}: FooterMenuBlockProps) {
  return (
    <div className={cn("text-white font-medium w-[176px]", className)}>
      <h4 className="text-sm mb-[8px] font-medium text-[#f9fafb] leading-[150%]">{title}</h4>
      <ul className="flex flex-col gap-[8px]">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <Link
              href={item.url}
              className="flex items-center gap-2 text-base font-medium text-white leading-[150%] hover:underline hover:text-purple-300 transition-colors">
              {item.name}
            </Link>
            {item.badge && (
              <span className="text-xs bg-[#9270cb] text-[#f4f1fa] px-2 py-[2px] rounded-[16px] font-medium leading-[18px]">
                {item.badge}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
