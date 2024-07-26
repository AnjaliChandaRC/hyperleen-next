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
    <div className="pt-[111px] 2xl:max-w-[1920px] mx-auto">
      <div className="container max-w-[1180px]">
        <div className="flex flex-row flex-wrap -mx-5">
          <div className="2xl:px-5 w-full lg:w-1/2 px-5 lg:pl-5 lg:pr-3 flex lg:justify-start justify-center">
            <div className="xl:max-w-[522px] lg:max-w-[465px] max-w-[300px] sm:max-w-[430px] h-[400px] sm:h-[540px] lg:h-[580px] xl:h-[678px] w-full relative">
              <Image
                src="/assets/images/ai-trainer/png/trainer.png"
                width={522}
                height={503}
                alt="trainer-image"
                className="pointer-events-none"
              />
              <div className="xl:max-w-[502px] sm:max-w-[415px] max-w-[289px] w-full sm:h-[74px] h-[50px] bg-blue rounded-t-2xl flex flex-col items-center justify-center absolute right-0 lg:top-5 sm:top-[18px] top-3">
                <h3 className="text-white text-[24px] sm:text-[32px] leading-[43px] text-center font_gilroy_bold">
                  AI Trainers
                </h3>
              </div>
              {/* remove error image */}
              <Image
                src="/assets/images/ai-trainer/webp/remove-error.webp"
                width={339}
                height={212}
                alt="trainer-image"
                className="pointer-events-none absolute bottom-0 left-0 sm:max-w-[270px] max-w-[220px] lg:max-w-[300px]"
              />
              {/* triangle card */}
              <div className="absolute bottom-[85px] right-12 z-10">
                <div className="relative">
                  <span className="absolute rotate-[36deg] -left-3 -top-3">
                    <Triangle />
                  </span>
                  <p className="text-white text-[12px] leading-5 bg-blue w-[135px] h-[31px] py-1 text-center rounded-[17px]">
                    Remove Errors
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:px-5 w-full lg:w-1/2 px-5 lg:pr-5 lg:pl-3 flex lg:justify-end justify-center lg:mt-0 mt-12">
            <div className="max-w-[558px] min-h-[663px] text-center lg:text-start">
              <PrimaryHeading
                className="mb-4 text-center lg:text-start"
                textName="AI Trainers "
                blueText="for Java, Swift"
                blackText=", Python"
              />
              <Paragraph
                className="mb-6 text-center lg:text-start"
                textName="The AI Trainer for Java, Swift, and Python is a seasoned expert in crafting high-quality code, evaluating AI-generated solutions, and developing robust test cases. With extensive knowledge in these programming languages, the trainer ensures precision and efficiency in AI training processes, contributing to innovative and reliable AI applications."
              />
              {/* accordion */}
              <div className="mb-12 max-w-[558px] w-full flex flex-col gap-4">
                {/* accordion-item */}
                {TrainerLanguageData.map(
                  (value: AccordionData, index: number) => (
                    <div
                      key={index}
                      className={`flex cursor-pointer gap-4 rounded-2xl border-[0.5px] border-blue bg-white overflow-hidden ${
                        openAccordion === index ? "!pb-5" : " "
                      }`}
                    >
                      <span
                        onClick={() => toggleAccordion(index)}
                        className="size-fit !py-5 pl-5"
                      >
                        <Image
                          src={value.imageSrc}
                          width={36}
                          height={36}
                          alt="language-icon"
                          className="pointer-events-none"
                        />
                      </span>
                      {/*  */}
                      <div>
                        {/* accordion-head */}
                        <div
                          onClick={() => toggleAccordion(index)}
                          className={`pt-5 pr-5 flex items-center gap-4 w-full ${
                            openAccordion === index ? "!pb-3" : "pb-5"
                          }`}
                        >
                          <Paragraph
                            className="!font-semibold !text-black"
                            textName={value.title}
                          />
                        </div>
                        {/* accordion-body */}
                        <div
                          className={`px-5 flex justify-end duration-300 ease-linear w-full max-h-0 ${
                            openAccordion === index
                              ? "max-h-[288px] !pt-1"
                              : "pt-2"
                          }`}
                        >
                          <div className="max-w-[466px]">
                            {value.bodyTexts.map((bodyText, i) => (
                              <Paragraph
                                key={i}
                                className="trainer_accordion_dots text-start"
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
