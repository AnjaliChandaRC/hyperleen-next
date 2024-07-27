import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import { DownArrow, Triangle } from "../common/Icons";
import { EnsureStep1, EnsureStep2, EnsureStep3 } from "../common/Helper";

const EnsureHighQuality = () => {
  return (
    <div className="2xl:max-w-[1920px] mx-auto">
      <div className="container xl:max-w-[1180px] relative z-40">
        <div className="max-w-[674px] mx-auto">
          <PrimaryHeading
            className="text-center mb-4"
            textName="How We "
            blueText="Ensure High Quality"
          />
          <Paragraph
            className="text-center"
            textName="Our rigorous quality assurance process ensures that our data labeling services provide accurate and reliable results. Here’s a breakdown of our process:"
          />
        </div>
        {/* cards */}
        <div className="flex lg:flex-row flex-col max-lg:items-center gap-5 justify-between xl:mt-[99px] lg:mt-20 sm:mt-10 mt-9">
          {/* card-1 */}
          <div className="ensure_card lg:max-w-[326px] 2xl:max-w-[350px] max-w-[449px] h-full max-lg:h-fit xl:min-h-[384px] relative z-20">
            <h4 className="mb-2 font_gilroy_bold text-xl sm:text-2xl leading-5 sm:leading-[34px] text-black">
              Step 01
            </h4>
            <p className="font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-grey">
              Data Labeling
            </p>
            <div className="flex lg:flex-col lg:gap-7 gap-3 mt-2">
              {EnsureStep1.map((value, index) => (
                <div
                  key={index}
                  className="xl:p-3 p-2 rounded-[7px] bg-off_white w-fit relative h-fit xl:h-[115px]"
                >
                  <Image
                    src={value.imageSrc}
                    alt={value.imageAlt}
                    width={216}
                    height={93}
                    className="rounded-[5.3px] pointer-events-none"
                  />
                  {/* triangle card */}
                  <div className="absolute lg:-right-7 -right-2 top-[50px] z-10">
                    <div className="relative">
                      <span
                        className={`absolute ${value.trianglePosition} rotate-[41deg]`}
                      >
                        <Triangle />
                      </span>
                      <p className="text-white text-[12px] leading-5 bg-blue w-[55px] h-[22px] text-center rounded-[17px]">
                        {value.textTriangle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* ellipse */}
            <Image
              src="/assets/images/home/webp/ensure-ellipse.webp"
              alt="ensure_ellipse"
              width={272}
              height={83}
              className="pointer-events-none absolute xl:-top-[67px] lg:-top-[45px] max-xl:rotate-[13deg] max-lg:!hidden 2xl:-right-[77%] -right-[84%] -z-40"
            />
          </div>
          {/* card-2 */}
          <div className="ensure_card max-w-[449px] 2xl:max-w-[500px] xl:h-full h-fit xl:min-h-[404px] lg:mt-[100px] xl:mt-[52px] relative z-40">
            <div className="flex gap-4 items-start justify-between">
              <div>
                <h4 className="mb-2 font_gilroy_bold text-xl sm:text-2xl leading-5 sm:leading-[34px] text-black">
                  Step 02
                </h4>
                <p className="font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-grey">
                  Verification
                </p>
              </div>
              <div className="flex gap-[13px] items-center">
                <div className="flex items-center gap-[3px] border-[0.5px] py-[6px] xl:px-3 px-2 bg-light_blue3 rounded-[12px] border-blue">
                  <h4 className="font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-black">
                    90%
                  </h4>
                  <Image
                    src="/assets/images/home/svg/check.svg"
                    alt="project-request-image"
                    width={21}
                    height={21}
                    className="pointer-events-none"
                  />
                </div>
                <div className="flex items-center gap-[3px] border-[0.5px] py-[6px] xl:px-3 px-2 bg-light_blue3 rounded-[12px] border-blue">
                  <h4 className="font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-black">
                    10%
                  </h4>
                  <Image
                    src="/assets/images/home/svg/cross.svg"
                    alt="project-request-image"
                    width={21}
                    height={21}
                    className="pointer-events-none"
                  />
                </div>
              </div>
            </div>
            {/* six image */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-[10px] mt-2 max-lg:w-full">
                {EnsureStep2.slice(0, 3).map((value, index) => (
                  <div
                    key={index}
                    className="p-2 rounded-[7px] bg-off_white w-full lg:w-fit 2xl:w-full relative h-fit 2xl:h-full xl:h-[87px]"
                  >
                    <Image
                      src={value.imageSrc}
                      alt={value.imageAlt}
                      width={163}
                      height={70}
                      className="rounded-[4px] max-lg:!min-w-full 2xl:min-w-[200px] pointer-events-none"
                    />
                    {/* triangle card */}
                    <div
                      className={`absolute ${value.positionTriangleCard} z-10`}
                    >
                      <div className="relative">
                        <span className={`absolute ${value.trianglePosition}`}>
                          <Triangle />
                        </span>
                        <p className="text-white text-[12px] leading-5 bg-blue w-[54px] h-[21px] text-center rounded-[17px]">
                          {value.textTriangle}
                        </p>
                      </div>
                    </div>
                    {/* check icon */}
                    <span className={`absolute z-0 ${value.checkIconPosition}`}>
                      <Image
                        src={value.checkIconSrc}
                        alt={value.checkIconAlt}
                        width={21}
                        height={21}
                        className="pointer-events-none"
                      />
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-[10px] mt-2 max-lg:w-full">
                {EnsureStep2.slice(3).map((value, index) => (
                  <div
                    key={index}
                    className="p-2 rounded-[7px] bg-off_white w-full lg:w-fit 2xl:w-full relative h-fit 2xl:h-full xl:h-[87px]"
                  >
                    <Image
                      src={value.imageSrc}
                      alt={value.imageAlt}
                      width={163}
                      height={70}
                      className="rounded-[4px] max-lg:!min-w-full 2xl:min-w-[200px] pointer-events-none"
                    />
                    {/* triangle card */}
                    <div
                      className={`absolute ${value.positionTriangleCard} z-10`}
                    >
                      <div className="relative">
                        <span className={`absolute ${value.trianglePosition}`}>
                          <Triangle />
                        </span>
                        <p className="text-white text-[12px] leading-5 bg-blue w-[48px] h-[21px] text-center rounded-[17px]">
                          {value.textTriangle}
                        </p>
                      </div>
                    </div>
                    {/* check icon */}
                    <span className={`absolute z-0 ${value.checkIconPosition}`}>
                      <Image
                        src={value.checkIconSrc}
                        alt={value.checkIconAlt}
                        width={21}
                        height={21}
                        className="pointer-events-none"
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* ellipse */}
            <Image
              src="/assets/images/home/webp/ensure-ellipse2.webp"
              alt="ensure_ellipse"
              width={272}
              height={83}
              className="absolute -top-[94px] max-lg:hidden max-xl:-rotate-[8deg] xl:-top-[67px] 2xl:-right-[54%] xl:-right-[61%] -right-[85%] -z-30 pointer-events-none"
            />
          </div>
          {/* card-3 */}
          <div className="ensure_card lg:max-w-[326px] 2xl:max-w-[350px] max-w-[449px] h-full max-lg:h-fit xl:min-h-[384px] lg:mt-[147px]">
            <h4 className="mb-2 font_gilroy_bold text-xl sm:text-2xl leading-5 sm:leading-[34px] text-black">
              Step 03
            </h4>
            <p className="font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-grey mb-[10px]">
              Relabeling
            </p>
            <Paragraph textName="Incorrectly labeled data is reviewed and relabeled correctly" />
            {/*  */}
            <div className="flex lg:flex-col justify-between w-full lg:gap-7 gap-3 mt-2 relative lg:w-fit">
              {EnsureStep3.map((value, index) => (
                <div
                  key={index}
                  className="p-2 rounded-[6px] bg-off_white w-fit relative h-fit"
                >
                  <Image
                    src={value.imageSrc}
                    alt={value.imageAlt}
                    width={163}
                    height={70}
                    className="rounded-[5.3px] pointer-events-none"
                  />
                  {/* triangle card */}
                  <div className="absolute lg:-right-10 -right-2 lg:top-[40px] top-[50px] z-10">
                    <div className="relative">
                      <span className="absolute -left-4 -top-[10px] rotate-[41deg]">
                        <Triangle />
                      </span>
                      <p className="text-white text-[12px] leading-5 bg-blue w-[55px] h-[22px] text-center rounded-[17px]">
                        {value.textTriangle}
                      </p>
                    </div>
                  </div>
                  {/* check icon */}
                  <span className="absolute top-3 right-3 z-0">
                    <Image
                      src={value.checkIconSrc}
                      alt={value.checkIconAlt}
                      width={21}
                      height={21}
                      className="pointer-events-none"
                    />
                  </span>
                </div>
              ))}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:-rotate-90">
                <DownArrow />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnsureHighQuality;
