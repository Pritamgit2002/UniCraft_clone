"use client";
import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
const Accordion = ({ title, answer }: any) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-6 border-b border-gray-300">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full  text-gray-800 font-medium text-left text-[20px]"
      >
        <span>{title}</span>
        {accordionOpen ? (
          <span>
            <CiCircleMinus />
          </span>
        ) : (
          <span>
            <CiCirclePlus />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all  duration-300 ease-in-out text-left text-gray-500 font-medium pr-24 pt-5 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
