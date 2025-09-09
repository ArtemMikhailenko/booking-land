import { FAQItem as FAQItemType } from '@/types';
import {
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  item: FAQItemType;
}

export const FAQItem = ({ item }: FAQItemProps) => {
  return (
    <AccordionItem 
      value={`item-${item.id}`}
      className=" flex flex-col gap-[12px] border-none"
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className={cn(
            "bg-white rounded-[20px] hover:shadow-lg data-[state=open]:bg-[#344054] data-[state=open]:text-white min-h-[78px] flex items-center justify-between w-full px-6 py-4 transition-all duration-200 text-left text-[20px] font-[500] text-gray-900 group"
          )}
        >
          {item.question}
          <div className="ml-4 flex-shrink-0">
            <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
            <Minus className="h-5 w-5 hidden group-data-[state=open]:block" />
          </div>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionContent className="bg-white rounded-[20px] px-6 pt-4 pb-6 text-gray-700 leading-relaxed">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );
};
