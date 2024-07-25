import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import { TimelineData } from "../common/Helper";
import Image from "next/image";

const HowWorks = () => {
  return (
    <div className="xl:py-[160px] lg:py-[120px] md:py-[90px] pt-0 pb-20 2xl:max-w-[1920px] mx-auto">
      <div className="container 2xl:max-w-[1360px] xl:max-w-[1180px] ">
        <div className="flex flex-row flex-wrap -mx-[10px] xl:-mx-[20px] 2xl:mx-0 items-end">
          <div className="pr-[10px] ps-5 2xl:px-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="lg:max-w-[530px] w-full lg:text-start text-center">
              <PrimaryHeading
                textName="How the "
                textSpan="System "
                textSpan2="Works"
                className="mb-4"
              />
              <Paragraph
                className="xl:mb-10 mb-9 "
                textName="Effortless Data Labeling: Streamlined, Accurate, and Scalable Solutions for AI Development"
              />
              <div className="w-full max-w-[530px] max-lg:mx-auto h-[400px] sm:h-[463px] xl:mb-12 lg:mb-9 mb-7 relative">
                <Image
                  src="/assets/images/home/webp/project-request.webp"
                  alt="project-request-image"
                  width={400}
                  height={360}
                  className=" rounded-2xl shadow-5xl duration-300 ease-linear relative hover:z-40"
                />
                <Image
                  src="/assets/images/home/webp/request.webp"
                  alt="project-request-image"
                  width={381}
                  height={216}
                  className="rounded-2xl absolute right-0 bottom-0 duration-300 ease-linear shadow-6xl z-20 "
                />
              </div>
              <CommonButton buttonName="Get Started Now" />
            </div>
          </div>
          <div className="pl-[10px] pr-5 2xl:px-0 w-full lg:w-1/2 lg:mt-0 mt-12 flex justify-center lg:justify-end">
            <div className="timeline_card">
              {TimelineData.map((obj, index) => (
                <div
                  key={index}
                  className="max-w-[445px] 2xl:max-w-[535px] ml-[70px] 2xl:ml-20 relative group/timeline"
                >
                  <div className="absolute group-hover/timeline:bg-blue duration-300 ease-linear -left-[68px] 2xl:-left-[78px] top-0 h-[54px] w-[54px] flex flex-col justify-center items-center bg-light_blue2 rounded-full">
                    {obj.icon}
                  </div>
                  <h4 className="sm:mb-3 mb-2 font-semibold font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-black">
                    {obj.title}
                  </h4>
                  <Paragraph textName={obj.description} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
