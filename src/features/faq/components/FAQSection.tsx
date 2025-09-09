import { Accordion } from '@/components/ui/accordion';
import { FAQ_DATA } from '../constants';
import { FAQItem } from './FAQItem';

export const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className=" mx-auto px-4 max-w-[994px]">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          {FAQ_DATA.title}
        </h2>
        
        <Accordion type="single" collapsible className="space-y-[24px]">
          {FAQ_DATA.items.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </Accordion>
      </div>
    </section>
  );
};
