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
    <div className={cn("text-white font-medium min-w-[176px]", className)}>
      <h4 className="text-sm mb-4 font-semibold">{title}</h4>
      <ul className="grid gap-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <Link
              href={item.url}
              className="flex items-center gap-2 text-base hover:underline hover:text-purple-300 transition-colors">
              {item.name}
            </Link>
            {item.badge && (
              <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full capitalize">
                {item.badge}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
