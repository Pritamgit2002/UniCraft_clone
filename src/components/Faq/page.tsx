import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const Faq = (props: Props) => {
  return (
    <div className="flex flex-col items-center pt-40 text-center gap-y-10">
      <div className="bg--200">
        <div className="font-semibold text-[48px] xl:text-[58px] ">
          Frequently asked questions
        </div>
        <div className="text-gray-500 mx-auto w-[345px] sm:w-auto text-[16px] sm:text-[20px] ">
          Everything you need to know about the product and billing.
        </div>
      </div>
      <div className="w-full sm:w-[680px] xl:w-[786px] px-3 sm:px-0 ">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-gray-800 font-medium text-[20px]">
              Is there a free trial available?
            </AccordionTrigger>
            <AccordionContent className=" text-left text-gray-500 font-medium pr-24">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-gray-800 font-medium text-[20px]">
              Can I change my plan later?
            </AccordionTrigger>
            <AccordionContent className=" text-left text-gray-500 font-medium">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-gray-800 font-medium text-[20px]">
              What is your cancellation policy?
            </AccordionTrigger>
            <AccordionContent className=" text-left text-gray-500 font-medium">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-gray-800 font-medium text-[20px]">
              Can other info be added to an invoice?
            </AccordionTrigger>
            <AccordionContent className=" text-left text-gray-500 font-medium">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-gray-800 font-medium text-[20px]">
              How does billing work?
            </AccordionTrigger>
            <AccordionContent className=" text-left text-gray-500 font-medium">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-gray-800 font-medium text-[20px]">
              How do I change my account email?
            </AccordionTrigger>
            <AccordionContent className=" text-left text-gray-500 font-medium">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
