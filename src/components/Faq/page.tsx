import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div
      className="flex flex-col items-center pt-20 text-center gap-y-10 "
      id="FAQ"
    >
      <div className="bg--200">
        <div className="font-semibold text-[48px] xl:text-[58px] ">
          Frequently asked questions
        </div>
        <div className="text-gray-500 mx-auto w-[345px] sm:w-auto text-[16px] sm:text-[20px] ">
          Everything you need to know about the product and billing.
        </div>
      </div>
      <div className="p-4 w-full sm:w-[680px] xl:w-[786px] px-3 sm:px-0 mx-auto rounded-lg">
        <Accordion
          title="Is there a free trial available?"
          answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
        <Accordion
          title="Can I change my plan later?"
          answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
        <Accordion
          title="What is your cancellation policy?"
          answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
        <Accordion
          title="Can other info be added to an invoice?"
          answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
        <Accordion
          title="How does billing work?"
          answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
        <Accordion
          title="How do I change my account email?"
          answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
      </div>
    </div>
  );
};

export default Faq;
