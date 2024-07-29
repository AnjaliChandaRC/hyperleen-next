"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Triangle } from "../common/Icons";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import { TrainerLanguageData } from "../common/Helper";

const TrainersFor = () => {
  interface AccordionData {
    imageSrc: string;
    title: string;
    bodyTexts: string[];
  }

  const [openAccordion, setOpenAccordion] = useState<null | number>(null);
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="xl:pt-[111px] sm:pt-[30px] pt-0 2xl:max-w-[1536px] mx-auto overflow-hidden">
      <div className="container max-w-[1180px]">
        <div className="flex flex-row flex-wrap -mx-5">
          <div className="2xl:px-5 w-full lg:w-1/2 px-5 lg:pl-5 lg:pr-3 flex lg:justify-start justify-center">
            <div className="xl:max-w-[522px] md:max-w-[470px] sm:max-w-[420px] max-w-[268px] xl:h-[678px] md:h-[610px] sm:h-[550px] h-[350px] w-full relative">
              <div className="xl:max-w-[395px] md:max-w-[360px] sm:max-w-[310px] max-w-[210px] w-full xl:h-[370px] md:h-[340px] sm:h-[300px] h-[200px] rounded-2xl bg-blue opacity-10 pointer-events-none"></div>
              {/* blue layer */}
              <Image
                src="/assets/images/ai-trainer/webp/trainer-bg-layer.webp"
                width={398}
                height={1313}
                alt="trainer-image"
                className="pointer-events-none absolute max-h-[1313px] xl:-top-[109%] lg:-top-[122%] md:-top-full hidden sm:inline-block -top-[125%] xl:-left-1/2 lg:-left-[70%] md:-left-[77%] -left-[85%] -rotate-45"
              />
              {/* trainer image */}
              <div className="absolute sm:top-5 top-2 sm:left-5 left-2 w-full xl:max-w-[502px] md:max-w-[450px] sm:max-w-[400px] max-w-[260px] xl:h-[483px]">
                <div className="relative w-full">
                  <Image
                    src="/assets/images/ai-trainer/webp/trainer.webp"
                    width={502}
                    height={483}
                    alt="trainer-image"
                    className="pointer-events-none rounded-2xl shadow-10xl"
                  />
                  <div className="bg-blue rounded-t-2xl w-full lg:h-[74px] absolute top-0">
                    <h3 className="text-white lg:text-[32px] text-2xl sm:text-[28px] lg:leading-[43px] sm:leading-9 leading-7 text-center font_gilroy_medium sm:py-4 py-3">
                      AI Trainers
                    </h3>
                  </div>
                </div>
              </div>
              {/* remove error image */}
              <Image
                src="/assets/images/ai-trainer/webp/remove-error.webp"
                width={339}
                height={212}
                alt="remove-error-image"
                className="pointer-events-none bottom-0 left-0 absolute z-10 max-xl:max-w-[300px] max-md:max-w-[280px] max-sm:max-w-[180px]"
              />
              {/* remove-error-text */}
              <div className="absolute sm:bottom-[85px] bottom-[35px] md:right-12 right-0 z-10">
                <div className="relative">
                  <span className="absolute rotate-[36deg] -left-3 -top-3">
                    <Triangle />
                  </span>
                  <p className="text-white text-[12px] leading-5 bg-blue sm:w-[135px] w-[110px] h-[31px] py-1 text-center rounded-[17px]">
                    Remove Errors
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:px-5 w-full lg:w-1/2 px-5 lg:pr-5 lg:pl-3 flex lg:justify-end justify-center lg:mt-0 md:mt-12 mt-10">
            <div className="lg:max-w-[558px] max-w-[740px] text-center lg:text-start">
              <PrimaryHeading
                className="lg:mb-4 mb-3 text-center lg:text-start"
                textName="AI Trainers "
                blueText="for Java, Swift"
                blackText=", Python"
              />
              <Paragraph
                className="mb-6 text-center lg:text-start"
                textName="The AI Trainer for Java, Swift, and Python is a seasoned expert in crafting high-quality code, evaluating AI-generated solutions, and developing robust test cases. With extensive knowledge in these programming languages, the trainer ensures precision and efficiency in AI training processes, contributing to innovative and reliable AI applications."
              />
              {/* accordion */}
              <div className="xl:mb-12 sm:mb-10 mb-6 lg:max-w-[558px] max-w-[600px] mx-auto w-full flex flex-col sm:gap-4 gap-3">
                {/* accordion-item */}
                {TrainerLanguageData.map(
                  (value: AccordionData, index: number) => (
                    <div
                      key={index}
                      className={`flex cursor-pointer gap-4 sm:rounded-2xl rounded-xl w-full border-[0.5px] border-blue bg-white overflow-hidden ${
                        openAccordion === index ? "!pb-5" : " "
                      }`}
                    >
                      <span
                        onClick={() => toggleAccordion(index)}
                        className="size-fit sm:!py-5 py-3 sm:pl-5 pl-4"
                      >
                        <Image
                          src={value.imageSrc}
                          width={36}
                          height={36}
                          alt="language-icon"
                          className="pointer-events-none"
                        />
                      </span>
                      <div className="max-lg:w-full">
                        {/* accordion-head */}
                        <div
                          onClick={() => toggleAccordion(index)}
                          className={`sm:pt-[26px] pt-4 duration-300 ease-linear sm:pr-5 pr-4 flex items-center gap-4 w-full ${
                            openAccordion === index
                              ? "!pb-3"
                              : "sm:pb-[26px] pb-4"
                          }`}
                        >
                          <Paragraph
                            className="!font-semibold !text-black"
                            textName={value.title}
                          />
                        </div>
                        {/* accordion-body */}
                        <div
                          className={`sm:px-5 px-4 flex justify-end duration-300 ease-linear w-full max-h-0 ${
                            openAccordion === index
                              ? "xl:max-h-[288px] sm:max-h-[318px] max-h-[344px] !pt-1"
                              : ""
                          }`}
                        >
                          <div className="max-w-[466px]">
                            {value.bodyTexts.map((bodyText, i) => (
                              <Paragraph
                                key={i}
                                className="accordion_dots text-start max-sm:text-sm"
                                textName={bodyText}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
              <CommonButton text="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainersFor;
