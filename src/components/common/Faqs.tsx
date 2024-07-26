"use client";
import React, { useState } from "react";
import { FaqList } from "./Helper";
import PrimaryHeading from "./PrimaryHeading";
import Paragraph from "./Paragraph";

interface FaqData {
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container xl:max-w-[1180px]" id="faq">
      <PrimaryHeading textName="FAQs" className="text-center text-blue" />
      <Paragraph textName="You have got Question. We have got Answer" className="font-normal text-sm md:text-base text-center mt-2 md:mt-4" />
      <div className="max-w-[975px] mx-auto mt-5 lg:mt-[60px]">
        {FaqList.map((data: FaqData, index: number) => (
          <div
            key={index}
            className={`overflow-hidden transition-all duration-500 ease-in-out rounded-2xl ${activeIndex === index ? "border-[0.5px] border-transparent bg-smoke_blue" : "border-[0.5px] border-grey"
              } mt-5`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className={`${activeIndex === index ? "bg-blue" : "bg-transparent"} w-full text-left p-3 lg:p-6 transition duration-300 ease-in-out`}
            >
              <div className="flex justify-between items-center">
                <span className={`${activeIndex === index ? "text-white" : "text-black"} text-sm md:text-lg xl:text-md font-medium transition-colors duration-300`}>
                  {data.question}
                </span>
                <span className="float-right transition-transform duration-300 ease-in-out">
                  <div className={`size-5 md:size-6 flex justify-center items-center rounded-full ${activeIndex === index ? "bg-white" : "bg-blue"} transition-colors duration-300`}>
                    <svg
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 ease-in-out ${activeIndex === index ? "transform rotate-180" : ""}`}
                    >
                      <path
                        className={`transition-colors duration-300 ${activeIndex === index ? "fill-blue" : "fill-white"}`}
                        d="M1.37237 0.280468C1.67927 0.115283 2.05901 0.178211 2.29623 0.433566L3.34936 1.56721C4.44429 2.74585 6.30995 2.74585 7.40488 1.56721L8.458 0.433565C8.69522 0.17821 9.07496 0.115283 9.38186 0.280469C9.82325 0.518032 9.92111 1.10859 9.57995 1.47583L7.592 3.61577C6.39603 4.90319 4.3582 4.90319 3.16223 3.61577L1.17428 1.47583C0.833123 1.10859 0.930986 0.518032 1.37237 0.280468Z"
                      />
                    </svg>
                  </div>
                </span>
              </div>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className={`p-3 lg:p-6 transition-opacity duration-300 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}>
                <p className="font_gilroy_regular text-sm md:text-lg xl:text-xl text-grey max-w-[857px]">{data.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;